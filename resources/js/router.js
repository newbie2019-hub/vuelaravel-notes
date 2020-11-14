import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
Vue.use(Router)
const routes =  [
  {
    path: '/',
    component: () => import('./components/Login'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./components/Home'),
  },
]

export default new Router({
  mode: 'history',
  routes
})