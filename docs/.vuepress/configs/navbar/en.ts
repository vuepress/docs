import type { DefaultTheme } from '@vuepress/theme-default'

import { VERSION } from '../meta.js'

export const navbarEn: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    items: [
      { link: '/guide/introduction.md' },
      { link: '/guide/getting-started.md' },
      { link: '/guide/configuration.md' },
      { link: '/guide/page.md' },
      { link: '/guide/markdown.md' },
      { link: '/guide/assets.md' },
      { link: '/guide/i18n.md' },
      { link: '/guide/deployment.md' },
      { link: '/guide/theme.md' },
      { link: '/guide/plugin.md' },
      { link: '/guide/bundler.md' },
      { link: '/guide/migration.md' },
      { link: '/guide/troubleshooting.md' },
    ],
  },
  {
    text: 'Reference',
    items: [
      {
        text: 'Core',
        items: [
          {
            text: 'CLI',
            link: '/reference/cli.html',
          },
          { link: '/reference/config.md' },
          { link: '/reference/frontmatter.md' },
          { link: '/reference/components.md' },
          { link: '/reference/plugin-api.md' },
          { link: '/reference/theme-api.md' },
          { link: '/reference/client-api.md' },
          { link: '/reference/node-api.md' },
        ],
      },
      {
        text: 'Bundlers',
        items: [
          { link: '/reference/bundler/vite.md' },
          { link: '/reference/bundler/webpack.md' },
          { link: '/reference/bundler/rspack.md' },
        ],
      },
      {
        text: 'Ecosystem',
        items: [
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
    items: [
      {
        text: 'Advanced',
        items: [
          { link: '/advanced/architecture.md' },
          { link: '/advanced/plugin.md' },
          { link: '/advanced/theme.md' },
          {
            text: 'Cookbook',
            link: '/advanced/cookbook/',
          },
        ],
      },
      {
        text: 'Resources',
        items: [
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
    text: `v${VERSION}`,
    items: [
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
  // TODO: remove the type assertion
]
