import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    children: [
      '/zh/guide/introduction.md',
      '/zh/guide/getting-started.md',
      '/zh/guide/configuration.md',
      '/zh/guide/page.md',
      '/zh/guide/markdown.md',
      '/zh/guide/assets.md',
      '/zh/guide/i18n.md',
      '/zh/guide/deployment.md',
      '/zh/guide/theme.md',
      '/zh/guide/plugin.md',
      '/zh/guide/bundler.md',
      '/zh/guide/migration.md',
      '/zh/guide/troubleshooting.md',
    ],
  },
  {
    text: '参考',
    children: [
      {
        text: '核心',
        children: [
          '/zh/reference/cli.md',
          '/zh/reference/config.md',
          '/zh/reference/frontmatter.md',
          '/zh/reference/components.md',
          '/zh/reference/plugin-api.md',
          '/zh/reference/theme-api.md',
          '/zh/reference/client-api.md',
          '/zh/reference/node-api.md',
        ],
      },
      {
        text: '打包工具',
        children: [
          '/zh/reference/bundler/vite.md',
          '/zh/reference/bundler/webpack.md',
        ],
      },
      {
        text: '生态系统',
        children: [
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
    children: [
      {
        text: '深入',
        children: [
          '/zh/advanced/architecture.md',
          '/zh/advanced/plugin.md',
          '/zh/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/zh/advanced/cookbook/',
          },
        ],
      },
      {
        text: '其他资源',
        children: [
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
    text: `v${version}`,
    children: [
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
]
