import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        selected: 'profile',
        user: {
            id: '',
            username: '',
        },
        resume: {
            config: [
                {field: 'profile', icon: 'assignment_ind'},
                {field: 'work history', icon: 'card_travel'},
                {field: 'education', icon: 'bookmarks'},
                {field: 'projects', icon: 'favorite_border'},
                {field: 'awards', icon: 'local_play'},
                {field: 'contacts', icon: 'phone'},
            ],
            profile: {
                name: '吴智翀',
                city: '北京',
                title: '游戏企划师',
                birthday: '1992.1.26'
            },
            //work history之间有空格 所以需要加引号
            'work history': [
                {company: '蓝港互动', content: '我的第一份工作是游戏运营，打杂打杂再打杂'},
                {company: '祖龙娱乐', content: '我的第二份工作是游戏策划，发版本发版本再发版本'},
            ],
            education: [
                {school: '西北大学', content: '软件工程学士'},
                {school: '社会大学', content: '接受磨炼并成长'},
            ],
            projects: [
                {name: 'project A', content: '项目A是用vue完成的'},
                {name: 'project B', content: '项目B是用koa完成的'},
            ],
            awards: [
                {name: '再来十瓶', content: '连续十次获得「再来一瓶」奖励'},
                {name: '三好学生', content: '多次荣获三好学生殊荣'},
            ],
            contacts: [
                {contact: 'phone', content: '13812345678'},
                {contact: 'qq', content: '12345678'},
            ],
        }
    },
    mutations: {
        initState(state,payload) {
          Object.assign(state,payload);
        },
        switchTab(state, payload) {
            state.selected = payload;
            localStorage.setItem('state',JSON.stringify(state));
        },

        addItem(state,field) {
            switch (field) {
                case 'work history':
                    pushComp();
                    break;
                case 'education':
                    pushSch();
                    break;
                case 'projects':
                case 'awards':
                    pushName();
                    break;
                case 'contacts':
                    pushCont();
                    break;
            }
            function pushComp() {
                state.resume[field].push({
                    company: '',
                    content: ''
                });
            }
            function pushSch() {
                state.resume[field].push({
                    school: '',
                    content: ''
                });
            }
            function pushName() {
                state.resume[field].push({
                    name: '',
                    content: ''
                });
            }
            function pushCont() {
                state.resume[field].push({
                    contact: '',
                    content: ''
                });
            }
        },
        delItem(state,{index,field}){

            console.log(index,field);
            if(index) {

                let asure = confirm('确认删除此项么?');

                if (asure) {
                    state.resume[field].splice(index, 1);
                }


            }else {
                alert('第一条项目不可删除!')
            }
        },

        updateResume(state, {field, subfield, value}){
            state.resume[field][subfield] = value;
            localStorage.setItem('state',JSON.stringify(state));
        },
        updateResumeArr(state,{field,arridx,subfield,value}){
            state.resume[field][arridx][subfield] = value;
            localStorage.setItem('state',JSON.stringify(state));
        },
        setUser(state,payload) {
            Object.assign(state.user,payload);
            console.log(state.user);

        },
        removeUser(state) {
            state.user.id = null;
        }
    },
    actions: {

    }
})
