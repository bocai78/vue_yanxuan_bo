import {RECRIVE_HOMEDATA} from "../mutation-types";
import {reqHomeData} from "../../api";

const state = {
  homeData:{}
}

const actions ={
//异步获取首页所有状态数据信息
  async getHomeData({commit}){
    const result =await reqHomeData()
    if (result.code === 0){
      const homeData = result.data
      commit(RECRIVE_HOMEDATA,homeData)
    }
  }
}

const mutations = {
  [RECRIVE_HOMEDATA](state,homeData){
    state.homeData =  homeData
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
