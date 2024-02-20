<template>
<div>
<div class="container">
<label class="text-email" for="uname">Email</label>
    <br>
    <input class="email" type="text" name="uname" required>
    <label class="text-password" type="psw">Password</label>     <br>
    <input class="Password" type="password" name="psw" required>
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
    width: 252px;
    background-color: black;
    justify-content: center;
    padding: 14px;
    height: 203px;
}
.text-email{
    color: white;
    margin-left: 26px;
    height: 2px;
}
.email{
    border-radius: 8px;
    margin-left: 21px;
    width: 206px;
    height: 23px;
    padding: 3px;
    margin-bottom: 18px;
    border-color: none;
}
.text-password{
    color: white;
    margin-left: 26px;
    height: 2px;
}
.Password{
    border-radius: 8px;
    margin-left: 21px;
    width: 206px;
    height: 23px;
    padding: 3px;
}
.login-button{
    width: 214px;
    border-radius: 6px;
    padding: 8px;
    background-color: blue;
    color: white;
    margin-left: 21px;
    margin-top: 18px;
    border-color: none;
}
</style>