import { createFilter } from '../Filter'

const state = {
  data: 'PLP'
}

const mutations = {
  setData(state, value) {
    state.data = value
  }
}

const actions = {
  update({ commit }, filter) {
    commit('setData', 'PLP ' + filter)
  }
}

export const PLP = {
  namespaced: true,
  state,
  mutations,
  actions,
  modules: { filter: createFilter('update') }
}
