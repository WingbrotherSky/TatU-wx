// pages/browse/browse.js

const app = getApp()
const paths = require('../../common/apiPaths')
const requests = require("../../common/apiClient")

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
  onLoad: function () {
    const that = this
    const auth_key = wx.getStorageSync("auth_key")
    requests.get({
      // url: paths.getAllShops,
      url: paths.getAllFavorites,
      success:(res) => {
        console.log(res)
          // that.setData({shops: res.data.shops})
          that.setData({favorites: res.data.favorites})
          console.log(this.data.favorites)
      }
      
    })
  },

  goToShowShopPage: function (e) {
    console.log(6666, e.currentTarget.dataset)
    let shopid = e.currentTarget.dataset.shopid
    wx.navigateTo({
      url: '/pages/showshop/showshop?shopid=' + shopid,
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
  
  showShop: function (e) {

    wx.reLaunch({
      url: `/pages/showshop/showshop`,
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

  showArt: function(e) {
    const data = e.currentTarget.dataset
    const artId = data.artid


    wx.reLaunch({
      url: `/pages/showimage/showimage?id=${artId}`,
    })
  },

  previewImage: function (e) {
    console.log(e)
    wx.previewImage({
      // current: '',
      urls: [e.currentTarget.dataset.artUrl],
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    })
  },

  Delete: function () {
    wx.showModal({
      title: '提示',
      content: 'Delete?!',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.getSavedFileList({
            success: function (res) {
              if (res.fileList.length > 0) {
                wx.removeSavedFile({
                  filePath: res.fileList[0].filePath,
                  complete: function (res) {
                    console.log(res)
                  }
                })
              }
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  showSuccess: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
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
      url: '/pages/index/index',    //// change to one page before
    })
  },

  goBrowse: function (e) {
    wx.reLaunch({
      url: '/pages/browse/browse',
    })
  },

  goFavourite: function (e) {
    // wx.navigateTo({
    //   url: '/pages/favourite/favourite',
    // })
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