<template>
    <div class="loginbtn-container">
        <button class="loginbtn-icon" >
        
        <h4 class="loginbtn-text loginbtnText">Log in</h4>
        </button>
        </div>
</template>


<script>
export default {
  name: "Loginbutton",
}
</script>

<style>
.loginbtn-icon{
    border-radius: 6px;
    background-color: white;
    border-color: blue;


}
.loginbtn-text{
    color: blue;
    margin: 0px;
    padding: 5px;
    
}
.loginbtn-icon:hover{
    background-color: rgb(176, 240, 240);
}

</style>