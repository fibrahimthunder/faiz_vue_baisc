<template>

<div>
<div class="container">
<label class="text-email" for="uname">Email</label>
    <br>
    <input class="email" type="text" name="uname" required>
    <br>
    <br>
    <label class="text-password" type="psw">Password</label>
    <br>
    <input class="Password" type="password" name="psw" required>
    <br>
    <br>
    <button class="login-button" type="submit">Login</button>
    <label>
    </label>
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
    width: 278px;
    
    background-color: black;
    justify-content: center;
    padding: 20px;
}
.text-email{
    color: white;
    margin-left: 20px;
    margin-left: 20px;
}
.text-password{
    color: white;
    margin-left: 20px;
    margin-left: 20px;
}
.email{
    border-radius: 6px;
    margin-left: 20px;
    margin-left: 20px;
    width: 210px;
    height: 23px
}
.Password{
    border-radius: 6px;
    margin-left: 20px;
    margin-left: 20px;
    width: 210px;
    height: 24px;
}
.login-button{
    width: 220px;
    border-radius: 6px;
    padding: 7px;
    background-color: blue;
    color: white;
    margin-left: 30px;
    margin-top: 29px;
}
</style>
