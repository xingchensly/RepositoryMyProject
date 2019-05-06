import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  login: 'ssssssssss' // 是否登录
}
const getters = {

}
const actions = {

}
const mutations = {
  // updateObj(state,payload){
  //     state.payload['key']=payload['value'] | payload['val']
  // }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
