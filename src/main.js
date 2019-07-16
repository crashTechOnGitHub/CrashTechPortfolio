// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Vue.use(Vuetify)

Vue.config.productionTip = false
/* Vue.mixin({
  methods: {
    returnPageNo: patternName => {
      switch (patternName.toLowerCase()) {
        case 'firstp' : return 1
        case 'secondp': return 2
        case 'thirdp': return 3
        case 'forthp' : return 4
        default: return 1
      }
    }
  }})
*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})
