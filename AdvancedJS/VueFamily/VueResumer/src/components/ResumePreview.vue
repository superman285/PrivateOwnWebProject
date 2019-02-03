<template>
    <div id="resume-preview">
        <section class="profile" v-if="resume.profile">
            <h1 class="display-3">{{resume.profile.name}}</h1>
            <v-btn class="profile-title" depressed>{{resume.profile.title}}</v-btn>
            <span>{{resume.profile.city}}&nbsp;&nbsp;</span>
            <span>{{resume.profile.birthday}}</span>
        </section>

        <section class="project" v-if="resume.projects">
            <h2>项目经历</h2>
            <ul>
                <li v-for="item in resume.projects">
                    <h3>{{item.name}}</h3>
                    <hr>
                    <span>{{item.content}}</span>
                </li>
            </ul>
        </section>

        <section class="work-history" v-if="resume['work history']">
            <h2>工作经历</h2>
            <ul>
                <li v-for="item in resume['work history']">
                    <h3>{{item.company}}</h3>
                    <hr>
                    <span>{{item.content}}</span>
                </li>
            </ul>
        </section>

        <section class="education" v-if="resume['education']">
            <h2>教育经历</h2>
            <ul>
                <li v-for="item in resume['education']">
                    <span>{{item.school}} - {{item.content}}</span>
                </li>
            </ul>
        </section>

        <section class="awards" v-if="resume['awards']">
            <h2>获奖情况</h2>
            <ul>
                <li v-for="item in resume['awards']">
                    <h3>{{item.name}}</h3>
                    <hr>
                    <span>{{item.content}}</span>
                </li>
            </ul>
        </section>

        <section class="contacts" v-if="resume['contacts']">
            <h2>联系方式</h2>
            <ul>
                <li v-for="item in resume['contacts']">
                    <div>
                        <span class="contact-kind">{{item.contact}}</span>
                        <span>{{item.content}}</span>
                    </div>
                </li>
            </ul>
        </section>

    </div>
</template>

<script>
    export default {
        name: "ResumePreview",
        computed: {
            resume() {
                return this.$store.state.resume
            },
        }
    }
</script>

<style scoped lang="scss">
    #resume-preview {
        padding: 2rem;
        background: #ffffff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
        overflow: auto;
    }
    .profile-title {
        font-size: 1.4rem;
        display: block;
        margin: 5px 0;
        color: #00B8D4 !important;
    }
    .contact-kind {
        display: inline-block;
        width: 5rem;
    }
    section:not(:first-child) {
        margin-top: 1.5rem;
        >h2 {
            display: inline-block;
            padding: 4px;
            margin-bottom: 6px;
            background: #ddd;
            color: #546E7A;
        }
    }
    .work-history {
        h3 {
            color: dodgerblue;
        }
    }
</style>