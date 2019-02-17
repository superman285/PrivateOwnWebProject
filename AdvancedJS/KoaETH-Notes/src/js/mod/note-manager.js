//const Toast = require("./toast.js").Toast; module.export方式
import {Toast} from "./toast"; // es6 export way
import Note from "./note";
import Event from "./event";

//此处到时替换成登录人的地址 动态获取
const userAddr = "0x2b9579b9eb65dbc6a10a3d27fc8aba8f615bb0be";

class NoteManagerClass {


    constructor(){
        console.log("我是NoteManager类");
        //this.noteID = 0;
    }

    static load() {
        Event.fire('waterfall');
        $.get('/api/notes').done(function(ret){
            if(ret.status == 0){
                    $.each(ret.data, function(idx, article) {
                        //由于solidity的delete是置初值而不是完全删除，所以
                        //此处判断当uid/noteid/note都为0或空时说明被删除 就不加载
                        //article第0项第1项第2项分别是uid，noteid，note内容
                        console.log(typeof article[0],typeof article[1],typeof article[2]);
                        if(article[0]==0&&article[1]==0&&!article[3]){
                            console.log('全假帮不了你');
                        }else{
                            let noteObj = new Note({
                                id: article[0],
                                context: article[2]
                            });
                            NoteManagerClass.notesObjSets.push(noteObj);
                            console.log(article[0],article[1],article[2]);
                            NoteManagerClass.noteID += 1;
                        }

                    });
                    Event.fire('waterfall');
                }else{
                    Toast(ret.errorMsg);
                }
            }).fail(function(){
                Toast('网络异常');
            });
    }

    static recover() {
        //用note管理类 添加一个静态属性来获取note的实例合集，在note类中无法定义这个方法，然后对每个实例
        //使用note类的recover方法来回滚，
        NoteManagerClass.notesObjSets.forEach(item=>{
            console.log('实例对象noteobj',item);
            item.recover();
        })
    }

    static async add(){


        let addRes = await Note.add({
            uid: userAddr,
            note: '',
        });
        console.log('addRes',addRes);

        if(addRes) {
            new Note({
                id: ++NoteManagerClass.noteID,
            });
        }else{
            console.log('addnote api failed');
        }
    }

}

NoteManagerClass.noteID = 0;
NoteManagerClass.notesObjSets = [];

const load = NoteManagerClass.load,
      add = NoteManagerClass.add,
      recover = NoteManagerClass.recover;

let NoteManager = {
    load,
    add,
    recover
}


export default NoteManager;