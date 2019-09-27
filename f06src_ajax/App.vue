<template>
  <div>
    <VueResourceDemo/>
    <hr>
    <VueAxiosDemo/>
  </div>
</template>

<script>
  import VueResourceDemo from './components/VueResourceDemo.vue'
  import VueAxiosDemo from './components/VueAxiosDemo.vue'
  export default {
    components:{
      VueResourceDemo,
      VueAxiosDemo
    }


  }
</script>

<style scoped>

</style>
