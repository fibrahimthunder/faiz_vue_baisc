<template>
<div>
<div class="container">

    <div style="
    flex-direction: column;
    display: flex;
    width: 50%;
    
    justify-content: center;">

    <label class="text-email" >Email</label>
    <input class="email" type="text"  required>
    <label class="text-password" >Password</label>
    <input class="Password" type="password" name="psw" required>
    <button class="login-button" type="submit">Login</button>
    
</div>
</div>
</div>
</template>
<script>
export default {
  name: 'LoginSection'
}
</script>
<style>
.container{
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    width: 300px;
    background-color: white;
    justify-content: center;
    align-items: center;
    height: 200px;
    border: 1px solid black;
}
.text-email{
    color: black;
    cursor: pointer;
    margin-bottom: 3px;
    font-weight: bold;
    width: 100%;
}
.email{
    border-radius: 8px;
    
    height: 23px;
    padding: 3px;
    margin-bottom: 18px;
    border-color: none;
}
.text-password{
    color: black;
    cursor: pointer;
    margin-bottom: 3px;
    font-weight: bold;
}
.Password{
    border-radius: 8px;
    height: 23px;
    padding: 3px;
}
.login-button{
    border-radius: 6px;
    padding: 8px;
    background-color:  rgb(65, 65, 238);;
    color: white;
    margin-top: 18px;
    border-color: none;
    cursor: pointer;
}
.login-button:hover{
    background-color: blue;
}
</style>