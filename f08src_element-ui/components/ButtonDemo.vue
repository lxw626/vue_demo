<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger"  @click="startLoading">危险按钮</el-button>
    <el-button type="primary"
               @click="startLoading"
               :loading="isLoading">开始后我自己不能停下来</el-button>
  </div>
</template>

<script>
  export default {
    name: "button-demo",
    data(){
      return{
        isLoading:false
      }
    },
    methods:{
      startLoading(){
        this.isLoading = !this.isLoading
      }
    }

  }
</script>

<style scoped>

</style>
