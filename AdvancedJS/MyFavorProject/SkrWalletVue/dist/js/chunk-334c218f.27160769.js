(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-334c218f"],{"24d0":function(t,e,o){t.exports=o.p+"img/kspng.68ab7744.png"},"36f9":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v(t._s(t.createtitle))]),s("v-layout",{staticClass:"create_wrapper",attrs:{"align-start":"","justify-space-around":""}},[t.kscard?s("div",{staticClass:"kscard",on:{click:function(e){return t.kscreate()}}},[s("img",{attrs:{src:o("24d0"),alt:""}}),s("h2",[t._v("By Keystore")])]):t._e(),t.pkcard?s("div",{staticClass:"pkcard",on:{click:function(e){return t.pkcreate()}}},[s("img",{attrs:{src:o("11d7"),alt:""}}),s("h2",[t._v("By Privatekey")])]):t._e()]),t.kslayout?s("div",{staticClass:"kslayout"},[s("v-layout",{attrs:{"align-start":"","justify-space-between":""}},[s("div",{staticClass:"ksWrap"},[s("v-text-field",{staticClass:"input-password",attrs:{outline:"","single-line":"",clearable:"","append-icon":t.showpwd?"visibility":"visibility_off",type:t.showpwd?"text":"password",label:"input password"},on:{"click:append":function(e){t.showpwd=!t.showpwd}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("v-progress-linear",{ref:"cksProgress",staticClass:"cksProgress",attrs:{indeterminate:t.progressRunning,color:t.cksProgressColor,"background-color":"indigo"}})],1),s("v-tooltip",{attrs:{bottom:"",dark:"",color:"indigo"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[s("v-btn",t._g({attrs:{dark:"",fab:"",color:"indigo"},on:{click:t.createAccountByKeystore}},o),[s("i",{staticClass:"mdi mdi-account-arrow-right ibig"})])]}}],null,!1,2843463204)},[s("span",[t._v("Create New Wallet!")])])],1),s("a",{directives:[{name:"show",rawName:"v-show",value:t.downable,expression:"downable"}],ref:"downlink",staticClass:"downlink animated fadeInUpBig",attrs:{href:"",target:"_blank",download:"keystore"}}),s("div",{staticClass:"backbtn"},[s("v-btn",{attrs:{outline:"",fab:"",color:"indigo"},on:{click:t.back}},[s("v-icon",[t._v("arrow_back")])],1)],1)],1):t._e(),t.pklayout?s("div",{staticClass:"pklayout"},[s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("img",t._g({ref:"ani",staticClass:"dice",attrs:{src:o("cd3d"),alt:""},on:{click:t.randompk}},a))]}}],null,!1,1216835752)},[s("span",[t._v("Click to throw the Dice!")])]),s("v-layout",{attrs:{"align-start":"","justify-space-between":""}},[s("div",{staticClass:"pkWrap"},[s("v-text-field",{attrs:{outline:"","single-line":"","append-icon":t.showpwd?"visibility":"visibility_off",type:t.showpwd?"text":"password",label:"Throw the Dice for a random Privatekey",readonly:""},on:{"click:append":function(e){t.showpwd=!t.showpwd}},model:{value:t.privatekey,callback:function(e){t.privatekey=e},expression:"privatekey"}}),s("v-progress-linear",{ref:"cpkProgress",staticClass:"cpkProgress",attrs:{indeterminate:t.progressRunning,color:t.cpkProgressColor,"background-color":"indigo"}})],1),s("v-tooltip",{attrs:{bottom:"",dark:"",color:"indigo"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[s("v-btn",t._g({attrs:{dark:"",fab:"",color:"indigo"},on:{click:t.createAccountByPrivatekey}},o),[s("i",{staticClass:"mdi mdi-account-arrow-right ibig"})])]}}],null,!1,3767106870)},[s("span",[t._v("Create New Wallet!")])])],1),s("div",{staticClass:"backbtn"},[s("v-btn",{attrs:{outline:"",fab:"",color:"indigo"},on:{click:t.back}},[s("v-icon",[t._v("arrow_back")])],1)],1)],1):t._e()],1)},a=[],r=o("6f2f"),n=r["a"],i=(o("fda2"),o("17cc")),c=Object(i["a"])(n,s,a,!1,null,"73162bde",null);e["default"]=c.exports},"6f2f":function(t,e,o){"use strict";(function(t){o("b5aa");var s=o("2c46"),a=(o("ac2a"),o("5ea9")),r=o.n(a);o("ffd9");e["a"]={name:"CreateAccount",data:function(){return{showpwd:!1,password:"",privatekey:"",downUrl:"",downable:!1,pkcard:!0,kscard:!0,pklayout:!1,kslayout:!1,progressRunning:!1,cpkProgressColor:"rgb(0,255,255)",cksProgressColor:"rgb(0,255,184)",createtitle:"Create A New Wallet"}},computed:{progress:function(){return Math.min(100,10*this.value.length)},color:function(){return["error","warning","success"][Math.floor(this.progress/40)]}},methods:{pkcreate:function(){console.log("改pk"),this.createtitle="Create Wallet By Privatekey",this.pkcard=!1,this.kscard=!1,this.pklayout=!0},kscreate:function(){console.log("改ks"),this.createtitle="Create Wallet By Keystore",this.kscard=!1,this.pkcard=!1,this.kslayout=!0},back:function(){console.log("back"),this.createtitle="Create A New Wallet",this.password="",this.privatekey="",this.pkcard=!0,this.kscard=!0,this.pklayout=!1,this.kslayout=!1,this.downable=!1,this.progressRunning=!1},randompk:function(){var t=this;console.log(window),console.log(Pace),console.dir(this.$refs.ani),this.$refs.ani.classList.add("animated","wobble"),setTimeout(function(){t.$refs.ani.classList.remove("animated","wobble")},2e3);var e=o("8554"),s=e.getweb3(),a=s.utils.randomHex(32);this.cpkProgressColor="rgb(0,255,255)",this.progressRunning=!0,setTimeout(function(){t.progressRunning=!1,t.privatekey=a,r.a.warning({title:"Caution",message:"请妥善保存好私钥 !",displayMode:2,timeout:1500,position:"bottomCenter"})},1e3)},createAccountByKeystore:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var o,s,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(o=this,""!==this.password){e.next=5;break}return r.a.info({message:"请输入密码 !",timeout:2e3,displayMode:1,color:"red",position:"bottomCenter"}),console.log("请输入密码"),e.abrupt("return");case 5:return this.progressRunning=!0,s="http://127.0.0.1:4000/users/createaccountbyks",e.prev=7,a=function(){o.progressRunning=!1,r.a.success({title:"OK",message:"钱包创建成功 !",timeout:2e3,position:"bottomCenter"}),console.log("createAccountSuccess",n.data.info.fileName),console.log(n),console.log(o.$refs.downlink);var t=n.data.info.fileName;o.$refs.downlink.href="keystore/".concat(t),o.downable=!0;var e=o.$refs.downlink;r.a.warning({timeout:1e4,position:"center",image:"https://i.loli.net/2019/03/13/5c87e0e3dc02c.png",imageWidth:55,displayMode:2,resetOnHover:!0,progressBarColor:"rgb(0, 255, 184)",transitionIn:"flipInX",transitionOut:"flipOutX",color:"grey",theme:"dark",buttons:[["<button><b>下载KeyStore</b></button>",function(t,e){t.hide({},e)}]],onClosing:function(){e.click()}});var s=n.data.info.account.address;o.$store.commit("setAccountAddr",s);var a=n.data.info.account.privateKey;o.$store.state.globalPrivatekey=a,console.log("全局私钥",o.$store.state.globalPrivatekey),o.$store.state.accountBalance="0.00"},e.next=11,t({method:"POST",url:s,data:{password:this.password}});case 11:n=e.sent,setTimeout(function(){a()},2e3),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](7),console.log(e.t0),r.a.info({title:"Error",message:"钱包创建失败 !",color:"red",timeout:2e3});case 19:case"end":return e.stop()}},e,this,[[7,15]])}));function o(){return e.apply(this,arguments)}return o}(),createAccountByPrivatekey:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var o,s,a,n,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!=this.privatekey){e.next=3;break}return r.a.warning({message:"请先生成私钥 !",timeout:1500}),e.abrupt("return");case 3:return this.cpkProgressColor="rgb(0,255,184)",this.progressRunning=!0,o="http://127.0.0.1:4000/users/createaccountbypk",e.prev=6,e.next=9,t({method:"POST",url:o,data:{privatekey:this.privatekey}});case 9:s=e.sent,console.log("createAccountSuccess",s.data.info),setTimeout(function(){i.progressRunning=!1,r.a.success({title:"OK",message:"钱包创建成功 !",timeout:1250,position:"bottomCenter"})},2e3),a=s.data.info.account.address,this.$store.commit("setAccountAddr",a),n=s.data.info.account.privateKey,this.$store.state.globalPrivatekey=n,console.log("全局私钥",this.$store.state.globalPrivatekey),this.$store.state.accountBalance="0.00",setTimeout(function(){r.a.show({message:"稍后自动跳转至首页,请尽快保存私钥 !",timeout:2e4,position:"bottomCenter",buttons:[["<button><b>点击跳转</b></button>",function(t,e){t.hide({transitionOut:"fadeOut"},e,"button")}]],displayMode:2,theme:"dark",onClosing:function(){console.log("this指向",i);var t=i.$store.state.headerTabs;console.log(t),t[0].click()}})},3e3),e.next=26;break;case 21:e.prev=21,e.t0=e["catch"](6),console.log(e.t0),this.progressRunning=!1,r.a.info({title:"Error",message:"钱包创建失败 !",color:"red",timeout:2e3});case 26:case"end":return e.stop()}},e,this,[[6,21]])}));function o(){return e.apply(this,arguments)}return o}()}}}).call(this,o("7f43"))},ac2a:function(t,e,o){},cce6:function(t,e,o){},cd3d:function(t,e,o){t.exports=o.p+"img/dice.77703e29.png"},fda2:function(t,e,o){"use strict";var s=o("cce6"),a=o.n(s);a.a}}]);
//# sourceMappingURL=chunk-334c218f.27160769.js.map