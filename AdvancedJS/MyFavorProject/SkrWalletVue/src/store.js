import Vue from 'vue'
import Vuex from 'vuex'

//const Vue = require("Vue");
//const Vuex = require("Vuex");

Vue.use(Vuex)

//本地测试
//let url = "http://127.0.0.1:4000";
//云服务器
let cloudurl = "http://154.8.215.126:4000";

export default new Vuex.Store({
    state: {
        globalKeystore: {

        },
        globalPrivatekey: "",
        accountAddr: "0x00",
        accountBalance: "0.00",
        headerTabs: {}
    },
    mutations: {
        setAccountAddr(state,payload){
            state.accountAddr = payload;
        },
        setAccountBalance(state,payload) {
            state.accountBalance = (payload/(10 ** 18)).toFixed(2);
        },
    },
    actions: {
        async refreshBalance() {
            let url = `${cloudurl}/users/getbalance`;
            let address = this.state.accountAddr;
            console.log("actionaddress",address);
            let result = await axios({
                method: "get",
                url,
                params: {
                    address,
                }
            });
            console.log("serverBal", result);
            this.commit("setAccountBalance", result.data.info.balance);
        }
    }

})
