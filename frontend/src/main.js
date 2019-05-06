import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import { router } from "./router/index"
import store from './store/index'

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
    router: router,
    store: store,
    render: h => h(App),
}).$mount('#app');


