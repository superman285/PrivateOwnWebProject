import "../../sass/note.scss";

import {Toast} from "../mod/toast";
import Event from "./event";
import {msnry} from "../app";

import NProgress from "nprogress";
import 'nprogress/nprogress.css';

import {web3,abi,contractAddr,contractFounder,noteContractObj} from "./contractABI";

//此处到时替换成登录人的地址 动态获取
let userAddr = localStorage.userAddr;
let keyAddr = localStorage.keyAddr;

class Note {

//暂不支持静态属性写在外面的定义方式，先写在constructor里头 用this吧
    constructor(opts) {
        console.log('构造初始化走起');
        this.defaultOpts = {
            id: '',   //Note的 id
            $ct: $('#content').length > 0 ? $('#content') : $('body'),  //默认存放 Note 的容器
            context: 'input here'  //Note 的内容
        };
        this.initOpts(opts);
        this.createNote();
        this.setStyle();
        this.bindEvent();
    };

    initOpts(opts) {
        console.log('initOpts');
        this.opts = $.extend({}, this.defaultOpts, opts || {});
        console.log(this.opts);
        if (this.opts.id) {
            this.id = this.opts.id;
        }
        console.log(this.id);
    };

    createNote() {
        //this.opts = opts;
        let tpl = '<div class="note item">'
            + '<div class="note-head"><span class="delete">&nbsp;&times;</span></div>'
            + '<div class="note-ct" contenteditable="true"></div>'
            + '</div>';
        this.$note = $(tpl);
        this.$note.find('.note-ct').html(this.opts.context);
        //this.opts.$ct
        $('#content').append(this.$note);
        //if (!this.id) this.$note.css('bottom', '10px');
        console.log('createNote');
        var self = this;
    };

    recover() {
        if (this.$note) {
            this.$note.find('.note-ct').html(this.opts.context);
            console.log('notejs还原成功');
        } else {
            console.log('notejs $note为空');
        }
    }

    setStyle() {
        let color = Note.colors[Math.floor(Math.random() * 15)];
        this.$note.find('.note-head').css('background-color', color[0]);
        this.$note.find('.note-ct').css('background-color', color[1]);
    };

    setLayout() {
        var self = this;
        if (self.clk) {
            clearTimeout(self.clk);
        }
        self.clk = setTimeout(function () {
            Event.fire('waterfall');
        }, 100);
    };

    bindEvent() {
        var self = this,
            $note = this.$note,
            $noteHead = $note.find('.note-head'),
            $noteCt = $note.find('.note-ct'),
            $delete = $note.find('.delete'),
            $addNote = $('.add-note');

        $delete.on('click', function () {
            self.delete();
        });
        //contenteditable没有 change 事件，所有这里做了模拟通过判断元素内容变动，执行 save
        $noteCt.on('focus', function () {
            if ($noteCt.html() == 'input here') $noteCt.html('');
            $noteCt.data('before', $noteCt.html());
        }).on('blur paste', function () {
            if ($noteCt.data('before') != $noteCt.html()) {
                $noteCt.data('before', $noteCt.html());
                self.setLayout();
                //到时删
                //self.edit($noteCt.html())
                console.log('到bindevent阶段');
                console.log(self.id);

                //改逻辑，edit与add分开
                self.edit($noteCt.html());

                /*if (self.id) {
                    console.log('触发edit');
                    self.edit($noteCt.html())
                } else {
                    console.log('触发add');
                    self.add($noteCt.html())
                }*/
            }
        });
        //设置笔记的移动
        $noteHead.on('mousedown', function (e) {
            var evtX = e.pageX - $note.offset().left,
                evtY = e.pageY - $note.offset().top;
            $note.addClass('draggable').data('evtPos', {x: evtX, y: evtY});
        }).on('mouseup', function () {
            $note.removeClass('draggable').removeData('pos');
            //msnry.layout();
        });
        $('body').on('mousemove', function (e) {
            $('.draggable').length && $('.draggable').offset({
                top: e.pageY - $('.draggable').data('evtPos').y,
                left: e.pageX - $('.draggable').data('evtPos').x
            });
        });
    };

