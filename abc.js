Vue.config.productionTip = false

Vue.component('start', {
    template: '#start'
})

Vue.component('next', {
    template: '#next'
})

var one = new Vue({
    el: '#app',

    data: {
        page: 'start'
    },

    methods: {
        slide(to) {
            this.page = to
        }
    }
});