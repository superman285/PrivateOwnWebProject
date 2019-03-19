import Vue from 'vue'
import Vuex from 'vuex'

//const Vue = require("Vue");
//const Vuex = require("Vuex");

Vue.use(Vuex)


//本地测试
//let localurl = "http://127.0.0.1:4000";
//云服务器
let cloudurl = "http://154.8.215.126:4000";

export default new Vuex.Store({
    state: {
        globalKeystore: {

        },
        globalPrivatekey: "",
        accountAddr: "0x00",
        accountBalance: "0.00",
        headerTabs: {},
        tokenType: "ETH"
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
            //获得的是wei 需要转为ether
        },
        async refreshERC20Balance(){
            console.log('点击了etherscan');
            let url = "//api-rinkeby.etherscan.io/api";

            let tokenbalanceRes = await axios({
                method: "GET",
                url,
                params: {
                    module: "account",
                    action: "tokenbalance",
                    contractaddress: "0xF1bAb6522147b7fEf6dc50CccfACDa81181a60B6",
                    address: "0x2B9579B9eb65DBC6A10a3d27fC8aBA8f615Bb0Be",
                    tag: "latest",
                    apikey: "H4EVJDWHGN1QMWR7VTYVVXA1542VE4FJXE"
                }
            });

            let tokenBalance = tokenbalanceRes.data.result;

            this.commit("setAccountBalance", Number(tokenBalance*(10 ** 18)));
            //不需要单位换算 所以✖️上 10^18

        },
    }

})
