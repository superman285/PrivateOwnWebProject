console.log('我是入口文件entry');

require("../../sass/index.scss");

//import("../../sass/index.scss")

import NoteManager from "../mod/note-manager.js";
import Event from "../mod/event";
import {waterfall} from "../mod/waterfall-3party";

NoteManager.load();

$('.add-note').on('click', function() {
    NoteManager.add();
})

Event.on('waterfall', function(){
    waterfall('.grid');
    window.addEventListener('resize', function () {
        waterfall('.grid');
    });
})