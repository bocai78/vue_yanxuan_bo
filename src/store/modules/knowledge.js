import {
  RECRIVE_KNOWLEDGENAV,
  RECRIVE_KNOWLEDGENAVONE
} from "../mutation-types";
import {
  reqKnowledgeNav,
  reqKnowledgeNavOne
} from "../../api";

const state = {
  knowledgeNav :[],
  knowledgeNavOne :[]
}

const actions ={
  //异步获取识物nav状态数据
  async getKnowledgeNav({commit}){
    const result = await reqKnowledgeNav()
    if (result.code === 0){
      const knowledgeNav = result.data
      commit(RECRIVE_KNOWLEDGENAV,knowledgeNav)
    }
  }

}

const mutations = {
  [RECRIVE_KNOWLEDGENAV](state,knowledgeNav){
    state.knowledgeNav = knowledgeNav
  }
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
