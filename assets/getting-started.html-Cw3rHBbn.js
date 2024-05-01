import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as m,c as v,a as e,b as s,d as t,w as n,e as c}from"./app-BhtAeQQz.js";const b={},g=e("h1",{id:"getting-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started"},[e("span",null,"Getting Started")])],-1),k={class:"hint-container warning"},_=e("p",{class:"hint-container-title"},"Warning",-1),f={href:"https://github.com/vuepress/core/blob/main/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"try-it-online",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#try-it-online"},[e("span",null,"Try It Online")])],-1),x={href:"https://stackblitz.com/fork/vuepress",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation"},[e("span",null,"Installation")])],-1),P=e("h3",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites"},[e("span",null,"Prerequisites")])],-1),A={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://pnpm.io",target:"_blank",rel:"noopener noreferrer"},S={href:"https://classic.yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"},j={class:"hint-container tip"},T=e("p",{class:"hint-container-title"},"Tips",-1),I={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"vue",-1),D={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"nodeLinker: 'node-modules'",-1),R={href:"https://yarnpkg.com/configuration/yarnrc#nodeLinker",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,".yarnrc.yml",-1),L=e("h3",{id:"project-setup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#project-setup"},[e("span",null,"Project Setup")])],-1),E=e("h4",{id:"setup-via-cli",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setup-via-cli"},[e("span",null,"Setup via CLI")])],-1),N={href:"https://www.npmjs.com/package/create-vuepress",target:"_blank",rel:"noopener noreferrer"},W=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(` create vuepress vuepress-starter
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(` create vuepress vuepress-starter
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),M=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(` init vuepress vuepress-starter
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Y=c(`<h4 id="setup-manually" tabindex="-1"><a class="header-anchor" href="#setup-manually"><span>Setup Manually</span></a></h4><p>This section will help you build a basic VuePress documentation site from ground up.</p><ul><li>Create and change into a new directory</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter
<span class="token builtin class-name">cd</span> vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Initialize your project</li></ul>`,5),O=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),s(` init
`),e("span",{class:"token function"},"pnpm"),s(` init
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),U=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),s(` init
`),e("span",{class:"token function"},"yarn"),s(` init
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),H=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),s(` init
`),e("span",{class:"token function"},"npm"),s(` init
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Z=e("ul",null,[e("li",null,"Install VuePress")],-1),J=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# install vuepress and vue"),s(`
`),e("span",{class:"token function"},"pnpm"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next vue
`),e("span",{class:"token comment"},"# install bundler and theme"),s(`
`),e("span",{class:"token function"},"pnpm"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` @vuepress/bundler-vite@next @vuepress/theme-default@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),F=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# install vuepress"),s(`
`),e("span",{class:"token function"},"yarn"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`),e("span",{class:"token comment"},"# install bundler and theme"),s(`
`),e("span",{class:"token function"},"yarn"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` @vuepress/bundler-vite@next @vuepress/theme-default@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),K=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# install vuepress"),s(`
`),e("span",{class:"token function"},"npm"),s(),e("span",{class:"token function"},"install"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`),e("span",{class:"token comment"},"# install bundler and theme"),s(`
`),e("span",{class:"token function"},"npm"),s(),e("span",{class:"token function"},"install"),s(),e("span",{class:"token parameter variable"},"-D"),s(` @vuepress/bundler-vite@next @vuepress/theme-default@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Q=c(`<ul><li>Create <code>docs</code> directory and <code>docs/.vuepress</code> directory</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token function">mkdir</span> docs/.vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create the VuePress config file <code>docs/.vuepress/config.js</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create your first document</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="directory-structure" tabindex="-1"><a class="header-anchor" href="#directory-structure"><span>Directory Structure</span></a></h2><p>After the setup, the minimal structure of your project should look like this:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>docs</code> directory is where you put your markdown files, and it will be used as the source directory of VuePress.</p><p>The <code>docs/.vuepress</code> directory, i.e. the <code>.vuepress</code> directory in the source directory, is where all VuePress-specific files will be placed. Currently there is only one config file in it. By default, the temp, cache and output directory will also be generated inside this directory. It is suggested to add them to your <code>.gitignore</code> file.</p><details class="hint-container details"><summary>Example \`.gitignore\` file</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># VuePress default temp directory
.vuepress/.temp
# VuePress default cache directory
.vuepress/.cache
# VuePress default build output directory
.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="work-with-vuepress" tabindex="-1"><a class="header-anchor" href="#work-with-vuepress"><span>Work with VuePress</span></a></h2><h3 id="start-dev-server" tabindex="-1"><a class="header-anchor" href="#start-dev-server"><span>Start Dev Server</span></a></h3>`,14),X={href:"https://classic.yarnpkg.com/en/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"package.json",-1),ee=c(`<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, run <code>docs:dev</code> script to start the dev server:</p>`,2),se=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(` docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ne=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(` docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),te=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(` run docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ae={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},ie=e("h3",{id:"build-your-site",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#build-your-site"},[e("span",null,"Build Your Site")])],-1),le=e("p",null,[s("To build your site, run "),e("code",null,"docs:build"),s(" script:")],-1),re=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(` docs:build
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),oe=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(` docs:build
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),de=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(` run docs:build
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ce=e("code",null,"docs/.vuepress/dist",-1),ue=e("h2",{id:"learn-more-about-vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#learn-more-about-vuepress"},[e("span",null,"Learn More about VuePress")])],-1),pe=e("p",null,"By now, you should have a basic but functional VuePress site. But you may still need to read the subsequent guide to learn more about VuePress.",-1);function he(me,ve){const l=o("ExternalLinkIcon"),r=o("CodeGroupItem"),u=o("CodeGroup"),d=o("CodeTabs"),p=o("RouteLink");return m(),v("div",null,[g,e("div",k,[_,e("p",null,[s("VuePress v2 is currently in RC (Release Candidate) stage. It's ready to be used for building your site, but the config and API are not stable enough, which is possibly to have minor breaking changes. So make sure to read the "),e("a",f,[s("changelog"),t(l)]),s(" carefully each time you upgrade a RC version.")])]),y,e("p",null,[s("You can try VuePress directly in your browser on "),e("a",x,[s("StackBlitz"),t(l)]),s(".")]),w,P,e("ul",null,[e("li",null,[e("a",A,[s("Node.js v18.16.0+"),t(l)])]),e("li",null,[s("Package manager like "),e("a",C,[s("pnpm"),t(l)]),s(", "),e("a",S,[s("yarn"),t(l)]),s(", "),e("a",V,[s("npm"),t(l)]),s(", etc.")])]),e("div",j,[T,e("ul",null,[e("li",null,[s("When using "),e("a",I,[s("pnpm"),t(l)]),s(", you need to install "),q,s(" as peer-dependencies.")]),e("li",null,[s("When using "),e("a",D,[s("yarn 2+"),t(l)]),s(", you need to set "),G,s(" in your "),e("a",R,[B,t(l)]),s(" file.")])])]),L,E,e("p",null,[s("You can use "),e("a",N,[s("create-vuepress"),t(l)]),s(" to generate a template directly.")]),t(u,null,{default:n(()=>[t(r,{title:"pnpm",active:""},{default:n(()=>[W]),_:1}),t(r,{title:"yarn"},{default:n(()=>[z]),_:1}),t(r,{title:"npm"},{default:n(()=>[M]),_:1})]),_:1}),Y,t(d,{id:"85",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:0,"tab-id":"shell"},{title0:n(({value:a,isActive:i})=>[s("pnpm")]),title1:n(({value:a,isActive:i})=>[s("yarn")]),title2:n(({value:a,isActive:i})=>[s("npm")]),tab0:n(({value:a,isActive:i})=>[O]),tab1:n(({value:a,isActive:i})=>[U]),tab2:n(({value:a,isActive:i})=>[H]),_:1}),Z,t(d,{id:"103",data:[{id:"pnpm"},{id:"yarn"},{id:"pnpm"}],active:0,"tab-id":"shell"},{title0:n(({value:a,isActive:i})=>[s("pnpm")]),title1:n(({value:a,isActive:i})=>[s("yarn")]),title2:n(({value:a,isActive:i})=>[s("pnpm")]),tab0:n(({value:a,isActive:i})=>[J]),tab1:n(({value:a,isActive:i})=>[F]),tab2:n(({value:a,isActive:i})=>[K]),_:1}),Q,e("p",null,[s("You can add some "),e("a",X,[s("scripts"),t(l)]),s(" to "),$,s(":")]),ee,t(d,{id:"167",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:0,"tab-id":"shell"},{title0:n(({value:a,isActive:i})=>[s("pnpm")]),title1:n(({value:a,isActive:i})=>[s("yarn")]),title2:n(({value:a,isActive:i})=>[s("npm")]),tab0:n(({value:a,isActive:i})=>[se]),tab1:n(({value:a,isActive:i})=>[ne]),tab2:n(({value:a,isActive:i})=>[te]),_:1}),e("p",null,[s("VuePress will start a hot-reloading development server at "),e("a",ae,[s("http://localhost:8080"),t(l)]),s(". When you modify your markdown files, the content in the browser will be auto updated.")]),ie,le,t(u,null,{default:n(()=>[t(r,{title:"pnpm",active:""},{default:n(()=>[re]),_:1}),t(r,{title:"yarn"},{default:n(()=>[oe]),_:1}),t(r,{title:"npm"},{default:n(()=>[de]),_:1})]),_:1}),e("p",null,[s("You will see the generated static files in the "),ce,s(" directory. You can check out "),t(p,{to:"/guide/deployment.html"},{default:n(()=>[s("deployment")]),_:1}),s(" for how to deploy them.")]),ue,pe,e("p",null,[s("Next step, learn more about the "),t(p,{to:"/guide/configuration.html"},{default:n(()=>[s("configuration")]),_:1}),s(".")])])}const ke=h(b,[["render",he],["__file","getting-started.html.vue"]]),_e=JSON.parse(`{"path":"/guide/getting-started.html","title":"Getting Started","lang":"en-US","frontmatter":{"icon":"fa6-solid:lightbulb","description":"Getting Started Warning VuePress v2 is currently in RC (Release Candidate) stage. It's ready to be used for building your site, but the config and API are not stable enough, whi...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/guide/getting-started.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/guide/getting-started.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Getting Started"}],["meta",{"property":"og:description","content":"Getting Started Warning VuePress v2 is currently in RC (Release Candidate) stage. It's ready to be used for building your site, but the config and API are not stable enough, whi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Getting Started\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Try It Online","slug":"try-it-online","link":"#try-it-online","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"Project Setup","slug":"project-setup","link":"#project-setup","children":[]}]},{"level":2,"title":"Directory Structure","slug":"directory-structure","link":"#directory-structure","children":[]},{"level":2,"title":"Work with VuePress","slug":"work-with-vuepress","link":"#work-with-vuepress","children":[{"level":3,"title":"Start Dev Server","slug":"start-dev-server","link":"#start-dev-server","children":[]},{"level":3,"title":"Build Your Site","slug":"build-your-site","link":"#build-your-site","children":[]}]},{"level":2,"title":"Learn More about VuePress","slug":"learn-more-about-vuepress","link":"#learn-more-about-vuepress","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":2.21,"words":664},"filePathRelative":"guide/getting-started.md","localizedDate":"December 3, 2023","autoDesc":true}`);export{ke as comp,_e as data};