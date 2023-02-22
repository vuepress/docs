import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/guide/": [
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
  "/advanced/": [
    {
      text: "Advanced",
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
  "/reference/": [
    {
      text: "VuePress Reference",
      icon: "fa6-brands:vuejs",
      collapsible: true,
      children: [
        "cli",
        "config",
        "frontmatter",
        "components",
        "plugin-api",
        "theme-api",
        "client-api",
        "node-api",
      ],
    },
    {
      text: "Bundlers Reference",
      icon: "fa6-solid:boxes-packing",
      prefix: "bundler/",
      collapsible: true,
      children: ["vite", "webpack"],
    },
    {
      text: "Default Theme Reference",
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
      text: "Official Plugins Reference",
      icon: "fa6-solid:plug",
      prefix: "plugin/",
      collapsible: true,
      children: [
        {
          text: "Common Features",
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
          text: "Content Search",
          children: ["docsearch", "search"],
        },
        {
          text: "PWA",
          children: ["pwa", "pwa-popup"],
        },
        {
          text: "Syntax Highlighting",
          children: ["prismjs", "shiki"],
        },
        {
          text: "Theme Development",
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
      text: "VuePress MarketPlace",
      icon: "fa6-solid:cart-shopping",
      link: "https://marketplace.vuejs.press",
    },
  ],
});
