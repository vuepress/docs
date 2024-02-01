import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c,d as i,a as n,b as e,w as v,e as a}from"./app-fcUJjNM4.js";const u={},p=n("h1",{id:"command-line-interface",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#command-line-interface"},[n("span",null,"Command Line Interface")])],-1),m={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>Run <code>vuepress --help</code> to get following help messages:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Usage:
  $ vuepress &lt;command&gt; [options]

Commands:
  dev [sourceDir]    Start development server
  build [sourceDir]  Build to static site
  info               Display environment information

For more info, run any command with the \`--help\` flag:
  $ vuepress dev --help
  $ vuepress build --help
  $ vuepress info --help

Options:
  -v, --version  Display version number
  -h, --help     Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={class:"hint-container tip"},g=n("p",{class:"hint-container-title"},"Tips",-1),_={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,[e("Set environment variable "),n("code",null,"DEBUG=vuepress*"),e(" to enable debug logs.")],-1),x=a(`<h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev"><span>dev</span></a></h2><p>Start a development server to develop your VuePress site locally.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Usage:
  $ vuepress dev [sourceDir]

Options:
  -c, --config &lt;config&gt;  Set path to config file
  -p, --port &lt;port&gt;      Use specified port (default: 8080)
  -t, --temp &lt;temp&gt;      Set the directory of the temporary files
  --host &lt;host&gt;          Use specified host (default: 0.0.0.0)
  --cache &lt;cache&gt;        Set the directory of the cache files
  --clean-temp           Clean the temporary files before dev
  --clean-cache          Clean the cache files before dev
  --open                 Open browser when ready
  --debug                Enable debug mode
  --no-watch             Disable watching page and config files (default: true)
  -v, --version          Display version number
  -h, --help             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>build</span></a></h2>`,5),w=a(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Usage:
  $ vuepress build [sourceDir]

Options:
  -c, --config &lt;config&gt;  Set path to config file
  -d, --dest &lt;dest&gt;      Set the directory build output (default: .vuepress/dist)
  -t, --temp &lt;temp&gt;      Set the directory of the temporary files
  --cache &lt;cache&gt;        Set the directory of the cache files
  --clean-temp           Clean the temporary files before build
  --clean-cache          Clean the cache files before build
  --debug                Enable debug mode
  -v, --version          Display version number
  -h, --help             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h2><p>Outputs information about your system and dependencies.</p><p>This command would be helpful when you want to check your environment or report an issue.</p>`,5);function k(D,C){const l=t("NpmBadge"),s=t("ExternalLinkIcon"),d=t("RouterLink");return o(),c("div",null,[p,i(l,{package:"@vuepress/cli"}),n("p",null,[e("VuePress CLI is provided by "),n("a",m,[e("@vuepress/cli"),i(s)]),e(" package. It is included by the "),n("a",h,[e("vuepress"),i(s)]),e(" package, and you can also install it separately.")]),b,n("div",f,[g,n("p",null,[e("VuePress is using "),n("a",_,[e("debug"),i(s)]),e(" module.")]),y]),x,n("p",null,[e("Build your VuePress site to static files, which are ready for "),i(d,{to:"/guide/deployment.html"},{default:v(()=>[e("deployment")]),_:1}),e(".")]),w])}const L=r(u,[["render",k],["__file","cli.html.vue"]]);export{L as default};
