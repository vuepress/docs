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
        children: ["bundler/vite", "bundler/webpack"],
      },
      {
        text: "默认主题",
        children: [
          "default-theme/config",
          "default-theme/frontmatter",
          "default-theme/components",
          "default-theme/markdown",
          "default-theme/styles",
          "default-theme/extending",
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
          "plugin/back-to-top",
          "plugin/container",
          "plugin/external-link-icon",
          "plugin/google-analytics",
          "plugin/medium-zoom",
          "plugin/nprogress",
          "plugin/register-components",
        ],
      },
      {
        text: "内容搜索",
        children: ["plugin/docsearch", "plugin/search"],
      },
      {
        text: "PWA",
        children: ["plugin/pwa", "plugin/pwa-popup"],
      },
      {
        text: "语法高亮",
        children: ["plugin/prismjs", "plugin/shiki"],
      },
      {
        text: "主题开发",
        children: [
          "plugin/active-header-links",
          "plugin/git",
          "plugin/palette",
          "plugin/theme-data",
          "plugin/toc",
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
