import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Layout,
      redirect: '/dashboard',
      hidden: false,
      children: [{
       path: 'dashboard',
        component: () => import('@/views/dashboard/index')
      }]
    }
  ]
})
