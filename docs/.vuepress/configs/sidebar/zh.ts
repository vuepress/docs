import type { DefaultTheme } from '@vuepress/theme-default'

export const sidebarZh: DefaultTheme.Sidebar = {
  '/zh/guide/': [
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
  ],
  '/zh/advanced/': [
    {
      text: '深入',
      items: [
        { link: '/zh/advanced/architecture.md' },
        { link: '/zh/advanced/plugin.md' },
        { link: '/zh/advanced/theme.md' },
      ],
    },
    {
      text: 'Cookbook',
      items: [
        { link: '/zh/advanced/cookbook/README.md' },
        { link: '/zh/advanced/cookbook/usage-of-client-config.md' },
        { link: '/zh/advanced/cookbook/adding-extra-pages.md' },
        { link: '/zh/advanced/cookbook/making-a-theme-extendable.md' },
        { link: '/zh/advanced/cookbook/passing-data-to-client-code.md' },
        { link: '/zh/advanced/cookbook/markdown-and-vue-sfc.md' },
        { link: '/zh/advanced/cookbook/resolving-routes.md' },
      ],
    },
  ],
  '/zh/reference/': [
    {
      text: '核心',
      collapsed: false,
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
}
