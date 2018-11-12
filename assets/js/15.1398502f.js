(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{193:function(t,s,n){"use strict";n.r(s);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=n(5),e=Object(o.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("h1",{attrs:{id:"第7章-web-开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第7章-web-开发","aria-hidden":"true"}},[t._v("#")]),t._v(" 第7章 Web 开发")]),t._v(" "),n("blockquote",[n("p",[t._v("目标")]),t._v(" "),n("ul",[n("li",[t._v("HTTP 协议")])])]),t._v(" "),n("p",[t._v("在 Node 中需要使用 "),n("code",[t._v("http")]),t._v(" 核心模块来构建 Web 服务器。")]),t._v(" "),n("h2",{attrs:{id:"浏览器的本质作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的本质作用","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器的本质作用")]),t._v(" "),n("ul",[n("li",[t._v("收发数据")]),t._v(" "),n("li",[t._v("包装和解析 HTTP 报文数据")]),t._v(" "),n("li",[t._v("渲染 HTML、CSS，解析执行 JavaScript")])]),t._v(" "),n("h2",{attrs:{id:"http-协议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-协议","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 协议")]),t._v(" "),n("h2",{attrs:{id:"ip-地址和端口号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址和端口号","aria-hidden":"true"}},[t._v("#")]),t._v(" ip 地址和端口号")]),t._v(" "),n("ul",[n("li",[t._v("ip 地址用来定位计算机")]),t._v(" "),n("li",[t._v("端口号用来定位具体的应用程序")]),t._v(" "),n("li",[t._v("一切需要联网通信的软件都会占用一个端口号")]),t._v(" "),n("li",[t._v("端口号的范围从 0 - 65536 之间")]),t._v(" "),n("li",[t._v("在计算机中有一些默认端口号，最好不要去使用\n"),n("ul",[n("li",[t._v("例如 http 服务的 80")])])]),t._v(" "),n("li",[t._v("我们在开发过程中使用一些简单好记的就可以了，例如 3000、5000 等没什么含义")]),t._v(" "),n("li",[t._v("可以同时开启多个服务，但一定要确保不同服务占用的端口号不一致才可以")]),t._v(" "),n("li",[t._v("说白了，在一台计算机中，同一个端口号同一时间只能被一个程序占用")])]),t._v(" "),n("h2",{attrs:{id:"电话打通，没有响应"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#电话打通，没有响应","aria-hidden":"true"}},[t._v("#")]),t._v(" 电话打通，没有响应")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 0. 加载 http 核心模块")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'http'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 1. 创建服务器，得到 Server 实例")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 2. 监听客户端的 request 请求事件，设置请求处理函数")]),t._v("\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'request'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// request.header")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'收到客户端的请求了'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 3. 绑定端口号，启动服务器")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    真正需要通信的应用程序")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    如何从 a 计算机的 应用程序 通信到 b 计算机的 应用程序")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    ip 地址用来定位具体的计算机")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    port 端口号用来定位具体的应用程序")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    联网通信的应用程序必须占用一个端口号，同一时间同一个端口号只能被一个应用程序占用")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    开发测试的时候使用一些非默认端口，防止冲突")]),t._v("\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("listen")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Server is running at port 3000.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n")])])]),n("h2",{attrs:{id:"很傻的服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#很傻的服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 很傻的服务器")]),t._v(" "),n("p",[t._v("Node 服务器不同于 APache，默认能力非常的简单，一切请求都需要自己来处理。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 0. 加载 http 核心模块")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'http'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 1. 创建服务器，得到 Server 实例")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 2. 监听客户端的 request 请求事件，设置请求处理函数")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    req 请求对象（获取客户端信息）")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    res 响应对象（发送响应数据）")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//      end() 方法")]),t._v("\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'request'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 发送响应数据")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// res.write('hello')")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// res.write(' hello')")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// res.write(' hello')")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// res.write(' hello')")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// res.write(' hello')")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// res.write(' hello')")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// res.write(' hello')")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 数据写完之后，必须告诉客户端，我的数据发完了，你可以接收处理了")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 否则客户端还是会一直等待")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 结束响应，挂断电话")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// res.end()")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 推荐")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`\n    您的 ip 地址：")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("client"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remoteAddress"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("\n    您的 port 端口号：")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("client"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remotePort"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("\n`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 3. 绑定端口号，启动服务器")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    真正需要通信的应用程序")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    如何从 a 计算机的 应用程序 通信到 b 计算机的 应用程序")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    ip 地址用来定位具体的计算机")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    port 端口号用来定位具体的应用程序")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    联网通信的应用程序必须占用一个端口号，同一时间同一个端口号只能被一个应用程序占用")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    开发测试的时候使用一些非默认端口，防止冲突")]),t._v("\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("listen")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Server is running at port 3000.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"根据不同-url-地址处理不同请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据不同-url-地址处理不同请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 根据不同 url 地址处理不同请求")]),t._v(" "),n("p",[t._v("网站中的资源都是通过 "),n("code",[t._v("url")]),t._v(" 地址来定位的，所以我就可以在请求处理函数获取客户端的请求地址，然后根据不同的请求地址处理不同的响应。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 0. 加载 http 核心模块")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'http'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 1. 创建服务器，得到 Server 实例")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 2. 监听客户端的 request 请求事件，设置请求处理函数")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    req 请求对象（获取客户端信息）")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//    res 响应对象（发送响应数据）")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//      end() 方法")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 任何请求都会触发 request 请求事件")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// /a /b /c /dsanjdasjk")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// req 请求对象中有一个属性：url 可以获取当前客户端的请求路径")]),t._v("\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'request'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// console.log(req.url)")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 127.0.0.1:3000/abc")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 一切请求路径都始终是以 / 开头")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// / index page")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// /login login page")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// /about about me")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 其它的 404 Not Found.")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// res.end('index page')")]),t._v("\n  \n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 通常情况下，都会把 / 当作首页")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 因为用户手动输入地址，不加任何路径，浏览器会自动补上 / 去请求")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'首页'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v('`\n<h1>首页</h1>\n<ul>\n<li>\n  <a href="/login">登陆</a>\n</li>\n<li>\n  <a href="/reg">注册</a>\n</li>\n</ul>\n`')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/login'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'登陆'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'login page'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/reg'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'注册'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'reg page'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'404 不认识'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'404 Not Found.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("listen")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Server is running at port 3000.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"解决中文乱码问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决中文乱码问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决中文乱码问题")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("Content-Type")]),t._v(" "),n("ul",[n("li",[t._v("根据不同的内容类型所对应的数据也不一样，具体查询：http://tool.oschina.net/commons")])])]),t._v(" "),n("li",[t._v("html 文件中的 "),n("code",[t._v('<meta charset="UTF-8" />')]),t._v(" "),n("ul",[n("li",[t._v("html 文件需要如果声明了 meta-charset 则可以不写 Content-Type")])])]),t._v(" "),n("li",[t._v("建议每个响应都告诉客户端我给你发送的 Content-Type 内容类型是什么")])]),t._v(" "),n("h2",{attrs:{id:"处理页面中的多个请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#处理页面中的多个请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理页面中的多个请求")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/**\n * http 结合 fs 发送文件内容\n */")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'http'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'fs'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'request'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("readFile")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./views/index.html'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'404 Not Found.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 响应数据类型只能是：字符串 和 二进制数据")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// TypeError: First argument must be a string or Buffer")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// res.end(123)")]),t._v("\n\n      res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'text/html; charset=utf-8'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/css/main.css'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("readFile")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./views/css/main.css'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'404 Not Found.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 响应数据类型只能是：字符串 和 二进制数据")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// TypeError: First argument must be a string or Buffer")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// res.end(123)")]),t._v("\n\n      res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'text/css; charset=utf-8'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/js/main.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("readFile")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./views/js/main.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'404 Not Found.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 响应数据类型只能是：字符串 和 二进制数据")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// TypeError: First argument must be a string or Buffer")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// res.end(123)")]),t._v("\n\n      res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'application/x-javascript; charset=utf-8'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/img/ab2.jpg'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("readFile")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./views/img/ab2.jpg'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'404 Not Found.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 响应数据类型只能是：字符串 和 二进制数据")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// TypeError: First argument must be a string or Buffer")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// res.end(123)")]),t._v("\n\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 只有文本类型需要加 charset 编码")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 图片不是文本，所以不用加编码")]),t._v("\n      res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'image/jpeg'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("listen")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'running...'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"统一处理静态资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统一处理静态资源","aria-hidden":"true"}},[t._v("#")]),t._v(" 统一处理静态资源")]),t._v(" "),n("h2",{attrs:{id:"api-总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api-总结","aria-hidden":"true"}},[t._v("#")]),t._v(" API 总结")]),t._v(" "),n("h3",{attrs:{id:"请求对象-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求对象-request","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求对象 Request")]),t._v(" "),n("ul",[n("li",[t._v("url")]),t._v(" "),n("li",[t._v("method")])]),t._v(" "),n("h3",{attrs:{id:"响应对象-response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应对象-response","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应对象 Response")]),t._v(" "),n("ul",[n("li",[t._v("write")]),t._v(" "),n("li",[t._v("end")])])])},[],!1,null,null,null);e.options.__file="07-web.md";s.default=e.exports}}]);