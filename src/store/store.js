import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stoke'
import portfolio from './modules/portfolio'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio  
  }
})