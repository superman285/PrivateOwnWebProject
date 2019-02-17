import "../../sass/note.scss";

import {Toast} from "../mod/toast";
import Event from "./event";
import {msnry} from "../app";


//此处到时替换成登录人的地址 动态获取
let userAddr = localStorage.userAddr;

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
        }else{
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

    edit(msg) {
        var self = this;
        userAddr = localStorage.userAddr;
        $.post('/api/note/edit', {
            noteid: self.id,
            uid: userAddr,
            note: msg
        }).done(function (ret) {
            if (ret.status === 0) {
                Toast('Update Note Success!');
            } else {
                Toast(ret.errorMsg);
            }
        })
    };
    
    

    static async add(val) {
        console.log('static add');
        var self = this;
        let addRes;
        await $.ajax({
            type: "POST",
            url: '/api/note/add',
            data: {
                uid: val.uid,
                note: val.note
            },
            success: ret => {
                if (ret.status === 0) {
                    Toast('Add Note Success!');
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
        if(addRes.success){
            return true;
        }else{
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

    //要判是否登录，还没判
    async delete() {
        var self = this;
        msnry.layout();
        
        let result = await $.ajax({
            type: "GET",
            url: '/checkLogin',
        });
        console.log('await result',result);
        console.log(self.id);

        if(result.login) {
            $.ajax({
                type: "POST",
                url: '/api/note/delete',
                data: {noteid: self.id,uid: userAddr}
            }).done(function (ret) {
                console.dir('delete done,status是：', ret);
                if (ret.status === 0) {
                    Toast('Delete Note Success!');
                    self.$note.remove();
                    Event.fire('waterfall')
                } else {
                    Toast(ret.errorMsg);
                }
            });
        }else {
            Toast('亲,不能删除别人的便签哦!')
        }
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