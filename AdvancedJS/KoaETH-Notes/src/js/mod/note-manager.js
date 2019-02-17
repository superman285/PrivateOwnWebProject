//const Toast = require("./toast.js").Toast; module.export方式
import {Toast} from "./toast"; // es6 export way
import Note from "./note";
import Event from "./event";

//此处到时替换成登录人的地址 动态获取
//const userAddr = "0x2b9579b9eb65dbc6a10a3d27fc8aba8f615bb0be";
let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
let abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "notesContent",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "notesArr",
        "outputs": [
            {
                "name": "uid",
                "type": "uint256"
            },
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "newtext",
                "type": "string"
            }
        ],
        "name": "updateNote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "founder",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "noteidTouid",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "noteIdx",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getMyNotes",
        "outputs": [
            {
                "components": [
                    {
                        "name": "uid",
                        "type": "uint256"
                    },
                    {
                        "name": "noteid",
                        "type": "uint256"
                    },
                    {
                        "name": "text",
                        "type": "string"
                    }
                ],
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "notesMap",
        "outputs": [
            {
                "name": "uid",
                "type": "uint256"
            },
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "text",
                "type": "string"
            }
        ],
        "name": "addNote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "noteid",
                "type": "uint256"
            }
        ],
        "name": "getNote",
        "outputs": [
            {
                "components": [
                    {
                        "name": "uid",
                        "type": "uint256"
                    },
                    {
                        "name": "noteid",
                        "type": "uint256"
                    },
                    {
                        "name": "text",
                        "type": "string"
                    }
                ],
                "name": "",
                "type": "tuple"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "noteid",
                "type": "uint256"
            }
        ],
        "name": "deleteNote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAllNotes",
        "outputs": [
            {
                "components": [
                    {
                        "name": "uid",
                        "type": "uint256"
                    },
                    {
                        "name": "noteid",
                        "type": "uint256"
                    },
                    {
                        "name": "text",
                        "type": "string"
                    }
                ],
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "founderID",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userNotes",
        "outputs": [
            {
                "name": "uid",
                "type": "uint256"
            },
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "noteidToindex",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
];
let contractAddr = "0x47cfaeeda8c9e483c4fd87b3de4fb97b5ac2485a";
let noteContractObj = new web3.eth.Contract(abi,contractAddr);

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