export const createFilter = updateFilterAction => {
  const state = {
    filter: ''
  }

  const mutations = {
    setFilter(state, value) {
      state.filter = value
    }
  }

  const actions = {
    setFilter({ commit, dispatch, state }, value) {
      commit('setFilter', value.length > 3 ? '' : value)
      dispatch(updateFilterAction, state.filter)
    }
  }

  const getters = {
    getFilter (state) {
      return state.filter
    }
  }

  return { state, mutations, actions, getters }
}
