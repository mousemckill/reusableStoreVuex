import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let pref = null

const getters = {
  getA (state) {
    console.log('getA');
    
    return state.a
  },
  getAB (_, { getA }) {
    console.log('getAB');
    
    return getA.b
  },
  getAB2 (_, { getAB }) {
    console.log('getAB2');

    const result = val => {
      console.log('getAB2Inner');

      return getAB + val
    }

    pref = {
      ab: getAB,
      result
    }

    return result
  },
  getBlabla (state) {
    console.log('GetBlaBla');
    
    return 0
  }
}

const state = {
  a: {
    b: '42',
    d: 1
  },
  c: 'bla'
}

const mutations = {
  mutateC (state, val) {
    state.c = val
  },
  mutateD (state, val) {
    state.a.d = val
  },
  mutateD2 (state, val) {
    Vue.set(state.a, 'd', val)
  }
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations
})