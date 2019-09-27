<template>
  <div>
    <h2>按照关键字搜索Git排名第一的库(axios)</h2>
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
  import axios from 'axios'

  export default {
    data() {
      return {
        loading: false,
        searchKeyword: 'react',
        result: '',
        href: '',
        errormsg:''
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
          axios.get(url).then((response) => {
            const result = response.data;
            this.result = result.items[0].name
            this.href = result.items[0].html_url
            this.loading = false
          }).catch(error=>{
            this.errormsg=error
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
