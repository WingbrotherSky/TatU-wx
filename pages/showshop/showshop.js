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
    let shopid = options.shopid
    const that = this
    const auth_key = wx.getStorageSync("auth_key")
    wx.request({
      url: paths.getShop + shopid,
      data: {
        auth_key: auth_key
      },
      success: (res) => {
        
        console.log(222, res)
        that.setData({ shop: res.data })
        console.log(555555,that.data.shop)
      }
    })
  },

  showMessageForm: function (e) {
    const artist = e.currentTarget.dataset.id
    this.setData({
      bookedArtist: artist
    })
  },

  bindSubmit: function (e) {
    const that = this
    let recipient_id = this.data.bookedArtist
    let content = e.detail.value.content
    const auth_key = wx.getStorageSync("auth_key")
    wx.request({
      url: paths.postMessage,
      method: "post",
      data: {
        auth_key: auth_key,
        user_id: recipient_id,
        content: content
      },
      success: res => {
        that.setData({
          bookedArtist: ""
        })
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

  showArt: function (e) {
    const data = e.currentTarget.dataset
    const artId = data.artid


    wx.navigateTo({
      url: `/pages/showimage/showimage?id=${artId}`,
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
    console.log(333, "back")
    wx.navigateTo({
      url: '/pages/showshop/showshop',  //// change to one page before
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