import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import first_main from '../views/main/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'first_main',
    component: first_main
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
