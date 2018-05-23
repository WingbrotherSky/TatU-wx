// pages/show-image/show-image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  previewImages() {
    console.log('ready to preview');
    wx.previewImage({
      urls: ['https://wx1.sinaimg.cn/mw690/95af932egy1fp11zn5j9tj20hs0hsmzh.jpg']
    })
  },

  
navigateBack() {
  wx.navigateBack({
    delta: 1,
  })
},

goToShowArtistPage: function (e) {
  wx.navigateTo({
    url: '/pages/showartist/showartist',
  })
},

goToShowShopPage: function (e) {
  wx.navigateTo({
    url: '/pages/showshop/showshop',
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

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