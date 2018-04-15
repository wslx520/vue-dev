import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Directive from '@/components/Directive'
import Transition from '@/components/Transition'
import Routes from '@/components/Routes'
import subroute1 from '@/components/fragments/subroute1'
import subroute2 from '@/components/fragments/subroute2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      exact: true,
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/directives',
      name: 'directives',
      component: Directive
    },
    {
      path: '/transition',
      name: 'transition',
      component: Transition
    },
    {
      path: '/routes',
      name: 'routes',
      component: Routes,
      children: [
        {
          path: ':name',
          name:'route_sub',
          component: subroute1,
          children: [
            {
              path: 'sub',
              name: 'sub_sub',
              component: subroute1
            }, {
              path: 'sub2',
              name: 'sub_sub2',
              component: subroute2
            }
          ]
        }
      ]
    },
    
  ]
})
