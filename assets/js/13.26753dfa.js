(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{185:function(s,t,a){"use strict";a.r(t);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=a(5),v=Object(e.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[a("h1",{attrs:{id:"第5章-包与npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第5章-包与npm","aria-hidden":"true"}},[s._v("#")]),s._v(" 第5章 包与npm")]),s._v(" "),a("h2",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm","aria-hidden":"true"}},[s._v("#")]),s._v(" npm")]),s._v(" "),a("p",[s._v("npm 全称 "),a("code",[s._v("Node Package Manager")]),s._v("，它的诞生是为了解决 Node 中第三方包共享的问题。\n和浏览器一样，由于都是 JavaScript，所以前端开发也使用 npm 作为第三方包管理工具。\n例如大名鼎鼎的 jQuery、Bootstrap 等都可以通过 npm 来安装。\n所以官方把 npm 定义为 "),a("code",[s._v("JavaScript Package Manager")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"npm-的两层含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-的两层含义","aria-hidden":"true"}},[s._v("#")]),s._v(" npm 的两层含义")]),s._v(" "),a("h3",{attrs:{id:"npm-网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-网站","aria-hidden":"true"}},[s._v("#")]),s._v(" npm 网站")]),s._v(" "),a("blockquote",[a("p",[s._v("npmjs.com，提供了存放数据包的能力，类似于 Github ，但是不提供版本管理")]),s._v(" "),a("p",[s._v("开发者可以把一些 JavaScript 相关工具放到这个系统中")])]),s._v(" "),a("h3",{attrs:{id:"npm-命令行工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-命令行工具","aria-hidden":"true"}},[s._v("#")]),s._v(" npm 命令行工具")]),s._v(" "),a("p",[s._v("npm 的第二层含义就是一个命令行工具，只要你安装了 node 就已经安装了 npm。")]),s._v(" "),a("p",[s._v("npm 也有版本这个概念。")]),s._v(" "),a("p",[s._v("可以通过在命令行中输入：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" --version\n")])])]),a("p",[s._v("升级 npm（自己升级自己）：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" --global "),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v("\n")])])]),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 在项目中初始化一个 package.json 文件")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 凡是使用 npm 来管理的项目都会有这么一个文件")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 跳过向导，快速生成 package.json 文件")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 简写是 -y")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" init --yes\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 一次性安装 dependencies 中所有的依赖项")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 简写是 npm i")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 安装指定的包，可以简写为 npm i 包名")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# npm 5 以前只下载，不会保存依赖信息，如果需要保存，则需要加上 `--save` 选项")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# npm 5 以后就可以省略 --save 选项了")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" 包名\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 一次性安装多个指定包")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" 包名 包名 包名 "),a("span",{attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 安装指定版本的包")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" 包名@版本号\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 卸载指定的包")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall 包名\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 安装全局包")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" --global 包名\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 查看包信息")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" view 包名\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 查看使用帮助")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("help")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 查看某个命令的使用帮助")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 例如我忘记了 uninstall 命令的简写了，这个时候，可以输入 `npm uninstall --help` 来查看使用帮助")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" 命令 --help\n")])])]),a("h2",{attrs:{id:"全局命令行工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局命令行工具","aria-hidden":"true"}},[s._v("#")]),s._v(" 全局命令行工具")]),s._v(" "),a("p",[s._v("我们除了可以使用 npm 安装项目中适应的依赖包之外，还有一些包比较特殊，这种不是在项目 "),a("code",[s._v("require()")]),s._v(" 使用的，而是\n通过全局安装之后使用它提供的命令来完成某种功能，就像咱们学过的 git 一样。")]),s._v(" "),a("p",[s._v("凡是往全局安装的包我们称之为全局命令行工具，这种包安装完毕之后会在命令行中为你提供了一个命令来完成某种功能。")]),s._v(" "),a("blockquote",[a("p",[s._v("程序交互方式分为两种：")]),s._v(" "),a("ul",[a("li",[s._v("GUI（Graphical User Interface）图形交互软件")]),s._v(" "),a("li",[s._v("CLI（Command Line Interface） 命令行交互软件，某些方面命令行操作要比图形界面更高效")])])]),s._v(" "),a("blockquote",[a("p",[s._v("提示：安装全局包必须加 "),a("code",[s._v("--global")]),s._v(" 参数")])]),s._v(" "),a("h3",{attrs:{id:"http-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-server","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("code",[s._v("http-server")])]),s._v(" "),a("h3",{attrs:{id:"nodemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodemon","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("code",[s._v("nodemon")])]),s._v(" "),a("h3",{attrs:{id:"less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("code",[s._v("less")])]),s._v(" "),a("blockquote",[a("p",[s._v("参考文档：http://lesscss.org/\n作用：支持在命令行中打命令完成 less 文件的编译")])]),s._v(" "),a("p",[s._v("安装：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g "),a("span",{attrs:{class:"token function"}},[s._v("less")]),s._v("\n")])])]),a("p",[s._v("安装完毕之后，我们可以在终端中输入以下命令进行测试：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 因为在我们的 Linus 操作系统中，有一个操作系统默认命令：less")]),s._v("\nlessc --version\n")])])]),a("p",[s._v("基本使用：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 编译 less 文件，将结束输出到命令行中")]),s._v("\nlessc styles.less\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 编译 less 文件，将结果输出到指定的路径")]),s._v("\nlessc styles.less styles.css\n")])])]),a("h3",{attrs:{id:"browser-sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browser-sync","aria-hidden":"true"}},[s._v("#")]),s._v(" browser-sync")]),s._v(" "),a("blockquote",[a("p",[s._v("参考文档：https://browsersync.io/\n作用：文件改变浏览器自动刷新（同步测试）")])]),s._v(" "),a("p",[s._v("安装：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" -g browser-sync\n")])])]),a("p",[s._v("基本使用：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("browser-sync start --server --files "),a("span",{attrs:{class:"token string"}},[s._v('"css/*.css, js/*.js, *.html"')]),s._v("\n")])])]),a("h3",{attrs:{id:"全局包到底安装到了哪里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局包到底安装到了哪里","aria-hidden":"true"}},[s._v("#")]),s._v(" 全局包到底安装到了哪里")]),s._v(" "),a("p",[s._v("我们可以通过在命令行输入来查看全局包的安装路径：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" root -g\n")])])]),a("p",[s._v("现在这个东西只需要了解就行了。")]),s._v(" "),a("p",[s._v("因为以前的 node 版本一旦升级就会导致丢失了全局包，新版的 node 已经没有这个问题了。")]),s._v(" "),a("h2",{attrs:{id:"解决-npm-被墙问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决-npm-被墙问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 解决 npm 被墙问题")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("npm install jquery --registry=https://registry.npm.taobao.org")])]),s._v(" "),a("li",[a("code",[s._v("npm config set registry https://registry.npm.taobao.org")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nrm"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("npm 存储包文件的服务器在国外，有时候会被墙，速度很慢，所以我们需要解决这个问题。")]),s._v(" "),a("p",[s._v("国内淘宝的开发团队把 npm 在国内做了一个备份，网址是：http://npm.taobao.org/。")]),s._v(" "),a("p",[s._v("最简单的方式就是我们在安装包的时候告诉 npm 你去哪个服务器下载。")]),s._v(" "),a("p",[s._v("例如使用淘宝的 npm 镜像源下载 jquery:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" jquery --registry"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n")])])]),a("p",[s._v("但是每次手动往后面加 "),a("code",[s._v("--registry=https://registry.npm.taobao.org")]),s._v(" 很麻烦，\n所以我们可以通过修改配置文件的方式来处理解决。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 配置到淘宝服务器")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 查看 npm 配置信息")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" config list\n")])])]),a("p",[s._v("只要经过了上面命令的配置，则你以后所有的 "),a("code",[s._v("npm install")]),s._v(" 都会使用你配置的 "),a("code",[s._v("registry")]),s._v(" 下载。")]),s._v(" "),a("h2",{attrs:{id:"package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json","aria-hidden":"true"}},[s._v("#")]),s._v(" package.json")]),s._v(" "),a("p",[s._v("我们的项目会放到云端的仓库中，例如 github ，第三方包没有上传的意义，我们只需要把我们的源码放到云端仓库，"),a("code",[s._v("node_modules")]),s._v(" 目录中存储的就是第三方包（不用担心丢失问题），如果没有 "),a("code",[s._v("package.json")]),s._v(" 文件则你就找不回来了。")]),s._v(" "),a("p",[s._v("我们建议每一个项目都要有一个 "),a("code",[s._v("package.json")]),s._v(" 文件（包描述文件，就像产品的说明书一样），给人踏实的感觉最重要的就是保存这个项目的第三方依赖信息（因为我们不需要提交第三方包到我们的云端仓库，只需要提交我们自己的代码），有了这个文件中的依赖信息结合 "),a("code",[s._v("npm install")]),s._v(" 命令我们就可以放心了。")]),s._v(" "),a("p",[s._v("这个文件可以通过 "),a("code",[s._v("npm init")]),s._v(" 的方式来自动初始化出来。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token constant"}},[s._v("C")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\Users\\lpz\\Desktop\\npm"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("demo"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("npm init\nThis utility will walk you through creating a "),a("span",{attrs:{class:"token keyword"}},[s._v("package")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json file"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nIt only covers the most common items"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" and tries to guess sensible defaults"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nSee "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`npm help json`")])]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" definitive documentation on these fields\nand exactly what they "),a("span",{attrs:{class:"token keyword"}},[s._v("do")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nUse "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`npm install <pkg> --save`")])]),s._v(" afterwards to install a "),a("span",{attrs:{class:"token keyword"}},[s._v("package")]),s._v(" and\nsave it "),a("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" a dependency "),a("span",{attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the "),a("span",{attrs:{class:"token keyword"}},[s._v("package")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json file"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nPress "),a("span",{attrs:{class:"token operator"}},[s._v("^")]),a("span",{attrs:{class:"token constant"}},[s._v("C")]),s._v(" at any time to quit"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nname"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("npm"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("demo"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 项目的名称\nversion"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("1.0")]),a("span",{attrs:{class:"token number"}},[s._v(".0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0.0")]),a("span",{attrs:{class:"token number"}},[s._v(".1")]),s._v(" 项目版本\ndescription"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 项目简介\nentry point"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("index"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" main"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js 项目入口\ntest command"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 测试命令，暂且不用关系\ngit repository"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 仓库地址\nkeywords"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 关键字，如果是一个开源项目，则可以填一些关键字被别人在 npm 中搜索到\nauthor"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" lipengzhou 项目的开发者\nlicense"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token constant"}},[s._v("ISC")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 开源协议\nAbout to write to "),a("span",{attrs:{class:"token constant"}},[s._v("C")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\Users\\lpz\\Desktop\\npm"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("demo\\"),a("span",{attrs:{class:"token keyword"}},[s._v("package")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token string"}},[s._v('"name"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"npm-demo"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token string"}},[s._v('"version"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"0.0.1"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token string"}},[s._v('"description"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"这是一个测试项目"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token string"}},[s._v('"main"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"main.js"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token string"}},[s._v('"test"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token string"}},[s._v('"author"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"lipengzhou"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token string"}},[s._v('"license"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"ISC"')]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\nIs "),a("span",{attrs:{class:"token keyword"}},[s._v("this")]),s._v(" ok"),a("span",{attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("yes"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" yes\n")])])]),a("p",[s._v("对于咱们目前来讲，最有用的是那个 "),a("code",[s._v("dependencies")]),s._v(" 选项，可以用来帮我们保存第三方包的依赖信息。")]),s._v(" "),a("p",[s._v("如果你的 "),a("code",[s._v("node_modules")]),s._v(" 删除了也不用担心，我们只需要："),a("code",[s._v("npm install")]),s._v(" 就会自动把 "),a("code",[s._v("package.json")]),s._v(" 中的 "),a("code",[s._v("dependencies")]),s._v(" 中所有的依赖项都下载回来。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("建议每个项目的根目录下都有一个 "),a("code",[s._v("package.json")]),s._v(" 文件")]),s._v(" "),a("ul",[a("li",[s._v("不同的项目有不同依赖，各自保存各自的")])])]),s._v(" "),a("li",[s._v("建议执行 "),a("code",[s._v("npm install 包名的")]),s._v(" 的时候都加上 "),a("code",[s._v("--save")]),s._v(" 这个选项，目的是用来保存依赖项信息\n"),a("ul",[a("li",[s._v("npm 5 以前不会自动保存依赖信息到 package.json 文件中，必须手动加 "),a("code",[s._v("--save")]),s._v(" 选项才可以")]),s._v(" "),a("li",[s._v("npm 5 以后不需要加 "),a("code",[s._v("--save")]),s._v(" 选项了，因为它会自动保存依赖项")])])])]),s._v(" "),a("h3",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[s._v("#")]),s._v(" dependencies")]),s._v(" "),a("h3",{attrs:{id:"main"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main","aria-hidden":"true"}},[s._v("#")]),s._v(" main")]),s._v(" "),a("h3",{attrs:{id:"scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scripts","aria-hidden":"true"}},[s._v("#")]),s._v(" scripts")]),s._v(" "),a("h2",{attrs:{id:"package-lock-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-lock-json","aria-hidden":"true"}},[s._v("#")]),s._v(" package-lock.json")]),s._v(" "),a("p",[s._v("npm 5 以前是不会有 "),a("code",[s._v("package-lock.json")]),s._v(" 这个文件的。（被开发者诟病，吐槽的问题）。")]),s._v(" "),a("p",[s._v("以前会自作多情的自动给你升级。")]),s._v(" "),a("p",[s._v("npm 5 以后才加入了这个文件。")]),s._v(" "),a("p",[s._v("当你安装包的时候，npm 都会生成或者更新 "),a("code",[s._v("package-lock.json")]),s._v(" 这个文件。")]),s._v(" "),a("ul",[a("li",[s._v("npm 5 以后的版本安装包不需要加 "),a("code",[s._v("--save")]),s._v(" 参数，它会自动保存依赖信息")]),s._v(" "),a("li",[s._v("当你安装包的时候，会自动创建或者是更新 "),a("code",[s._v("package-lock.json")]),s._v(" 这个文件")]),s._v(" "),a("li",[a("code",[s._v("package-lock.json")]),s._v(" 这个文件会保存 "),a("code",[s._v("node_modules")]),s._v(" 中所有包的信息（版本、下载地址）\n"),a("ul",[a("li",[s._v("这样的话重新 "),a("code",[s._v("npm install")]),s._v(" 的时候速度就可以提升")])])]),s._v(" "),a("li",[s._v("从文件来看，有一个 "),a("code",[s._v("lock")]),s._v(" 称之为锁\n"),a("ul",[a("li",[s._v("这个 "),a("code",[s._v("lock")]),s._v(" 是用来锁定版本的")]),s._v(" "),a("li",[s._v("如果项目依赖了 "),a("code",[s._v("1.1.1")]),s._v(" 版本")]),s._v(" "),a("li",[s._v("如果你重新 isntall 其实会下载最新版本，而不是 1.1.1")]),s._v(" "),a("li",[s._v("我们的目的就是希望可以锁住 1.1.1 这个版本")]),s._v(" "),a("li",[s._v("所以这个 "),a("code",[s._v("package-lock.json")]),s._v(" 这个文件的另一个作用就是锁定版本号，防止自动升级新版")])])])]),s._v(" "),a("h2",{attrs:{id:"dependencies-和-devdependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-和-devdependencies","aria-hidden":"true"}},[s._v("#")]),s._v(" dependencies 和 devDependencies")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("--save")]),s._v(" 会保存到 "),a("code",[s._v("dependencies")]),s._v(" 依赖项中")]),s._v(" "),a("li",[a("code",[s._v("--save-dev")]),s._v(" 会保存到 "),a("code",[s._v("devDependencies")]),s._v(" 依赖项中")])]),s._v(" "),a("p",[s._v("我们把一些辅助开发的工具包安装到 "),a("code",[s._v("devDependencies")]),s._v(" 中。这样做的目的是对包进行分类，项目上线的时候可以使用 "),a("code",[s._v("npm install --production")]),s._v(" 命令只安装 "),a("code",[s._v("dependencies")]),s._v(" 依赖项中的包。")]),s._v(" "),a("h2",{attrs:{id:"npm-scri-pts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-scri-pts","aria-hidden":"true"}},[s._v("#")]),s._v(" npm scri pts")]),s._v(" "),a("blockquote",[a("p",[s._v("学习参考：http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html")])])])},[],!1,null,null,null);v.options.__file="05-package_npm.md";t.default=v.exports}}]);