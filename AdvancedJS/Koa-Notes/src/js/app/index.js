console.log('我是入口文件ss');

require("../../sass/index.scss");

//import("../../sass/index.scss")

import NoteManager from "../mod/note-manager";
import Event from "../mod/event";
import {WaterFall} from "../mod/waterfall-3party";

NoteManager.load();

$('.add-note').on('click', function() {
    NoteManager.add();
})

Event.on('waterfall', function(){
    WaterFall('.grid');
    window.addEventListener('resize', function () {
        WaterFall('.grid');
    });
})