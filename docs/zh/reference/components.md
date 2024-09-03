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
  activeMatch?: RegExp | string

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

- 使用：

```md
<AutoLink :config="autoLinkConfig" />

<AutoLink :config="autoLinkConfig">
  default 插槽
</AutoLink>

<AutoLink :config="autoLinkConfig">
  <template #before>before 插槽</template>
  <template #after>after 插槽</template>
</AutoLink>

<AutoLink :config="autoLinkConfig">
  <template v-slot="config">{{ config.text }}</template>
</AutoLink>

<AutoLink :config="autoLinkConfig">
  <template #before="config">{{ config.text }}</template>
</AutoLink>
```

- 详情：

  该组件将会自动将内部链接渲染为 `<RouteLink>` ，将外部链接渲染为 `<a>` ，并添加必要的属性。

  你可以通过 `before` 和 `after` 插槽，在文本之前和之后渲染内容。也可以通过 `default` 插槽，直接渲染文本（默认文本是 `config.text`）。

  该组件主要是为了开发主题时使用，普通用户在绝大多数情况下并不会用到它。对于主题作者来说，我们建议你在不确定链接是内部链接还是外部链接时，尽量使用这个组件。

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

:::tip
从 Vue 3.5 开始，如果你只是想避免 Hydration Mismatch ，可以尝试使用新的 [data-allow-mismatch](https://blog.vuejs.org/posts/vue-3-5#data-allow-mismatch) 属性来代替 `<ClientOnly>` 组件。
:::

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

  该组件主要是为了开发主题时使用，普通用户在绝大多数情况下并不会用到它。对于主题作者来说，我们建议你在渲染内部链接时尽量使用这个组件，而不是使用 `vue-router` 的 `<RouterLink>` 组件。
