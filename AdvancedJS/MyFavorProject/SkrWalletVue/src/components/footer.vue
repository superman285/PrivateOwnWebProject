<template>
    <div id="myfooter">
        <!--<div class="divide"></div>-->
        <v-progress-linear class="bottomProgress" :indeterminate="true" color="rgb(0, 255, 255)"></v-progress-linear>
        <div class="bottominfo">
            <img src="../assets/footer-logo.png" alt="">
            <div class="work-info">
                <p>Made with ❤️by <a target="_blank" @click="goBlog" @mouseover="toastMe"><span>superman285</span></a></p>
                <p>Front-end framework: <span>Vue</span></p>
                <p>Back-end framework: <span>Koa2</span></p>
                <!--<p>ICP: <span>粤ICP备19022229号</span></p>-->
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
                    image: "https://i.loli.net/2019/03/12/5c87d728dc685.png",
                    displayMode: 1,
                    imageWidth: 55,
                    message: "Welcome to My GitHub !",
                    theme: "dark",
                    timeout: 3000,
                    position: "bottomCenter",
                    progressBarColor: 'rgb(0, 255, 184)',
                    transitionIn: 'flipInX',
                    transitionOut: 'flipOutX',
                    layout:1,
                    overlay: true,
                    /*onClosed: ()=>{
                        this.goBlog();
                    },*/
                    buttons: [
                        ['<button style="border-radius:15px"><b>GO</b></button>',()=> {
                            this.goBlog();
                        }]
                    ],
                })
            },
            goBlog(){
                window.open("https://skr.dog");
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
        .bottomProgress {
            margin: 0;
            background: rgb(105, 255, 255);
            height: 6px!important;
        }
        .bottominfo {
            //height: 12rem;
            padding: 1rem 0 0.5rem;
            text-align: left;
            background: #30476D;
            img {
                //margin-top: 1rem;
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