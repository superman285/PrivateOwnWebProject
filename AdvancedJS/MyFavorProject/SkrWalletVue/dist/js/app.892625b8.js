!function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)a=i[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(d&&d(e);f.length;)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[];a[t]?e.push(a[t]):0!==a[t]&&{"chunk-25577e10":1,"chunk-2bde3070":1,"chunk-4c529cb3":1}[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-25577e10":"b01a5492","chunk-2bde3070":"1afcff3c","chunk-4c529cb3":"afdb6b45"}[t]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++)if((l=(u=d[c]).getAttribute("data-href"))===r||l===o)return e();var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.request=r,delete a[t],f.parentNode.removeChild(f),n(s)},f.href=o,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){a[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"331a5897","chunk-25577e10":"050e21a5","chunk-2bde3070":"ff1c4bd0","chunk-4c529cb3":"1905c59d"}[t]+".js"}(t),s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw t};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;s.push([0,"chunk-vendors"]),n()}({0:function(t,e,n){t.exports=n("56d7")},"0131":function(t,e,n){t.exports=n.p+"img/wallet.6b0962fa.png"},"01d4":function(t,e,n){"use strict";var r=n("51ff");n.n(r).a},"076e":function(t,e,n){"use strict";var r=(n("5c07"),n("53da"),n("2556"),n("d0f8"),n("5ea9")),a=n.n(r),o=(n("ffd9"),{name:"myfooter",methods:{toastMe:function(){var t=this;a.a.show({image:"https://i.loli.net/2019/03/12/5c87d728dc685.png",displayMode:1,imageWidth:55,message:"Welcome to My GitHub !",theme:"dark",timeout:3e3,position:"bottomCenter",progressBarColor:"rgb(0, 255, 184)",transitionIn:"flipInX",transitionOut:"flipOutX",layout:1,overlay:!0,buttons:[['<button style="border-radius:15px"><b>GO</b></button>',function(){t.goBlog()}]]})},goBlog:function(){window.open("https://skr.dog")}}}),s=(n("0d1e"),n("17cc")),i=Object(s.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"myfooter"}},[r("v-progress-linear",{staticClass:"bottomProgress",attrs:{indeterminate:!0,color:"rgb(0, 255, 255)"}}),r("div",{staticClass:"bottominfo"},[r("img",{attrs:{src:n("55a4"),alt:""}}),r("div",{staticClass:"work-info"},[r("p",[t._v("Made with ❤️by "),r("a",{attrs:{target:"_blank"},on:{click:t.goBlog,mouseover:t.toastMe}},[r("span",[t._v("superman285")])])]),t._m(0),t._m(1),t._m(2)])])],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Front-end framework: "),n("span",[t._v("Vue")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Back-end framework: "),n("span",[t._v("Koa2")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("ICP: "),n("span",[t._v("粤ICP备19022229号")])])}],!1,null,"a19113f2",null);e.a=i.exports},"0d1e":function(t,e,n){"use strict";var r=n("72fe");n.n(r).a},1:function(t,e){},1195:function(t,e,n){t.exports=n.p+"img/avatar.19f127f8.png"},"11d7":function(t,e,n){t.exports=n.p+"img/pkpng.b9fae1f0.png"},2:function(t,e){},3:function(t,e){},"359c":function(t,e,n){t.exports=n.p+"img/github.c7388bd8.png"},4:function(t,e){},"46b4":function(t,e,n){"use strict";(function(t){n("b5aa");var r=n("2c46"),a=(n("5c07"),n("53da"),n("2556"),n("d0f8"),n("fdab")),o=n("71c2"),s=n("076e"),i=n("5ea9"),c=n.n(i),u=(n("ffd9"),"http://154.8.215.126:4000");e.a={name:"Home",components:{HelloWorld:a.a,MyHeader:o.a,MyFooter:s.a},data:function(){return{addr:localStorage.getItem("accountAddr")?localStorage.getItem("accountAddr"):"0x00",tokeninputShow:!1,tokenAddr:"",tokenLoading:!1}},computed:{loadTokenDesc:function(){return"ETH"==this.$store.state.tokenType?"加载ERC20Token":"加载"}},methods:{etherscan:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("etherscan");case 2:case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),showPrivatekey:function(){var t=this.$store.state.globalPrivatekey;c.a.warning({timeout:1e4,overlay:!0,displayMode:"once",title:"PrivateKey",position:"center",layout:1,drag:!1,inputs:[['<input type="text" value='.concat(t,' readonly style="border:none!important;outline:none;">'),function(t,e,n,r){},!0]]})},refreshBalance:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$refs.refreshBtn.classList.remove("refresh-pause"),this.$refs.refreshBtn.classList.add("refresh-play"),"ETH"!=this.$store.state.tokenType){t.next=8;break}return t.next=6,this.$store.dispatch("refreshBalance");case 6:t.next=10;break;case 8:return t.next=10,this.$store.dispatch("refreshERC20Balance");case 10:setTimeout(function(){e.$refs.refreshBtn.classList.add("refresh-pause")},2e3);case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),loadToken:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("ETH"!=this.$store.state.tokenType){t.next=5;break}this.tokeninputShow=!this.tokeninputShow,t.next=10;break;case 5:return t.next=7,this.$store.dispatch("refreshBalance");case 7:this.$store.state.tokenType="ETH",this.$store.state.tokenABI="",this.$store.state.tokenContractAddr="";case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),sendTokenAddr:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var r,a,o,s,i,l,d=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n("8554"),r.getweb3().utils.isAddress(this.tokenAddr)){e.next=7;break}return c.a.warning({title:"Error",message:"合约地址格式错误 !",color:"red",timeout:2e3}),e.abrupt("return");case 7:return this.tokenLoading=!0,a=this.tokenAddr,e.next=11,t({method:"GET",url:"//api-rinkeby.etherscan.io/api",params:{module:"contract",action:"getabi",address:a,apikey:"H4EVJDWHGN1QMWR7VTYVVXA1542VE4FJXE"}});case 11:return o=e.sent,s=o.data.result,i="".concat(u,"/users/getsymbol"),e.next=16,t({method:"GET",url:i,params:{contractABI:s,contractAddr:a}});case 16:return l=e.sent,this.tokenLoading=!1,e.next=21,this.$store.dispatch("refreshERC20Balance");case 21:this.$store.state.tokenType=String(l.data.info.symbol),this.$store.state.tokenContractABI=s,this.$store.state.tokenContractAddr=a,setTimeout(function(){d.tokeninputShow=!1,d.tokenAddr=""},500);case 25:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),tokenInput:function(t){}}}}).call(this,n("7f43e"))},4867:function(t,e,n){},"50e2":function(t,e,n){"use strict";var r=n("8d69");n.n(r).a},"51ff":function(t,e,n){},"55a4":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAyCAYAAAAp8UeFAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAyFJREFUeAHtVVtuwzAMa4fd/8rbiEGA6uptOWla+yeOLJEUo7q3217bge3AduDBgTt/+/lb/F3b3/+Wl+vl4FzDn42TtpUcEY3fY1JUUCSPcqjZkevd379WN3imsWdyw9enye00++zm0MtRGuhXyv1bZu5RTfFmrL3UvJWPs9kewuZGidBENNdrruu8Yiy4I3VWr665VrHUfDZfwuiOkaaIWZ3c5h8aieok/CQsdXJXG6vhW9Ol1eCDWXX0Qa16yrGeEQ5eb04uTzx7f7QxUr9ZDZcxV2qWYtmJorrKM2Owei1YxGMzEUKqieSO3JUajkHcPDazh54IZnpyJVApxsV75zx33HvGathafMSvvnu6gJueXO2roRlO2NEcx5NM6OAArobj8UuaeCw9uSiWSKUYJ+rea4Z08sxypCeXxHMzuQi+p9zKk+NX6l+hRp3cjEndRnh4GW2zJs9wqeZCVAUYxmBVm/JqK5qgxcPV9FbrgGeai4TOZmaEzmhBrbU0XVrcwuJnoTuXDM6SIZ9qOWl1343HdWR747Xa3p1cXgijaPG4tV8h2uI76gw+eFwpczlY1mReO7N/hY8VMRY9ls0lg84ymfiPfkaNhS7XXEwKLauRDKmFEzmDnkhed062R/UPbWUDEOnhR3I6zBsN83RlOMXJ1Qi0eIYQuR04HRiS7tFsnpPlFM3lgONeI9DiYz3erQb4uZcnYb9STLwW0JRllnUWac6qzxgKnEx+RJuXk+FUJ7dLtIQjxbSmMrkaRjbexamaC0GzJLP1EVOsX0GkvpIT5TTNBXHVoGqd1GwnloQvxTo4XXNBDCIsScQY+8+M5Y611XdrkqK6s9wWJ2GJf2h0OD5XCR15pHdwWw3hjPTREzg8LuFaMY/TqsVZaHI9kKPOuWlRzkpNFNv62MBITW6U9Kw8a0qrJlvTa52dau5Ms0d/vKrWS10LR5s6y/d0LXj3yCzhJ9U/TC7GnxZMwP6TzOju9WlyiYCMpSfF9zPugGpuHOK1MyPX3KoBentzI58+8gEiOGPOw507Hl75fZVhV/Zka98ObAe2A+/swC92KXDHIfWAFgAAAABJRU5ErkJggg=="},"56d7":function(t,e,n){"use strict";n.r(e),n("5c07"),n("53da"),n("2556"),n("d0f8");var r=n("2418"),a=(n("b059"),n("71c2")),o=n("076e"),s=n("5ea9"),i=n.n(s),c=(n("ffd9"),{name:"app",components:{myheader:a.a,myfooter:o.a},mounted:function(){this.$router.push("/"),"0x00"==this.$store.state.accountAddr&&i.a.show({title:"Tips",titleColor:"#26c6da",message:"请先创建或载入钱包 !",messageColor:"#fff",progressBarColor:"#26c6da",theme:"dark",timeout:3e3})}}),u=(n("5c0b"),n("17cc")),l=Object(u.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("myheader"),n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("router-view"),n("myfooter")],1)],1)},[],!1,null,null,null).exports,d=n("081a"),f=n("46b4").a,p=(n("bff8"),Object(u.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("v-card",{staticClass:"mx-auto addr-card",attrs:{color:"#26c6da",dark:"","max-width":"400"}},["0x00"!=t.$store.state.accountAddr?r("img",{ref:"showpkBtn",staticClass:"showpk-btn",attrs:{src:n("11d7"),alt:"privatekey"},on:{click:t.showPrivatekey}}):t._e(),r("div",{staticClass:"addr-avatar"},[r("img",{attrs:{src:n("1195"),alt:""}})]),r("h2",[t._v("Address")]),r("div",{staticClass:"addr-text"},[r("p",[t._v("\n                "+t._s(this.$store.state.accountAddr)+"\n            ")])])]),r("v-card",{staticClass:"mx-auto addr-card",attrs:{color:"indigo",dark:"","max-width":"400"}},["0x00"!=t.$store.state.accountAddr?r("img",{ref:"refreshBtn",staticClass:"refresh-btn",attrs:{src:n("684f"),alt:"refresh"},on:{click:t.refreshBalance}}):t._e(),"0x00"!=t.$store.state.accountAddr?r("v-tooltip",{attrs:{right:"",dark:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("img",t._g({ref:"loadtokenBtn",staticClass:"loadtoken-btn",attrs:{src:n("b8b3"),alt:"loadtoken"},on:{click:t.loadToken}},a))]}}],null,!1,3094607358)},[r("span",[t._v(t._s(t.loadTokenDesc))])]):t._e(),r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.tokeninputShow,expression:"tokeninputShow"}],staticClass:"tokeninput-wrap"},[r("v-text-field",{ref:"tokeninput",staticClass:"tokeninput",attrs:{solo:"",label:"输入erc20合约地址","append-icon":"send"},on:{"click:append":t.sendTokenAddr},model:{value:t.tokenAddr,callback:function(e){t.tokenAddr=e},expression:"tokenAddr"}}),r("v-progress-linear",{staticClass:"tokenProgress",attrs:{indeterminate:t.tokenLoading,color:"indigo","background-color":"white"}})],1)]),r("div",{staticClass:"addr-avatar"},[r("img",{attrs:{src:n("0131"),alt:""}}),r("p",[t._v(t._s(this.$store.state.tokenType))])]),r("h2",[t._v("Balance")]),r("div",{staticClass:"addr-text"},[r("span",[t._v("\n                "+t._s(this.$store.state.accountBalance)+"\n            ")]),r("span",{staticClass:"unit"},[t._v("\n                "+t._s(this.$store.state.tokenType)+"\n            ")])])],1)],1)},[],!1,null,"7c4c1a4a",null)).exports;r.default.use(d.a);var h=new d.a({mode:"history",routes:[{path:"/",name:"home",component:p,meta:{keepAlive:!0}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/createwallet",name:"createwallet",component:function(){return n.e("chunk-25577e10").then(n.bind(null,"36f9"))},meta:{keepAlive:!1}},{path:"/accesswallet",name:"accesswallet",component:function(){return n.e("chunk-4c529cb3").then(n.bind(null,"b6d8"))},meta:{keepAlive:!1}},{path:"/sendtx",name:"sendtx",component:function(){return n.e("chunk-2bde3070").then(n.bind(null,"51bb"))},meta:{keepAlive:!0}}]}),v=n("c0d6"),m=n("3ae8"),g=n.n(m);n("ceb4"),r.default.use(g.a),r.default.config.productionTip=!1,new r.default({router:h,store:v.a,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("7508");n.n(r).a},"684f":function(t,e){t.exports="data:image/png;base64,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"},"71c2":function(t,e,n){"use strict";var r={name:"myheader",mounted:function(){var t=document.querySelectorAll(".v-tabs__item");this.$store.state.headerTabs=t},methods:{showev:function(t){}}},a=(n("01d4"),n("17cc")),o=Object(a.a)(r,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"myheader"}},[r("div",{staticClass:"topbar"},[r("img",{staticClass:"logo",attrs:{src:n("cf05"),alt:""}}),r("div",{staticClass:"githublogo"},[r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("a",{attrs:{target:"_blank",href:"https://github.com/superman285/PrivateOwnWebProject/tree/master/AdvancedJS/MyFavorProject/SkrWalletVue"}},[r("img",t._g({staticClass:"githublogo",attrs:{src:n("359c"),alt:""}},a))])]}}])},[r("span",[t._v("View Source on GitHub!")])])],1)]),r("v-progress-linear",{staticClass:"topProgress",attrs:{indeterminate:!0,color:"rgb(0, 255, 200)"}}),r("div",{staticClass:"topmenu",on:{click:function(e){return t.showev(e)}}},[r("v-tabs",{attrs:{color:"cyan",dark:"","slider-color":"yellow"}},[r("router-link",{ref:"tab1",attrs:{tag:"v-tab",to:{name:"home"}}},[t._v("My Account")]),r("router-link",{ref:"tab2",attrs:{tag:"v-tab",to:{name:"createwallet"}}},[t._v("Create Wallet")]),r("router-link",{ref:"tab3",attrs:{tag:"v-tab",to:{name:"accesswallet"}}},[t._v("Access Wallet")]),r("router-link",{ref:"tab4",attrs:{tag:"v-tab",to:{name:"sendtx"}}},[t._v("Transaction")])],1)],1)],1)},[],!1,null,"017330cc",null);e.a=o.exports},"72fe":function(t,e,n){},7508:function(t,e,n){},8554:function(t,e,n){t.exports={getweb3:function(){return new(n("7b83"))("https://rinkeby.infura.io/v3/33a947db47094090b8331ea2f6f4bbd3")}}},"8d69":function(t,e,n){},b059:function(t,e,n){},b8b3:function(t,e,n){t.exports=n.p+"img/loadtoken.28c8425a.png"},bff8:function(t,e,n){"use strict";var r=n("4867");n.n(r).a},c0d6:function(t,e,n){"use strict";(function(t){n("b06f"),n("b5aa");var r=n("2c46"),a=(n("5c07"),n("53da"),n("2556"),n("d0f8"),n("2418")),o=n("52c1");a.default.use(o.a);e.a=new o.a.Store({state:{globalKeystore:{},globalPrivatekey:"",accountAddr:"0x00",accountBalance:"0.00",headerTabs:{},tokenType:"ETH",tokenContractABI:"",tokenContractAddr:""},mutations:{setAccountAddr:function(t,e){t.accountAddr=e},setAccountBalance:function(t,e){t.accountBalance=(e/Math.pow(10,18)).toFixed(2)}},actions:{refreshBalance:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("http://154.8.215.126:4000","/users/getbalance"),r=this.state.accountAddr,e.next=5,t({method:"get",url:n,params:{address:r}});case 5:a=e.sent,this.commit("setAccountBalance",a.data.info.balance);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),refreshERC20Balance:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"//api-rinkeby.etherscan.io/api",e.next=4,t({method:"GET",url:"//api-rinkeby.etherscan.io/api",params:{module:"account",action:"tokenbalance",contractaddress:"0xF1bAb6522147b7fEf6dc50CccfACDa81181a60B6",address:"0x2B9579B9eb65DBC6A10a3d27fC8aBA8f615Bb0Be",tag:"latest",apikey:"H4EVJDWHGN1QMWR7VTYVVXA1542VE4FJXE"}});case 4:n=e.sent,r=n.data.result,this.commit("setAccountBalance",Number(r*Math.pow(10,18)));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}})}).call(this,n("7f43e"))},cf05:function(t,e){t.exports="data:image/png;base64,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"},fdab:function(t,e,n){"use strict";var r={name:"HelloWorld",props:{msg:String}},a=(n("50e2"),n("17cc")),o=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[t._v("unit-jest")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],!1,null,"169ec0fc",null);e.a=o.exports}});