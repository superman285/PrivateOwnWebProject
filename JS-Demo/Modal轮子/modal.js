// 模块化
// js中es6之前没有模块化，多个script标签共用全局作用域
// 定义了的就暴露了

//es6 和 nodejs开始有了模块化

// 立即执行函数中，作用域只在函数中，相当于方法不被暴露，只把部分想用的方法暴露出去，window.modal=modal
// 用立即执行函数模拟模块化
// 这样需要关注引入的顺序，

//node模块化语法
//module.exports = show;
//var show = require("./module1.js")

(function(){


    function modal() {
        
        this.bindEvent = function(){
            var self = this;
            var opens = document.querySelectorAll("[data-modal-open]");
            var closes = document.querySelectorAll("[data-modal-close]");
            var modals = document.querySelectorAll("[data-modal-id]");

            for (let i = 0; i < opens.length; i++) {
                opens[i].addEventListener("click",function(){
                    var id = this.getAttribute("data-modal-open");
                    console.log(id);
                    self.open(id);
                },false)
            }

            for (let i = 0; i < closes.length; i++) {
                closes[i].addEventListener("click",function(){
                    var id = this.getAttribute("data-modal-close");
                    console.log(id);
                    self.close(id);
                },false)
            }

            for (let i = 0; i < modals.length; i++) {
                modals[i].addEventListener("click",function(){
                    var id = this.getAttribute("data-modal-id");
                    console.log(id); //点击别处，向父级冒泡

                    if(id){
                        self.close(id)
                    }

                },false)
            }
        }
        
        this.findModal = function(id) {
            return document.querySelector("[data-modal-id="+id+"]");
        }
        this.open = function(id){
            var curModal = this.findModal(id);
            console.log(curModal);

            if (curModal) {
                curModal.classList.add('open');
                //因为相当于瞬间显示，没有动画，需要来个异步，setTimeout
                setTimeout(function(){
                    curModal.classList.add('visible');
                },0)


                document.querySelector("html").classList.add('lock');
            }
        }

        this.close = function (id) {
            var curModal = this.findModal(id);

            if (curModal) {
                curmodal.classList.remove('visible');
                document.querySelector("html").classList.remove('lock');

            }
        }
        
        
        
    }

    window.model = model;
})()

//优化for循环，用forEach，forEach无法跳出循环无法用break和continue
//es6多了个for of循环

/*
var arr = [1,2,3];
for（var item of arr）{
    console.log(item);
}*/

//自定义事件

var selfEvent = new CustomEvent('modal-open',{detail:{modal:modal}});
modal.dispatchEvent(event);