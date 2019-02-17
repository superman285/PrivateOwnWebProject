//const Toast = require("./toast.js").Toast; module.export方式
import {Toast} from "./toast"; // es6 export方式
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
        //var noteID = this.noteID;
        Event.fire('waterfall');
        $.get('/api/notes').done(function(ret){
            console.log('/api/notes成功');
            console.log(ret);
            if(ret.status == 0){
                    $.each(ret.data, function(idx, article) {
                      let noteObj = new Note({
                            id: article.noteid,
                            context: article.text
                        });
                        NoteManagerClass.notesObjSets.push(noteObj);
                        console.log('循环打印');
                        console.log(NoteManagerClass.notesObjSets,NoteManagerClass.notesObjSets.length);
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
            //this.noteID = noteID;
    }

    static recover() {
        //用note管理类 添加一个静态属性来获取note的实例合集，在note类中无法定义这个方法，然后对每个实例
        //使用note类的recover方法来回滚，
        NoteManagerClass.notesObjSets.forEach(item=>{
            console.log('实例对象noteobj',item);
            item.recover();
        })
    }

    //要优化，应判断下，如果api add不成功 不应该new Note 改一下先是Note.add成功(用一个返回值)了在newNote
    //要注意noteID的增加了 如果换了顺序 就应该在第一个方法中++

    static add(){
        new Note({
            id: ++NoteManagerClass.noteID,
        });

        Note.add({
            noteid: NoteManagerClass.noteID,
            note: '',
        })

        console.log('我用了notemanager的add');
        console.log(NoteManagerClass.noteID);
    }

}

NoteManagerClass.noteID = 0;
NoteManagerClass.notesObjSets = [];

const load = NoteManagerClass.load,
      add = NoteManagerClass.add,
      recover = NoteManagerClass.recover;

var NoteManager = {
    load,
    add,
    recover
}


export default NoteManager;