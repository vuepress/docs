import{_ as i,S as p,U as l,V as s,a2 as n,a0 as e,a1 as t,a3 as o,F as c}from"./framework-6b0fcdb5.js";const u={},r=o(`<h1 id="i18n" tabindex="-1"><a class="header-anchor" href="#i18n" aria-hidden="true">#</a> I18n</h1><h2 id="site-i18n-config" tabindex="-1"><a class="header-anchor" href="#site-i18n-config" aria-hidden="true">#</a> Site I18n Config</h2><p>To take advantage of multi-language support in VuePress, you first need to use the following file and directory structure:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docs
├─ README.md
├─ foo.md
├─ nested
│  └─ README.md
└─ zh
   ├─ README.md
   ├─ foo.md
   └─ nested
      └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=s("code",null,"locales",-1),v=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// The key is the path for the locale to be nested under.</span>
    <span class="token comment">// As a special case, the default locale can use &#39;/&#39; as its path.</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&quot;VuePress&quot;</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">&quot;Vue-powered Static Site Generator&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&quot;VuePress&quot;</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">&quot;Vue 驱动的静态网站生成器&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If a locale does not have a <code>lang</code>, <code>title</code>, <code>description</code> or <code>head</code>, VuePress will fallback to the root-level values. You can omit the root level config as long as they are provided in each locale.</p>`,2),m={class:"hint-container tip"},k=s("p",{class:"hint-container-title"},"Tips",-1),h=o(`<h2 id="theme-i18n-config" tabindex="-1"><a class="header-anchor" href="#theme-i18n-config" aria-hidden="true">#</a> Theme I18n Config</h2><p>VuePress does not restrict how themes provide multi-language support, so each theme may have different way to handle i18n, and some themes may not provide multi-language support at all. You&#39;d better refer to the theme documentation for detailed guide.</p><p>If you are using default theme, the multi-language support is the same as above:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    locales<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        selectLanguageName<span class="token operator">:</span> <span class="token string">&quot;English&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        selectLanguageName<span class="token operator">:</span> <span class="token string">&quot;简体中文&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g={class:"hint-container tip"},f=s("p",{class:"hint-container-title"},"Tips",-1);function b(_,y){const a=c("RouterLink");return p(),l("div",null,[r,s("p",null,[n("Then, specify the "),d,n(" option in your "),e(a,{to:"/guide/configuration.html#config-file"},{default:t(()=>[n("config file")]),_:1}),n(":")]),v,s("div",m,[k,s("p",null,[n("Config reference: "),e(a,{to:"/reference/config.html#locales"},{default:t(()=>[n("locales")]),_:1})])]),h,s("div",g,[f,s("p",null,[n("Config reference: "),e(a,{to:"/reference/default-theme/config.html#locales"},{default:t(()=>[n("Default Theme > locales")]),_:1})])])])}const x=i(u,[["render",b],["__file","i18n.html.vue"]]);export{x as default};
