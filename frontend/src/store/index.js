import Vue from 'vue'
import Vuex from 'vuex'
import rat from './modules/rat'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {},
    modules: { rat }
});

export default store
