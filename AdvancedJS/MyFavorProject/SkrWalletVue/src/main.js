import Vue from 'vue'
//const Vue = require("Vue");
import App from './App.vue'
import router from './router'
import store from './store'


import Vuetify from 'vuetify'
//const Vuetify = require("Vuetify");
import 'vuetify/dist/vuetify.min.css'

//import 'material-design-icons-iconfont/dist/material-design-icons.css'
//import '@mdi/font/css/materialdesignicons.css'
/*import 'pace-progressbar';
import 'pace-progressbar/themes/pink/pace-theme-minimal.css';*/

Vue.use(Vuetify);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
