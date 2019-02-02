<template>
    <div class="wrapper" v-show="visible">
        <div class="dialog">
            <header>
                <h3>{{title}}</h3>
                <v-btn class="close" fab dark small color="green" @click="close">
                    <v-icon dark>close</v-icon>
                </v-btn>
            </header>
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyDialog",
        props: ['title', 'visible'],
        methods: {
            close(){
                this.$emit('close')
            }
        }
    }
</script>

<style scoped lang="scss">

    .wrapper{
        height: 300px;
        position: fixed;
        z-index: 1;
        background: hsla(0, 0%,0%,0.25);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dialog{
        background: white;
        min-height: 4em;
        min-width: 8em;
        > header{
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        > main{
            margin-top: 0;
        }
    }

</style>