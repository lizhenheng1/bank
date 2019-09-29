import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [{
        path: 'role',
        name: 'role',
        component: () => import('@/components/role')
      }, {
        path: 'copy',
        name: 'copy',
        component: () => import('@/components/copy')
      },]
    },
    {
      path: '/error',
      component:error
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
})
