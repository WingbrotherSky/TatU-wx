// pages/browse/browse.js

const app = getApp()
const mock = require('./mock')
const path = require('./mock')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    shops: []
  },
  previewImages() {
    console.log('ready to preview');
    wx.previewImage({
      urls: ['https://wx1.sinaimg.cn/mw690/95af932egy1fp11zn5j9tj20hs0hsmzh.jpg']
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {


    this.setData({ shops: mock.shops })
  },

  showShop: function (e) {
    const data = e.currentTarget.dataset
    const shop = data.name
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
    wx.reLaunch({
      url: '/pages/index/index',    //// change to one page before
    })
  },

  goBrowse: function (e) {
    wx.reLaunch({
      url: '/pages/browse/browse',
    })
  },

  goFavourite: function (e) {
    wx.reLaunch({
      url: '/pages/favourite/favourite',
    })
  },
  goInbox: function (e) {
    wx.reLaunch({
      url: '/pages/inbox/inbox',
    })
  },
  goInfo: function (e) {
    wx.reLaunch({
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
