import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as r,a as n,b as s,d as a,w as i,e}from"./app-dDmHkibj.js";const d={},u=e(`<h1 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持"><span>多语言支持</span></a></h1><h2 id="站点多语言配置" tabindex="-1"><a class="header-anchor" href="#站点多语言配置"><span>站点多语言配置</span></a></h2><p>要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docs
├─ README.md
├─ foo.md
├─ nested
│  └─ README.md
└─ zh
   ├─ README.md
   ├─ foo.md
   └─ nested
      └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=n("code",null,"locales",-1),k=e(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 键名是该语言所属的子路径</span>
    <span class="token comment">// 作为特例，默认语言可以使用 &#39;/&#39; 作为其路径。</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">&#39;Vue-powered Static Site Generator&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">&#39;Vue 驱动的静态网站生成器&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个语言没有声明 <code>lang</code>, <code>title</code>, <code>description</code> 或者 <code>head</code> ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。</p>`,2),m={class:"hint-container tip"},h=n("p",{class:"hint-container-title"},"提示",-1),b=e(`<h2 id="主题多语言配置" tabindex="-1"><a class="header-anchor" href="#主题多语言配置"><span>主题多语言配置</span></a></h2><p>VuePress 没有限制主题如何提供多语言支持，因此每个主题可能会有不同的多语言配置方式，而且部分主题可能不会提供多语言支持。建议你查看主题本身的文档来获取更详细的指引。</p><p>如果你使用的是默认主题，那么它提供多语言支持的方式和上述是一致的：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    locales<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;简体中文&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g={class:"hint-container tip"},_=n("p",{class:"hint-container-title"},"提示",-1),f=n("p",null,"配置参考：",-1),y={href:"https://ecosystem.vuejs.press/zh/themes/default/config.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://ecosystem.vuejs.press/zh/themes/default/locale.html",target:"_blank",rel:"noopener noreferrer"};function E(w,V){const t=o("RouterLink"),p=o("ExternalLinkIcon");return l(),r("div",null,[u,n("p",null,[s("然后，在你的 "),a(t,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:i(()=>[s("配置文件")]),_:1}),s(" 中设置 "),v,s(" 选项：")]),k,n("div",m,[h,n("p",null,[s("配置参考： "),a(t,{to:"/zh/reference/config.html#locales"},{default:i(()=>[s("locales")]),_:1})])]),b,n("div",g,[_,f,n("ul",null,[n("li",null,[n("a",y,[s("默认主题 > 配置"),a(p)])]),n("li",null,[n("a",x,[s("默认主题 > 语言配置"),a(p)])])])])])}const N=c(d,[["render",E],["__file","i18n.html.vue"]]);export{N as default};
