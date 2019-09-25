<template>
  <div>
    <p class="title">{{msg}}</p>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msg:"HelloWorld"
      }
    }
  }

</script>
<style>
  .title{
    color: red;
    background: yellow;
    font-size: 50px;
  }

</style>
