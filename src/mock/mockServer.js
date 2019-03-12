//需要上来先执行一次 就可以用了
import Mock from 'mockjs'
import homeData from './shouye_data'
import sortData from './cateList'


//获取首页 的mock数据
Mock.mock('/home', {code: 0, data: homeData})
//获取分类 的模拟数据
Mock.mock('/sort', {code: 0, data: sortData})


