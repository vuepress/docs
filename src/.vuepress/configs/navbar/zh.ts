import { navbar } from "vuepress-theme-hope";
import { version } from "../meta.js";

export const zhNavbar = navbar([
  {
    text: "指南",
    icon: "fa6-solid:lightbulb",
    link: "/zh/guide/",
  },
  {
    text: "参考",
    icon: "fa6-solid:book",
    prefix: "/zh/reference/",
    children: [
      {
        text: "VuePress",
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
        text: "打包工具",
        prefix: "bundler/",
        children: ["vite", "webpack"],
      },
      {
        text: "默认主题",
        prefix: "default-theme/",
        children: [
          "config",
          "frontmatter",
          "components",
          "markdown",
          "styles",
          "extending",
        ],
      },
    ],
  },
  {
    text: "插件",
    icon: "fa6-solid:plug",
    prefix: "/zh/reference/plugin/",
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
    text: "了解更多",
    icon: "fa6-solid:feather",
    children: [
      {
        text: "深入",
        prefix: "/zh/advanced/",
        children: [
          "architecture",
          "plugin",
          "theme",
          {
            text: "Cookbook",
            link: "cookbook/",
          },
        ],
      },
      {
        text: "其他资源",
        children: [
          "/zh/contributing",
          {
            text: "Awesome VuePress",
            link: "https://github.com/vuepress/awesome-vuepress",
          },
          {
            text: "VuePress 市场",
            link: "https://marketplace.vuejs.press/zh/",
          },
        ],
      },
    ],
  },
  {
    text: `v${version}`,
    icon: "fa6-solid:tag",
    children: [
      {
        text: "更新日志",
        icon: "fa6-solid:clock",
        link: "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG",
      },
      {
        text: "v1.x",
        icon: "fa6-brands:vuejs",
        link: "https://v1.vuepress.vuejs.org/zh/",
      },
      {
        text: "v0.x",
        icon: "fa6-brands:vuejs",
        link: "https://v0.vuepress.vuejs.org/zh/",
      },
    ],
  },
]);
