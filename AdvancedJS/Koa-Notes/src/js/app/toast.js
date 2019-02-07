import "../../sass/toast.scss";

import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

class toast {
    constructor(msg,time) {
        this.msg = msg;
        this.dismissTime = time || 1000;
        this.createToast();
        this.showToast();
    }

    createToast() {
        var tpl = `<div class="toast">${this.msg}</div>`;
        this.$toast = $(tpl);
        $('body').append(this.$toast);
        console.log('createToast');
    };

    showToast() {
        var self = this;
        this.$toast.fadeIn(300,()=>{
            setTimeout(()=>{
                self.$toast.fadeOut(300,()=>{
                    self.$toast.remove();
                });
            },self.dismissTime)
        });
        console.log('showToast');
    };
}

function Toast(msg,time) {
    return new toast(msg,time)
}

var ak = Toast('nihao',3000);

//加入后可以直接用,不需要再xxx.toast或xxx.Toast
window.toast = toast;
window.Toast = Toast;

//module.export.Toast = Toast;


export {toast,Toast};

//Toast不是对象 所以不可module.export = Toast
//使用时 const toaMod = require('toast.js') toaMod.Toast('use',1000)
//或者简单点 const Toast = require('toast.js').Toast;