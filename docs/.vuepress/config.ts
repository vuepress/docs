import { createRequire } from 'node:module'
import process from 'node:process'

import { rspackBundler } from '@vuepress/bundler-rspack'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { themeDefault } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import type { Bundler } from 'vuepress/core'
import { getDirname, path } from 'vuepress/utils'

import {
  head,
  navbarEn,
  navbarZh,
  sidebarEn,
  sidebarZh,
} from './configs/index.js'

const __dirname = getDirname(import.meta.url)
const require = createRequire(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'

// select bundler via environment variable
const bundlerFactories: Record<string, () => Bundler> = {
  vite: viteBundler,
  webpack: webpackBundler,
  rspack: rspackBundler,
}

const createBundler = (name = process.env.DOCS_BUNDLER ?? 'vite'): Bundler =>
  (bundlerFactories[name] ?? viteBundler)()

// The theme data is serialized to JSON, so the edit link pattern must be a
// string. `:path` is replaced with the path of the page relative to `docs/`.
const EDIT_LINK_PATTERN =
  'https://github.com/vuepress/docs/edit/main/docs/:path'

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },

  // specify bundler via environment variable
  bundler: createBundler(),

  // configure default theme
  theme: themeDefault({
    hostname: 'https://vuepress.vuejs.org',
    logo: '/images/hero.png',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * The default locale of the default theme is English, so only the fields
       * that differ from the default need to be set
       */
      '/': {
        label: 'English',
        lang: 'en-US',
        link: '/',
        // nav
        nav: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        // page meta
        editLink: {
          pattern: EDIT_LINK_PATTERN,
          text: 'Edit this page on GitHub',
        },
        footer: {
          message: 'MIT Licensed',
          copyright: 'Copyright © 2018-present VuePress Community',
        },
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        label: '简体中文',
        lang: 'zh-CN',
        link: '/zh/',
        // nav
        nav: navbarZh,
        // sidebar
        sidebar: sidebarZh,
        // page meta
        editLink: {
          pattern: EDIT_LINK_PATTERN,
          text: '在 GitHub 上编辑此页',
        },
        lastUpdated: { text: '上次更新' },
        footer: {
          message: 'MIT 协议',
          copyright: '版权所有 © 2018-至今 VuePress 社区',
        },
        contributorsText: '贡献者',
        docFooter: { prev: '上一页', next: '下一页' },
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        important: '重要',
        note: '笔记',
        // 404 page
        notFound: {
          title: '页面不存在',
          quote: '这里什么都没有',
          linkText: '返回首页',
        },
        // a11y
        darkModeSwitchLabel: '切换颜色模式',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '切换侧边栏',
        langMenuLabel: '选择语言',
        navMenuLabel: '主导航',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  }),

  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (importPath) => {
        // handle @vuepress packages import path
        if (importPath.startsWith('@vuepress/')) {
          const packageName = importPath.split('/').slice(0, 2).join('/')
          return importPath
            .replace(
              packageName,
              path.dirname(require.resolve(`${packageName}/package.json`)),
            )
            .replace('/src/', '/lib/')
            .replace(/hotKey\.ts$/u, 'hotKey.d.ts')
        }
        return importPath
      },
    },
  },

  // use plugins
  plugins: [
    docsearchPlugin({
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indices: [
        {
          name: 'vuepress',
          searchParameters: {
            facetFilters: ['tags:v2'],
          },
        },
      ],
      locales: {
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                clearButtonTitle: '清除查询条件',
                clearButtonAriaLabel: '清除查询条件',
                closeButtonText: '取消',
                closeButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                poweredByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    // we have multiple deployments, which would use different id
    ...(process.env.DOCS_GA_ID
      ? [googleAnalyticsPlugin({ id: process.env.DOCS_GA_ID })]
      : []),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
})
