import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('auth') || '',
  },
  getters: {
    getToken(state){
      return state.token
    },
  },
  mutations: {
    setToken(state, token){
      localStorage.setItem('auth', token);
      state.token = token;
    },
    clearToken(state){
      localStorage.removeItem('auth');
      state.token = '';
    },
  },
  actions: {
    
  }
})
