<template>
    <div>
        <form @submit.prevent="signIn">
            <div class="row">
                <label>用户名</label>
                <v-text-field class="userfield" type="text" v-model="formData.username" required></v-text-field>
            </div>
            <div class="row">
                <label >密码</label>
                <v-text-field class="pwdfield" type="password" v-model="formData.password" required></v-text-field>
            </div>
            <div class="actions">
                <v-btn type="submit" class="sub-btn" @click="">提交</v-btn>
                <span class="errorMessage">{{errorMessage}}</span>
            </div>
        </form>
    </div>
</template>

<script>
    import getErrorMessage from '../utils/getErrorMessage'
    import AV from "leancloud-storage";
    import getAVUser from '../utils/getAVUser.js'

    export default {
        name: "SignInForm",
        data:()=>({
            formData: {
                username: 'sin',
                password: 'ss'
            },
            errorMessage: ''
        }),
        methods: {
            signIn(){

                var appId = '93ivy0ImjLvoRTU1SLSw8lnM-gzGzoHsz';
                var appKey = 'Ydqpc6FQV4jXqUImwvcI8T0l';

                /*AV.init({
                    appId,
                    appKey,
                })*/
                let {username, password} = this.formData;
                AV.User.logIn(username,password).then(() =>{
                    this.$emit('success',getAVUser())
                }, (error)=> {
                    alert(JSON.stringify(error));
                    this.errorMessage = getErrorMessage(error)
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    label {
        font-weight: bold;
        color: #9CCC65;
    }

    .userfield, .pwdfield{
        margin-top: -1rem;
    }

    .sub-btn {
        margin-left: 0;
    }
</style>