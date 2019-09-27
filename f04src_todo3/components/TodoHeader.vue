<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
           v-model="title" @keyup.enter="addItem"/>
  </div>
</template>

<script>
    export default {
      props:{
        // addTodo:Function
      },
      data(){
        return {
          title:'',
        }
      },
      methods:{
        addItem(){
          // 1.验证数据合法性
          const title = this.title.trim()
          if(!title){
            alert("不能为空")
          }
          // 2.封装对象
          const todo = {
            title,
            complete:false
          }
          // 3.添加到todos里面
          // this.addTodo(todo) 调用函数
          this.$emit('addTodo',todo) // 出发addTodo事件,传递todo数据
          // 4.清除输入
          this.title = ''
        }
      }
    }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
