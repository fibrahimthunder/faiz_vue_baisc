import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginScreen from '@/screens/LoginScreen'
import SignUpScreen from '@/screens/SignUpScreen'


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
      name: 'LoginScreen',
      component: LoginScreen
    },
    {
      path: '/signup',
      name: 'SignUpScreen',
      component: SignUpScreen
    }

  
  ]
})