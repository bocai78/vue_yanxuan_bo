/*
* vuex核心管理模块  store
* */
import Vue from 'vue'
import Vuex from 'Vuex'


import actions from './actions'
import getters from './getters'
import home from './modules/home'
import sort from './modules/sort'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules:{
    home,
    sort
  }
})
