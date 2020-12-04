<template>
  <div id="login">
    <div @click="login">测试</div>
  </div>
</template>

<script>
// import UserApi from "@/api/auth/UserApi"
export default {
  name: 'login',
  components: {
    
  },
  methods:{
    login(){
      // this.$ajax.post("/dangerousWeatherReport/list",{
      //     pageNumber:1,
      //     rowNumber:5
      // }).then(res=>{console.log(res)})
      // UserApi.login({
      //   pageNumber:1,
      //     rowNumber:5
      // }).then(res=>{
      //   console.log(res)
      // })
    }
  }
}
</script>

<style>

</style>
