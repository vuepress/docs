---
icon: fa6-solid:puzzle-piece
---

# Built-in Components

<NpmBadge package="@vuepress/theme-default" />

## Badge <Badge text="badge" />

- Props:

  - type
    - Type: `'tip' | 'warning' | 'danger'`
    - Default: `'tip'`
  - text
    - Type: `string`
    - Default: `''`
  - vertical
    - Type: `'top' | 'middle' | 'bottom' | undefined`
    - Default: `undefined`

- Example:

**Input**

```md
- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />
```

**Output**

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

## CodeGroup

- Details:

  Wrapper of the [CodeGroupItem](#codegroupitem) components.

## CodeGroupItem

- Props:

  - title
    - Type: `string`
    - Required: `true`
  - active
    - Type: `boolean`
    - Default: `false`

- Details:

  This component must be placed inside a [CodeGroup](#codegroup) component.

  Use the `active` prop to set the initial active item, or the first item will be activated by default.

- Example:

**Input**

````md
<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm install
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>
````

**Output**

::: code-tabs

@tab PNPM

```bash:no-line-numbers
pnpm install
```

@tab YARN

```bash:no-line-numbers
yarn install
```

@tab:active NPM

```bash:no-line-numbers
npm install
```

:::

::: warning

You must add an empty line between the starting tag of `<CodeGroupItem>` and the code fence, otherwise the code fence will not be parsed correctly by Markdown.

All content must be valid Markdown first, and then a Vue SFC.

Learn more: [Cookbook > Markdown and Vue SFC](../../advanced/cookbook/markdown-and-vue-sfc.md)

Alternatively, you can use the [custom containers](./markdown.md#custom-containers).

:::
