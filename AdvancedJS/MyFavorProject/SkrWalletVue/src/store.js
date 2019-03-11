import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        globalKeystore: {

        },
        globalPrivatekey: "",
        accountAddr: "0x00",
        accountBalance: "0"
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
            let url = "http://127.0.0.1:4000/users/getbalance";
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
