import Vue from 'vue'
import Router from 'vue-router'
import Choose from '../views/choose.vue'
import Result from '../views/result.vue'
import Pass from '../views/pass.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'choose',
    component: Choose
  },
  {
    path: '/pass',
    name: 'pass',
    component: Pass
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  },
  {
    path: '/choose',
    name: 'choose',
    component: Choose,
    children: [{
      path: 'first',
      name: 'first',
      component: () => import('../views/first.vue'),
      children: [{
        path: 'rank',
        name: 'rankList1',
        component: () => import('../views/rankList1')
      }

      ]
    },
    {
      path: 'second',
      name: 'second',
      component: () => import('../views/second.vue'),
      children: [{
        path: 'rank',
        name: 'rankList2',
        component: () => import('../views/rankList2')
      }

      ]
    },
    {
      path: 'third',
      name: 'third',
      component: () => import('../views/third.vue'),
      children: [{
        path: 'rank',
        name: 'rankList3',
        component: () => import('../views/rankList3')
      }

      ]
    },
    {
      path: 'forth',
      name: 'forth',
      component: () => import('../views/forth.vue'),
      children: [{
        path: 'rank',
        name: 'rankList4',
        component: () => import('../views/rankList4')
      }

      ]
    }
    ]

  }
  ]
})