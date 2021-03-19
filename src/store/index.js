import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import channelmanager from './modules/channelmanager'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    channelmanager
  },
  getters
})

export default store