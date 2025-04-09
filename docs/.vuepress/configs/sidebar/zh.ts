import { sidebar } from 'vuepress-theme-hope'

export const SIDEBAR_ZH = sidebar({
  '/zh/guide/': [
    'introduction',
    'getting-started',
    'configuration',
    'page',
    'markdown',
    'assets',
    'i18n',
    'deployment',
    'theme',
    'plugin',
    'bundler',
    'migration',
    'troubleshooting',
  ],
  '/zh/advanced/': [
    {
      text: '深入',
      icon: 'fa6-solid:gem',
      children: ['architecture', 'plugin', 'theme'],
    },
    {
      text: 'Cookbook',
      icon: 'fa6-solid:signs-post',
      prefix: 'cookbook/',
      children: [
        '',
        'usage-of-client-config',
        'adding-extra-pages',
        'making-a-theme-extendable',
        'passing-data-to-client-code',
        'markdown-and-vue-sfc',
        'resolving-routes',
      ],
    },
  ],
  '/zh/reference/': [
    {
      text: '核心',
      icon: 'fa6-brands:vuejs',
      collapsible: true,
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
      icon: 'fa6-solid:boxes-packing',
      prefix: 'bundler/',
      collapsible: true,
      children: ['vite', 'webpack'],
    },
    {
      text: '生态系统',
      icon: 'fa6-solid:leaf',
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
        {
          text: '市场',
          icon: 'fa6-solid:cart-shopping',
          link: 'https://marketplace.vuejs.press/zh/',
        },
      ],
    },
  ],
})
