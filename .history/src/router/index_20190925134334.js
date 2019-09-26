import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Result from '../views/result.vue'
import Pass from '../views/pass.vue'
import Button from '../components/dialog.vue'
import First from '../views/first.vue'
import Third from '../views/third.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/pass',
    name: 'pass',
    component: Pass,
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
  },
  {
    path: '/button',
    name: 'button',
    component: Button,
  },
  {
    path: '/first',
    name: 'first',
    component: First
  },
  {
    path: '/second',
    name: 'second',
    component: Second
  },
  {
    path: '/third',
    name: 'third',
    component: Third
  }



  ]


})