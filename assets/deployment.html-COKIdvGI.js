import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as e,b as i,d as a,e as l,f as t,r,o as d}from"./app-B5XEyT9V.js";const k={};function o(c,s){const n=r("RouteLink");return d(),p("div",null,[s[10]||(s[10]=e(`<h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h1><p>下述的指南基于以下条件：</p><ul><li>Markdown 源文件放置在你项目的 <code>docs</code> 目录；</li><li>使用的是默认的构建输出目录 (<code>.vuepress/dist</code>) ；</li><li>使用 <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm</a> 作为包管理器，当然也支持使用 npm 或 yarn 。</li><li>VuePress 作为项目依赖安装，并在 <code>package.json</code> 中配置了如下脚本：</li></ul><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;scripts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;docs:build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vuepress build docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages"><span>GitHub Pages</span></a></h2>`,5)),i("ol",null,[i("li",null,[i("p",null,[s[1]||(s[1]=a("设置正确的 ")),l(n,{to:"/zh/reference/config.html#base"},{default:t(()=>s[0]||(s[0]=[a("base")])),_:1}),s[2]||(s[2]=a(" 选项。"))]),s[3]||(s[3]=e("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/</code> ，你可以省略这一步，因为 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2))]),s[4]||(s[4]=i("li",null,[i("p",null,[a("选择你想要使用的 CI 工具。这里我们以 "),i("a",{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},"GitHub Actions"),a(" 为例。")]),i("p",null,[a("创建 "),i("code",null,".github/workflows/docs.yml"),a(" 文件来配置工作流。")])],-1))]),s[11]||(s[11]=e(`<details class="hint-container details"><summary>点击展开配置样例</summary><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">docs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 每当 push 到 main 分支时触发部署</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    branches</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 手动触发部署</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  workflow_dispatch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jobs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  docs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    runs-on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    steps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          fetch-depth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">设置 pnpm</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm/action-setup@v4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">设置 Node.js</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">actions/setup-node@v4</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 选择要使用的 node 版本</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          node-version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">22</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 缓存 pnpm 依赖</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          cache</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">安装依赖</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm install --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 运行构建脚本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">构建 VuePress 站点</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 查看 workflow 的文档来获取更多信息</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">部署到 GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">crazy-max/ghaction-github-pages@v4</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 部署到 gh-pages 分支</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          target_branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">gh-pages</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 部署目录为 VuePress 的默认输出目录</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          build_dir</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">docs/.vuepress/dist</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          GITHUB_TOKEN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\${{ secrets.GITHUB_TOKEN }}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请参考 <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages 官方指南</a> 来获取更多信息。</p></div><h2 id="gitlab-pages" tabindex="-1"><a class="header-anchor" href="#gitlab-pages"><span>GitLab Pages</span></a></h2>`,3)),i("ol",null,[i("li",null,[i("p",null,[s[6]||(s[6]=a("设置正确的 ")),l(n,{to:"/zh/reference/config.html#base"},{default:t(()=>s[5]||(s[5]=[a("base")])),_:1}),s[7]||(s[7]=a(" 选项。"))]),s[8]||(s[8]=e("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/</code> ，你可以省略这一步，因此 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2))]),s[9]||(s[9]=i("li",null,[i("p",null,[a("创建 "),i("code",null,".gitlab-ci.yml"),a(" 文件来配置 "),i("a",{href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},"GitLab CI"),a(" 工作流。")])],-1))]),s[12]||(s[12]=e(`<details class="hint-container details"><summary>点击展开配置样例</summary><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 选择你要使用的 docker 镜像</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">node:18-buster</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">pages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 每当 push 到 main 分支时触发部署</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  only</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 缓存 node_modules</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  cache</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      files</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    paths</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.pnpm-store</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 安装 pnpm</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  before_script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">curl -fsSL https://get.pnpm.io/install.sh | sh -</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm config set store-dir .pnpm-store</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 安装依赖并运行构建脚本</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm install --frozen-lockfile</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm docs:build --dest public</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  artifacts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    paths</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">public</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请参考 <a href="https://docs.gitlab.com/ce/user/project/pages/#getting-started" target="_blank" rel="noopener noreferrer">GitLab Pages 官方指南</a> 来获取更多信息。</p></div><h2 id="google-firebase" tabindex="-1"><a class="header-anchor" href="#google-firebase"><span>Google Firebase</span></a></h2><ol><li><p>请确保你已经安装了 <a href="https://www.npmjs.com/package/firebase-tools" target="_blank" rel="noopener noreferrer">firebase-tools</a>。</p></li><li><p>在你项目的根目录下创建 <code>firebase.json</code> 和 <code>.firebaserc</code>，并包含以下内容：</p></li></ol><p><code>firebase.json</code>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;hosting&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;public&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./docs/.vuepress/dist&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ignore&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.firebaserc</code>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;projects&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;default&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在执行了 <code>pnpm docs:build</code> 后, 使用 <code>firebase deploy</code> 指令来部署。</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请参考 <a href="https://firebase.google.com/docs/cli" target="_blank" rel="noopener noreferrer">Firebase CLI 官方指南</a> 来获取更多信息。</p></div><h2 id="heroku" tabindex="-1"><a class="header-anchor" href="#heroku"><span>Heroku</span></a></h2><ol><li><p>首先安装 <a href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank" rel="noopener noreferrer">Heroku CLI</a>；</p></li><li><p><a href="https://signup.heroku.com" target="_blank" rel="noopener noreferrer">在这里</a> 注册一个 Heroku 账号；</p></li><li><p>运行 <code>heroku login</code> 并填写你的 Heroku 认证信息：</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">heroku</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> login</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>在你的项目根目录中，创建一个名为 <code>static.json</code> 的文件，并包含下述内容：</li></ol><p><code>static.json</code>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;root&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./docs/.vuepress/dist&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里是你项目的配置，请参考 <a href="https://github.com/heroku/heroku-buildpack-static" target="_blank" rel="noopener noreferrer">heroku-buildpack-static</a> 来获取更多信息。</p><h2 id="kinsta" tabindex="-1"><a class="header-anchor" href="#kinsta"><span>Kinsta</span></a></h2><p>请查看 <a href="https://kinsta.com/docs/vuepress-application/" target="_blank" rel="noopener noreferrer">Set Up VuePress on Kinsta</a> 。</p><h2 id="edgio" tabindex="-1"><a class="header-anchor" href="#edgio"><span>Edgio</span></a></h2><p>请查看 <a href="https://docs.edg.io/guides/vuepress" target="_blank" rel="noopener noreferrer">Edgio Documentation &gt; Framework Guides &gt; VuePress</a> 。</p><h2 id="netlify" tabindex="-1"><a class="header-anchor" href="#netlify"><span>Netlify</span></a></h2><ol><li><p>前往 <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a> ，从 GitHub 创建一个新项目，并进行如下配置：</p><ul><li><strong>Build Command:</strong> <code>pnpm docs:build</code></li><li><strong>Publish directory:</strong> <code>docs/.vuepress/dist</code></li></ul></li><li><p>设置 <a href="https://docs.netlify.com/configure-builds/environment-variables" target="_blank" rel="noopener noreferrer">Environment variables</a> 来选择 Node 版本：</p><ul><li><code>NODE_VERSION</code>: 20</li></ul></li><li><p>点击 deploy 按钮。</p></li></ol><h2 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel"><span>Vercel</span></a></h2><ol><li><p>前往 <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a> ，从 GitHub 创建一个新项目，并进行如下配置：</p><ul><li><strong>FRAMEWORK PRESET:</strong> <code>Other</code></li><li><strong>BUILD COMMAND:</strong> <code>pnpm docs:build</code></li><li><strong>OUTPUT DIRECTORY:</strong> <code>docs/.vuepress/dist</code></li></ul></li><li><p>点击 deploy 按钮。</p></li></ol><h2 id="云开发-cloudbase" tabindex="-1"><a class="header-anchor" href="#云开发-cloudbase"><span>云开发 CloudBase</span></a></h2><p><a href="https://cloudbase.net/?site=vuepress" target="_blank" rel="noopener noreferrer">云开发 CloudBase</a> 是一个云原生一体化的 Serverless 云平台，支持静态网站、容器等多种托管能力，并提供简便的部署工具 <a href="https://cloudbase.net/framework.html?site=vuepress" target="_blank" rel="noopener noreferrer">CloudBase Framework</a> 来一键部署应用。</p><ol><li>全局安装 CloudBase CLI ：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @cloudbase/cli</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>在项目根目录运行以下命令一键部署 VuePress 应用，在部署之前可以先 <a href="https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&amp;tdl_site=vuejs" target="_blank" rel="noopener noreferrer">开通环境</a>：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cloudbase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --without-template</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cloudbase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> framework:deploy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认。</p><p>确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 GitHub Action 来持续部署 GitHub 上的 VuePress 应用。</p><p>也可以使用 <code>cloudbase init --template vuepress</code> 快速创建和部署一个新的 VuePress 应用。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>更多详细信息请查看 CloudBase Framework 的<a href="https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">部署项目示例</a></p></div><h2 id="_21-云盒子" tabindex="-1"><a class="header-anchor" href="#_21-云盒子"><span>21 云盒子</span></a></h2><p>请查看 <a href="https://www.21yunbox.com/docs/#/deploy-vuepress" target="_blank" rel="noopener noreferrer">21 云盒子 - 部署一个 VuePress 静态网页</a>。</p>`,37))])}const b=h(k,[["render",o],["__file","deployment.html.vue"]]),m=JSON.parse('{"path":"/zh/guide/deployment.html","title":"部署","lang":"zh-CN","frontmatter":{"icon":"fa6-solid:rocket","description":"部署 下述的指南基于以下条件： Markdown 源文件放置在你项目的 docs 目录； 使用的是默认的构建输出目录 (.vuepress/dist) ； 使用 pnpm 作为包管理器，当然也支持使用 npm 或 yarn 。 VuePress 作为项目依赖安装，并在 package.json 中配置了如下脚本： GitHub Pages 设置正确的 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/guide/deployment.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/guide/deployment.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"部署"}],["meta",{"property":"og:description","content":"部署 下述的指南基于以下条件： Markdown 源文件放置在你项目的 docs 目录； 使用的是默认的构建输出目录 (.vuepress/dist) ； 使用 pnpm 作为包管理器，当然也支持使用 npm 或 yarn 。 VuePress 作为项目依赖安装，并在 package.json 中配置了如下脚本： GitHub Pages 设置正确的 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-11T04:35:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-11T04:35:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-11T04:35:53.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"GitHub Pages","slug":"github-pages","link":"#github-pages","children":[]},{"level":2,"title":"GitLab Pages","slug":"gitlab-pages","link":"#gitlab-pages","children":[]},{"level":2,"title":"Google Firebase","slug":"google-firebase","link":"#google-firebase","children":[]},{"level":2,"title":"Heroku","slug":"heroku","link":"#heroku","children":[]},{"level":2,"title":"Kinsta","slug":"kinsta","link":"#kinsta","children":[]},{"level":2,"title":"Edgio","slug":"edgio","link":"#edgio","children":[]},{"level":2,"title":"Netlify","slug":"netlify","link":"#netlify","children":[]},{"level":2,"title":"Vercel","slug":"vercel","link":"#vercel","children":[]},{"level":2,"title":"云开发 CloudBase","slug":"云开发-cloudbase","link":"#云开发-cloudbase","children":[]},{"level":2,"title":"21 云盒子","slug":"_21-云盒子","link":"#_21-云盒子","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1733891753000,"contributors":[{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mister-Hope"},{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":4,"url":"https://github.com/Mr.Hope"},{"name":"Xinyu Liu","username":"Xinyu Liu","email":"meteor.lxy@foxmail.com","commits":1,"url":"https://github.com/Xinyu Liu"},{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1,"url":"https://github.com/meteorlxy"}]},"readingTime":{"minutes":4.15,"words":1246},"filePathRelative":"zh/guide/deployment.md","localizedDate":"2023年12月3日","autoDesc":true}');export{b as comp,m as data};