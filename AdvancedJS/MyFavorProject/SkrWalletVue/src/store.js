import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        uploadKeystore: {

        },
        accountAddr: "0x12345",
        accountBalance: "1"
    },
    mutations: {
        setAccountAddr(state,payload){
            state.accountAddr = payload;
        },
        setAccountBalance(state,payload) {
            state.accountBalance = payload/(10 ** 18);
        }
    },
    actions: {}
})
