//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  

  //事件处理函数
  goToBrowsePage: function() {
    wx.navigateTo({
      url: 'pages/browse/browse'
    })
  },

  goToShowShopPage: function () {
    wx.navigateTo({
      url: 'pages/showshop/showshop'
    })
  },

  onLoad: function () {
   app.login()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

    this.goToBrowsePage()
  }
})
