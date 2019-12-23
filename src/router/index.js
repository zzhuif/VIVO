import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/manage/Login.vue'
import Index from '@/components/home/Index.vue'
import Registe from '@/components/manage/Registe.vue'

Vue.use(Router)

export default new Router({
  // mode:'history',

  routes: [
    {
        path: '/',
        redirect: '/login'
    },

    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
   {
     path: '/Index',
     name: 'Index',
     component: Index
   },
   {
     path: '/Login',
     name: 'Login',
     component: Login
   },
   {
     path: '/Registe',
     name: 'Registe',
     component: Registe
   },
  ]
})
