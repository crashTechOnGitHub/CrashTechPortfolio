<template>
<div id="secondP">
<p>This is second page
</p>
<animatedText></animatedText>
<div class="section-content">
                        <h1 class="section-title">CrashTech is so easy to use that it’s hard to explain.</h1>
                        <p>We made it really, really simple for people to make a blog and put whatever they want on it. Stories, photos, GIFs, TV shows, links, quips, dumb jokes, smart jokes, Spotify tracks, mp3s, videos, fashion, art, deep stuff. CrashTech is 462 million different blogs, filled with literally whatever.</p>
                    </div>
</div>
</template>
<script>
import animatedText from './animatedText.vue'
export default{
  name: 'secondP',
  components: {
    'animatedText': animatedText
  }
}
</script>
<style>
#secondP
{
background-color:#a8f0d9;
width:100%;
height:-webkit-fill-available;
}
.section-content
{
margin: 1em auto;
    width: 80%;
}
</style>
