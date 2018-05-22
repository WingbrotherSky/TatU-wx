//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
           this.globalData.userId=res.data.userId
         }
       })
     }
   })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
