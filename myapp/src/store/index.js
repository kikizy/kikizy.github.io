/**
 * Created by Ying on 2017/6/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'


import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import userevamp from './userevamp'

Vue.use(Vuex)
export default new Vuex.Store({
      state,
      getters,
      mutations,
      actions,

      modules:{
        userevamp:userevamp
      }
})
