webpackJsonp([0,2],[,,function(t,e,n){"use strict";var r=n(1),o=n.n(r),a=n(26),i=n.n(a),s=n(15),u=n.n(s),l=n(13),c=n.n(l),d=n(14),v=n.n(d),p=n(17),f=n.n(p);o.a.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"/",name:"Main",component:u.a,children:[{path:"/p/:id",name:"Article",component:c.a},{path:"/blog",name:"Blog",component:v.a},{path:"/us",name:"Us",component:f.a}]}]})},function(t,e,n){n(10);var r=n(0)(n(4),n(23),null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{loaded:!1}},mounted:function(){var t=this;window.onload=function(){t.loaded=!0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16),o=n.n(r),a=n(18),i=n.n(a);e.default={name:"Main",components:{navi:o.a,videoBackground:i.a},data:function(){return{naviData:[{name:"博文",hoverBackground:"url(//cn.bing.com/az/hprichbg/rb/LanternSale_ZH-CN13256517653_1920x1080.jpg)",hoverColor:"orange",textColor:"#A64B00",link:"/blog"},{name:"我们",hoverBackground:"url(//cn.bing.com/az/hprichbg/rb/JavaSparrow_ZH-CN10576911084_1920x1080.jpg)",hoverColor:"brown",textColor:"#FFB140",link:"/us"}],msg:"Wang & Sha"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navi",props:{isBar:{default:!1},items:{default:[{name:"首页",hoverBackground:"#F00",link:"/"}]}},data:function(){return{showBackground:!1,backgroundImageProp:"",naviColor:"rgba(255,0,0,0.6)"}},computed:{},methods:{currentRouter:function(t){return this.$route.path==t&&"/"!=this.$route.path},mouseOverNaviItem:function(t,e,n){"/"==this.$route.path&&"in"==t?(this.backgroundImageProp=e.hoverBackground,this.showBackground=!0,document.querySelector(".site-title").style.color="rgba(255,250,255,0.85)",this.naviColor=e.hoverColor,n.target.style.color=e.textColor,console.log(n.target.style)):(this.showBackground=!1,this.naviColor="rgba(255,0,0,0.6)",document.querySelector(".site-title").style.color="currentcolor",n.target.style.color="")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{todayVideoSrc:function(){var t=new Date,e=t.getDate()<=18?t.getDate():t.getDate()-17,n="";return n=e<10?"0"+e.toString():e.toString()}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var r=n(0)(null,n(20),null,null);t.exports=r.exports},function(t,e,n){n(11);var r=n(0)(null,n(24),null,null);t.exports=r.exports},function(t,e,n){n(9);var r=n(0)(n(5),n(22),null,null);t.exports=r.exports},function(t,e,n){n(8);var r=n(0)(n(6),n(21),null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(null,n(19),null,null);t.exports=r.exports},function(t,e,n){n(12);var r=n(0)(n(7),n(25),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    我们\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("文章详情")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navi",class:[t.isBar?"navi-is-bar":"navi-is-menu"],style:{backgroundColor:"/"==t.$route.path?t.naviColor:"#fff"}},[n("div",{staticClass:"body-background",class:{"background-show":t.showBackground},style:{backgroundImage:t.backgroundImageProp}}),t._v(" "),n("ul",{staticClass:"navi-list"},[n("li",{staticClass:"navi-item",class:{"hide-return":"/"==t.$route.path}},[n("router-link",{attrs:{to:"/"}},[t._v("返回")])],1),t._v(" "),t._l(t.items,function(e){return n("li",{staticClass:"navi-item",on:{click:function(n){t.mouseOverNaviItem("out",e,n)},mouseout:function(n){t.mouseOverNaviItem("out",e,n)},mouseover:function(n){t.mouseOverNaviItem("in",e,n)}}},[t.currentRouter(e.link)?n("span",{staticClass:"route-active"},[t._v(t._s(e.name))]):n("router-link",{attrs:{to:e.link}},[t._v(t._s(e.name))])],1)})],2),t._v(" "),n("link",{attrs:{href:"//cdn.webfont.youziku.com/webfonts/nomal/21081/46723/58a1a717f629d815f80ae47d.css",rel:"stylesheet",type:"text/css"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("transition",{attrs:{name:"fade"}},[n("videoBackground",{directives:[{name:"show",rawName:"v-show",value:"/"==t.$route.path,expression:"$route.path=='/'"}]})],1),t._v(" "),n("h1",{staticClass:"site-title",class:{"site-title-main":"/"==t.$route.path}},t._l(t.msg.split(" "),function(e){return n("span",[t._v(t._s(" "+e+" "))])})),t._v(" "),n("navi",{attrs:{isBar:"/"!=t.$route.path,items:t.naviData}}),t._v(" "),n("div",{staticClass:"component-container"},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),t._v(" "),n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Droid+Serif",rel:"stylesheet"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{apploaded:t.loaded},attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("文章列表\n    "),n("ul",[n("li",[t._v("博客标题")]),t._v(" "),n("li",[t._v("博客标题")]),t._v(" "),n("li",[t._v("博客标题")]),t._v(" "),n("li",[t._v("博客标题")]),t._v(" "),n("li",[t._v("博客标题")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"videobg-container"},[n("video",{attrs:{loop:"",autoplay:"",id:"Video",src:"static/Video/Animal/"+t.todayVideoSrc+".mp4",poster:"",autobuffer:"true"},on:{canplay:function(t){}}})])},staticRenderFns:[]}},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n.n(r),a=n(3),i=n.n(a),s=n(2);new o.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})}],[29]);
//# sourceMappingURL=app.1ba1af758566a4b2dad7.js.map