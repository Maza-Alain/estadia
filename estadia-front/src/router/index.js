import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/registro',
      component: () => import('../views/Registro.vue'),
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
