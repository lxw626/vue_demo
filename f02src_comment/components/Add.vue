<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: {
      addComment: {
        type: Function, // 指定属性名和属性值得类型
        required: true // 指定属性值得必要性
      }
    },
    data() {
      return {
        name: "",
        content: ""
      }
    },
    methods: {
      add() {
        const {name, content} = this
        // 验证数据的合法性
        if (!name || !content) {
          alert("姓名或类容不能为空")
          return
        }
        // 将数据封装成comment对象
        const comment = {
          name,
          content
        }
        // 将comment对象添加到comments中
        this.addComment(comment)
        // 清空输入框
        this.name = ""
        this.content = ""
      },

    }
  }
</script>

<style scoped>

</style>
