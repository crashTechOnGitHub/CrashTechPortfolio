<template>
  <div id="app">
  <navigator></navigator>
  <main>
 <transition
        :name="transitionName"
        >
    <router-view ></router-view>
    </transition>
    </main>
  </div>
</template>

<script>
import first from './components/firstPage.vue'
import second from './components/secondPage.vue'
import third from './components/thirdPage.vue'
import forth from './components/forthPage.vue'
import fifth from './components/fifthPage.vue'
import navigator from './components/navigator.vue'

export default {
  name: 'App',
  data () {
    return {
      pageNo: 0,
      transitionName: 'slide-down'
    }
  },
  created () {
    var that = this
    this.$router.beforeEach((to, from, next) => {
      that.transitionName = that.returnUpOrDown(that.returnPageNo(from.name), that.returnPageNo(to.name))
      next()
    })
  },

  components: {
    'first': first,
    'second': second,
    'third': third,
    'forth': forth,
    'fifth': fifth,
    'navigator': navigator

  },
  methods: {
    returnPageNo (patternName) {
      switch (patternName.toLowerCase()) {
        case 'firstp' : return 1
        case 'secondp': return 2
        case 'thirdp': return 3
        case 'forthp' : return 4
        case 'fifthp' : return 5
        default: return 1
      }
    },
    returnUpOrDown (from, to) {
      if (from < to) { return 'slide-up' } else { return 'slide-down' }
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

/* to shutter down */
.slide-down-enter-active{
    overflow: hidden;
    transition: -webkit-transform 600ms linear;
    transition: transform 600ms linear;
}

.slide-down-enter{
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
}
.slide-down-leave-active{
transition: -webkit-transform 600ms linear;
    transition: transform 600ms linear;
    -webkit-transform-origin: top;
    transform-origin: top;
  position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
}
.slide-down-leave{
   -webkit-transform: translateY(100%);
    transform: translateY(100%);
}

/* to shutter up */

.slide-up-enter-active{
    overflow: hidden;
    transition: -webkit-transform 600ms linear;
    transition: transform 600ms linear;
}

.slide-up-enter{
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
}
.slide-up-leave-active{
transition: -webkit-transform 600ms linear;
    transition: transform 600ms linear;
    -webkit-transform-origin: top;
    transform-origin: top;
  position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
}
.slide-up-leave{
   -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
}
</style>
