import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/admin',
      children: [
        { path: '',  component: () => import('../views/ClientesView.vue') },
        { path: 'cliente/:id',  component: () => import('../views/ClienteInfoView.vue') }
      ]
     
    }
  ],
})
