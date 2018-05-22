//app.js
App({
  login: function() {
    const that = this
    const host = "http://localhost:3000/"
    console.log("Logging in")
    wx.login({
      success: res => {
        console.log(res)
        wx.request({
          url: host + 'login',
          method: 'POST',
          data: {
            code: res.code
          },
          success: res => {
            console.log(res)
            that.globalData.userId = res.data.userId
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})