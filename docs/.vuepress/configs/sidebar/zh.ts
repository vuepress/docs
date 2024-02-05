import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
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
  ],
  '/zh/advanced/': [
    {
      text: '深入',
      children: [
        '/zh/advanced/architecture.md',
        '/zh/advanced/plugin.md',
        '/zh/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/zh/advanced/cookbook/README.md',
        '/zh/advanced/cookbook/usage-of-client-config.md',
        '/zh/advanced/cookbook/adding-extra-pages.md',
        '/zh/advanced/cookbook/making-a-theme-extendable.md',
        '/zh/advanced/cookbook/passing-data-to-client-code.md',
        '/zh/advanced/cookbook/markdown-and-vue-sfc.md',
      ],
    },
  ],
  '/zh/reference/': [
    {
      text: '核心',
      collapsible: true,
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
}
