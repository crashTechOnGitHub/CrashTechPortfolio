<template>
<div id="forthP" >
<p>This is forth page
</p>
</div>
</template>
<script>
export default{
  name: 'forthP',
  created () {
    console.log(this.$route.query.title)
  }
}
</script>
<style scoped>
#forthP
{
background-color:orange;
width:100%;
height:-webkit-fill-available;
}
</style>
