import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/login/'
import Home from './pages/home/'
import Chance from './pages/chance/'
import Intention from './pages/intention/'
import Course from './pages/course/'
import Newbuild from './components/newbuild/'

Vue.use(VueRouter)
var router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: '/',
    component: Home
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/chance',
    name: 'chance',
    component: Chance,
    children:[]
  }, {
    path: '/intention',
    name: 'intention',
    component: Intention
  }, {
    path: '/course',
    name: 'course',
    component: Course
  }, {
    path: '/ranking',
    name: 'ranking',
    component: Course
  }, {
    path: '/newbuild',
    name: 'newbuild',
    component: Newbuild
  }]
})

export default router

