//const Toast = require("./toast.js").Toast; module.export方式
import {Toast} from "./toast"; // es6 export way
import Note from "./note";
import Event from "./event";

import {web3,abi,contractAddr,contractFounder,noteContractObj} from "./contractABI";


console.log("@#$%^&*($%^&*(受够了");
console.log(noteContractObj);

let userAddr = localStorage.userAddr;

class NoteManagerClass {
    constructor(){
        console.log("我是NoteManager类");
        //this.noteID = 0;
    }

    static load() {
        Event.fire('waterfall');
            $.get('/api/notes',{data:userAddr}).done(function(ret){
                if(ret.status == 0){
                    $.each(ret.data, function(idx, article) {
                        //由于solidity的delete是置初值而不是完全删除，所以
                        //此处判断当uid/noteid/note都为0或空时说明被删除 就不加载
                        //article第0项第1项第2项分别是uid，noteid，note内容
                        if(article[0]==0&&article[1]==0&&!article[3]){
                            console.log('这个便签是被delete过的');
                        }else{
                            let noteObj = new Note({
                                id: article[1],
                                context: article[2]
                            });
                            NoteManagerClass.notesObjSets.push(noteObj);
                            console.log(article[0],article[1],article[2]);
                            //不用以前的NoteManagerClass.noteID++的方式了，不对，要直接从区块链上获取noteid了
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
        //使用note类的recover方法来回滚，必须刷新页面重新加载 否则notesObjSets中还有老的便签，导致修改后又还原
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
            console.log('我是NoteManager，你说我现在的noteID是多少呢',NoteManagerClass.noteID);
        }else{
            console.log('addnote api failed');
        }
    }

}


noteContractObj.methods.noteIdx().call({},(err,res)=>{
    if (!err) {
        console.log('展现真正的noteid吧',res);
        //获得的结果类型为string，需要转换
        NoteManagerClass.noteID = parseInt(res);
    }
})


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