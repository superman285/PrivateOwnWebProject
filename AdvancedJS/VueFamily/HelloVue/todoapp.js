import Vue from 'vue';
import AV from 'leancloud-storage';

var APP_ID = '93ivy0ImjLvoRTU1SLSw8lnM-gzGzoHsz';
var APP_KEY = 'Ydqpc6FQV4jXqUImwvcI8T0l';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
    words: 'Hello World!'
}).then(function(object) {
    console.log('LeanCloud Rocks!');
})

var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: [],
        actionType: 'signUp',
        formData: {
            username: '',
            password: ''
        },
        currentUser: null,
    },
    created(){
      window.onbeforeunload = function(){
          console.log('第一个this',this);
          let dataString = JSON.stringify(this.todoList);
          window.localStorage.setItem('myTodos',dataString);
      }


      let oldDataString = window.localStorage.getItem('myTodos');
        console.log('olddatastr',oldDataString);
        if (oldDataString!='undefined') {
            console.log('有data');
            let oldData = JSON.parse(oldDataString);
            console.log('第二个this',this);
            this.todoList = oldData || [];
        }else{
            console.log('datastr undefined');
            
        }

        this.currentUser = this.getCurrentUser();
    },
    methods: {
        addTodo: function(){
            this.todoList.push({
                title: this.newTodo,
                createdAt: new Date(),
                done: false
            })
            console.log(this.todoList)
            this.newTodo = '';
        },
        removeTodo: function(todo){
            console.log('remove的this',this);
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index,1);
        },
        signUp: function(){
            console.log(this);
            let user = new AV.User();
            //大小写注意
            user.setUsername(this.formData.username);
            user.setPassword(this.formData.password);
            user.signUp().then((loginedUser)=>{
                console.log('this来了');
                console.log(this);
                this.currentUser = this.getCurrentUser();
            },function (err) {
                console.log('loginedUser Err');
                alert('注册failed')
            })
        },
        login: function () {
            AV.User.logIn(this.formData.username,this.formData.password).then(
                loginedUser=>{
                    console.log(loginedUser);
                    this.currentUser = this.getCurrentUser();
                },err=>{
                    console.log('login:',err);
                    alert('登录failed')
                }
            )
        },
        logout: function(){
            AV.User.logOut()
            this.currentUser = null
            window.location.reload()
        },
        getCurrentUser(){
            /*let {id,createdAt,attributes:{username}} = AV.User.current();
            return {id,username,createdAt};*/

            let current = AV.User.current()
            if (current) {
                let {id, createdAt, attributes: {username}} = current
            } else {
                return null
            }
        }
    }
    /*created: function(){
        let i = 0;
        setInterval(()=>{
            /!*this.newTodo = i;
            i+=1;*!/
            console.log(this.newTodo);
        },1000)
    }*/
})