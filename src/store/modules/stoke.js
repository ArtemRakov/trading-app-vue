import stocks from '../../data/stoke';

const state = {
  stoke: []
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS' (state) {

  }
}

const actions = {
  buyStock: ({ commit }, order) => {
    commit()
  },
  initStocks: ( {commit}) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStoke: ({commit}) => {
    commit('RND_STOCKS')
  }
}

const getters = {
  stocks: state => {
    return state.stocks;
  }
}


export default {
  state,
  mutations,
  getters,
  actions
}