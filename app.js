//app.js
App({
  login: function() {
    const that = this
    // const host = "https://tatu.wogengapp.cn/"
    const host = "http://localhost:3000/"
    console.log("Logging in")
    const auth_key = wx.getStorageSync("auth_key")
    if (!auth_key) {
      wx.login({
        success: res => {
          console.log(0, res)
          wx.request({
            url: host + 'login',
            method: 'POST',
            data: {
              code: res.code
            },
            success: res => {
              console.log(1, res)
              wx.setStorage({
                key: 'auth_key',
                data: res.data.auth_key,
              })
            }
          })
        }
      })
    } else {
      wx.request({
        url: host + `login`,
        method: 'POST',
        data: {
          auth_key: auth_key
        },
        success: function (res) {
          console.log(22323232323232323, res)
          that.globalData.userInfo = res.data.userInfo
          if (res.data.errors) {
            wx.setStorage({
              key: 'auth_key',
              data: undefined,
            })
            that.login()
          }
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})