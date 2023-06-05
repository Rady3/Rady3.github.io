import{_ as p,D as o,o as e,c,z as s,a as n,G as t,R as a}from"./chunks/framework.435bee4c.js";const x=JSON.parse('{"title":"前端开发规范","description":"","frontmatter":{},"headers":[],"relativePath":"standard/index.md","filePath":"standard/index.md","lastUpdated":1679565036000}'),r={name:"standard/index.md"},E=a('<h1 id="前端开发规范" tabindex="-1">前端开发规范</h1><h2 id="一、目录结构规范" tabindex="-1">一、目录结构规范</h2><p>普遍地，项目需要有以下几项文件夹或文件：</p><ol><li>src - 源代码存放的文件夹</li><li>package.json - 包描述文件</li><li>yarn.lock - 包管理器 yarn 自动生成的版本锁定文件</li><li>README.md - 新手上手指南，针对项目的启动命令、环境配置，依赖安装难点等进行描述</li></ol><h2 id="在-src-目录下-如果脚手架自带的子目录不够使用-可以自己开辟-常见的子目录名称及用法" tabindex="-1">在 src 目录下，如果脚手架自带的子目录不够使用，可以自己开辟，常见的子目录名称及用法：</h2><ol><li>api - 统一存放后端请求接口的文件夹</li><li>utils - 存放工具类函数集合的文件夹</li><li>assets / static - 存放图片、音视频等静态资源的文件夹</li><li>components - 存放全局公共组件的文件夹，公共组件超过两次使用放入此文件夹</li><li>views - 存放页面级别的业务组件的文件夹</li><li>store - 全局状态管理文件夹</li><li>router - 前端路由文件夹</li><li>icons - svg图标静态文件夹</li><li>styles - 全局样式文件夹</li></ol><h2 id="js-vue-css文件开发规范" tabindex="-1">js，vue，css文件开发规范</h2><p><code>-JS：</code></p><ol><li>单个单词小写，多个单词小驼峰命名法（lowerCamelCase）命名，如：routes.js、taskMap.js</li><li>变量声明，使用 const 或 let，不要使用 var。</li><li>方法名、参数名、成员变量、局部变量命名，采用小写开头的单词或小驼峰命名法（lowerCamelCase）命名，其中 Boolean 类型的变量一般要以 is 或 has 开头，方法名采用 动词 + 名词 的动宾形式，如 toNum、onClick 和 handleClick，不要采用动词修饰名词的形式，如 clickHandler。</li><li>类名和构造函数名，采用大写开头的单词或大驼峰命名法（UpperCamelCase）命名</li><li>不要使用 that 或 _this 等指代 this 变量，而应该寻求使用箭头函数等避免改变 this 指向的途径解决。</li><li>在不知道对象属性调用的情况下，全部采用可选链操作符<code>( ?. )</code>，以便不知道后端的返回的数据层次时，前端程序停止执行，导致系统异常</li></ol><p><code>Vue：</code></p>',10),y=s("li",null,[s("p",null,[n("views文件夹下的页面组件，每个文件夹代表一个页面，文件夹下统一建"),s("code",null,"index.vue"),n("入口文件，页面中使用的组件放在当前页面文件夹下的"),s("code",null,"widget"),n("文件夹下，如果这个组件被多次使用，被其它页面使用，就放在全局"),s("code",null,"components"),n("文件夹下")])],-1),i=s("li",null,[s("p",null,"每个页面路由名称和当前页面的文件夹名称必须保持一致")],-1),F=s("li",null,[s("p",null,"始终使用 :、@ 和 # 等指令缩写代替 v-bind:、v-on: 和 v-slot:。")],-1),d=s("li",null,[s("p",null,"Prop 定义应该尽量详细，用对象的方式，必须声明类型，不要用数组的形式")],-1),u=a(`<ul><li>示例代码</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    status: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">validator</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;syncing&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;synced&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;version-conflict&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;error&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ].</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(value) </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    status: {</span></span>
<span class="line"><span style="color:#24292E;">      type: String,</span></span>
<span class="line"><span style="color:#24292E;">      required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">validator</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;syncing&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;synced&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;version-conflict&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;error&#39;</span></span>
<span class="line"><span style="color:#24292E;">        ].</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(value) </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ol start="6"><li>在组件上必须用 key 搭配 v-for，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的对象固化 (object constancy)。key必须是业务id的作为key，不要用index作为key</li></ol><ul><li>示例代码</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo in todos&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo.id&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {{ todo.text }}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo in todos&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo.id&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ol start="7"><li>v-if 和 v-for 互斥，永远不要把 v-if 和 v-for 同时用在同一个元素上。</li><li>vue3定义组件优先使用<code>setup</code>模式，方便快速开发</li><li>自定义事件，以及一些自定义定时器，一定要在<code>onUnmounted</code>或者<code>beforeDestroy</code>组件卸载的时候销毁定时器，或者自定义事件，以免造成内存泄漏</li></ol><p><code>CSS</code></p><ol><li>页面中优先使用<code>unocss</code>的类名样式，一些特殊的类名才自定义类名</li><li><code>unocss</code>开发规范全面使用属性加<code>-</code>的模式，比如<code>flex-1</code>，<code>w-50px</code>，不要使用<code>flex1</code>，<code>w50px</code> ，全部统一一个规范</li><li>颜色定义优先使用<code>uno.config.js</code>里面定义的颜色，字体颜色用<code>text-primary</code>，背景色用<code>bg-primary</code></li><li>如果一些颜色没有在<code>uno.config.js</code>里面定义，那么使用<code>cssVar</code>定义的颜色变量，通过style的方式使用，以便切换系统主题</li><li>自定义类名采用<code>BEM</code>命名规范，例如<code>dwyl-apply__banne</code>，<code>dwyl-apply__banne--title</code></li></ol><ul><li>示例代码</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text-12px bg-primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color:var(--el-text-color-primary)&quot;</span><span style="color:#E1E4E8;">&gt;测试颜色&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.main</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--el-color-primary</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text-12px bg-primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;color:var(--el-text-color-primary)&quot;</span><span style="color:#24292E;">&gt;测试颜色&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.main</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--el-color-primary</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="js代码注释规范" tabindex="-1">js代码注释规范</h2><ol><li><p>单行注释，独占一行，//后跟空格</p></li><li><p>多行注释，/*后跟空格</p></li><li><p>函数/方法注释</p></li></ol><ul><li>注释必须包含函数声明，有参数和返回值时必须注释标识</li><li>参数和返回类型必须包含类型信息和说明</li><li>当函数是内部函数，外部不可访问时，可使用@inner标识</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 注释</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* xxxx</span></span>
<span class="line"><span style="color:#6A737D;"> xxxx</span></span>
<span class="line"><span style="color:#6A737D;"> xxxxx</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/** </span></span>
<span class="line"><span style="color:#6A737D;"> * 函数描述</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">p1</span><span style="color:#6A737D;"> 参数说明</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">p2</span><span style="color:#6A737D;"> 参数2的说明，比较长</span></span>
<span class="line"><span style="color:#6A737D;"> *     那就换行了.</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{number=}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">p3</span><span style="color:#6A737D;"> 参数3的说明（可选）</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Object}</span><span style="color:#6A737D;"> 返回值描述</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">p2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">p3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        p1: p1,</span></span>
<span class="line"><span style="color:#E1E4E8;">        p2: p2</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 注释</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* xxxx</span></span>
<span class="line"><span style="color:#6A737D;"> xxxx</span></span>
<span class="line"><span style="color:#6A737D;"> xxxxx</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/** </span></span>
<span class="line"><span style="color:#6A737D;"> * 函数描述</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">p1</span><span style="color:#6A737D;"> 参数说明</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">p2</span><span style="color:#6A737D;"> 参数2的说明，比较长</span></span>
<span class="line"><span style="color:#6A737D;"> *     那就换行了.</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number=}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">p3</span><span style="color:#6A737D;"> 参数3的说明（可选）</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{Object}</span><span style="color:#6A737D;"> 返回值描述</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(</span><span style="color:#E36209;">p1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">p2</span><span style="color:#24292E;">, </span><span style="color:#E36209;">p3</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        p1: p1,</span></span>
<span class="line"><span style="color:#24292E;">        p2: p2</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="所有项目统一采用eslint语法检测" tabindex="-1">所有项目统一采用<code>ESlint</code>语法检测</h2><ol><li>vscode下载eslint插件</li><li>代码保存自动格式化，每个开发人员提交的代码，通过eslint限制，提交的代码格式都是统一的规范</li></ol><ul><li>eslint配置</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  env: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    browser: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    es2021: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    node: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/setup-compiler-macros&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span><span style="color:#9ECBFF;">&#39;plugin:vue/vue3-essential&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;standard&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  parserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ecmaVersion: </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourceType: </span><span style="color:#9ECBFF;">&#39;module&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/multi-word-component-names&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关闭组件没有名称定义</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-unused-vars&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/no-mutating-props&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/no-setup-props-destructure&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/no-deprecated-v-on-native-modifier&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-unused-expressions&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-irregular-whitespace&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-useless-escape&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    camelcase: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/prefer-import-from-vue&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;prefer-const&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-undef&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-mixed-spaces-and-tabs&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 不能空格与tab混用</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/max-attributes-per-line&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        singleline: { max: </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        multiline: { max: </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ], </span><span style="color:#6A737D;">// vue template模板元素第一行最多5个属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// html 闭括号之前无空格</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/html-closing-bracket-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// html 需要有结束标签，除了自闭合标签</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/html-end-tags&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 缩进</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/html-indent&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 属性-引用-默认使用双引号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/html-quotes&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 标签里面不允许多余空格</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/no-multi-spaces&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-eval&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/mustache-interpolation-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// {{ val }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/no-spaces-around-equal-signs-in-attribute&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 属性间不允许空格</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/attributes-order&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        order: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;DEFINITION&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;LIST_RENDERING&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;CONDITIONALS&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;RENDER_MODIFIERS&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;GLOBAL&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          [</span><span style="color:#9ECBFF;">&#39;UNIQUE&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;SLOT&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;TWO_WAY_BINDING&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;OTHER_DIRECTIVES&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;OTHER_ATTR&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;EVENTS&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;CONTENT&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        alphabetical: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ] </span><span style="color:#6A737D;">/// class = &quot;66&quot;  属性间不允许空格</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  env: {</span></span>
<span class="line"><span style="color:#24292E;">    browser: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    es2021: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    node: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/setup-compiler-macros&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span><span style="color:#032F62;">&#39;plugin:vue/vue3-essential&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;standard&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  parserOptions: {</span></span>
<span class="line"><span style="color:#24292E;">    ecmaVersion: </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    sourceType: </span><span style="color:#032F62;">&#39;module&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  rules: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/multi-word-component-names&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关闭组件没有名称定义</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-unused-vars&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/no-mutating-props&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/no-setup-props-destructure&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/no-deprecated-v-on-native-modifier&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-unused-expressions&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-irregular-whitespace&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-useless-escape&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    camelcase: </span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/prefer-import-from-vue&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;prefer-const&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-undef&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-mixed-spaces-and-tabs&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 不能空格与tab混用</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/max-attributes-per-line&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        singleline: { max: </span><span style="color:#005CC5;">7</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        multiline: { max: </span><span style="color:#005CC5;">7</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ], </span><span style="color:#6A737D;">// vue template模板元素第一行最多5个属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// html 闭括号之前无空格</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/html-closing-bracket-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// html 需要有结束标签，除了自闭合标签</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/html-end-tags&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 缩进</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/html-indent&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 属性-引用-默认使用双引号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/html-quotes&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 标签里面不允许多余空格</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/no-multi-spaces&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-eval&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/mustache-interpolation-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// {{ val }}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/no-spaces-around-equal-signs-in-attribute&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 属性间不允许空格</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;vue/attributes-order&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        order: [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;DEFINITION&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;LIST_RENDERING&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;CONDITIONALS&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;RENDER_MODIFIERS&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;GLOBAL&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          [</span><span style="color:#032F62;">&#39;UNIQUE&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;SLOT&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;TWO_WAY_BINDING&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;OTHER_DIRECTIVES&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;OTHER_ATTR&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;EVENTS&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;CONTENT&#39;</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        alphabetical: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ] </span><span style="color:#6A737D;">/// class = &quot;66&quot;  属性间不允许空格</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="接口请求异常提示" tabindex="-1">接口请求异常提示</h2><ul><li>提交表单，表单验证</li></ul><ol><li>通过业务需求，每个表单输入框，下拉框，对应业务展示不同的提示语</li><li>非空必填提示，正则验证提示，禁用选择提示</li><li>前端验证通过后再请求后端接口，如果有后端错误提示，再根据后端对应的错误码code_message提示对应语句</li></ol><ul><li>接口请求错误提示</li></ul><ol><li>常用http状态码错误提示</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">：</span><span style="color:#9ECBFF;">&#39;表示请求成功，前端返回对应的后端数据&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;请求错误(400)&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">401</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;未授权，请重新登录(401)&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">403</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;拒绝访问(403)&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;请求出错(404)&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">408</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;请求超时(408)&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;服务器错误(500)&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">501</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;服务未实现(501)&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">502</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;网络错误(502)&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">503</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;服务不可用(503)&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">504</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;网络超时(504)&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">505</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;HTTP版本不受支持(505)&#39;</span></span>
<span class="line"><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\`连接出错(\${</span><span style="color:#E1E4E8;">err</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">response</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">status</span><span style="color:#9ECBFF;">})!\`</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">200</span><span style="color:#24292E;">：</span><span style="color:#032F62;">&#39;表示请求成功，前端返回对应的后端数据&#39;</span></span>
<span class="line"><span style="color:#005CC5;">400</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;请求错误(400)&#39;</span></span>
<span class="line"><span style="color:#005CC5;">401</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;未授权，请重新登录(401)&#39;</span></span>
<span class="line"><span style="color:#005CC5;">403</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;拒绝访问(403)&#39;</span></span>
<span class="line"><span style="color:#005CC5;">404</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;请求出错(404)&#39;</span></span>
<span class="line"><span style="color:#005CC5;">408</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;请求超时(408)&#39;</span></span>
<span class="line"><span style="color:#005CC5;">500</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;服务器错误(500)&#39;</span></span>
<span class="line"><span style="color:#005CC5;">501</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;服务未实现(501)&#39;</span></span>
<span class="line"><span style="color:#005CC5;">502</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;网络错误(502)&#39;</span></span>
<span class="line"><span style="color:#005CC5;">503</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;服务不可用(503)&#39;</span></span>
<span class="line"><span style="color:#005CC5;">504</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;网络超时(504)&#39;</span></span>
<span class="line"><span style="color:#005CC5;">505</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;HTTP版本不受支持(505)&#39;</span></span>
<span class="line"><span style="color:#D73A49;">default</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\`连接出错(\${</span><span style="color:#24292E;">err</span><span style="color:#032F62;">.</span><span style="color:#24292E;">response</span><span style="color:#032F62;">.</span><span style="color:#24292E;">status</span><span style="color:#032F62;">})!\`</span><span style="color:#24292E;">;</span></span></code></pre></div><ol start="2"><li>返回200，成功根据业务code错误码code_message提示</li></ol><h2 id="vue3-组合式api规范" tabindex="-1">vue3 组合式API规范</h2><p>应按如下顺序编写代码</p><ul><li>import 方法</li><li>定义变量</li><li>定义function</li><li>watch、computed...等方法</li><li>onMounted</li><li>create</li></ul><p>（尚待补充...）</p>`,29);function C(B,v,A,D,m,g){const l=o("some-component");return e(),c("div",null,[E,s("ol",null,[y,i,s("li",null,[s("p",null,[n("组件 props 名，定义 props 时采用小驼峰命名法（lowerCamelCase），给组件设置 props 时采用串式命名法（kebab-case），如：props: { greetingText: String } 定义，"),t(l,{"greating-text":"hello"}),n(" 使用。")])]),F,d]),u])}const _=p(r,[["render",C]]);export{x as __pageData,_ as default};
