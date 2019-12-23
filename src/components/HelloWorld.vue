<template>
  <div class="hello">
    <Header></Header>
    <br />

    <h1>{{ msg }}</h1>
    <el-input style="width: 20%;" v-model="msg"/>
    <h1>{{ author }}</h1>
    <h2>{{info}}</h2>


    <el-button type="primary" v-model="checked" />
    <el-button loading type="info" loading-text="加载中..." />
    <el-button type="danger" v-on:click="alert">弹出框</el-button>
    <el-button type="primary" v-on:click="go">跳转登录</el-button>
    <el-button plain type="primary"  v-on:click="showSP">选购</el-button>
    <ul>
      <li>
        <a
          href="https://baidu.com"
          target="_blank"
        >
          百度
        </a>
      </li>
      <li>
        <a
          href="http://xiaofuwu.club"
          target="_blank"
        >
          小吴俱乐部
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>

    </ul>

    <br />
    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export default {
   name: 'HelloWorld',
   data() {
    return {
      msg: '这是我的第一个vue项目',
      author: '吴志维',
      checked: true,
      info:null,

      value1: 0,
      value2: 'a',
       option1: [
            { text: '全部商品', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 }
          ],
          option2: [
            { text: '默认排序', value: 'a' },
            { text: '好评排序', value: 'b' },
            { text: '销量排序', value: 'c' },
          ],
    }
  },

  methods: {
      alert() {
        Dialog.alert({
          title: '标题',
          message: '弹窗内容'
        }).then(() => {
          // on close
        });
      },
      showSP(){
        this.$refs.childShop.show=true
      },
      go(){
        this.$router.push("login")
      },
  },
  components: {
    Header,Footer,
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
