import{_ as p,r as i,o as c,c as l,b as s,d as n,a as e,w as t,e as o}from"./app-77135b4c.js";const u={},r=o(`<h1 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持" aria-hidden="true">#</a> 多语言支持</h1><h2 id="站点多语言配置" tabindex="-1"><a class="header-anchor" href="#站点多语言配置" aria-hidden="true">#</a> 站点多语言配置</h2><p>要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docs
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
    <span class="token comment">// 键名是该语言所属的子路径</span>
    <span class="token comment">// 作为特例，默认语言可以使用 &#39;/&#39; 作为其路径。</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个语言没有声明 <code>lang</code>, <code>title</code>, <code>description</code> 或者 <code>head</code> ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。</p>`,2),k={class:"hint-container tip"},m=s("p",{class:"hint-container-title"},"提示",-1),h=o(`<h2 id="主题多语言配置" tabindex="-1"><a class="header-anchor" href="#主题多语言配置" aria-hidden="true">#</a> 主题多语言配置</h2><p>VuePress 没有限制主题如何提供多语言支持，因此每个主题可能会有不同的多语言配置方式，而且部分主题可能不会提供多语言支持。建议你查看主题本身的文档来获取更详细的指引。</p><p>如果你使用的是默认主题，那么它提供多语言支持的方式和上述是一致的：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b={class:"hint-container tip"},g=s("p",{class:"hint-container-title"},"提示",-1);function _(f,q){const a=i("RouterLink");return c(),l("div",null,[r,s("p",null,[n("然后，在你的 "),e(a,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:t(()=>[n("配置文件")]),_:1}),n(" 中设置 "),d,n(" 选项：")]),v,s("div",k,[m,s("p",null,[n("配置参考： "),e(a,{to:"/zh/reference/config.html#locales"},{default:t(()=>[n("locales")]),_:1})])]),h,s("div",b,[g,s("p",null,[n("配置参考： "),e(a,{to:"/zh/reference/default-theme/config.html#locales"},{default:t(()=>[n("默认主题 > locales")]),_:1})])])])}const x=p(u,[["render",_],["__file","i18n.html.vue"]]);export{x as default};
