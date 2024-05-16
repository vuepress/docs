# 内置组件

## AutoLink

- Props:

  - config
    - 类型：`AutoLinkConfig`
    - 是否必须：`true`

```ts
interface AutoLinkConfig {
  /**
   * 判断该链接是否被激活的模式，优先级高于 `exact`
   */
  activeMatch?: string | RegExp

  /**
   * `aria-label` 属性
   */

  ariaLabel?: string

  /**
   * 该链接是否只有在 URL 完全匹配时才激活
   */
  exact?: boolean

  /**
   * 自动链接的 URL
   */

  link: string

  /**
   * `rel` 属性
   */
  rel?: string

  /**
   * `target` 属性
   */
  target?: string

  /**
   * 自动链接的文本
   */
  text: string
}
```

```md
<AutoLink :config="autoLinkConfig" />
```

- 详情：

  该组件将根据您的配置自动渲染一个 `<RouteLink>` 或 `<a>`。

  如果链接既可以是内部链接也可以是外部链接，建议使用这个组件而不是 `<RouteLink>` 组件。

  它有一个默认插槽用于渲染链接的内容（默认为 `config.text`），您还可以添加名为 `before` 和 `after` 的插槽，在文本之前和之后渲染内容。

## ClientOnly

- 使用：

```md
<ClientOnly>
  <NonSsrFriendlyComponent />
</ClientOnly>
```

- 详情：

  该组件和它的子元素只会在客户端被渲染。也就是说，它不会在构建 (SSR) 过程中被渲染到 HTML 内。

  如果一个组件在 `setup()` 中直接使用 浏览器 / DOM API ，它会导致构建过程报错，因为这些 API 在 Node.js 的环境中是无法使用的。在这种情况下，你可以选择一种方式：

  - 修改这个组件，只在 `onBeforeMount()` 或 `onMounted()` Hook 中使用 浏览器 / DOM API 。
  - 使用 `<ClientOnly>` 包裹这个组件。

## Content

- Props:

  - path
    - 类型： `string`
    - 是否必须： `false`

- 使用：

```md
<Content path="/path/to/page.md" />
```

- 详情：

  该组件会渲染页面的 Markdown 内容。

  如果没有传入 `path` Prop ，它会渲染当前路由下的页面内容。

  该组件主要是为了开发主题时使用。在绝大多数情况下你不会用到它。

- 参考：
  - [Node API > Page 属性 > path](./node-api.md#path)

## RouteLink

- Props:

  - to
    - 类型： `string`
    - 是否必须： `true`
  - active
    - 类型： `boolean`
    - 是否必须： `false`
    - 默认值： `false`
  - activeClass
    - 类型： `string`
    - 是否必须： `false`
    - 默认值： `'route-link-active'`

- 使用：

```md
<RouteLink to="/path/to/target-page.md">目标页面</RouteLink>
<RouteLink active to="/path/to/current-page.md">当前页面</RouteLink>
```

- 详情：

  该组件会渲染一个链接，用于跳转到指定页面。

  如果 `active` Prop 被设置为 `true` ，那么这个链接会被额外添加一个 `activeClass` 类名。需要注意的是，这里的 active 状态并不会根据当前路由自动更新。

  该组件主要是为了开发主题时使用。在绝大多数情况下你不会用到它。对于主题作者来说，我们建议你尽可能使用这个组件，而不是使用 `vue-router` 的 `<RouterLink>` 组件。
