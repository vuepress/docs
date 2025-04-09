import { hopeTheme } from 'vuepress-theme-hope'
import {
  NAVBAR_EN,
  NAVBAR_ZH,
  SIDEBAR_EN,
  SIDEBAR_ZH,
} from './configs/index.js'

export default hopeTheme({
  hostname: 'https://vuejs.press',

  logo: '/images/hero.png',
  repo: 'vuepress/core',
  docsRepo: 'vuepress/docs',
  docsDir: 'docs',

  locales: {
    '/': {
      // navbar
      navbar: NAVBAR_EN,

      // sidebar
      sidebar: SIDEBAR_EN,

      footer:
        'Theme by <a href="https://theme-hope.vuejs.press" target="_blank">VuePress Theme Hope</a>',

      copyright: 'MIT Licensed | Copyright © 2018-present VuePress Community',

      displayFooter: true,

      metaLocales: {
        editLink: 'Edit this page on GitHub',
      },
    },

    /**
     * Chinese locale config
     */
    '/zh/': {
      // navbar
      navbar: NAVBAR_ZH,

      // sidebar
      sidebar: SIDEBAR_ZH,

      footer:
        '主题使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a>',

      copyright: 'MIT 协议 | 版权所有 © 2018-至今 VuePress 社区',

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
    },
  },

  markdown: {
    codeTabs: true,
  },

  plugins: {
    docsearch: {
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indexName: 'vuepress',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
    },
    icon: {
      assets: 'iconify',
    }
  },
})
