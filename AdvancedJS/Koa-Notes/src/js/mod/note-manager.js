//const Toast = require("./toast.js").Toast; module.export方式
import {Toast} from "./toast"; //export方式
import Note from "./note";
import Event from "./event";

//webpack配置了全局插件jq 可以不用引入
/*import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;*/

class NoteManagerClass {


    constructor(){
        console.log("我是NoteManager类");
        //this.noteID = 0;
    }

    static load() {
        var noteID = this.noteID;
        Event.fire('waterfall');
        $.get('/api/notes').done(function(ret){
            console.log('/api/notes成功');
            console.log(ret);
            if(ret.status == 0){
                    $.each(ret.data, function(idx, article) {
                        new Note({
                            id: article.noteid,
                            context: article.text
                        });
                        console.log('循环打印');
                        console.log(idx,article);
                        NoteManagerClass.noteID += 1;
                    });
                    console.log(NoteManagerClass.noteID);
                    Event.fire('waterfall');
                }else{
                    Toast(ret.errorMsg);
                    console.log('没走status=0');
                }
            }).fail(function(){
                Toast('网络异常');
            });
            this.noteID = noteID;

    }

    static add(){
        new Note({
            id: ++NoteManagerClass.noteID,
        });

        Note.add({
            uid: 6,
            noteid: NoteManagerClass.noteID,
            note: '',
        })

        console.log('我用了notemanager的add');
        console.log(NoteManagerClass.noteID);
    }

}

NoteManagerClass.noteID = 0;

const load = NoteManagerClass.load,
      add = NoteManagerClass.add;

var NoteManager = {
    load,
    add,
}


export default NoteManager;