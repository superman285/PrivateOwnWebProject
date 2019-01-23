<template>
    <div id="topbar">
        <div class="wrapper">
            <span class="logo">Resumer</span>

        <div class="actions">
            <v-btn outline color="light-blue accent-3">保存</v-btn>
            <v-btn outline color="green accent-4">预览</v-btn>
        </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "TopBar"
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