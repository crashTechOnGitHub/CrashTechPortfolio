<template>
<div id="firstP" v-on:scroll="changepage" >
<header>header</header>
<p v-on:keyup.enter="changepage">This is first page
</p>
  <footer @click="changepage">
      <p> Decode CrashTech</p>
    </footer>

<!--<button class="footer" type="button" @click="changepage">Decode CrashTech!</button>-->
</div>
</template>
<script>
import footer from './footer.vue'

export default{
  data () {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }
  },
  name: 'firstP',
  methods: {
    changepage () {
      this.$router.push('second')
    }
  },
  components: {
    'footery': footer
  }}
</script>
<style scoped>
#firstP
{
background-color:#a8e3f0;
background-image:url('../assets/mainPage.png');
background-repeat:no-repeat;
width:100%;
height:-webkit-fill-available;
}
footer{
background: #0dadad;
    height: 15%;
    width: -webkit-fill-available;
    margin-left: 0.5em;
    margin-right: 0em;
    position: relative;
    cursor:pointer;
    top: 80%;
}
</style>
