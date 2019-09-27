<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<TodoHeader :addTodo="addTodo"/>-->
      <TodoHeader @addTodo="addTodo"/> <!--绑定自定义事件监听(代替传递函数,适用于父子组件)-->
      <!--<TodoHeader ref="header"/>-->
      <!--<TodoList :todos="todos" :deleteTodo="deleteTodo"/>-->
      <TodoList :todos="todos" />
      <todo-footer :todos="todos" :selectAll="selectAll" :deleteCompleteTodos="deleteCompleteTodos"/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from "./components/TodoHeader.vue"
  import TodoList from "./components/TodoList.vue"
  import TodoFooter from "./components/TodoFooter.vue"
  import PubSub from 'pubsub-js'

  export default {
    data(){
      return {
        todos:JSON.parse(localStorage.getItem("todos_key")||'[]')
      }
    },
    mounted(){
      // this.$refs.header.$on('addTodo',this.addTodo)
      // 订阅消息
      PubSub.subscribe('deleteTodo', (msg, index)=>{
        this.deleteTodo(index)
      })
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      deleteCompleteTodos(){
        this.todos = this.todos.filter(todo=>!todo.complete)
      },
      selectAll(isSelectAll){
        this.todos.forEach(todo => todo.complete = isSelectAll)
      }
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    },
    watch:{
      todos:{
        deep:true,
        handler:function(value){
          console.log(JSON.stringify(value));
          localStorage.setItem("todos_key",JSON.stringify(value))
        }
      }
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
