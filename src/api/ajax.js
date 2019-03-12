import axios from 'axios'

export default function ajax(url = '', data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (method ==='GET'){
      promise = axios.get(url,{params:data})  //data数据 以query的形式返回
    } else {
      promise = axios.post(url,data)
    }
    //请求成功返回的响应
    promise.then((response) => {
      resolve(response.data)
    }).catch( (error) => {
      //出错统一处理
      console.log('请求异常')
    })

  })
}
