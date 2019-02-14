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


//后续在这添加拦截未登录无法添加便笺功能吧，考虑用localstorage
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
        NoteManager.recover();
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