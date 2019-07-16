/* eslint-disable */
<template>
<nav>
<ul>
<li>
<router-link to="/" exact tag="li">
<pre> </pre>
</router-link>
</li>
<li>
<router-link to="/second" exact tag="li">
<pre> </pre>
</router-link>
</li>
<li>
<router-link to="/third" exact tag="li">
<pre> </pre>
</router-link>
</li>
<li>
<router-link to="/forth" exact tag="li">
<pre> </pre>
</router-link>
</li>
<li>
<router-link to="/fifth" exact tag="li">
<pre> </pre>
</router-link>
</li>
</ul>
</nav>
</template>

<script>
export default{
}
</script>

<style>
nav
{
display: -webkit-box;
width: fit-content;
position: fixed;
top:25%;
}
li
{
list-style-type:circle;
font-size: xx-large;
cursor: pointer;
color: #eee;
font-weight: 900;
}
li :hover
{
color:#fff;
}
.router-link-active
{
list-style-type: disc;
color:#fff;
}

</style>
