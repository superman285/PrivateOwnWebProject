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
                <h1 class="editor-title">{{item.field}}</h1>

                <div v-if="resume[item.field] instanceof Array">
                    <div class="subitem" v-for="(subitem,i) in resume[item.field]">
                        <v-card class="cardwrap">
                            <div class="resumeField" v-for="(value,key) in subitem">
                                <label> {{key}} </label>
                                <input type="text"
                                       :value="value"
                                       @input="changeResumeFieldArr(item.field, i, key, $event.target.value)"
                                >
                            </div>
                            <v-btn v-if="i!=0" fab dark small color="indigo" class="item-del" @click="delItem(i,item.field)">
                                <v-icon dark>remove</v-icon>
                            </v-btn>
                        </v-card>
                    </div>

                    <v-btn color="blue-grey" class="white--text add-btn" @click="addItem(item.field)">
                        添加
                        <v-icon right dark>cloud_upload</v-icon>
                    </v-btn>
                </div>

                <div v-else>
                    <div class="resumeField" v-for="(value,key) in resume[item.field]">
                        <label> {{key}} </label>
                        <input
                                :value="value"
                                @input="changeResumeField(item.field, key, $event.target.value)"
                                required
                        ></input>
                    </div>
                </div>

            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "ResumeEditor",
        //移到store
        /*data:()=>({
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
        })*/
        computed: {
            count: () => this.$store.state.count,
            selected: {
                get() {
                    return this.$store.state.selected
                },
                set(value) {
                    this.$store.commit('switchTab', value)
                },
            },
            resume() {
                return this.$store.state.resume;
            },
        },
        methods: {

            addItem(field) {
                console.log('item.field:', field);
                this.$store.commit('addItem', field)
            },
            delItem(index,field,ev) {

                this.$store.commit('delItem',{index,field})
            },

            changeResumeField(field, subfield, value) {
                console.log(value);
                this.$store.commit('updateResume', {
                    field,
                    subfield,
                    value
                })
            },
            changeResumeFieldArr(field, arridx, subfield, value) {
                console.log(value);
                this.$store.commit('updateResumeArr', {
                    field,
                    arridx,
                    subfield,
                    value
                })
            },

        }
    }
</script>

<style scoped lang="scss">
    #resume-editor {
        font-size: 1.2rem;
        background: #ffffff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: row;
        overflow: auto;
        > nav {
            width: 80px;
            background: black;
            color: white;
            > ol {
                > li {
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 8px;
                    margin-bottom: 8px;
                    cursor: pointer;
                    &.active {
                        background: white;
                        .v-icon {
                            color: black !important;
                        }
                    }
                }
            }
        }
    }

    .cardwrap {
        margin: .1rem auto;
        padding: 0rem 0 .3rem;
        width: 96%;
    }

    .editor-title {
        margin-left: 1rem;
        color: palevioletred;
    }

    .add-btn {
        margin-left: 1.3rem;
    }

    .item-del {
        position: absolute !important;
        right: 0 !important;
        top: 0 !important;
        width: 2rem !important;
        height: 2rem !important;
    }

    .panels {
        flex: 1;
        overflow: auto;
    }

    input {
        padding: 5px 0;
        outline: none;
        border: none;
        border-bottom: 1px solid #00838F;
        width: 92%;
    }

    label {
        font-size: 1.3rem;
        font-weight: bold;
        color: #00ACC1;
    }

    .resumeField {
        margin: 1.5rem;
        > label {
            display: block;
        }
    }

    .v-icon {
        font-size: 2rem;
        color: white !important;
        user-select: none;
    }

    hr {
        border: none;
        border-top: 1px solid #ccc;
        margin: 10px 20px;
    }
</style>