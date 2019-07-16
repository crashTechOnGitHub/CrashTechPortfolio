import Vue from 'vue'
import Router from 'vue-router'
/*
import HelloWorld from '@/components/HelloWorld'
*/
import firstP from '@/components/firstPage'
import secondP from '@/components/secondPage'
import thirdP from '@/components/thirdPage'
import forthP from '@/components/forthPage'
import fifthP from '@/components/fifthPage'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstP',
      component: firstP
    },
    {
      path: '/second',
      name: 'secondP',
      component: secondP
    },
    {
      path: '/third',
      name: 'thirdP',
      component: thirdP
    },
    {
      path: '/forth',
      name: 'forthP',
      component: forthP
    },
    {
      path: '/fifth',
      name: 'fifthP',
      component: fifthP
    }
  ],
  mode: 'history'
})
