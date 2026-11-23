# 配置

## 站点配置

### base

- 类型： `string`

- 默认值： `/`

- 详情：

  部署站点的基础路径。

  如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。举例来说，如果你想将你的网站部署到 `https://foo.github.io/bar/`，那么 `base` 应该被设置成 `"/bar/"`。

  `base` 将会作为前缀自动地插入到以 `/` 开始的其他选项的链接中，所以你只需要指定一次。（[head](#head) 中的属性除外）

  需要注意的是， `base` 应该是一个以 `/` 开始和结束的绝对路径名。

- 参考：
  - [指南 > 静态资源 > Base Helper](../guide/assets.md#base-helper)
  - [指南 > 部署](../guide/deployment.md)

### lang

- 类型： `string`

- 默认值： `en-US`

- 详情：

  站点的语言。

  它将会在最终渲染出的 HTML 中作为 `<html>` 标签的 `lang` 属性。

  它可以设置在不同语言的 locales 中。

- 参考：
  - [配置 > locales](#locales)

### title

- 类型： `string`

- 默认值： `''`

- 详情：

  站点的标题。

  它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示。

  它可以设置在不同语言的 locales 中。

- 参考：
  - [配置 > locales](#locales)

### description

- 类型： `string`

- 默认值： `''`

- 详情：

  站点的描述。

  它将会在最终渲染出的 HTML 中作为 `<meta name="description" />` 标签的 `content` 属性。它会被每个页面的 Frontmatter 中的 `description` 字段覆盖。

  它可以设置在不同语言的 locales 中。

- 参考：
  - [配置 > locales](#locales)
  - [Frontmatter > description](./frontmatter.md#description)

### head

- 类型： `HeadConfig[]`

- 默认值： `[]`

- 详情：

  在最终渲染出的 HTML 的 `<head>` 标签内加入的额外标签。

  你可以通过 `[tagName, { attrName: attrValue }, innerHTML?]` 的格式来添加标签。

  它可以设置在不同语言的 locales 中。

  需要注意的是，如果 `attrValue` 是一个 pathname ，它不会被自动添加 [base](#base) 前缀，所以如果需要的话请记得手动添加前缀。

- 示例：

  增加一个自定义的 favicon ：

```ts
export default {
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
}
```

渲染为：

```html
<head>
  <link rel="icon" href="/images/logo.png" />
</head>
```

- 参考：
  - [配置 > locales](#locales)
  - [Frontmatter > head](./frontmatter.md#head)

### locales

- 类型： `{ [path: string]: Partial<SiteLocaleData> }`

- 默认值： `{}`

- 详情：

  多语言支持的各个语言 locales 。

  可以使用的字段有：
  - [lang](#lang)
  - [title](#title)
  - [description](#description)
  - [head](#head)

- 参考：
  - [指南 > I18n](../guide/i18n.md)

## 主题配置

### theme

- 类型： `Theme`

- 详情：

  设置站点要使用的主题。

  如果不设置该选项，将会使用默认主题。

- 参考：
  - [指南 > 主题](../guide/theme.md)
  - [默认主题 > 配置](https://ecosystem.vuejs.press/zh/themes/default/config.html)

## 打包工具配置

### bundler

- 类型： `Bundler`

- 详情：

  设置站点要使用的打包工具。

  该配置项是必需的。 `vuepress-vite` 和 `vuepress-webpack` 是命令行简写，它们会分别注入默认的打包工具（Vite 和 Webpack）。当你直接运行 `vuepress` 命令时，需要自己设置该选项，例如 `bundler: viteBundler()` 。

  没有 `vuepress-rspack` 简写。如果需要使用 Rspack，请安装 `@vuepress/bundler-rspack` 并设置 `bundler: rspackBundler()` 。

- 参考：
  - [指南 > 打包工具](../guide/bundler.md)
  - [打包工具 > Vite](./bundler/vite.md)
  - [打包工具 > Webpack](./bundler/webpack.md)
  - [打包工具 > Rspack](./bundler/rspack.md)

## 通用配置项

### source

- 类型： `string`

- 详情：

  站点源目录的绝对路径。

  在以编程方式使用 `@vuepress/core` 时，该配置项是必需的。 CLI 会自动将其设置为命令传入的目录，因此你通常不需要在配置文件中配置它。

### dest

- 类型： `string`

- 默认值： `` `${sourceDir}/.vuepress/dist` ``

- 详情：

  指定 `vuepress build` 命令的输出目录。

### temp

- 类型： `string`

- 默认值： `` `${sourceDir}/.vuepress/.temp` ``

- 详情：

  指定临时文件目录。

::: warning
VuePress 在开发和构建时会加载临时文件，因此临时文件目录应位于项目根目录内部，以便可以正确地解析到依赖。
:::

### cache

- 类型： `string`

- 默认值： `` `${sourceDir}/.vuepress/.cache` ``

- 详情：

  指定缓存文件目录。

### public

- 类型： `string`

- 默认值： `` `${sourceDir}/.vuepress/public` ``

- 详情：

  指定 Public 文件目录。

- 参考：
  - [指南 > 静态资源 > Public 文件](../guide/assets.md#public-文件)

### debug

- 类型： `boolean`

- 默认值： `false`

- 详情：

  是否启用 Debug 模式。

  该配置项主要提供给开发者使用。同时，我们使用了 [debug](https://github.com/visionmedia/debug) 模块打印 Debug 日志，可以通过 `DEBUG=vuepress*` 环境变量来启用。

### pagePatterns

- 类型： `string[]`

- 默认值： `['**/*.md', '!.vuepress', '!node_modules']`

- 详情：

  指定页面文件的 Patterns 。这些 Patterns 是相对于 Source 目录的。

### permalinkPattern

- 类型： `string | null`

- 默认值： `null`

- 详情：

  指定为页面生成永久链接的 Pattern 。

  它会被每个页面的 Frontmatter 中的 `permalinkPattern` 字段覆盖。

- 参考：
  - [Frontmatter > permalinkPattern](./frontmatter.md#permalinkpattern)

### userStyle

- 类型： `string | null`

- 默认值： `null`

- 详情：

  指定自定义样式文件的路径，该样式文件将被注入到客户端底部。

  主题也可以设置该选项，但用户配置的优先级高于主题配置。

## Dev 配置项

### host

- 类型： `string`

- 默认值： `'0.0.0.0'`

- 详情：

  指定开发服务器的主机名。

### port

- 类型： `number`

- 默认值： `8080`

- 详情：

  指定开发服务器的端口号。

### open

- 类型： `boolean`

- 默认值： `false`

- 详情：

  是否在开发服务器启动后打开浏览器。

### templateDev

- 类型： `string`

- 默认值： `'@vuepress/client/templates/dev.html'`

- 详情：

  指定开发时使用的 HTML 模板。

## Build 配置项

### shouldPreload

- 类型： `boolean | ((file: string, type: string) => boolean)`

- 默认值： `true`

- 详情：

  一个函数，用来控制哪些文件是需要生成对应的 `<link rel="preload">` 标签的。设置为 `true` 或者 `false` 来完全启用或禁用它。

  默认情况下，只有当前页面所需的文件会被预加载。所以在绝大部分情况下，你只需要使用 `true` 就可以了。

### shouldPrefetch

- 类型： `boolean | 'as-needed' | ((file: string, type: string) => boolean)`

- 默认值： `'as-needed'`

- 详情：

  控制哪些文件需要生成对应的 `<link rel="prefetch">` 标签。

  - `'as-needed'` （自 v2.0.0-rc.32 起的默认值）：仅预拉取当前页面 Markdown 内容中链接到的其他页面的异步资源。这可以在大型站点中保持较少的标签数量。
  - `true`：预拉取所有其它页面的异步文件。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。
  - `false`：完全禁用预拉取标签。
  - 函数：返回该文件是否需要被预拉取，接收文件路径和资源类型作为参数。

  在更早的 2.0.0-rc 版本中，默认值为 `true` 。如果需要恢复之前的行为，请显式将其设置为 `true` 。

### templateBuild

- 类型： `string`

- 默认值： `'@vuepress/client/templates/build.html'`

- 详情：

  指定构建时使用的 HTML 模板路径。

### templateBuildRenderer

- 类型： `TemplateRenderer`

- 默认值： `templateRenderer`

- 详情：

  指定构建时使用的 HTML 模板渲染函数。

## Markdown 配置

### markdown

- 类型： `MarkdownOptions`

- 默认值： `{}`

- 详情：

  对 VuePress 内置的 Markdown 语法扩展进行配置。

  它可以接收 [markdown-it](https://github.com/markdown-it/markdown-it) 的所有配置项，以及下列额外的配置项。

  自 v2.0.0-rc.32 起，VuePress 使用 markdown-it v15 和 `@mdit-vue` v4。 markdown-it 自带类型声明（请不要安装 `@types/markdown-it`），不再支持从 `markdown-it/lib/*` 深层导入，同时 `MarkdownItEnv` 已被移除，改为扩展 `markdown-it.Env` 。迁移细节请参考 [插件 API > extendsMarkdown](./plugin-api.md#extendsmarkdown)。此外， `code` 配置项也已被移除，请参考 [markdown.code](#markdown-code)。

- 参考：
  - [markdown-it > Init with presets and options](https://github.com/markdown-it/markdown-it#init-with-presets-and-options)
  - [指南 > Markdown > 语法扩展](../guide/markdown.md#语法扩展)

### markdown.anchor

- 类型： `AnchorPluginOptions | false`

- 默认值：

```ts
const defaultOptions = {
  level: [1, 2, 3, 4, 5, 6],
  permalink: anchorPlugin.permalink.headerLink({
    class: 'header-anchor',
    safariReaderFix: true,
  }),
}
```

- 详情：

  [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor) 的配置项。

  设置为 `false` 可以禁用该插件。

- 参考：
  - [指南 > Markdown > 语法扩展 > 标题锚点](../guide/markdown.md#标题锚点)

### markdown.assets

- 类型： `AssetsPluginOptions | false`

- 详情：

  VuePress 内置的 markdown-it assets 插件的配置项。

  设置为 `false` 可以禁用该插件。

::: danger
除非你了解它的用途，否则你不应该设置该配置项。
:::

#### markdown.assets.aliasSupport

- 类型： `boolean | '@-prefix'`

- 默认值： `true`

- 详情：

  对非严格相对路径使用别名。

  非严格相对路径是指不以 `./`、`../`、`/` 或 `<protocol header>` 开头的路径：
  `<img src="path1/path2.png" />`
  - 如果设置为 `true`，`path1` 会被视为别名。
  - 如果设置为 `false`，它会视为相对路径。
  - 如果设置为 `"@-prefix"`，当路径以 `@` 开头时，`path1` 会被视为别名；否则视为相对路径。

#### markdown.assets.absolutePathPrependBase

- 类型： `boolean`

- 默认值： 使用 Webpack 或 Rspack 打包工具时为 `true` ，使用 Vite 时为 `false`

- 详情：

  是否将 Markdown 中的绝对路径添加 [base](#base) 前缀。

  VuePress 会根据 `bundler.type` 设置默认值： Webpack 和 Rspack 打包工具需要该选项，因为它们不会自己处理 Public 文件的 `base` ；而 Vite 会自动处理 Public 文件的 `base` 。除非你确定资源路径已经被处理过，否则不要配置它。

### markdown.code

- 类型： `never`

- 详情：

  该配置项已被移除。

  代码块语法高亮已不再内置。请使用 [@vuepress/plugin-prismjs](https://ecosystem.vuejs.press/zh/plugins/markdown/prismjs.html) 或 [@vuepress/plugin-shiki](https://ecosystem.vuejs.press/zh/plugins/markdown/shiki.html) 。参考 [指南 > Markdown > 语法扩展 > 代码块](../guide/markdown.md#代码块) 和 [迁移 > 给用户](../guide/migration.md#给用户)。

### markdown.component

- 类型： `false`

- 详情：

  [@mdit-vue/plugin-component](https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-component) 插件的配置项。

  设置为 `false` 可以禁用该插件。

::: danger
除非你了解它的用途，否则你不应该设置该配置项。
:::

### markdown.emoji

- 类型： `EmojiPluginOptions | false`

- 详情：

  [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji) 的配置项。

  设置为 `false` 可以禁用该插件。

- 参考：
  - [指南 > Markdown > 语法扩展 > Emoji](../guide/markdown.md#emoji)

### markdown.frontmatter

- 类型： `FrontmatterPluginOptions | false`

- 详情：

  [@mdit-vue/plugin-frontmatter](https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter) 插件的配置项。

  设置为 `false` 可以禁用该插件。

- 参考：
  - [指南 > 页面 > Frontmatter](../guide/page.md#frontmatter)
  - [Node API > Page 属性 > frontmatter](./node-api.md#frontmatter)

::: danger
除非你了解它的用途，否则你不应该设置该配置项。
:::

### markdown.headers

- 类型： `HeadersPluginOptions | false`

- 默认值：

```ts
const defaultOptions = {
  level: [2, 3],
}
```

- 详情：

  [@mdit-vue/plugin-headers](https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-headers) 插件的配置项。

  设置为 `false` 可以禁用该插件。

- 参考：
  - [Node API > Page 属性 > headers](./node-api.md#headers)

### markdown.importCode

- 类型： `ImportCodePluginOptions | false`

- 详情：

  VuePress 内置的 markdown-it 导入代码插件的配置项。

  设置为 `false` 可以禁用该插件。

- 参考：
  - [指南 > Markdown > 语法扩展 > 导入代码块](../guide/markdown.md#导入代码块)

#### markdown.importCode.handleImportPath

- 类型： `(str: string) => string`

- 默认值： `(str) => str`

- 详情：

  一个函数，用于处理导入代码语法中的文件导入路径。

### markdown.links

- 类型： `LinkPluginOptions | false`

- 详情：

  VuePress 内置的 markdown-it 链接插件的配置项。

  它可以把站内链接的 tag 转换为 [internalTag](#markdown-links-internaltag) ，并且可以在站外链接上添加额外的属性和图标。

  设置为 `false` 可以禁用该插件。

- 参考：
  - [指南 > Markdown > 语法扩展 > 链接](../guide/markdown.md#链接)

#### markdown.links.internalTag

- 类型： `string`

- 默认值： `'RouteLink'`

- 详情：

  内部链接所使用的标签。

  默认情况下，该插件会把内部链接转换为 [RouteLink](./components.md#routelink) 。

#### markdown.links.externalAttrs

- 类型： `Record<string, string>`

- 默认值： `{ target: '_blank', rel: 'noopener noreferrer' }`

- 详情：

  为外部链接添加额外的属性。

### markdown.sfc

- 类型： `SfcPluginOptions | false`

- 详情：

  [@mdit-vue/plugin-sfc](https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc) 插件的配置项。

  设置为 `false` 可以禁用该插件。

- 参考：
  - [Cookbook > Markdown 与 Vue SFC](../advanced/cookbook/markdown-and-vue-sfc.md)
  - [Node API > Page 属性 > sfcBlocks](./node-api.md#sfcblocks)

::: danger
除非你了解它的用途，否则你不应该设置该配置项。
:::

### markdown.slugify

- 类型： `(str: string) => string`

- 详情：

  默认使用的 slugify 函数。

### markdown.title

- 类型： `false`

- 详情：

  [@mdit-vue/plugin-title](https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-title) 插件的配置项。

  设置为 `false` 可以禁用该插件。

::: danger
除非你了解它的用途，否则你不应该设置该配置项。
:::

### markdown.toc

- 类型： `TocPluginOptions | false`

- 默认值：

```ts
const defaultOptions = {
  level: [2, 3],
}
```

- 详情：

  [@mdit-vue/plugin-toc](https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc) 插件的配置项。

  设置为 `false` 可以禁用该插件。

- 参考：
  - [指南 > Markdown > 语法扩展 > 目录](../guide/markdown.md#目录)

### markdown.vPre

- 类型： `VPrePluginOptions | false`

- 详情：

  VuePress 内置的 markdown-it v-pre 插件的配置项。

  设置为 `false` 可以禁用该插件。

#### markdown.vPre.block

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否在代码块的 `<pre>` 标签上添加 `v-pre` 指令。

- 参考：
  - [指南 > Markdown > 语法扩展 > 代码块 > 添加 v-pre](../guide/markdown.md#添加-v-pre)

#### markdown.vPre.inline

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否在行内代码的 `<code>` 标签上添加 `v-pre` 指令。

- 参考：
  - [指南 > Markdown > 语法扩展 > 代码块 > 添加 v-pre](../guide/markdown.md#添加-v-pre)

## 插件配置

### plugins

- 类型： `PluginConfig[]`

- 详情：

  要使用的插件。

  该配置项接收一个数组，其中的每一个数组项是一个或一组插件。

- 参考：
  - [指南 > 插件](../guide/plugin.md)

## 插件 API

用户配置文件同样可以作为一个 VuePress 插件，所以除了 `name` 和 `multiple` 配置项以外的所有插件 API 都可以在配置文件中使用。

前往 [插件 API 参考](./plugin-api.md) 查看所有插件 API 。
