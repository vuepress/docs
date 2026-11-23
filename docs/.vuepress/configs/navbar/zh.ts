import type { DefaultTheme } from '@vuepress/theme-default'

import { VERSION } from '../meta.js'

export const navbarZh: DefaultTheme.NavItem[] = [
  {
    text: '指南',
    items: [
      { link: '/zh/guide/introduction.md' },
      { link: '/zh/guide/getting-started.md' },
      { link: '/zh/guide/configuration.md' },
      { link: '/zh/guide/page.md' },
      { link: '/zh/guide/markdown.md' },
      { link: '/zh/guide/assets.md' },
      { link: '/zh/guide/i18n.md' },
      { link: '/zh/guide/deployment.md' },
      { link: '/zh/guide/theme.md' },
      { link: '/zh/guide/plugin.md' },
      { link: '/zh/guide/bundler.md' },
      { link: '/zh/guide/migration.md' },
      { link: '/zh/guide/troubleshooting.md' },
    ],
  },
  {
    text: '参考',
    items: [
      {
        text: '核心',
        items: [
          { link: '/zh/reference/cli.md' },
          { link: '/zh/reference/config.md' },
          { link: '/zh/reference/frontmatter.md' },
          { link: '/zh/reference/components.md' },
          { link: '/zh/reference/plugin-api.md' },
          { link: '/zh/reference/theme-api.md' },
          { link: '/zh/reference/client-api.md' },
          { link: '/zh/reference/node-api.md' },
        ],
      },
      {
        text: '打包工具',
        items: [
          { link: '/zh/reference/bundler/vite.md' },
          { link: '/zh/reference/bundler/webpack.md' },
          { link: '/zh/reference/bundler/rspack.md' },
        ],
      },
      {
        text: '生态系统',
        items: [
          {
            text: '默认主题',
            link: 'https://ecosystem.vuejs.press/zh/themes/default/',
          },
          {
            text: '插件',
            link: 'https://ecosystem.vuejs.press/zh/plugins/',
          },
        ],
      },
    ],
  },
  {
    text: '了解更多',
    items: [
      {
        text: '深入',
        items: [
          { link: '/zh/advanced/architecture.md' },
          { link: '/zh/advanced/plugin.md' },
          { link: '/zh/advanced/theme.md' },
          {
            text: 'Cookbook',
            link: '/zh/advanced/cookbook/',
          },
        ],
      },
      {
        text: '其他资源',
        items: [
          {
            text: '生态系统',
            link: 'https://ecosystem.vuejs.press/zh/',
          },
          {
            text: '市场',
            link: 'https://marketplace.vuejs.press/zh/',
          },
          {
            text: '贡献指南',
            link: 'https://github.com/vuepress/core/blob/main/CONTRIBUTING_zh.md',
          },
        ],
      },
    ],
  },
  {
    text: `v${VERSION}`,
    items: [
      {
        text: '更新日志',
        link: 'https://github.com/vuepress/core/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org/zh/',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org/zh/',
      },
    ],
  },
  // TODO: remove the type assertion
]
