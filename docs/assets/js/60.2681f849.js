(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{154:function(e,t,r){"use strict";r.r(t);var _=r(0),v=Object(_.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("在互联网快速发展的今天，在实现完功能之后，项目优化是一个被经常提到的话题。很多项目会在开发排期中留大量时间去做一轮又一轮的性能优化，就是为了让页面尽可能早的到达用户，提高交互的流畅程度。")]),e._v(" "),r("p",[e._v("在系统可利用系统资源有限的大背景下，3秒呈现内容的原则下，项目优化显得格外重要。")]),e._v(" "),r("p",[e._v("每减少0.1秒加载速度可能会给你带来几百甚至几千的用户活跃；每减少100K的内容请求可能会给你带来几千甚至几万的的服务端费用；每提高10%的交互流畅度可能给你带来几万甚至几十万的销售额。")]),e._v(" "),r("p",[e._v("于情于理，我们都需要去了解，掌握和使用网站优化这项必备技能。")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("由之前的十四条增加到三十五条，划分为七个模块：Content,Server,Cookie,Css,Javascript,Images,Mobile")]),e._v(" "),r("ul",[r("li",[e._v("国内还可以找到十四条的译文 "),r("a",{attrs:{href:"https://blog.csdn.net/u010648555/article/details/50721751",target:"_blank",rel:"noopener noreferrer"}},[e._v("传送门"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("英文版原文，小白慎入，高手必读 "),r("a",{attrs:{href:"https://developer.yahoo.com/performance/rules.html?guccounter=1&guce_referrer=aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTA2NDg1NTUvYXJ0aWNsZS9kZXRhaWxzLzUwNzIxNzUx&guce_referrer_sig=AQAAAAYBcLTrFIOSAc2nz_tJ2jJMy3D61wk60ga-6KZXsRrj83AeYOmAPAtidujFN2XiU96F4Fzg8aApC5q7jQeB3gybDbzDxEtVdXcQr3vzjRGb_AgvB94xZy-mGs3QKuYFe5HxvaqSV01uVqvi4SZmRCmCPDIu0K0TnYwMF9AY5n6W",target:"_blank",rel:"noopener noreferrer"}},[e._v("传送门"),r("OutboundLink")],1)])]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("从资源请求数量+代码执行效率两个角度来考虑")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"项目优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目优化")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"为什么需要项目优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要项目优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么需要项目优化")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"雅虎的网站优化准则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#雅虎的网站优化准则","aria-hidden":"true"}},[this._v("#")]),this._v(" 雅虎的网站优化准则")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"常见优化方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见优化方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 常见优化方法")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("DOM结构\n"),r("ul",[r("li",[e._v("样式表放在头部，防止白屏和闪屏")]),e._v(" "),r("li",[e._v("JS脚本放在底部或异步获取，防止阻塞资源加载")]),e._v(" "),r("li",[e._v("使用语义化标签，优化精简DOM结构")]),e._v(" "),r("li",[e._v("减少DOM操作频率")]),e._v(" "),r("li",[e._v("减少重绘与回流")])])]),e._v(" "),r("li",[e._v("JS脚本\n"),r("ul",[r("li",[e._v("优化脚本结构，移除重复的脚本")]),e._v(" "),r("li",[e._v("模块就近加载（CMD）")]),e._v(" "),r("li",[e._v("按需加载加载组件和路由")]),e._v(" "),r("li",[e._v("图片懒加载，列表分页")]),e._v(" "),r("li",[e._v("使用节流与防抖减少事件触发频率")]),e._v(" "),r("li",[e._v("尽量使用CSS动画代替js动画，开启硬件加速")])])]),e._v(" "),r("li",[e._v("资源打包上线\n"),r("ul",[r("li",[e._v("使用打包构建工具（webpack）清除注释，压缩页面资源，js、css、html、图片、字体等等")]),e._v(" "),r("li",[e._v("混淆js代码")]),e._v(" "),r("li",[e._v("分离非业务逻辑相关vendor依赖，使用长缓存缓存和CDN分发网络")])])]),e._v(" "),r("li",[e._v("服务器优化\n"),r("ul",[r("li",[e._v("减少Http请求，合并页面资源，js，css单一入口。js特殊可以分为两个文件，一个业务逻辑，一个非业务逻辑")]),e._v(" "),r("li",[e._v("把小图标合成雪碧图，不太适用经常更新的移动端开发")]),e._v(" "),r("li",[e._v("把小的图片，字体等资源base64化")]),e._v(" "),r("li",[e._v("开启GZip压缩，减少资源传输大小")]),e._v(" "),r("li",[e._v("使用强缓存和协商缓存，减少资源重复请求")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"vue中可以优化的点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue中可以优化的点","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue中可以优化的点")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Vue库dist里面的Runtime-only比Runtime+Compiler小30%")]),e._v(" "),r("li",[e._v("Vue的计算属性会根据依赖的data进行缓存")]),e._v(" "),r("li",[e._v("keep-alive可以缓存常用组件")]),e._v(" "),r("li",[e._v("Vuex中的getter也会根据依赖的state进行缓存")]),e._v(" "),r("li",[e._v("v-for中唯一key的使用")]),e._v(" "),r("li",[e._v("Vue全局错误处理errorHandle")]),e._v(" "),r("li",[e._v("Vue路由懒加载")]),e._v(" "),r("li",[e._v("Vue组件动态加载")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"react中可以优化的点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react中可以优化的点","aria-hidden":"true"}},[this._v("#")]),this._v(" React中可以优化的点")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("在constructor改变this指向代替箭头函数和render内绑定this，避免函数作为props带来不必要的rerender")]),e._v(" "),r("li",[e._v("shouldComponentUpdate，减少不不必要的rerender")]),e._v(" "),r("li",[e._v("PureComponent高性能组件只响应引用数据的深拷贝")]),e._v(" "),r("li",[e._v("使用唯一key优化list diff")]),e._v(" "),r("li",[e._v("合并setState操作，减少虚拟dom对比频率")]),e._v(" "),r("li",[e._v("React路由动态加载react-loadable")])])}],!1,null,null,null);t.default=v.exports}}]);