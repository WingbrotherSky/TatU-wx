const paths = require('../../common/apiPaths')
const requests = require('../../common/apiClient')

// pages/info5/info5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0
  },

  previewImages(e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.url]
    })
  },

  showArtist: function (e) {
    const data = e.currentTarget.dataset
    const artistId = data.artistid

    wx.navigateTo({
      url: `/pages/showartist/showartist?id=${artistId}`,
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
   
    requests.get({
      url: paths.getAllArtists,
      success: res => {
        console.log("res", res)
        const tags = []
        let tagsObjjs = res.data.tags
        tagsObjjs.forEach((o) => {
          tags.push(o.style)
        })
        that.setData({
          tags:tags,
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

  // bindPickerChange: function (e) {
  //   console.log('Using picker', e.detail.value)
  //   this.setData({
  //     index: e.detail.value
  //   })
  // },
  
  showMessageForm: function(e) {
    const artistId = e.currentTarget.dataset.id
    this.setData({
      bookedArtist: this.data.artists.find(x => x.id == artistId)
    })
  },

  bindSubmit: function(e) {
    const that = this
    let recipient_id = this.data.bookedArtist
    let content = e.detail.value.content
    requests.post({
      url: paths.postMessage,
      data: {
        user_id: recipient_id,
        content: content
      },
      success: res => {
        console.log(res)
          that.setData({
            bookedArtist: ""
          })
      }

    })
  },

  favoriteImage: function(e) {
    const auth_key = wx.getStorageSync("auth_key")
    const imageId = e.currentTarget.dataset.id
    console.log(imageId)
    const that = this;
    let art = undefined
    this.data.artists.forEach((artist) => {
      artist.art.forEach((a) => {
        if (a.id == imageId) {
          art = a
        }
      })
    })

    if (art.favorited == false) {
    requests.post({
      url: paths.newFavorite,
      data: {
        id: imageId
      },
      success: res => {
        art.favorited = true
        
        that.setData({
          artists: that.data.artists
        })
    }
    })
    } else {
        requests.delete({
          url: paths.deleteFavorite + `${imageId}`,
          success: res => {
              art.favorited = false
              that.setData({
                artists: that.data.artists
              })
          }
        })
    }
  },

bindPickerChange: function(e) {
  const that = this
  const auth_key = wx.getStorageSync("auth_key")
  this.setData({
    inputVal: this.data.tags[e.detail.value]
  })
  if (this.data.inputVal == "All") {
    that.onLoad()
  } else {
  requests.get({
    url: paths.searchStyles + `${that.data.inputVal}`,
    success: res => {
      that.setData({
        artists: res.data.artists
      })
    }
  })
  }
},

  goToInfoPage: function (e) {
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },

  goToShowShopPage: function (e) {
    console.log(6666, e.currentTarget.dataset)
    let shopid = e.currentTarget.dataset.shopid
    wx.navigateTo({
      url: '/pages/showshop/showshop?shopid=' + shopid,
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