    static async add(val) {
        console.log('static add');
        var self = this;
        let addRes;
        Toast("正在写入区块链，请稍等...",10000)
        await $.ajax({
            type: "POST",
            url: '/api/note/add',
            data: {
                uid: val.uid,
                note: val.note,
                key: keyAddr,
            },
            success: ret => {
                if (ret.status === 0) {
                    Toast('Add Note Success!',2500);
                    addRes = {
                        success: true,
                    }
                } else {
                    Event.fire('waterfall')
                    Toast(ret.errorMsg);
                    addRes = {
                        success: false,
                    }
                }
            },
        });
        if (addRes.success) {
            return true;
        } else {
            return false;
        }
        //or
        /*$.post('/api/note/add', {uid:val.uid,noteid:val.noteid,note:val.note})
    .done(function(ret){
        if(ret.status === 0){
            Toast('Add Note Success!');
        }else{
            self.$note.remove();
            Event.fire('waterfall')
            Toast(ret.errorMsg);
        }
    });*/
    };

    //前端加判未登录情况 因为特殊原因服务器后端无法正常拿undefined数据了
    async edit(msg) {

        var self = this;
        userAddr = localStorage.userAddr;

        if (!userAddr) {
            this.recover();
            Toast("游客只可以阅览便签!请先登录!");
            return;
        }

        NProgress.start();
        //后端调合约
        Toast("正在写入区块链，请稍等...",10000)
        //后端发请求
        $.post('/api/note/edit', {
            noteid: self.id,
            uid: userAddr,
            note: msg,
            key: keyAddr,
        }).done(function (ret) {
            if (ret.status === 0) {
                Toast('Update Note Success!',2500);
            } else {
                Toast(ret.errorMsg);
            }
            NProgress.done();
        }).fail(ret=>{
            console.log('editAjax failed');
            this.recover();
            Toast("网络异常")
            NProgress.done();
        })

        //前端调合约方法，metamask需要登录
        /*let uid = userAddr,
            noteid = self.id,
            note = msg;
        //注意此处要转为整形
        let noteOwner = await noteContractObj.methods.noteidTouid(noteid).call();
        console.log('=前端====来对比下=====');
        console.log(parseInt(uid),noteOwner,Number(uid)==noteOwner);
        if(uid) {
            if(Number(uid) !== Number(noteOwner)){
                console.log("笔记所有者和笔记修改不是同一人，不允许");
                ctx.response.body = {status: 4, result: "ownerErr", errorMsg: "无法修改他人的便签!"};
                return;
            }
            await noteContractObj.methods.updateNote(noteid, note).send({
                from: uid,
                gas: 300000
            }, (err, result) => {
                if (err) {
                    console.log('updateNoteFailed', err);
                } else {
                    console.log('updateNoteSuccess', result);
                }
            })
        }else {
            console.log('uid为空，游客状态');
        }*/
    };

    //加判未登录情况
    async delete() {

        var self = this;
        userAddr = localStorage.userAddr;
        if (!userAddr) {
            this.recover();
            Toast("游客无法进行删除操作!");
            return;
        }
        NProgress.start();
        msnry.layout();
        console.log(self.id);
        Toast("正在写入区块链，请稍等...",10000)
        $.ajax({
            type: "POST",
            url: '/api/note/delete',
            data: {
                noteid: self.id,
                uid: userAddr,
                key: keyAddr,
            }
        }).done(function (ret) {
            console.dir('delete done,status是：', ret);
            if (ret.status === 0) {
                Toast('Delete Note Success!',2500);
                self.$note.remove();
                Event.fire('waterfall')
            } else {
                Toast(ret.errorMsg);
            }
            NProgress.done();
        });
    };
}

Note.colors = [
    ['#EF5350', '#EF9A9A'], // headColor, containerColor
    ['#EC407A', '#F48FB1'],
    ['#AB47BC', '#CE93D8'],
    ['#5C6BC0', '#9FA8DA'],
    ['#42A5F5', '#90CAF9'],
    ['#26C6DA', '#80DEEA'],
    ['#26A69A', '#80CBC4'],
    ['#9CCC65', '#C5E1A5'],
    ['#D4E157', '#E6EE9C'],
    ['#FFEE58', '#FFF59D'],
    ['#FFCA28', '#FFE082'],
    ['#FFA726', '#FFCC80'],
    ['#8D6E63', '#BCAAA4'],
    ['#78909C', '#B0BEC5'],
    ['#BDBDBD', '#EEEEEE'],
];

export default Note;