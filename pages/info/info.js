// pages/browse/browse.js

const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    shops: []
  },

  

  /**
   * 生命周期函数--监听页面加载
   */

  showInfo1: function (e) {
    wx.navigateTo({
      url: `/pages/info1/info1`,
    })
},

  showInfo2: function (e) {
    wx.navigateTo({
      url: `/pages/info1/info1`,
    })
  },

  showInfo3: function (e) {
    wx.navigateTo({
      url: `/pages/info1/info1`,
    })
  },

  showInfo4: function (e) {
    wx.navigateTo({
      url: `/pages/info1/info1`,
    })
  },

  showInfo5: function (e) {
    wx.navigateTo({
      url: `/pages/info1/info1`,
    })
  },
  
  showImage: function (e) {
    const data = e.currentTarget.dataset
    const artistId = data.artistid

    wx.reLaunch({
      url: `/pages/showimage/showimage`,
    })
  },

  showArtist: function (e) {
    const data = e.currentTarget.dataset
    const artistId = data.artistid

    wx.reLaunch({
      url: `/pages/showartist/showartist?id=${artistId}`,
    })
  },

  showArt: function (e) {
    const data = e.currentTarget.dataset
    const artId = data.artid


    wx.reLaunch({
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
    // wx.reLaunch({
    //   url: '/pages/info/info',
    // })
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