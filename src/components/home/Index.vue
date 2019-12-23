<template>
  <div>
    <Header></Header>
    <p>{{message}}</p>
    <hr/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/common/Header.vue'
  import Footer from '@/components/common/Footer.vue'

  export default{
    name:'Index',
    data(){
      return{
        message:'登陆成功'
      }
    },

    components:{
      Header,Footer,
    }
  }
</script>

<style>
</style>
