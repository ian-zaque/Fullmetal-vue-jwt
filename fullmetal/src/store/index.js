import { createStore } from 'vuex'
import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './services/auth.service.js';

Vue.use(Vuex);

export default createStore({
  state: {
    status, user,
  },

  mutations: {
    loginSuccess, loginFailure, logout, registerSuccess, registerFailure
  },

  actions: {
    login, logout, register
  },

  modules: {
    auth
  }
  
})
