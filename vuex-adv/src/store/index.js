import Vue from 'vue'
// import Vuex from 'vuex'       //导入原生的Vuex
import Vuex from '../vuex'    //导入之际的Vuex

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age: 18
  },
  getters: {
    newAge(state) {
      return state.age++;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
