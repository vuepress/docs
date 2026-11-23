import type { DefaultTheme } from '@vuepress/theme-default'

export const sidebarEn: DefaultTheme.Sidebar = {
  '/guide/': [
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
  ],
  '/advanced/': [
    {
      text: 'Advanced',
      items: [
        { link: '/advanced/architecture.md' },
        { link: '/advanced/plugin.md' },
        { link: '/advanced/theme.md' },
      ],
    },
    {
      text: 'Cookbook',
      items: [
        { link: '/advanced/cookbook/README.md' },
        { link: '/advanced/cookbook/usage-of-client-config.md' },
        { link: '/advanced/cookbook/adding-extra-pages.md' },
        { link: '/advanced/cookbook/making-a-theme-extendable.md' },
        { link: '/advanced/cookbook/passing-data-to-client-code.md' },
        { link: '/advanced/cookbook/markdown-and-vue-sfc.md' },
        { link: '/advanced/cookbook/resolving-routes.md' },
      ],
    },
  ],
  '/reference/': [
    {
      text: 'Core',
      collapsed: false,
      items: [
        { link: '/reference/cli.md' },
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
}
