(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"87fa57c9"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=n[t]=[e,a]});e.push(s[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,s[1](l)}n[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/solarweb/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"06eb":function(t,e,s){},"0718":function(t,e,s){},"0ffd":function(t,e,s){"use strict";var a=s("0718"),n=s.n(a);n.a},"2ae0":function(t,e,s){"use strict";var a=s("b5ef"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),s("router-view")],1)},i=[],r={name:"app",data:function(){return{}}},o=r,c=(s("5c0b"),s("2877")),l=Object(c["a"])(o,n,i,!1,null,null,null),u=l.exports,d=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"background"}),s("sidebar",{attrs:{menuItems:t.menuItems,sectionPage:t.sectionPage},on:{changeSection:function(e){return t.updatachange(e)}}}),s("section",{directives:[{name:"show",rawName:"v-show",value:"1"===t.sectionPage,expression:"sectionPage === '1'"}]},[t._m(0),t._m(1)]),s("section",{directives:[{name:"show",rawName:"v-show",value:"2"===t.sectionPage,expression:"sectionPage === '2'"}]},[s("login",{on:{register:function(e){return t.register(e)}}})],1),s("section",{directives:[{name:"show",rawName:"v-show",value:"3"===t.sectionPage,expression:"sectionPage === '3'"}]},[s("register")],1)],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"leftside"},[a("img",{attrs:{src:s("e690")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rightside"},[s("h1",[t._v("Our Models Website")]),s("p",[t._v("歡迎使用我們的產品，本產品用愛在發電的")]),s("button",[t._v("Welcome")])])}],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"site-header"},[t._m(0),s("div",{staticClass:"menu"},[s("ul",t._l(t.menuItems[0]["navLinks"],function(e,a){return s("li",{key:a,attrs:{id:e.id},on:{click:t.changeSection}},[s("a",[t._v(t._s(e.text))]),s("i",{class:e.icon})])}),0)])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("h1",[t._v("Website")])])}],b={data:function(){return{}},props:["menuItems","linkColor"],methods:{changeSection:function(){this.$emit("changeSection","")}}},h=b,g=(s("5ee0"),Object(c["a"])(h,m,v,!1,null,"ba39754a",null)),C=g.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container login"},[s("div",{staticClass:"card"},[t._m(0),s("form",{staticClass:"sign-in",attrs:{action:"#"}},[s("div",{staticClass:"inputgroup"},[s("i",{class:"ion-ios-mail"}),s("input",{attrs:{type:"email",placeholder:"用戶名稱"}})]),s("div",{staticClass:"inputgroup"},[s("i",{class:"ion-ios-key"}),s("input",{attrs:{type:"password",placeholder:"密碼"}})]),s("a",{attrs:{href:"#"},on:{click:t.register}},[t._v("還沒註冊？")]),s("button",[t._v("Sign in")])])])])},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("登入")])])}],y={data:function(){return{signUp:!1}},methods:{register:function(){this.$emit("register","")}}},x=y,k=(s("0ffd"),Object(c["a"])(x,_,w,!1,null,"7fa0f821",null)),O=k.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container register"},[s("div",{staticClass:"card"},[t._m(0),s("form",{staticClass:"sign-in",attrs:{action:"#"}},[s("div",{staticClass:"inputgroup"},[s("i",{class:"ion-ios-mail"}),s("input",{attrs:{type:"email",placeholder:"電子信箱"}})]),s("div",{staticClass:"inputgroup"},[s("i",{class:"ion-ios-key"}),s("input",{attrs:{type:"password",placeholder:"密碼"}})]),s("button",[t._v("立即註冊")]),t._m(1)])])])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("註冊")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n        Already have an account?\n        "),s("a",{attrs:{href:"#"}},[t._v("Sign in")])])}],E={data:function(){return{signUp:!1}}},$=E,S=(s("c9da"),Object(c["a"])($,P,j,!1,null,"8ba53304",null)),N=S.exports,I={name:"home",data:function(){return{sectionPage:"1"}},computed:{menuItems:function(){var t=[{navLinks:[{text:"介紹",path:"/introduction",icon:"ion-ios-alert",id:"1"},{text:"登入",path:"/Login",icon:"ion-ios-contact",id:"2"},{text:"註冊",path:"/Register",icon:"ion-ios-person-add",id:"3"}]}];return t}},methods:{updatachange:function(){""!=event.path[1].id&&(this.sectionPage=event.path[1].id)},register:function(){this.sectionPage="3"}},components:{sidebar:C,login:O,register:N}},L=I,M=(s("bff9"),Object(c["a"])(L,f,p,!1,null,"541fd0cb",null)),U=M.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"admin"},[s("div",{staticClass:"page-wrapper default-theme sidebar-bg bg1 toggled"},[s("a",{staticClass:"show-sidebar btn btn-sm btn-dark",attrs:{href:"#",id:"toggle-sidebar"},on:{click:t.closemenu}},[s("i",{staticClass:"fas fa-bars"})]),s("nav",{staticClass:"sidebar-wrapper",attrs:{id:"sidebar"}},[s("div",{staticClass:"sidebar-content"},[s("div",{staticClass:"sidebar-item sidebar-brand"},[s("div",{attrs:{id:"close-sidebar"},on:{click:t.closemenu}},[s("i",{staticClass:"fas fa-bars"})]),s("a",{attrs:{href:"#"}},[t._v("webSide")])]),t._m(0),s("div",{staticClass:"sidebar-item sidebar-menu"},[s("ul",[t._m(1),s("li",[s("router-link",{attrs:{to:"/admin/userprofile"}},[s("i",{staticClass:"fa fa-id-card"}),s("span",{staticClass:"menu-text"},[t._v("個人資訊")])])],1),s("li",{staticClass:"sidebar-dropdown",on:{click:t.dropdown}},[s("router-link",{attrs:{to:"/admin/models"}},[s("i",{staticClass:"fa fa-tachometer-alt"}),s("span",{staticClass:"menu-text"},[t._v("模型管理")])]),s("div",{staticClass:"sidebar-submenu"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/admin/introduction"}},[t._v("模型介紹")])],1),s("li",[s("router-link",{attrs:{to:"/admin/createmodel"}},[t._v("模型建立")])],1),s("li",[s("router-link",{attrs:{to:"/admin/prediction"}},[t._v("模型預測")])],1)])])],1),s("li",[s("router-link",{attrs:{to:"/admin/dataset"}},[s("i",{staticClass:"fa fa-folder"}),s("span",{staticClass:"menu-text"},[t._v("資料集管理")])])],1)])])])]),s("main",{staticClass:"page-content pt-2"},[s("router-view")],1)])])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-item sidebar-header d-flex flex-nowrap"},[a("div",{staticClass:"user-pic"},[a("img",{staticClass:"img-responsive img-rounded",attrs:{src:s("c203"),alt:"User picture"}})]),a("div",{staticClass:"user-info"},[a("span",{staticClass:"user-name"},[t._v("\n              王\n              "),a("strong",[t._v("小明")])]),a("span",{staticClass:"user-role"},[t._v("Administrator")]),a("span",{staticClass:"user-status"},[a("i",{staticClass:"fa fa-circle"}),a("span",[t._v("Online")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"header-menu"},[s("span",[t._v("Menu")])])}],A=s("1157"),J=s.n(A),q={name:"admin",components:{},methods:{closemenu:function(){J()(".page-wrapper").toggleClass("toggled")},dropdown:function(){J()(".sidebar-submenu").slideUp(200),J()(".sidebar-dropdown > a").parent().hasClass("active")?(J()(".sidebar-dropdown").removeClass("active"),J()(".sidebar-dropdown > a").parent().removeClass("active")):(J()(".sidebar-dropdown").removeClass("active"),J()(".sidebar-dropdown > a").next(".sidebar-submenu").slideDown(200),J()(".sidebar-dropdown > a").parent().addClass("active"))}}},D=q,F=(s("d5cf"),Object(c["a"])(D,T,W,!1,null,"ba845fca",null)),z=F.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userprofile"},[s("div",{staticClass:"container-fluid p-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col-md-12"},[s("form",[s("div",{staticClass:"actions-toolbar py-2 mb-4"},[s("h5",{staticClass:"mb-1"},[t._v("Change password")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-control-label"},[t._v("Old password")]),s("input",{staticClass:"form-control",attrs:{type:"password"}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-control-label"},[t._v("New password")]),s("input",{staticClass:"form-control",attrs:{type:"password"}})])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-control-label"},[t._v("Confirm password")]),s("input",{staticClass:"form-control",attrs:{type:"password"}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("button",{staticClass:"btn btn-sm btn-primary btn-margain",attrs:{type:"button"}},[t._v("Update password")]),s("a",{staticClass:"btn btn-sm btn-secondary",attrs:{href:"recover.html"}},[t._v("I forgot my password")])])])])])]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col-md-12"},[s("form",[s("div",{staticClass:"actions-toolbar py-2 mb-4"},[s("h5",{staticClass:"mb-1"},[t._v("Change username")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-control-label"},[t._v("New username")]),s("input",{staticClass:"form-control",attrs:{type:"text"}})])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-control-label"},[t._v("New username")]),s("input",{staticClass:"form-control",attrs:{type:"text"}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("button",{staticClass:"btn btn-sm btn-primary btn-margain",attrs:{type:"button"}},[t._v("Change my username")])])])])])])])])}],Q={name:"Userprofile",props:{mes:String}},R=Q,V=(s("2ae0"),Object(c["a"])(R,G,K,!1,null,null,null)),X=V.exports;a["a"].use(d["a"]);var B=new d["a"]({mode:"history",base:"/solarweb/",routes:[{path:"/",name:"home",component:U},{path:"/admin",name:"admin",component:z,children:[{path:"userprofile",name:"userprofile",component:X}]},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]});s("4989"),s("f0bd"),s("a89b"),s("7f10");a["a"].config.productionTip=!1,new a["a"]({router:B,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("e332"),n=s.n(a);n.a},"5ee0":function(t,e,s){"use strict";var a=s("06eb"),n=s.n(a);n.a},8537:function(t,e,s){},a89b:function(t,e,s){},b5ef:function(t,e,s){},bff9:function(t,e,s){"use strict";var a=s("c42b"),n=s.n(a);n.a},c203:function(t,e,s){t.exports=s.p+"img/boy.efe01b90.svg"},c42b:function(t,e,s){},c9da:function(t,e,s){"use strict";var a=s("8537"),n=s.n(a);n.a},d5cf:function(t,e,s){"use strict";var a=s("fed3"),n=s.n(a);n.a},e332:function(t,e,s){},e690:function(t,e,s){t.exports=s.p+"img/undraw_investing_7u74.3f2ab33e.svg"},fed3:function(t,e,s){}});
//# sourceMappingURL=app.431342cb.js.map