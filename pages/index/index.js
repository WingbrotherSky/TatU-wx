//index.js
//获取应用实例
const app = getApp()
const host = "http://localhost:3000/"


Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    authKey: undefined
  },
  

  //事件处理函数
  goToBrowsePage: function() {
    wx.reLaunch({
      url: '/pages/browse/browse'
    })
  },

  goToFavouritePage: function () {
    wx.reLunch({
      url: '/pages/favourite/favourite'
    })
  },
  goToInboxPage: function () {
    wx.reLunch({
      url: '/pages/inbox/inbox'
    })
  },

  goToInfoPage: function () {
    wx.reLunch({
      url: '/pages/info/info'
    })
  },

  goToShowImagePage: function () {
    wx.reLunch({
      url: '/pages/showimage/showimage'
    })
  },

  goToShowArtistPage: function () {
    wx.reLunch({
      url: '/pages/showartist/showartist'
    })
  },
  
  goToShowShopPage: function () {
    wx.reLunch({
      url: '/pages/showshop/showshop'
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

    const that = this
    const auth_key = wx.getStorageSync('auth_key')
    console.log(123123123123, auth_key)
    wx.request({
      url: host + "login",
      method: "put",
      data: {
        auth_key: auth_key,
        userInfo: that.data.userInfo
      },
      success(res) {
        console.log("last", res)
        that.goToBrowsePage()
      },
      fail: res => {
        console.log(res)
      }})
    }
  })

  
