const paths = require('../../common/apiPaths')

// pages/info5/info5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  previewImages(e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.url]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.request({
      url: paths.getAllArtists,
      success:res => {
        that.setData({
          artists: res.data.artists
        })
      }
    })
    this.setData({
      heart: "../../image/heart.png",
      chat: "../../image/chat2.png",
      share: "../../image/share-2.png"
    })
  },

  showMessageForm: function(e) {
    const artist = e.currentTarget.dataset.id
    this.setData({
      bookedArtist: artist
    })
  },

  bindSubmit: function(e) {
    const that = this
    let recipient_id = this.data.bookedArtist
    let content = e.detail.value.content
    wx.request({
      url: paths.postMessage,
      method: "post",
      data: {
        auth_key: wx.getStorageSync("auth_key"),
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