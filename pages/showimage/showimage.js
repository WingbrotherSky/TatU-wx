// pages/show-image/show-image.js
const paths = require('../../common/apiPaths')

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  previewImages(e) {
    console.log('ready to preview');
    wx.previewImage({
      urls: [e.currentTarget.dataset.url]
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
// sendLike: function () {
//   wx.showToast({
//     title: '赞'
//   })

  // wx.request({
  //   success: function () {
  //     wx.showToast({
  //       title: '赞'
  //     })
  //   },

  //   // url: '',
  // })
  




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.request({
      url: paths.getArt + options.id,
      success: res => {
        this.setData({
          art: res.data
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
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})