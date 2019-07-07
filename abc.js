Vue.config.productionTip = false

Vue.component('start', {
    template: '#start'
})                          /* COMPONENT FOR FIRST PAGE */

Vue.component('next', {
    template: '#next'
})                          /* COMPONENT FOR SECOND PAGE */

var one = new Vue({         /* CREATION OF FIRST VUE INSTANCE */
    el: '#app',

    data: {
        page: 'start'
    },

    methods: {
        slide(to) {         /* EXECUTING METHOD FOR SLIDING OF PAGE */
            this.page = to
        }
    }
});
