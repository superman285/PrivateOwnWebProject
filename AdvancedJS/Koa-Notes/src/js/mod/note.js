import "../../sass/note.scss";

import {Toast} from "../mod/toast";
import Event from "./event";

class Note {

//暂不支持静态属性写在外面的定义方式，先写在constructor里头 用this吧

    constructor(opts) {
        this.defaultOpts = {
            id: '',   //Note的 id
            $ct: $('#content').length > 0 ? $('#content') : $('body'),  //默认存放 Note 的容器
            context: 'input here'  //Note 的内容
        };
        this.initOpts(opts);
        this.createNote();
        this.setStyle();
        this.bindEvent();

    }

    initOpts(opts) {
        this.opts = $.extend({}, this.defaultOpts, opts || {});
        if (this.opts.id) {
            this.id = this.opts.id;
        }
    }

    createNote() {
        console.log($);
        let tpl = '<div class="note item">'
            + '<div class="note-head"><span class="delete">&nbsp;&times;</span></div>'
            + '<div class="note-ct" contenteditable="true"></div>'
            + '</div>';
        this.$note = $(tpl);
        this.$note.find('.note-ct').html(this.opts.context);
        this.opts.$ct.append(this.$note);
        if (!this.id) this.$note.css('bottom', '10px');
    }

    setStyle() {
        let color = Note.colors[Math.floor(Math.random() * 15)];
        this.$note.find('.note-head').css('background-color', color[0]);
        this.$note.find('.note-ct').css('background-color', color[1]);
    }

    setLayout() {
        var self = this;
        if (self.clk) {
            clearTimeout(self.clk);
        }
        self.clk = setTimeout(function () {
            Event.fire('waterfall');
        }, 100);
    }

    bindEvent() {
        var self = this,
            $note = this.$note,
            $noteHead = $note.find('.note-head'),
            $noteCt = $note.find('.note-ct'),
            $delete = $note.find('.delete');

        $delete.on('click', function () {
            self.delete();
        })

        //contenteditable没有 change 事件，所有这里做了模拟通过判断元素内容变动，执行 save
        $noteCt.on('focus', function () {
            if ($noteCt.html() == 'input here') $noteCt.html('');
            $noteCt.data('before', $noteCt.html());
        }).on('blur paste', function () {
            if ($noteCt.data('before') != $noteCt.html()) {
                $noteCt.data('before', $noteCt.html());
                self.setLayout();
                if (self.id) {
                    self.edit($noteCt.html())
                } else {
                    self.add($noteCt.html())
                }
            }
        });

        //设置笔记的移动
        $noteHead.on('mousedown', function (e) {
            var evtX = e.pageX - $note.offset().left,
                evtY = e.pageY - $note.offset().top;
            $note.addClass('draggable').data('evtPos', {x: evtX, y: evtY});
        }).on('mouseup', function () {
            $note.removeClass('draggable').removeData('pos');
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
        $.post('/api/notes/edit',{
            id: this.id,
            note: msg
        }).done(function(ret){
            if(ret.status === 0){
                Toast('update success');
            }else{
                Toast(ret.errorMsg);
            }
        })
    };

    add(msg){
        console.log('addd...');
        var self = this;
        $.post('/api/notes/add', {note: msg})
            .done(function(ret){
                if(ret.status === 0){
                    Toast('add success');
                }else{
                    self.$note.remove();
                    Event.fire('waterfall')
                    Toast(ret.errorMsg);
                }
            });
    };

    delete(){
        var self = this;
        self.$note.remove();
        $.post('/api/notes/delete', {id: this.id})
            .done(function(ret){
                if(ret.status === 0){
                    Toast('delete success');
                    self.$note.remove();
                    Event.fire('waterfall')
                }else{
                    Toast(ret.errorMsg);
                }
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