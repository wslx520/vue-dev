import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Directive from '@/components/Directive'
import Transition from '@/components/Transition'

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
  ]
})
