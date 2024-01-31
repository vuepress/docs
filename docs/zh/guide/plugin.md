# 插件

借助于 [插件 API](../reference/plugin-api.md) ， VuePress 插件可以为你提供各种不同的功能。

## 官方插件

VuePress 团队提供了一些官方插件。

你需要在你的配置文件中通过 [plugins](../reference/config.md#plugins) 配置项来使用它们。举例来说，你可以使用 [@vuepress/plugin-google-analytics](https://ecosystem.vuejs.press/zh/plugins/google-analytics.html) 来使用 Google Analytics ：

```ts
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default {
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-XXXXXXXXXX',
    }),
  ],
}
```

::: tip
大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。

然而，部分插件是可以被多次使用的（例如 [@vuepress/plugin-container](https://ecosystem.vuejs.press/zh/plugins/container.html)），你应该查看插件本身的文档来获取详细指引。
:::

## 社区插件

社区用户创建了很多插件，并将它们发布到了 [NPM](https://www.npmjs.com/search?q=keywords:vuepress-plugin) 上。 查看插件本身的文档可以获取更详细的指引。

你可以在 [VuePress 市场](https://marketplace.vuejs.press/) 中探索更多插件。

## 本地插件

如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。

我们推荐你直接将 [配置文件](./configuration.md#配置文件) 作为插件使用，因为 [几乎所有的插件 API 都可以在配置文件中使用](../reference/config.md#插件-api)，这在绝大多数场景下都更为方便。

但是如果你在配置文件中要做的事情太多了，你可以考虑将它们提取到单独的插件中，然后在你的配置文件中使用它们：

```ts
import myPlugin from './path/to/my-plugin.js'

export default {
  plugins: [myPlugin()],
}
```

前往 [深入 > 开发插件](../advanced/plugin.md) 学习如何开发你自己的插件。
