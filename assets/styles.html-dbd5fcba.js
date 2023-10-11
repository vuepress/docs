import{_ as e,r as a,o,c as i,a as p,b as s,d as n,e as l}from"./app-4728242c.js";const u={},r=s("h1",{id:"样式",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#样式","aria-hidden":"true"},"#"),n(" 样式")],-1),k={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},d=l(`<p>用户可以通过 <a href="#palette-%E6%96%87%E4%BB%B6">palette 文件</a> 来自定义样式变量，还可以通过 <a href="#style-%E6%96%87%E4%BB%B6">style 文件</a> 来添加额外的样式。</p><h2 id="palette-文件" tabindex="-1"><a class="header-anchor" href="#palette-文件" aria-hidden="true">#</a> Palette 文件</h2><p>Palette 文件的路径是 <code>.vuepress/styles/palette.scss</code> 。</p><p>你可以利用它来覆盖默认主题的预定义 SASS 变量。</p><details class="hint-container details"><summary>点击查看 SASS 变量</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// responsive breakpoints</span>
<span class="token property"><span class="token variable">$MQNarrow</span></span><span class="token punctuation">:</span> 959px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$MQMobile</span></span><span class="token punctuation">:</span> 719px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$MQMobileNarrow</span></span><span class="token punctuation">:</span> 419px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="style-文件" tabindex="-1"><a class="header-anchor" href="#style-文件" aria-hidden="true">#</a> Style 文件</h2><p>Style 文件的路径是 <code>.vuepress/styles/index.scss</code> 。</p><p>你可以在这里添加额外的样式，或者覆盖默认样式：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以利用它来覆盖默认主题的预定义 CSS 变量。</p><details class="hint-container details"><summary>点击查看 CSS 变量</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token comment">// brand colors</span>
  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span>
  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #4abf8a<span class="token punctuation">;</span>

  <span class="token comment">// background colors</span>
  <span class="token property">--c-bg</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">--c-bg-light</span><span class="token punctuation">:</span> #f3f4f5<span class="token punctuation">;</span>
  <span class="token property">--c-bg-lighter</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>
  <span class="token property">--c-bg-dark</span><span class="token punctuation">:</span> #ebebec<span class="token punctuation">;</span>
  <span class="token property">--c-bg-darker</span><span class="token punctuation">:</span> #e6e6e6<span class="token punctuation">;</span>
  <span class="token property">--c-bg-navbar</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-bg-sidebar</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-bg-arrow</span><span class="token punctuation">:</span> #cccccc<span class="token punctuation">;</span>

  <span class="token comment">// text colors</span>
  <span class="token property">--c-text</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
  <span class="token property">--c-text-accent</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-text-light</span><span class="token punctuation">:</span> #3a5169<span class="token punctuation">;</span>
  <span class="token property">--c-text-lighter</span><span class="token punctuation">:</span> #4e6e8e<span class="token punctuation">;</span>
  <span class="token property">--c-text-lightest</span><span class="token punctuation">:</span> #6a8bad<span class="token punctuation">;</span>
  <span class="token property">--c-text-quote</span><span class="token punctuation">:</span> #999999<span class="token punctuation">;</span>

  <span class="token comment">// border colors</span>
  <span class="token property">--c-border</span><span class="token punctuation">:</span> #eaecef<span class="token punctuation">;</span>
  <span class="token property">--c-border-dark</span><span class="token punctuation">:</span> #dfe2e5<span class="token punctuation">;</span>

  <span class="token comment">// custom container colors</span>
  <span class="token property">--c-tip</span><span class="token punctuation">:</span> #42b983<span class="token punctuation">;</span>
  <span class="token property">--c-tip-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-tip-title</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-tip-text</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-tip-text-accent</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-accent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-warning</span><span class="token punctuation">:</span> #ffc310<span class="token punctuation">;</span>
  <span class="token property">--c-warning-bg</span><span class="token punctuation">:</span> #fffae3<span class="token punctuation">;</span>
  <span class="token property">--c-warning-bg-light</span><span class="token punctuation">:</span> #fff3ba<span class="token punctuation">;</span>
  <span class="token property">--c-warning-bg-lighter</span><span class="token punctuation">:</span> #fff0b0<span class="token punctuation">;</span>
  <span class="token property">--c-warning-border-dark</span><span class="token punctuation">:</span> #f7dc91<span class="token punctuation">;</span>
  <span class="token property">--c-warning-details-bg</span><span class="token punctuation">:</span> #fff5ca<span class="token punctuation">;</span>
  <span class="token property">--c-warning-title</span><span class="token punctuation">:</span> #f1b300<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text</span><span class="token punctuation">:</span> #746000<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text-accent</span><span class="token punctuation">:</span> #edb100<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text-light</span><span class="token punctuation">:</span> #c1971c<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text-quote</span><span class="token punctuation">:</span> #ccab49<span class="token punctuation">;</span>
  <span class="token property">--c-danger</span><span class="token punctuation">:</span> #f11e37<span class="token punctuation">;</span>
  <span class="token property">--c-danger-bg</span><span class="token punctuation">:</span> #ffe0e0<span class="token punctuation">;</span>
  <span class="token property">--c-danger-bg-light</span><span class="token punctuation">:</span> #ffcfde<span class="token punctuation">;</span>
  <span class="token property">--c-danger-bg-lighter</span><span class="token punctuation">:</span> #ffc9c9<span class="token punctuation">;</span>
  <span class="token property">--c-danger-border-dark</span><span class="token punctuation">:</span> #f1abab<span class="token punctuation">;</span>
  <span class="token property">--c-danger-details-bg</span><span class="token punctuation">:</span> #ffd4d4<span class="token punctuation">;</span>
  <span class="token property">--c-danger-title</span><span class="token punctuation">:</span> #ed1e2c<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text</span><span class="token punctuation">:</span> #660000<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text-accent</span><span class="token punctuation">:</span> #bd1a1a<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text-light</span><span class="token punctuation">:</span> #b5474d<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text-quote</span><span class="token punctuation">:</span> #c15b5b<span class="token punctuation">;</span>
  <span class="token property">--c-details-bg</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>

  <span class="token comment">// badge component colors</span>
  <span class="token property">--c-badge-tip</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-tip<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-badge-warning</span><span class="token punctuation">:</span> #ecc808<span class="token punctuation">;</span>
  <span class="token property">--c-badge-warning-text</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-badge-danger</span><span class="token punctuation">:</span> #dc2626<span class="token punctuation">;</span>
  <span class="token property">--c-badge-danger-text</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// transition vars</span>
  <span class="token property">--t-color</span><span class="token punctuation">:</span> 0.3s ease<span class="token punctuation">;</span>
  <span class="token property">--t-transform</span><span class="token punctuation">:</span> 0.3s ease<span class="token punctuation">;</span>

  <span class="token comment">// code blocks vars</span>
  <span class="token property">--code-bg-color</span><span class="token punctuation">:</span> #282c34<span class="token punctuation">;</span>
  <span class="token property">--code-hl-bg-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--code-ln-color</span><span class="token punctuation">:</span> #9e9e9e<span class="token punctuation">;</span>
  <span class="token property">--code-ln-wrapper-width</span><span class="token punctuation">:</span> 3.5rem<span class="token punctuation">;</span>

  <span class="token comment">// font vars</span>
  <span class="token property">--font-family</span><span class="token punctuation">:</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">&#39;Segoe UI&#39;</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> Oxygen<span class="token punctuation">,</span>
    Ubuntu<span class="token punctuation">,</span> Cantarell<span class="token punctuation">,</span> <span class="token string">&#39;Fira Sans&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Droid Sans&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Helvetica Neue&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">--font-family-code</span><span class="token punctuation">:</span> Consolas<span class="token punctuation">,</span> Monaco<span class="token punctuation">,</span> <span class="token string">&#39;Andale Mono&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ubuntu Mono&#39;</span><span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>

  <span class="token comment">// layout vars</span>
  <span class="token property">--navbar-height</span><span class="token punctuation">:</span> 3.6rem<span class="token punctuation">;</span>
  <span class="token property">--navbar-padding-v</span><span class="token punctuation">:</span> 0.7rem<span class="token punctuation">;</span>
  <span class="token property">--navbar-padding-h</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
  <span class="token property">--sidebar-width</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span>
  <span class="token property">--sidebar-width-mobile</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sidebar-width<span class="token punctuation">)</span> <span class="token operator">*</span> 0.82<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--content-width</span><span class="token punctuation">:</span> 740px<span class="token punctuation">;</span>
  <span class="token property">--homepage-width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-back-to-top</span>
<span class="token selector">.back-to-top </span><span class="token punctuation">{</span>
  <span class="token property">--back-to-top-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--back-to-top-color-hover</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-docsearch</span>
<span class="token selector">.DocSearch </span><span class="token punctuation">{</span>
  <span class="token property">--docsearch-primary-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-highlight-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-muted-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-quote<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-container-background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>9<span class="token punctuation">,</span> 10<span class="token punctuation">,</span> 17<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-lighter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-focus-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-shadow</span><span class="token punctuation">:</span> inset 0 0 0 2px <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-active-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-shadow</span><span class="token punctuation">:</span> 0 1px 3px 0 <span class="token function">var</span><span class="token punctuation">(</span>--c-border-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-footer-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-external-link-icon</span>
<span class="token selector">.external-link-icon </span><span class="token punctuation">{</span>
  <span class="token property">--external-link-icon-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-quote<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-medium-zoom</span>
<span class="token selector">.medium-zoom-overlay </span><span class="token punctuation">{</span>
  <span class="token property">--medium-zoom-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-nprogress</span>
<span class="token selector">#nprogress </span><span class="token punctuation">{</span>
  <span class="token property">--nprogress-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-pwa-popup</span>
<span class="token selector">.pwa-popup </span><span class="token punctuation">{</span>
  <span class="token property">--pwa-popup-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-shadow</span><span class="token punctuation">:</span> 0 4px 16px <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-btn-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-btn-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-btn-hover-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-search</span>
<span class="token selector">.search-box </span><span class="token punctuation">{</span>
  <span class="token property">--search-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--search-accent-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--search-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--search-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-border<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--search-item-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-lighter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--search-item-focus-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>点击查看暗黑模式 CSS 变量</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">html.dark </span><span class="token punctuation">{</span>
  <span class="token comment">// brand colors</span>
  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #3aa675<span class="token punctuation">;</span>
  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #349469<span class="token punctuation">;</span>

  <span class="token comment">// background colors</span>
  <span class="token property">--c-bg</span><span class="token punctuation">:</span> #22272e<span class="token punctuation">;</span>
  <span class="token property">--c-bg-light</span><span class="token punctuation">:</span> #2b313a<span class="token punctuation">;</span>
  <span class="token property">--c-bg-lighter</span><span class="token punctuation">:</span> #262c34<span class="token punctuation">;</span>
  <span class="token property">--c-bg-dark</span><span class="token punctuation">:</span> #343b44<span class="token punctuation">;</span>
  <span class="token property">--c-bg-darker</span><span class="token punctuation">:</span> #37404c<span class="token punctuation">;</span>

  <span class="token comment">// text colors</span>
  <span class="token property">--c-text</span><span class="token punctuation">:</span> #adbac7<span class="token punctuation">;</span>
  <span class="token property">--c-text-light</span><span class="token punctuation">:</span> #96a7b7<span class="token punctuation">;</span>
  <span class="token property">--c-text-lighter</span><span class="token punctuation">:</span> #8b9eb0<span class="token punctuation">;</span>
  <span class="token property">--c-text-lightest</span><span class="token punctuation">:</span> #8094a8<span class="token punctuation">;</span>

  <span class="token comment">// border colors</span>
  <span class="token property">--c-border</span><span class="token punctuation">:</span> #3e4c5a<span class="token punctuation">;</span>
  <span class="token property">--c-border-dark</span><span class="token punctuation">:</span> #34404c<span class="token punctuation">;</span>

  <span class="token comment">// custom container colors</span>
  <span class="token property">--c-tip</span><span class="token punctuation">:</span> #318a62<span class="token punctuation">;</span>
  <span class="token property">--c-warning</span><span class="token punctuation">:</span> #e0ad15<span class="token punctuation">;</span>
  <span class="token property">--c-warning-bg</span><span class="token punctuation">:</span> #2d2f2d<span class="token punctuation">;</span>
  <span class="token property">--c-warning-bg-light</span><span class="token punctuation">:</span> #423e2a<span class="token punctuation">;</span>
  <span class="token property">--c-warning-bg-lighter</span><span class="token punctuation">:</span> #44442f<span class="token punctuation">;</span>
  <span class="token property">--c-warning-border-dark</span><span class="token punctuation">:</span> #957c35<span class="token punctuation">;</span>
  <span class="token property">--c-warning-details-bg</span><span class="token punctuation">:</span> #39392d<span class="token punctuation">;</span>
  <span class="token property">--c-warning-title</span><span class="token punctuation">:</span> #fdca31<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text</span><span class="token punctuation">:</span> #d8d96d<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text-accent</span><span class="token punctuation">:</span> #ffbf00<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text-light</span><span class="token punctuation">:</span> #ddb84b<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text-quote</span><span class="token punctuation">:</span> #ccab49<span class="token punctuation">;</span>
  <span class="token property">--c-danger</span><span class="token punctuation">:</span> #fc1e38<span class="token punctuation">;</span>
  <span class="token property">--c-danger-bg</span><span class="token punctuation">:</span> #39232c<span class="token punctuation">;</span>
  <span class="token property">--c-danger-bg-light</span><span class="token punctuation">:</span> #4b2b35<span class="token punctuation">;</span>
  <span class="token property">--c-danger-bg-lighter</span><span class="token punctuation">:</span> #553040<span class="token punctuation">;</span>
  <span class="token property">--c-danger-border-dark</span><span class="token punctuation">:</span> #a25151<span class="token punctuation">;</span>
  <span class="token property">--c-danger-details-bg</span><span class="token punctuation">:</span> #482936<span class="token punctuation">;</span>
  <span class="token property">--c-danger-title</span><span class="token punctuation">:</span> #fc2d3b<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text</span><span class="token punctuation">:</span> #ea9ca0<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text-accent</span><span class="token punctuation">:</span> #fd3636<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text-light</span><span class="token punctuation">:</span> #d9777c<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text-quote</span><span class="token punctuation">:</span> #d56b6b<span class="token punctuation">;</span>
  <span class="token property">--c-details-bg</span><span class="token punctuation">:</span> #323843<span class="token punctuation">;</span>

  <span class="token comment">// badge component colors</span>
  <span class="token property">--c-badge-warning</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-warning<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-badge-warning-text</span><span class="token punctuation">:</span> #3c2e05<span class="token punctuation">;</span>
  <span class="token property">--c-badge-danger</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-badge-danger-text</span><span class="token punctuation">:</span> #401416<span class="token punctuation">;</span>

  <span class="token comment">// code blocks vars</span>
  <span class="token property">--code-hl-bg-color</span><span class="token punctuation">:</span> #363b46<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-docsearch</span>
<span class="token selector">html.dark .DocSearch </span><span class="token punctuation">{</span>
  <span class="token property">--docsearch-logo-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-shadow</span><span class="token punctuation">:</span> inset 1px 1px 0 0 #2c2e40<span class="token punctuation">,</span> 0 3px 8px 0 #000309<span class="token punctuation">;</span>
  <span class="token property">--docsearch-key-shadow</span><span class="token punctuation">:</span> inset 0 -2px 0 0 #282d55<span class="token punctuation">,</span> inset 0 0 1px 1px #51577d<span class="token punctuation">,</span>
    0 2px 2px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 4<span class="token punctuation">,</span> 9<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-key-gradient</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>-225deg<span class="token punctuation">,</span> #444950<span class="token punctuation">,</span> #1c1e21<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-footer-shadow</span><span class="token punctuation">:</span> inset 0 1px 0 0 <span class="token function">rgba</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 76<span class="token punctuation">,</span> 106<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">,</span>
    0 -4px 8px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,12);function v(b,m){const t=a("NpmBadge"),c=a("ExternalLinkIcon");return o(),i("div",null,[r,p(t,{package:"@vuepress/theme-default"}),s("p",null,[n("默认主题使用 "),s("a",k,[n("SASS"),p(c)]),n(" 作为 CSS 预处理器。")]),d])}const y=e(u,[["render",v],["__file","styles.html.vue"]]);export{y as default};
