import { navbar } from 'vuepress-theme-hope'
import { VERSION } from '../meta.js'

export const NAVBAR_EN = navbar([
  {
    text: 'Guide',
    icon: 'fa6-solid:lightbulb',
    children: [
      '/guide/introduction.md',
      '/guide/getting-started.md',
      '/guide/configuration.md',
      '/guide/page.md',
      '/guide/markdown.md',
      '/guide/assets.md',
      '/guide/i18n.md',
      '/guide/deployment.md',
      '/guide/theme.md',
      '/guide/plugin.md',
      '/guide/bundler.md',
      '/guide/migration.md',
      '/guide/troubleshooting.md',
    ],
  },
  {
    text: 'Reference',
    icon: 'fa6-solid:book',
    prefix: '/reference/',
    children: [
      {
        text: 'Core',
        children: [
          {
            text: 'CLI',
            icon: 'bi:terminal-fill',
            link: 'cli.html',
          },
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
        text: 'Bundlers',
        prefix: 'bundler/',
        children: ['vite', 'webpack'],
      },
      {
        text: 'Ecosystem',
        children: [
          {
            text: 'Default Theme',
            icon: 'fa6-solid:palette',
            link: 'https://ecosystem.vuejs.press/themes/default/',
          },
          {
            text: 'Plugins',
            icon: 'fa6-solid:puzzle-piece',
            link: 'https://ecosystem.vuejs.press/plugins/',
          },
        ],
      },
    ],
  },

  {
    text: 'Learn More',
    icon: 'fa6-solid:feather',
    children: [
      {
        text: 'Advanced',
        prefix: '/advanced/',
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
        text: 'Resources',
        children: [
          {
            text: 'Ecosystem',
            icon: 'fa6-solid:leaf',
            link: 'https://ecosystem.vuejs.press/',
          },
          {
            text: 'MarketPlace',
            icon: 'fa6-solid:cart-shopping',
            link: 'https://marketplace.vuejs.press',
          },
          {
            text: 'Contributing Guide',
            icon: 'fa6-solid:signs-post',
            link: 'https://github.com/vuepress/core/blob/main/CONTRIBUTING.md',
          },
        ],
      },
    ],
  },
  {
    text: `v${VERSION}`,
    children: [
      {
        text: 'Changelog',
        icon: 'fa6-solid:clock',
        link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        icon: 'fa6-brands:vuejs',
        link: 'https://v1.vuepress.vuejs.org',
      },
      {
        text: 'v0.x',
        icon: 'fa6-brands:vuejs',
        link: 'https://v0.vuepress.vuejs.org',
      },
    ],
  },
])
