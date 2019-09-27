<template>
  <div>
    <h2>按照关键字搜索Git排名第一的库(VueResouce)</h2>
    请输入关键字:<input type="text" v-model="searchKeyword" @keyup.enter="search"/>
    <button @click="search">搜索</button>
    <br/>
    <div v-if="loading">
      loading...
    </div>
    <div v-if="result">
      Git排名第一的库:<a :href="href">{{result}}</a>
    </div>
    <div v-if="errormsg">
      错误信息:{{errormsg}}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  // 引入vue-resource模块
  import VueResource from "vue-resource"
  // 使用VueResource插件
  Vue.use(VueResource)

  export default {
    data() {
      return {
        loading: false,
        searchKeyword: 'vue',
        result: '',
        href: ''
      }
    },
    methods: {
      search() {
        const searchKeyword = this.searchKeyword
        if (searchKeyword) {
          const url = `https://api.github.com/search/repositories?q=${searchKeyword}&sort=stars`;
          // 修改状态并初始化数据
          this.loading = true
          this.result = ''
          this.href = ''
          // 发送ajax请求
          this.$http.get(url).then((response) => {
            const result = response.data;
            this.result = result.items[0].name
            this.href = result.items[0].html_url
            this.loading = false
          }, (response) => {
            const result = response.data;
            this.result = result
            this.loading = false
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
