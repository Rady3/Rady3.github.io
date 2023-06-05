import{_ as r,D as a,o as l,c as o,G as s,B as E,z as n,R as y}from"./chunks/framework.ab15ea6c.js";const i={};function d(p,e){const t=a("DwStep"),c=a("DwSteps");return l(),o("div",null,[s(c,{active:1,class:"process_box"},{default:E(()=>[s(t,{title:"平台码"}),s(t,{title:"版本"}),s(t,{title:"账号"}),s(t,{title:"注册"})]),_:1})])}const u=r(i,[["render",d]]),_=n("h1",{id:"dwsteps-步骤",tabindex:"-1"},"dwSteps 步骤",-1),F=n("p",null,"引导用户按照流程完成任务的分步导航条， 可根据实际应用场景设定步骤，步骤不得少于 2 步。",-1),D=n("h2",{id:"基础用法",tabindex:"-1"},"基础用法",-1),g=n("p",null,"简单的步骤条。",-1),h=n("p",null,"设置 active 属性，接受一个 Number，表明步骤的 index，从 0 开始。 需要定宽的步骤条时，设置 space 属性即可，它接受 Number， 单位为 px， 如果不设置，则为自适应。 设置 finish-status 属性可以改变已经完成的步骤的状态。",-1),B=y(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">DwSteps</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:active</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;process_box&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">DwStep</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;平台码&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">DwStep</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;版本&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">DwStep</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;账号&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">DwStep</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;注册&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">DwSteps</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">DwSteps</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:active</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;process_box&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">DwStep</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;平台码&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">DwStep</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;版本&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">DwStep</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;账号&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">DwStep</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;注册&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">DwSteps</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes</h2><table><thead><tr><th>属性名</th><th>说明</th><th>取值</th></tr></thead><tbody><tr><td>space</td><td>每个 step 的间距，不填写将自适应间距。 支持百分比。</td><td>number / string</td></tr><tr><td>direction</td><td>显示方向</td><td>string</td></tr><tr><td>active</td><td>设置当前激活步骤</td><td>number</td></tr><tr><td>process-status</td><td>设置当前步骤的状态</td><td>string</td></tr><tr><td>finish-status</td><td>设置结束步骤的状态</td><td>string</td></tr><tr><td>align-center</td><td>进行居中对齐</td><td>boolean</td></tr><tr><td>simple</td><td>是否应用简洁风格</td><td>boolean</td></tr></tbody></table>`,3),f=JSON.parse('{"title":"dwSteps 步骤","description":"","frontmatter":{},"headers":[],"relativePath":"components/dwSteps.md","filePath":"components/dwSteps.md","lastUpdated":1679879110000}'),m={name:"components/dwSteps.md"},q=Object.assign(m,{setup(p){return(e,t)=>(l(),o("div",null,[_,F,D,g,h,s(u),B]))}});export{f as __pageData,q as default};
