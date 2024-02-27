import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginScreen from '@/screens/LoginScreen'
import SignUpScreen from '@/screens/SignUpScreen'
import Text from '@/components/Text'
import Google from '@/components/Google'
import SignupButton from '@/components/SignupButton'
import Searchbar from '@/components/Searchbar'

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
    },
    {
      path: '/Text',
      name: 'Text',
      component: Text    
    },
    {
      path: '/Google',
      name: 'Google',
      component: Google
    },
    {
      path: '/SignupButton',
      name: 'SignupButton',
      component: SignupButton
    },
    {
      path: '/Searchbar',
      name: 'Searchbar',
      component: Searchbar
    }
  ]
})