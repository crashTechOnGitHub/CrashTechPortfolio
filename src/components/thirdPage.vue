<template>
<div id="thirdP" >
<p>This is third page
</p>
<animatedIcon></animatedIcon>
<br>
<div style="clear:both">
                        <h1 >Seriously, register for anything you want from here.</h1>
                        <p>Seven post types to get you started. Your brain can do the rest. This thing is yours. Use it however you like.</p>
                    </div>
</div>
</template>
<script>
import animatedIcon from './animatedIcon.vue'
export default{
  name: 'thirdP',
  components: {
    'animatedIcon': animatedIcon
  }
}
</script>
<style>
#thirdP
{
background-color:#b6a8f0;
width:100%;
height:-webkit-fill-available;
}
</style>
