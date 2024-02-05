import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
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
    children: [
      {
        text: 'Core',
        children: [
          {
            text: 'CLI',
            link: '/reference/cli.html',
          },
          '/reference/config.md',
          '/reference/frontmatter.md',
          '/reference/components.md',
          '/reference/plugin-api.md',
          '/reference/theme-api.md',
          '/reference/client-api.md',
          '/reference/node-api.md',
        ],
      },
      {
        text: 'Bundlers',
        children: [
          '/reference/bundler/vite.md',
          '/reference/bundler/webpack.md',
        ],
      },
      {
        text: 'Ecosystem',
        children: [
          {
            text: 'Default Theme',
            link: 'https://ecosystem.vuejs.press/themes/default/',
          },
          {
            text: 'Plugins',
            link: 'https://ecosystem.vuejs.press/plugins/',
          },
        ],
      },
    ],
  },

  {
    text: 'Learn More',
    children: [
      {
        text: 'Advanced',
        children: [
          '/advanced/architecture.md',
          '/advanced/plugin.md',
          '/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/advanced/cookbook/',
          },
        ],
      },
      {
        text: 'Resources',
        children: [
          {
            text: 'Ecosystem',
            link: 'https://ecosystem.vuejs.press/',
          },
          {
            text: 'MarketPlace',
            link: 'https://marketplace.vuejs.press',
          },
          {
            text: 'Contributing Guide',
            link: 'https://github.com/vuepress/core/blob/main/CONTRIBUTING.md',
          },
        ],
      },
    ],
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'Changelog',
        link: 'https://github.com/vuepress/core/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org',
      },
    ],
  },
]
