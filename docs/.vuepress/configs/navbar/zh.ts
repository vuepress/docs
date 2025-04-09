import { navbar } from 'vuepress-theme-hope'
import { VERSION } from '../meta.js'

export const NAVBAR_ZH = navbar([
  {
    text: '指南',
    icon: 'fa6-solid:lightbulb',
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
    icon: 'fa6-solid:book',
    prefix: '/zh/reference/',
    children: [
      {
        text: '核心',
        children: [
          'cli',
          'config',
          'frontmatter',
          'components',
          'plugin-api',
          'theme-api',
          'client-api',
          'node-api',
        ],
      },
      {
        text: '打包工具',
        prefix: 'bundler/',
        children: ['vite', 'webpack'],
      },
      {
        text: '生态系统',
        children: [
          {
            text: '默认主题',
            icon: 'fa6-solid:palette',
            link: 'https://ecosystem.vuejs.press/zh/themes/default/',
          },
          {
            text: '插件',
            icon: 'fa6-solid:puzzle-piece',
            link: 'https://ecosystem.vuejs.press/zh/plugins/',
          },
        ],
      },
    ],
  },
  {
    text: '了解更多',
    icon: 'fa6-solid:feather',
    children: [
      {
        text: '深入',
        prefix: '/zh/advanced/',
        children: [
          'architecture',
          'plugin',
          'theme',
          {
            text: 'Cookbook',
            icon: 'fa6-solid:signs-post',
            link: 'cookbook/',
          },
        ],
      },
      {
        text: '其他资源',
        children: [
          {
            text: '生态系统',
            icon: 'fa6-solid:leaf',
            link: 'https://ecosystem.vuejs.press/zh/',
          },
          {
            text: '市场',
            icon: 'fa6-solid:cart-shopping',
            link: 'https://marketplace.vuejs.press/zh/',
          },
          {
            text: '贡献指南',
            icon: 'fa6-solid:signs-post',
            link: 'https://github.com/vuepress/core/blob/main/CONTRIBUTING_zh.md',
          },
        ],
      },
    ],
  },
  {
    text: `v${VERSION}`,
    children: [
      {
        text: '更新日志',
        icon: 'fa6-solid:clock',
        link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        icon: 'fa6-brands:vuejs',
        link: 'https://v1.vuepress.vuejs.org/zh/',
      },
      {
        text: 'v0.x',
        icon: 'fa6-brands:vuejs',
        link: 'https://v0.vuepress.vuejs.org/zh/',
      },
    ],
  },
])
