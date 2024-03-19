<template>
    <div class="LockTextdiv">
        <img class="Locklogo" :src="locklogoes">
        <p class="TextofLock">{{ textofLock }}</p>

        <div class="textlockBtn">
        <SocialButton dynamicBorderRadius="7px" text="Create a free Team" b_borderColor="blue"  textColor="blue" bgColor="transparent"  b_width="208px" b_height="45px"/>
        </div>

    </div>
</template>

<script>
import SocialButton from './SocialButton.vue';
export default {
name: 'lockTextBtn',



components:{
        SocialButton
    },

props:{
    locklogoes:{
        type: String,
        required: true,
    },
    textofLock:{
        type: String,
        required: true, 
    }
}
};
</script>

<style>
.LockTextdiv{
display: flex;
justify-content: center;
margin-top: 90px;
}
.Locklogo{
    height: 55px;
}
.TextofLock{
    margin-top: 20px;
    margin-left: 20px;
}
.textlockBtn{
    margin-left: 20px;
    margin-top: 8px;
}
</style>