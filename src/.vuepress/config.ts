import { createRequire } from "node:module";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";

import { head } from "./configs/index.js";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  head,

  locales: {
    "/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
    },
  },

  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (filePath) => {
        if (filePath.endsWith("hotKey.ts"))
          return path.resolve(__dirname, "./assets/hotKey.ts");

        if (filePath.startsWith("@vuepress")) {
          const pkgName = /(^@vuepress\/[^/]+)/.exec(filePath)![1]!;

          return filePath
            .replace(
              pkgName,
              path.dirname(
                createRequire(import.meta.url).resolve(
                  `${pkgName}/package.json`
                )
              )
            )
            .replace("/src/", "/lib/");
        }

        return filePath;
      },
    },
  },

  theme,

  // use plugins
  plugins: [
    docsearchPlugin({
      appId: "34YFD9IUQ2",
      apiKey: "9a9058b8655746634e01071411c366b8",
      indexName: "vuepress",
      searchParameters: {
        facetFilters: ["tags:v2"],
      },
      locales: {
        "/zh/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
  ],
});
