console.log('我是入口文件entry');

require("../../sass/index.scss");

//import("../../sass/index.scss")

import NoteManager from "../mod/note-manager.js";
import Event from "../mod/event";
import {waterfall} from "../mod/waterfall-3party";

import "../mod/Masonry.js";

console.log('我要开始load了');
NoteManager.load();

var cct = document.querySelector("#content");
var msnry;


//未登录无法添加便笺的功能，可以用用/checkLogin路由来判断是否登录 通过ctx.session，
//不过还是先别吧，让游客也爽爽
$('.add-note').on('click', function() {
    //var elem =
    NoteManager.add();
    console.log('触发add');
    console.log(cct);
    if(msnry) {
        msnry.layout();
        msnry = new Masonry(cct,{
            itemSelector: '.note',
            //columnWidth: 15%,
            gutter: 30
        });
    }else {
        msnry = new Masonry(cct, {
            // options
            itemSelector: '.note',
            //columnWidth: 15%,
            gutter: 30
        });
    }
})

let frame = document.querySelector("#content");

frame.addEventListener('click',(e)=>{
    if (msnry && e.target.id == "content") {
        console.dir(e.target);
        msnry.layout();
        msnry = new Masonry(cct,{
            itemSelector: '.note',
            //columnWidth: 15%,
            gutter: 30
        });
        console.log('来我要回滚了');
        
        $.get('/checkLogin').done(ret=>{
            if(ret.login){
                console.log('￥￥￥您是vip，您随便改￥￥￥');
            }else {
                NoteManager.recover();
            }
        })

    }
})

Event.on('waterfall', function(){
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