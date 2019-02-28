<template>
    <div id="myfooter">
        <div class="divide"></div>
        <div class="bottominfo">
            <img src="../assets/logo.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "myfooter"
    }
</script>

<style scoped lang="scss">
    
    #myfooter {
        position: fixed;
        bottom: 0;
        width: 100%;
        .divide {
            height: 4px;
            background: dodgerblue;
        }
        .bottominfo {
            height: 10rem;
            text-align: left;
            background: #30476D;
            img {
                width: 4rem;
                height: 4rem;
            }
        }

    }

</style>