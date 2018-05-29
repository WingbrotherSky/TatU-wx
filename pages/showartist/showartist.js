// pages/browse/browse.js

const app = getApp()
const paths = require('../../common/apiPaths')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
  },
  previewImages(e) {
    console.log('ready to preview');
    wx.previewImage({
      urls: [e.currentTarget.dataset.url]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    const auth_key = wx.getStorageSync("auth_key")
    wx.request({
      url: paths.getArtist + options.id,
      data: {auth_key: auth_key},
      success: res => {
        that.setData({ artist: res.data })
      }
    })
  },

  showShop: function (e) {
    const data = e.currentTarget.dataset
    const shop = data.name
    const auth_key = wx.getStorageSync("auth_key")
    console.log(2321, shop)
    wx.navigateTo({
      url: `/pages/showshop/showshop`,
    })
  },
  
  showStyle: function (e) {
    const data = e.currentTarget.dataset
    const shop = data.name
    console.log(2323, shop)
    wx.navigateTo({
      url: `/pages/showimage/showimage`,
    })

    // ?=${user.id }
    wx.switchTab({
      url: `/pages/show/show?=${user.id}`,
    })
    console.log(5555, shop.id)
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },


  // START TABBAR
  goBack: function (e) {
    console.log(333, "back")
    wx.navigateTo({
      url: '/pages/index/index',    //// change to one page before
    })
  },

  goBrowse: function (e) {
    wx.navigateTo({
      url: '/pages/browse/browse',
    })
  },

  goFavourite: function (e) {
    wx.navigateTo({
      url: '/pages/favourite/favourite',
    })
  },
  goInbox: function (e) {
    wx.navigateTo({
      url: '/pages/inbox/inbox',
    })
  },
  goInfo: function (e) {
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },

  // END TABBAR



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
