<template>
    <div id="myfooter">
        <div class="divide"></div>
        <div class="bottominfo">
            <img src="../assets/footer-logo.png" alt="">
            <div class="work-info">
                <p>Made with ❤️by <a target="_blank" href="https://skr.dog" @mouseover="toastMe"><span>superman285</span></a></p>
                <p>Front-end framework: <span>Vue</span></p>
                <p>Back-end framework: <span>Koa2</span></p>
            </div>
        </div>

    </div>
</template>

<script>

    import iziToast from "izitoast/dist/js/iziToast.min.js";
    import "izitoast/dist/css/iziToast.min.css";

    export default {
        name: "myfooter",
        methods:{
            toastMe(){
                iziToast.show({
                    iconUrl: "https://i.loli.net/2019/03/12/5c87d1b29f3f4.jpg",
                    imageWidth: 100,
                    displayMode: 1,
                    message: "Welcome to My GitHub !",
                    theme: "dark",
                    timeout: 4000,
                    position: "bottomLeft"
                })
            }
        }
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
                margin-top: 1rem;
                margin-left: 1rem;
                height: 3.2rem;
            }
        }
        .work-info {
            margin-left: 1rem;
            color: white;
            a {
                text-decoration: none;
            }
            p{
                margin: .1rem;
            }
            span {
                font-weight: bold;
                color: #24cac1;
            }
        }

    }

</style>