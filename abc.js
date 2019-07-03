Vue.config.productionTip = true

Vue.component('start', {
    template: '#start'
})

Vue.component('next', {
    template: '#next'
})

Vue.component('back', {
    template: '#back'
})

new Vue({
    el: '#app',

    data: {
        page: 'back'
    },

    methods: {
        onChangePage(to) {
            this.page = to
        }
    }
})