import {RECRIVE_SORTDATA} from "../mutation-types";
import {reqSortData} from "../../api";

const state = {
  sortData:[]
}

const actions ={
//异步获取分类页 状态数据 信息
  async getSortData({commit},cb){
    const result =await reqSortData()
    if (result.code === 0){
      const sortData = result.data
      commit(RECRIVE_SORTDATA,sortData)
      cb && cb()
    }
  }
}

const mutations = {
  [RECRIVE_SORTDATA](state,sortData){
    state.sortData =  sortData
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
