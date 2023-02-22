import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/guide/": [
    "",
    "getting-started",
    "configuration",
    "page",
    "markdown",
    "assets",
    "i18n",
    "deployment",
    "theme",
    "plugin",
    "bundler",
    "migration",
  ],
  "/zh/advanced/": [
    {
      text: "深入",
      icon: "fa6-solid:gem",
      children: ["architecture", "plugin", "theme"],
    },
    {
      text: "Cookbook",
      icon: "fa6-solid:signs-post",
      prefix: "cookbook/",
      children: [
        "",
        "usage-of-client-config",
        "adding-extra-pages",
        "making-a-theme-extendable",
        "passing-data-to-client-code",
        "markdown-and-vue-sfc",
      ],
    },
  ],
  "/zh/reference/": [
    {
      text: "VuePress 参考",
      icon: "fa6-brands:vuejs",
      collapsible: true,
      children: [
        "/zh/reference/cli",
        "/zh/reference/config",
        "/zh/reference/frontmatter",
        "/zh/reference/components",
        "/zh/reference/plugin-api",
        "/zh/reference/theme-api",
        "/zh/reference/client-api",
        "/zh/reference/node-api",
      ],
    },
    {
      text: "打包工具参考",
      icon: "fa6-solid:boxes-packing",
      prefix: "bundler/",
      collapsible: true,
      children: ["vite", "webpack"],
    },
    {
      text: "默认主题参考",
      icon: "fa6-solid:palette",
      prefix: "default-theme/",
      collapsible: true,
      children: [
        "config",
        "frontmatter",
        "components",
        "markdown",
        "styles",
        "extending",
      ],
    },
    {
      text: "官方插件参考",
      icon: "fa6-solid:plug",
      collapsible: true,
      prefix: "plugin/",
      children: [
        {
          text: "常用功能",
          children: [
            "back-to-top",
            "container",
            "external-link-icon",
            "google-analytics",
            "medium-zoom",
            "nprogress",
            "register-components",
          ],
        },
        {
          text: "内容搜索",
          children: ["docsearch", "search"],
        },
        {
          text: "PWA",
          children: ["pwa", "pwa-popup"],
        },
        {
          text: "语法高亮",
          children: ["prismjs", "shiki"],
        },
        {
          text: "主题开发",
          children: [
            "active-header-links",
            "git",
            "palette",
            "theme-data",
            "toc",
          ],
        },
      ],
    },
    {
      text: "VuePress 市场",
      icon: "fa6-solid:cart-shopping",
      link: "https://marketplace.vuejs.press/zh/",
    },
  ],
});
