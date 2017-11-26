import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stoke'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    stocks  
  }
})