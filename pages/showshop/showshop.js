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
    shop: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(11111111, options)
    const auth_key = wx.getStorageSync("auth_key")
    let shopid = options.shopid
    const that = this
    wx.request({
      url: paths.getShop + shopid,
      data: {auth_key: auth_key},
      success: (res) => {
        console.log(222, res)
        that.setData({ shop: res.data })
        console.log(555555,that.data.shop)
      }
    })
  },
  makeaCall: function (e) {
    var that = this
    wx.makePhoneCall({
      phoneNumber: that.data.shop.phone_number
    })
  },


  previewImages(e) {
    console.log('ready to preview');
    wx.previewImage({
      urls: [e.currentTarget.dataset.url]
    })
  },
  
  showMessageForm: function (e) {
    const shop = e.currentTarget.dataset.id
    this.setData({
      bookedShop: shop
    })
  },

  bindSubmit: function (e) {
    const that = this
    let recipient_id = this.data.bookedShop
    let content = e.detail.value.content
    wx.request({
      url: paths.postMessage,
      method: "post",
      data: {
        auth_key: wx.getStorageSync("auth_key"),
        shop_id: recipient_id,
        content: content
      },
      success: res => {
        that.setData({
          bookedShop: ""
        })
        wx.showToast({
          title: 'Sent!',
        })
        that.setData({formValue: ""})
      }

    })
  },


  showArtist: function (e) {
    const data = e.currentTarget.dataset
    const artistId = data.artistid

    wx.navigateTo({
      url: `/pages/showartist/showartist?id=${artistId}`,
    })
  },

    previewImages(e) {
      console.log('ready to preview');
      wx.previewImage({
        urls: [e.currentTarget.dataset.url]
      })
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
    this.setData({
      bookedShop: ''
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

  filterStyle: function (e) {
    let tag = e.currentTarget.dataset.tag
    wx.reLaunch({
      url: `/pages/browse/browse?tag=${tag}`,
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