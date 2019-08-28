import { createFilter } from '../Filter'

const state = {
  data: 'SRP'
}

const mutations = {
  setData(state, value) {
    state.data = value
  }
}

const actions = {
  update({ commit }, filter) {
    commit('setData', 'SRP ' + filter)
    commit('setFilter', filter.replace('a', 'b'))
  }
}

export const SRP = {
  namespaced: true,
  state,
  mutations,
  actions,
  modules: { filter: createFilter('update'),  }
}
