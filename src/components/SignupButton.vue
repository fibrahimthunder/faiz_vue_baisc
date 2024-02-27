<template>
<div class="Signup-container">
<button class="Signup-icon" >

<p class="Signup-text buttonText">Sign up</p>
</button>
</div>
</template>

<script>
export default {
  name: 'SignupButton',
}
</script>


<style>
.Signup-container{
    margin-top: 90px;
    margin-left: 90px;

}
.Signup-icon{
    border-radius: 6px;
    background-color: blue;
    border-color: blue;
    width: 70px;
    height: 35px;
}
.Signup-text{
    color: white;
    margin-top: 4px;
    padding: 2px;
}
</style>