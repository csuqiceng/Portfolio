(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)o=s[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"43ae226d"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"0127496b"}[t]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"238f":function(t,e,n){"use strict";var r=n("8f6c"),o=n.n(r);o.a},"41cb":function(t,e,n){"use strict";var r=n("2b0e"),o=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fin-home"},[n("NavigationBar"),n("NavigationContent",[n("Masonry"),n("Footer")],1)],1)},i=[],s=n("641e"),c=n("c23e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"slide"}},[t.currentCategory!==t.categories.ALL?n("div",{staticClass:"fin-masonry-indicator-placeholder"},[t.currentCategory!==t.categories.ALL?n("div",{staticClass:"fin-masonry-indicator"},[n("div",{staticClass:"content container",staticStyle:{height:"100%",display:"grid"}},[n("p",{staticStyle:{color:"white",cursor:"pointer",margin:"auto"},on:{click:function(e){return t.store.dispatch("resetCategory")}}},[t._v("\n            CLEAR "+t._s(t.currentCategory.description.toUpperCase())+" FILTER\n          ")])])]):t._e()]):t._e()]),n("isotope",{ref:"isotope",attrs:{options:t.getOptions(),list:t.projects}},t._l(t.projects,function(e){return n("div",{key:e.url,class:{"fin-masonry-item":!0},on:{click:function(n){return t.router.push(e.url)}}},[n("div",{staticClass:"fin-masonry-item-content"},[n("v-lazy-image",{staticClass:"fin-masonry-image",attrs:{src:t.router.options.base+e.folder+"/"+e.tileImage}}),n("div",{staticClass:"fin-masonry-item-detail"},[n("p",{staticClass:"title",staticStyle:{"font-weight":"700","font-size":"2rem",color:"white"}},[t._v("\n            "+t._s(e.title)+"\n          ")]),n("p",{staticClass:"subtitle",staticStyle:{"font-weight":"400","font-size":"0.7rem",color:"white"}},[t._v("\n            "+t._s(e.subtitle)+"\n          ")])])],1)])}),0)],1)},l=[],f=(n("6762"),n("2fdb"),n("db0c")),d=n.n(f),p=n("c0d6"),g=n("0cd3"),h=n.n(g),m=n("be80"),v=n("8dc2"),b=n.n(v),y={name:"Masonry",watch:{currentCategory:function(t){this.applyCategoryToMasonry(t.description.toLowerCase())}},methods:{applyCategoryToMasonry:function(t){this.$refs.isotope.filter(t)}},data:function(){var t=d()(p["a"].state.categories).reduce(function(t,e){return t[e.description.toLowerCase()]=function(t){return t.categories.includes(e.description.toLowerCase())},t},{});return{getOptions:function(){return{filter:this.currentCategory.description.toLowerCase(),hiddenStyle:{opacity:0},visibleStyle:{opacity:1},percentPosition:!0,getFilterData:t}}}},computed:{store:function(){return p["a"]},categories:function(){return m["a"]},currentCategory:function(){return p["a"].state.currentCategory},count:function(){return p["a"].state.projects.length},projects:function(){return p["a"].state.projects},router:function(){return this.$router}},components:{isotope:h.a,VLazyImage:b.a}},_=y,w=(n("cc71"),n("2877")),C=Object(w["a"])(_,u,l,!1,null,"1b7c4dce",null),j=C.exports,E=n("fd2d"),T={name:"Home",components:{NavigationBar:s["a"],NavigationContent:c["a"],Masonry:j,Footer:E["a"]},methods:{getDesc:function(){return"Portfolio from 郑昊天 ZHENG HAOTIAN (aka Justin Fincher)"},getTitle:function(){return"JustZht's Portfolio"},getBannerImageLink:function(){return this.router.options.base+"banner.jpg"}},computed:{router:function(){return this.$router},route:function(){return this.$route}},mounted:function(){document.dispatchEvent(new Event("render-event"))},head:{title:function(){return{inner:this.getTitle(),separator:""}},meta:function(){return[{name:"description",content:this.getDesc()},{name:"twitter:title",content:this.getTitle()},{name:"twitter:creator",content:"@JustZht"},{name:"twitter:site",content:"@JustZht"},{name:"twitter:description",content:this.getDesc()},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:this.getBannerImageLink()},{name:"twitter:image:src",content:this.getBannerImageLink()},{property:"og:type",content:"website"},{property:"og:site_name",content:this.getDesc()},{property:"og:title",content:this.getTitle()},{property:"og:description",content:this.getDesc()},{property:"og:image",content:this.getBannerImageLink()}]}}},L=T,O=(n("755c"),Object(w["a"])(L,a,i,!1,null,"1c624050",null)),x=O.exports;r["default"].use(o["a"]);var S=[{path:"/",name:"Home",component:x}];e["a"]=new o["a"]({mode:"history",base:"/",routes:S})},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isProjectLoaded?n("router-view"):t._e()],1),t.isProjectLoaded?t._e():n("section",{staticStyle:{height:"100vh",width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[t._v("\n    Loading\n  ")])],1)},a=[],i=n("c0d6"),s={data:function(){return{}},computed:{isProjectLoaded:function(){return i["a"].state.projects.length>0}}},c=s,u=(n("5c0b"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,null,null),f=l.exports,d=n("41cb"),p=n("8a03"),g=n.n(p),h=n("2f62"),m=n("342d"),v=n.n(m),b=n("0284"),y=n.n(b);window.HELP_IMPROVE_VIDEOJS=!1,r["default"].config.productionTip=!1,r["default"].use(v.a),r["default"].use(h["a"]),r["default"].use(g.a),r["default"].use(y.a,{id:"UA-28787397-7",checkDuplicatedScript:!0,debug:{sendHitTask:!0},router:d["a"]}),new r["default"]({router:d["a"],store:i["a"],render:function(t){return t(f)}}).$mount("#app"),i["a"].dispatch("refresh")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(t,e,n){},"641e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"fin-navigation-bar-handler-fade"}},[t.store.state.navigationBarExtended?n("div",{staticClass:"fin-navigation-bar-handler",on:{click:function(e){return t.store.commit("toggleNavigationBar")}}}):t._e()]),n("div",{class:t.barClassObject},[n("div",{staticClass:"fin-navigation-bar-header"},[n("p",{staticClass:"fin-navigation-bar-title",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[t._v("\n        "+t._s(t.getTitleText)+"\n      ")]),n("div",{staticStyle:{"flex-grow":"1"}}),n("transition",{attrs:{name:"fin-navigation-bar-content-fade"}},[t.scrollToTopNeeded?n("div",[n("a",{staticClass:"button is-text",on:{click:this.scrollToTop}},[n("b-icon",{attrs:{icon:"format-vertical-align-top"}})],1)]):t._e()]),n("div",{staticStyle:{"flex-grow":"0.02"}}),n("div",[n("a",{staticClass:"button is-text",on:{click:function(e){return t.store.commit("toggleNavigationBar")}}},[n("b-icon",{attrs:{icon:t.store.state.navigationBarExtended?"close":"menu"}})],1)])],1),n("transition",{attrs:{name:"fin-navigation-bar-content-fade"}},[t.store.state.navigationBarExtended?n("div",{staticClass:"fin-navigation-bar-content",staticStyle:{"flex-grow":"1"}},[n("b",[t._v("ABOUT")]),n("p",[n("a",{attrs:{href:"https://fincher.im/",target:"_blank"}},[t._v("郑昊天 (JustZht)")]),t._v("\n          's weird personal / team projects. For WIP projects, please visit my\n          "),n("a",{attrs:{href:"https://www.justzht.com",target:"_blank"}},[t._v("blog")]),t._v(". For\n          company projects, please refer to the\n          "),n("a",{attrs:{href:"https://fincher.im/CV.html",target:"_blank"}},[t._v(" Resume")]),t._v(".\n        ")]),n("div",{staticStyle:{height:"1rem"}}),t.isInHome?n("div",[n("b",[t._v("FILTERS")]),t._l(t.store.state.categories,function(e){return n("div",{key:e.description},[t.store.state.currentCategory!==e?n("a",{on:{click:function(n){return t.store.commit("setCategory",e)}}},[t._v("\n              ◦ "+t._s(e.description)+"\n            ")]):n("b",[t._v("• "+t._s(e.description))])])})],2):t._e()]):t._e()])],1)],1)},o=[],a=n("c0d6"),i={name:"NavigationBar",data:function(){return{scrollY:0}},methods:{handleScroll:function(){this.scrollY=window.scrollY},scrollToTop:function(){document.body.scrollTop=document.documentElement.scrollTop=0}},created:function(){window.addEventListener("scroll",this.handleScroll),console.log("Listen Scroll")},destroyed:function(){console.log("Don't Listen Scroll"),window.removeEventListener("scroll",this.handleScroll)},computed:{scrollToTopNeeded:function(){return this.scrollY/window.innerHeight>1},store:function(){return a["a"]},barClassObject:function(){return{"fin-navigation-bar":!0,"fin-navigation-bar-in":!1,box:!0,"fin-navigation-bar-extend":a["a"].state.navigationBarExtended}},getTitleText:function(){return this.isInHome?"PORTFOLIO":"BACKTOHOME"},isInHome:function(){return"/"===this.$router.currentRoute.path}}},s=i,c=(n("238f"),n("2877")),u=Object(c["a"])(s,r,o,!1,null,"532bddbf",null);e["a"]=u.exports},"755c":function(t,e,n){"use strict";var r=n("e469"),o=n.n(r);o.a},"8f6c":function(t,e,n){},"9e58":function(t,e,n){},be80:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("67bb"),o=n.n(r),a=n("15b8"),i=n.n(a),s=i()({ALL:o()("All"),MOBILE:o()("Mobile"),DESKTOP:o()("Desktop"),WEB:o()("Web"),VISUAL:o()("Visual"),HACKATHON:o()("Hackathon"),DEPRECATED:o()("Deprecated")})},c0d6:function(t,e,n){"use strict";var r=n("2b0e"),o=n("2f62"),a=n("41cb"),i=n("bc3a"),s=n.n(i),c=n("be80");r["default"].use(o["a"]),e["a"]=new o["a"].Store({state:{navigationBarExtended:!1,projects:[],categories:c["a"],currentCategory:c["a"].ALL},mutations:{refresh:function(t,e){t.projects=e},setCategory:function(t,e){t.currentCategory=e},toggleNavigationBar:function(t){t.navigationBarExtended=!t.navigationBarExtended}},actions:{resetCategory:function(t){t.commit("setCategory",c["a"].ALL)},refresh:function(t){var e=a["a"].options.base+"data.json";s.a.get(e).then(function(e){t.commit("refresh",e.data),a["a"].addRoutes(e.data.map(function(t,r){return{path:"/"+t.url,name:t.title+" - "+t.subtitle,props:{project:t,projects:e.data,indexOfProject:r},component:function(){return n.e("about").then(n.bind(null,"f126"))}}}))})}}})},c23e:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fin-navigation-content"},[t._t("default")],2)},o=[],a={name:"NavigationContent"},i=a,s=(n("e8fb"),n("2877")),c=Object(s["a"])(i,r,o,!1,null,"522dfd62",null);e["a"]=c.exports},cc71:function(t,e,n){"use strict";var r=n("eabf"),o=n.n(r);o.a},e469:function(t,e,n){},e8fb:function(t,e,n){"use strict";var r=n("9e58"),o=n.n(r);o.a},eabf:function(t,e,n){},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("p",[t._v("\n      By "),n("a",{attrs:{href:"https://fincher.im"}},[t._v("郑昊天 ZHENG HAOTIAN")]),t._v(" (a.k.a JustinFincher /\n      JustZht), 2016-"+t._s((new Date).getFullYear())+" "),n("br"),t._v("\n      Made with "),n("a",{attrs:{href:"https://cn.vuejs.org/index.html"}},[t._v("Vue.js")]),t._v(".\n    ")])])])},o=[],a={name:"Footer"},i=a,s=n("2877"),c=Object(s["a"])(i,r,o,!1,null,"3473aeac",null);e["a"]=c.exports}});
//# sourceMappingURL=app.ee9a8253.js.map