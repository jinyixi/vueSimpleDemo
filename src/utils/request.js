import axios from 'axios'
import { Message} from 'element-ui'

// 创建axios实例
let service =  axios.create({
  // headers: {'Authorization': localStorage.getItem('token')},
  baseURL: process.env.BASE_URL, // api的base_url
  timeout: 50000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = {
      'Authorization' : token, //携带权限参数
      'type':'pc'
     };
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
   /**
    * code:200,接口正常返回;
    */
    const res = response.data
    console.log('response',response)
    if (res.code !== 2000) {
      console.log("请求失败")
      Message({
        message: '请求失败',
        type: 'error',
        duration: 5 * 1000
      })
      // 根据服务端约定的状态码：5001:非法的token; 5002:其他客户端登录了; 5004:Token 过期了;
      if (res.code === 5001 || res.code === 5002 || res.code === 5004) {
          MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            store.dispatch('LogOut').then(() => {
              location.reload()// 为了重新实例化vue-router对象 避免bug
            })
          })
      }
      console.log(response.data.code)
      return Promise.reject('error')
    }else{ // res.code === 200,正常返回数据
      console.log("请求成功")
      console.log(response.data)
      return response.data
    }
  },
  error => {
    Message({
      message: '哪里出了问题',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
