//app.js
App({
  login: function() {
    const that = this
    const host = "http://localhost:3000/"
    console.log("Logging in")
    wx.getStorage({
      key: 'auth_key',
      success: function(res) {
        console.log(44444, res)
        if (res.data) {
          wx.request({
            url: host + `login`,
            method: 'POST',
            data: {
              auth_key: res.data
            },
            success: function (res) {
              console.log(22323232323232323, res)
              that.globalData.userInfo = res.data.userInfo
            }
          })
        } else {
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
        }     
      },
    })
 
  },
  globalData: {
    userInfo: null
  }
})