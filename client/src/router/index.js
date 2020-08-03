import Vue from 'vue'
import Router from 'vue-router'
import Data from '../components/Data.vue'
import Report from '../components/Report.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Data
    },
    {
      path: '/reports',
      name: 'report',
      component: Report
    }
  ]
})