//const Toast = require("./toast.js").Toast; module.export方式
import {Toast} from "./toast"; //export方式
import Note from "./note";
import Event from "./event";

/*import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;*/

class NoteManagerClass {

    constructor(){
        console.log("我是NoteManager类");
    }

    static load() {
        Event.fire('waterfall');
        $.get('/api/notes').done(function(ret){
            console.log('/api/notes成功');
            console.log(ret);
            if(ret.status == 0){
                    $.each(ret.data, function(idx, article) {
                        new Note({
                            id: article.id,
                            context: article.text
                        });
                        console.dir('each方法article',article);
                    });

                    Event.fire('waterfall');
                }else{
                    Toast(ret.errorMsg);
                    console.log('没走status=0');
                }
            }).fail(function(){
                Toast('网络异常');
            });


    }

    static add(){
        return new Note();
    }

}

const load = NoteManagerClass.load,
      add = NoteManagerClass.add;

var NoteManager = {
    load,
    add,
}


export default NoteManager;