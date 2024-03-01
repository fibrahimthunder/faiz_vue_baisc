<template>
    <div class="containerEl">
        <div class="sidebar">
            <h1>FunCoding</h1>
            <ul class="menu">
                <li><a href="#"><i class="fa-solid fa-user"></i>Dasboard</a></li>
                <li><a href="#"><i class="fa-solid fa-user"></i>Account</a></li>
                <li><a href="#"><i class="fa-solid fa-user"></i>Mails</a></li>
                <li><a href="#"><i class="fa-solid fa-user"></i>Files</a></li>
                <li><a href="#"><i class="fa-solid fa-user"></i>Settings</a></li>
                <li><a href="#"><i class="fa-solid fa-user"></i>Help</a></li>
            </ul> 
            <div class="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-facebook"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Stacknav'
  }
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
body{
    background-color: rgb(168, 159, 159);
}
.containerEl{
    display: flex;
    position: relative;
}
.sidebar{
    background-color: rgb(216, 81, 81);
    height: 100%;
    width: 230px;
    position: fixed;
}
li{
    list-style: none;
    padding: 15px;
}
li:hover{
    background-color: rgb(149, 153, 153);
}
a{
    color: white;
    text-decoration: none;
    font-size: 18px;
}
h1{
    color: white;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 12px;
    text-transform: uppercase;
}
</style>