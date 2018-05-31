const app = getApp() 
const host = "https://tatu.wogengapp.cn/api/v1/"

const request = function(method, options) {
  let auth_key = wx.getStorageSync("auth_key")

  wx.request({
    url: options.url,
    method,
    data: {
      ...options.data,
      auth_key: auth_key
      },
    success: res => {
        if (!auth_key) {
          app.login( () => {
            request(method, options)
          })
        } else {
          options.success(res)
        }
    },
    fail: res => {
      console.log("failed", res)
    }
  })
}

const get = (options) => {
  request('get', options)
}

const post = (options) => {
  request('post', options)
}

const put = (options) => {
  request('put', options)
}

const DELETE = (options) => {
  request('delete', options)
}



module.exports = {
get,
put,
post,
delete: DELETE
}
