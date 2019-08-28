import Vue from 'vue'
import Vuex from 'vuex'


import { PLP } from './PLP'
import { SRP } from './SRP'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    PLP,
    SRP
  }
})