<template>
    <div>

        <h1>创建你的钱包</h1>

        <v-layout align-start justify-space-between>
        <v-text-field
                outline
                :append-icon="showpwd ? 'visibility_off' : 'visibility'"
                :type="showpwd ? 'text' : 'password'"
                label="input password"
                class="input-password"
                @click:append="showpwd = !showpwd"
        ></v-text-field>
        <v-btn fab dark color="indigo">
            <v-icon dark>add</v-icon>
        </v-btn>
        </v-layout>

    </div>
</template>

<script>
    export default {
        name: "CreateAccount",
        data(){
            return {
                showpwd: true,
                password: 'Password'
            }
        }
    }
</script>

<style scoped lang="scss">

    h1 {
        margin-top: 2rem;
    }
    .layout {
        margin: 2rem auto;
        width: 80%;
    }
    .v-btn {
        margin-top: -1px;
    }
</style>