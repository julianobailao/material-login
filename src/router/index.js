import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '@/components/Login'
import CardSignIn from '@/components/Login/CardSignIn'
import CardSignUp from '@/components/Login/CardSignUp'
import CardForgotPassword from '@/components/Login/CardForgotPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login,
      children: [
        {
          path: '/',
          name: 'Login',
          component: CardSignIn
        },
        {
          path: '/forgot-password',
          name: 'Login',
          component: CardForgotPassword
        },
        {
          path: '/sign-up',
          name: 'Login',
          component: CardSignUp
        }
      ]
    }
  ]
})