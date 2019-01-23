<template>
    <div id="resume-editor">
        <nav>
            <ol>
                <li v-for="(item,index) in resume.config"
                    :class="{active: item.field===selected}"
                    @click="()=>{selected = item.field}"
                >
                    <v-icon>{{item.icon}}</v-icon>
                </li>
            </ol>
        </nav>
        <ol class="panels">
            <li v-for="item in resume.config" v-show="item.field === selected">
                <!--<div class="resumeField" v-for="(value,key) in resume[item.field]">-->

                    <div v-if="resume[item.field] instanceof Array">
                        <div class="subitem" v-for="subitem in resume[item.field]">
                            <div class="resumeField" v-for="(value,key) in subitem">
                                <label> {{key}} </label>
                                <input type="text" :value="value">
                            </div>
                            <hr>
                        </div>
                    </div>
                    <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">

                    <label> {{key}} </label>
                    <v-text-field
                            v-model="resume[item.field][key]"
                            required
                    ></v-text-field>
                </div>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "ResumeEditor",
        data:()=>({
                selected: 'profile',
                resume:{
                    config:[
                        { field:'profile', icon:'assignment_ind'},
                        { field: 'work history', icon: 'card_travel' },
                        { field: 'education', icon: 'bookmarks' },
                        { field: 'projects', icon: 'favorite_border' },
                        { field: 'awards', icon: 'local_play' },
                        { field: 'contacts', icon: 'phone' },
                    ],
                    profile: {
                        name: '',
                        city: '',
                        title: ''
                    },
                    //work history之间有空格 所以需要加引号
                    'work history': [
                        { company: 'AL', content: '我的第二份工作是' },
                        { company: 'TX', content: '我的第一份工作是' },
                    ],
                    education: [
                        { school: 'AL', content: '文字' },
                        { school: 'TX', content: '文字' },
                    ],
                    projects: [
                        { name: 'project A', content: '文字' },
                        { name: 'project B', content: '文字' },
                    ],
                    awards: [
                        { name: 'awards A', content: '文字' },
                        { name: 'awards B', content: '文字' },
                    ],
                    contacts: [
                        { contact: 'phone', content: '13812345678' },
                        { contact: 'qq', content: '12345678' },
                    ],
                }
        })
    }
</script>

<style scoped lang="scss">
    #resume-editor {
        background:#ffffff;
        box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
        display: flex;
        flex-direction: row;
        overflow: auto;
        >nav {
            width: 80px;
            background: black;
            color: white;
            >ol {
                >li {
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 8px;
                    margin-bottom: 8px;
                    &.active {
                        background: white;
                        .v-icon {
                            color: black!important;
                        }
                    }
                }
            }
        }
    }
    .resumeField{
        margin: 20px;
        > label{
            display: block;
        }
    }
    .v-icon {
        font-size: 2rem;
        color: white!important;
        user-select: none;
    }
    hr{
        border: none;
        border-top: 1px solid #ccc;
        margin: 10px 20px;
    }
</style>