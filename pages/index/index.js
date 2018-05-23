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
      url: '/pages/browse/browse'
    })
  },

  goToShowShopPage: function () {
    wx.navigateTo({
      url: '/pages/showshop/showshop'
    })
  },

  goToFavouritePage: function () {
    wx.navigateTo({
      url: '/pages/favourite/favourite'
    })
  },
  goToInboxPage: function () {
    wx.navigateTo({
      url: '/pages/inbox/inbox'
    })
  },

  goToInfoPage: function () {
    wx.navigateTo({
      url: '/pages/info/info'
    })
  },

  goToShowPage: function () {
    wx.navigateTo({
      url: '/pages/show/show'
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
