# Getting Started

::: warning
VuePress v2 is currently in RC (Release Candidate) stage. It's ready to be used for building your site, but the config and API are not stable enough, which is possibly to have minor breaking changes. So make sure to read the [changelog](https://github.com/vuepress/core/blob/main/CHANGELOG.md) carefully each time you upgrade a RC version.
:::

## Try It Online

You can try VuePress directly in your browser on [StackBlitz](https://stackblitz.com/fork/vuepress).

## Installation

### Prerequisites

- [Node.js v18.19.0+](https://nodejs.org/)
- Package manager like [pnpm](https://pnpm.io), [yarn](https://classic.yarnpkg.com/en/), [npm](https://www.npmjs.com), etc.

::: tip

- When using [pnpm](https://pnpm.io/), you need to install `vue` as peer-dependencies.
- When using [yarn 2+](https://yarnpkg.com/), you need to set `nodeLinker: 'node-modules'` in your [`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc#nodeLinker) file.

:::

### Project Setup

#### Setup via CLI

You can use [create-vuepress](https://www.npmjs.com/package/create-vuepress) to generate a template directly.

::: code-tabs#shell

@tab pnpm

```bash
pnpm create vuepress vuepress-starter
```

@tab yarn

```bash
yarn create vuepress vuepress-starter
```

@tab npm

```bash
npm init vuepress vuepress-starter
```

:::

#### Setup Manually

This section will help you build a basic VuePress documentation site from ground up.

- Create and change into a new directory

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- Initialize your project

::: code-tabs#shell

@tab pnpm

```bash
git init
pnpm init
```

@tab yarn

```bash
git init
yarn init
```

@tab npm

```bash
git init
npm init
```

:::

- Install VuePress

::: code-tabs#shell

@tab pnpm

```bash
# install vuepress and vue
pnpm add -D vuepress@next vue
# install bundler and theme
pnpm add -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```

@tab yarn

```bash
# install vuepress
yarn add -D vuepress@next
# install bundler and theme
yarn add -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```

@tab npm

```bash
# install vuepress
npm install -D vuepress@next
# install bundler and theme
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```

:::

- Create `docs` directory and `docs/.vuepress` directory

```bash
mkdir docs
mkdir docs/.vuepress
```

- Create the VuePress config file `docs/.vuepress/config.js`

```ts
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})
```

- Create your first document

```bash
echo '# Hello VuePress' > docs/README.md
```

## Directory Structure

After the setup, the minimal structure of your project should look like this:

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
└─ package.json
```

The `docs` directory is where you put your markdown files, and it will be used as the source directory of VuePress.

The `docs/.vuepress` directory, i.e. the `.vuepress` directory in the source directory, is where all VuePress-specific files will be placed. Currently there is only one config file in it. By default, the temp, cache and output directory will also be generated inside this directory. It is suggested to add them to your `.gitignore` file.

::: details Example `.gitignore` file

```
# VuePress default temp directory
.vuepress/.temp
# VuePress default cache directory
.vuepress/.cache
# VuePress default build output directory
.vuepress/dist
```

:::

## Work with VuePress

### Start Dev Server

You can add some [scripts](https://classic.yarnpkg.com/en/docs/package-json#toc-scripts) to `package.json`:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

Then, run `docs:dev` script to start the dev server:

::: code-tabs#shell

@tab pnpm

```bash
pnpm docs:dev
```

@tab yarn

```bash
yarn docs:dev
```

@tab npm

```bash
npm run docs:dev
```

:::

VuePress will start a hot-reloading development server at [http://localhost:8080](http://localhost:8080). When you modify your markdown files, the content in the browser will be auto updated.

### Build Your Site

To build your site, run `docs:build` script:

::: code-tabs#shell

@tab pnpm

```bash
pnpm docs:build
```

@tab yarn

```bash
yarn docs:build
```

@tab npm

```bash
npm run docs:build
```

:::

You will see the generated static files in the `docs/.vuepress/dist` directory. You can check out [deployment](./deployment.md) for how to deploy them.

## Learn More about VuePress

By now, you should have a basic but functional VuePress site. But you may still need to read the subsequent guide to learn more about VuePress.

Next step, learn more about the [configuration](./configuration.md).
