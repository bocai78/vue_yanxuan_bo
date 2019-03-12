//所有请求接口的模块
import ajax from './ajax'
//在线接口
// const prefix = '/http://m.you.163.com/topic/v1/find/getTabs.json'
const prefix = '/api'

//请求首页home的数据
export const reqHomeData = () => ajax('/home')
//请求分类页sort的数据
export const reqSortData = () => ajax('/sort')

//请求获取识物nav的数据
export const reqKnowledgeNav = () => ajax(`${prefix}/topic/v1/find/getTabs.json`)
//请求获取识物 nav推荐栏下的所属的所有数据
export const reqKnowledgeNavOne = () => ajax(`${prefix}/topic/v1/find/recManual.json`)




