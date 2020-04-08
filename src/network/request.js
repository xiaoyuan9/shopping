import axios from 'axios'

/**
 * 请求配置
 * 解决当axios发生变动的时候,换成其他的请求插件的时候
 * @param config
 */
export function request(config){
  //返回一个promise
  return new Promise((resolve, reject) => {
    // axios方式
    // 用实例接收axios
    const instance =  axios.create({
      // baseURL:'http://152.136.185.210:8000/api/h8',
      // baseURL:'http://123.207.32.32:8000/api/h8',
      baseURL:'http://106.54.54.237:8000/api/h8',
      timeout:5000
    })

    //发送ajax请求之前拦截数据
    instance.interceptors.response.use(data=>{
      return data.data
    })
      //发送ajax请求
      instance(config).then(res=>{
        resolve(res)
      },err=>{
        reject(err)
      })
  })
}
//同时发送多个ajax请求
// export function requests(config){
//   return new Promise((resolve, reject) => {
//     axios.defaults.baseURL='http://106.54.54.237:8000/api/h3/'
//     axios.defaults.timeout = 10000
//     //发送ajax请求之前拦截数据
//     axios.interceptors.response.use(data=>{
//       return data.data
//     })
//     let arr=[]
//     config.forEach(item=>{
//       arr.push(axios(item))
//     })
//     axios.all(arr).then(res=>{
//       resolve(res)
//     })
//   })
// }
