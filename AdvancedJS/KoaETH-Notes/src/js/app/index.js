console.log('我是入口文件entry');

require("../../sass/index.scss");

//import("../../sass/index.scss")

import NoteManager from "../mod/note-manager.js";
import Event from "../mod/event";
import {Toast} from "../mod/toast";
import "../mod/Masonry.js";    //目前采用的瀑布流，waterfall-3party没这个好用


//加载以太账户
let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
let userAddr = localStorage.userAddr;

console.log(web3.utils.isAddress(userAddr));

//加载便签
NoteManager.load();

var cct = document.querySelector("#content");
var msnry;

var siteAddr = window.location.href;

//未登录无法添加便笺的功能，可以用用/checkLogin路由来判断是否登录 通过ctx.session，
//不过还是先别吧，让游客也爽爽 新加的是可以改的，不过一刷新就没了
$('.add-note').on('click', function () {
    if(userAddr){
        if (!web3.utils.isAddress(userAddr)) {
            Toast('账号有误，请重新登录!');
            return;
        }
        console.log('￥￥￥您是vip，您加吧￥￥￥');
        NoteManager.add().then(()=>{
            //如果此处不用await 由于add是异步方法，会导致先加到开头 然后点击或刷新才触发重新排布
            if (msnry) {
                msnry.layout();
                msnry = new Masonry(cct, {
                    itemSelector: '.note',
                    //columnWidth: 15%,
                    gutter: 30
                });
            } else {
                msnry = new Masonry(cct, {
                    // options
                    itemSelector: '.note',
                    //columnWidth: 15%,
                    gutter: 30
                });
            }
        })
    }else {
        console.log('￥￥￥您不是vip，先登录吧￥￥￥');
        Toast("亲，游客无法添加便签，请先登录!")
    }
});

let frame = document.querySelector("#content");

frame.addEventListener('click', (e) => {
    if (msnry && e.target.id == "content") {
        console.dir(e.target);
        msnry.layout();
        msnry = new Masonry(cct, {
            itemSelector: '.note',
            //columnWidth: 15%,
            gutter: 30
        });
        console.log('我要回滚了');


        if(userAddr) {
            if (!web3.utils.isAddress(userAddr)) {
                Toast('index入口账号有误，请重新登录!');
                return;
            }
            console.log('￥￥￥您是vip，您随便改￥￥￥');
        }else {
            NoteManager.recover();
        }
        /*$.get('/checkLogin').done(ret => {
            if (ret.login) {
                console.log('￥￥￥您是vip，您随便改￥￥￥');
            } else {
                NoteManager.recover();
            }
        })*/

    }
});

Event.on('waterfall', function () {
    console.log('触发waterfall');
    var cct = document.querySelector("#content");

    if (msnry) {
        msnry.layout()
    } else {
        msnry = new Masonry(cct, {
            // options
            itemSelector: '.note',
            //columnWidth: 15%,
            gutter: 30
        });
    }
})

export {msnry};