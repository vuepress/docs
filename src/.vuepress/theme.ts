import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, enSidebar, zhNavbar, zhSidebar } from "./configs/index.js";

export default hopeTheme({
  hostname: "https://vuejs.press",
  iconAssets: "iconify",

  logo: "/images/hero.png",
  repo: "vuepress/vuepress-next",
  docsDir: "docs",

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer:
        'Theme by <a href="https://theme-hope.vuejs.press" target="_blank">VuePress Theme Hope</a>',

      copyright: "MIT Licensed | Copyright © 2018-present Evan You",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer:
        '主题使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a>',

      copyright: "MIT 协议 | 版权所有 © 2018-至今 尤雨溪",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  plugins: {
    mdEnhance: {
      codetabs: true,
    },
  },
});
