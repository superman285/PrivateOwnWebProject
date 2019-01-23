<template>
    <div id="app">
        <header>
            <TopBar></TopBar>
        </header>
        <main>
            <ResumeEditor class="reditor"></ResumeEditor>
            <ResumePreview class="rpreview"></ResumePreview>
        </main>
    </div>
</template>

<script>
    import './assets/reset.css';

    import TopBar from './components/TopBar';
    import ResumeEditor from './components/ResumeEditor';
    import ResumePreview from './components/ResumePreview';


    export default {
        name: 'app',
        components: {
            TopBar,
            ResumeEditor,
            ResumePreview
        }
    }


</script>

<style lang="scss">

    #app {
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
    
    .reditor {
        width: 35%;
        background:#ffffff;
        box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    }
    
    .rpreview {
        flex: 1;
        margin-left: 16px;
        background:#ffffff;
        box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    }

</style>