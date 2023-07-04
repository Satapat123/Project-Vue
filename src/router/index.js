import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/router-template.vue'),
    children : [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path:'/setting',
        name:'setting',
        component:()=>import('../views/SettingView.vue')
      },
      {
        path:'/contact',
        name:'contact',
        component:()=>import('../views/ContactView.vue')
      },
    ]
  },
  {
    path:'/singin',
    name:'singin',
    component:()=>import('../views/SinginView.vue'),
  },
  {
    path:'/singup',
    name:'singup',
    component:()=>import('../views/SingupView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
