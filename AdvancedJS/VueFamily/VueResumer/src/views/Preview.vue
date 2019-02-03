<template>
    <div id="preview">

        <main>
            <ResumePreview class="rpreview"></ResumePreview>
        </main>


        <v-btn
                color="indigo"
                class="white--text"
                @click="back"
        >
            退出预览
            <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
    </div>
</template>

<script>


    import '../assets/reset.css';

    import TopBar from '../components/TopBar.vue';
    import ResumeEditor from '../components/ResumeEditor';
    import ResumePreview from '../components/ResumePreview';
    import MyDialog from '../components/MyDialog';

    export default {
        name: "Preview",
        components: {
            TopBar,
            ResumeEditor,
            ResumePreview,
            MyDialog
        },
        methods: {
            back(){
                history.back();
            }
        }
    }
</script>

<style scoped lang="scss">


    #preview {
        height: 100vh;
        display: flex;
        flex-direction: column!important;
        min-width: 1024px;
        background: #EAEBEC;
    }

    main {
        min-width: 1024px;
        max-width: 1440px;
        margin-top: 16px;
        margin-bottom: 16px;
        display: flex!important;
        flex: 1;
        justify-content: space-between;
        padding: 0 16px;
        align-self: center;
        width: 100%;
    }


    .rpreview {
        flex: 1;
        margin-left: 16px;
        background:#ffffff;
        box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    }

</style>