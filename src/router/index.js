import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main/Main'
import Enshrine from '@/components/Enshrine/Enshrine'
import Mine from '../components/Mine/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: 'Main', // 设置默认路由当进入时
      children: [
        {
          path: 'Main',
          component: Main
        },
        {
          path: 'Enshrine',
          component: Enshrine
        },
        {
          path: 'Mine',
          component: Mine
        }
      ]
    }
  ]
})
