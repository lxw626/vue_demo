<template>
  <div class="todo-footer">
    <label>
      <!--<input type="checkbox" v-model="checkAll"/>-->
      <slot name="selectAll"></slot>
    </label>
    <span>
          <!--<span>已完成:{{completeSize}}</span> / 全部:{{todos.length}}-->
        <slot name="count"></slot>
    </span>
    <!--<button class="btn btn-danger" @click="deleteAllComplete">清除已完成任务</button>-->
      <slot name="deleteComplete"></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
