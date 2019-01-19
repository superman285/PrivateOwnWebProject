import Vue from 'vue';

var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: [],
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