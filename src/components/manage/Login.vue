<template>
  <div>
    <Header></Header>
    <br />
    <span class="font-big">账号:</span><el-input class="width-25 font-big" placeholder="请输入账号" v-model="userInfo.username"></el-input>
    <br />
    <br />
    <span class="font-big">密码:</span><el-input class="width-25 font-big" placeholder="请输入密码" v-model="userInfo.password" show-password></el-input>
    <br />
    <p style="margin: 10px;height: 10px;">{{ userInfo.username }}</p>
    <br />
      <el-button type="success" @click="goRegiste">去注册</el-button>
      <el-button type="primary" v-on:click="login">登录</el-button>
    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/common/Header.vue'
  import Footer from '@/components/common/Footer.vue'

  export default{
    name:'Login',
    data(){
      return{
        userInfo:{username:'',password:''},
      }
    },

    components:{
      Header,Footer,
    },

    methods:{
      goRegiste(){
        this.$router.push('/registe')
      },

      login(){
        this.$axios.post('/login',{
          username:this.userInfo.username,
          password:this.userInfo.password
        })
        .then(successResponse =>{

        })
        .catch(failResponse =>{
          this.$message.error('网络不通畅')
        })
      }
    }
  }
</script>

<style scoped>
  @import url("../../assets/css/common.css");
</style>
