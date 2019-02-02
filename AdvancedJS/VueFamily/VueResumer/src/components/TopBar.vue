<template>
    <div id="topbar">
        <div class="wrapper">
            <span class="logo">Resumer</span>

        <div class="actions">

            <div v-if="logined" class="userActions">
                <span class="welcome">Hello,{{user.username}}</span>
                <v-btn outline color="light-blue accent-4"
                       @click.prevent="signOut">登出</v-btn>
            </div>


            <div v-else class="userActions">
                <v-btn outline color="light-blue accent-3"
                       @click.prevent="test"
                >注册</v-btn>
                <MyDialog title="注册" :visible="signUpDialogVisible"
                          @close="signUpDialogVisible = false">
                    <SignUpForm @success="signIn($event)"></SignUpForm>
                </MyDialog>

                <v-btn @click.prevent="signInDialogVisible=true" outline color="green accent-4">登录</v-btn>
                <MyDialog title="登录" :visible="signInDialogVisible"
                          @close="signInDialogVisible=false">
                    <SignInForm @success="signIn($event)"></SignInForm>
                </MyDialog>


            </div>





            <!--<v-btn outline color="light-blue accent-3">保存</v-btn>
            <v-btn outline color="green accent-4">预览</v-btn>-->
        </div>
        </div>
    </div>
</template>


<script>

    import AV from "leancloud-storage";

    import MyDialog from '@/components/MyDialog';
    import SignUpForm from '@/components/SignUpForm';
    import SignInForm from './SignInForm.vue';

    export default {
        name: "TopBar",
        data(){
            return {
                signUpDialogVisible: false,
                signInDialogVisible: false,
            }
        },
        components: {MyDialog,SignUpForm,SignInForm},
        computed: {
            user(){
                return this.$store.state.user
            },
            logined(){
              return this.user.id
            },
        },
        methods: {
            test(){
                this.signUpDialogVisible=true;
                console.log('AV:',AV);
            },

            signOut() {
                var appId = '93ivy0ImjLvoRTU1SLSw8lnM-gzGzoHsz';
                var appKey = 'Ydqpc6FQV4jXqUImwvcI8T0l';

                /*AV.init({
                    appId,
                    appKey,
                })*/

                AV.User.logOut();
                this.$store.commit('removeUser')
            },
            signIn(user) {
                this.signUpDialogVisible =false;
                this.signInDialogVisible =false;
                this.$store.commit('setUser',user);
            }
        }
    }
</script>

<style scoped lang="scss">
    #topbar{
        background:#ffffff;
        box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
        >.wrapper{
            min-width: 1024px;
            max-width: 1440px;
            margin: 0 auto;
            height:64px;
        }
        >.wrapper{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
        }
        .logo{
            font-size:24px;
            color:#000000;
        }
    }
</style>