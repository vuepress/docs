import { navbar } from "vuepress-theme-hope";
import { version } from "../meta.js";

export const enNavbar = navbar([
  {
    text: "Guide",
    icon: "fa6-solid:lightbulb",
    link: "/guide/",
  },
  {
    text: "Reference",
    icon: "fa6-solid:book",
    prefix: "/reference/",
    children: [
      {
        text: "VuePress",
        children: [
          {
            text: "CLI",
            icon: "bi:terminal-fill",
            link: "cli.html",
          },
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
        text: "Bundlers",
        children: ["bundler/vite", "bundler/webpack"],
      },
      {
        text: "Default Theme",
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
    text: "Plugins",
    icon: "fa6-solid:plug",
    prefix: "/reference/plugin/",
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
    text: "Learn More",
    icon: "fa6-solid:feather",
    children: [
      {
        text: "Advanced",
        prefix: "/advanced/",
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
        text: "Resources",
        children: [
          "/contributing",
          {
            text: "Awesome VuePress",
            link: "https://github.com/vuepress/awesome-vuepress",
          },
          {
            text: "VuePress MarketPlace",
            link: "https://marketplace.vuejs.press",
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
        text: "Changelog",
        icon: "fa6-solid:clock",
        link: "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG",
      },
      {
        text: "v1.x",
        icon: "fa6-brands:vuejs",
        link: "https://v1.vuepress.vuejs.org",
      },
      {
        text: "v0.x",
        icon: "fa6-brands:vuejs",
        link: "https://v0.vuepress.vuejs.org",
      },
    ],
  },
]);
