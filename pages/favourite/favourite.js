// pages/browse/browse.js

const app = getApp()
const paths = require('../../common/apiPaths')
let key;
let maxRight = 100;
let maxLift = 100;
let startX;
let startY;
let endX;
let endY;

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
    wx.request({
      // url: paths.getAllShops,
      url: paths.getAllFavorites,
      data: {
        auth_key: auth_key
      },
      success:(res) => {
        console.log(res)
          // that.setData({shops: res.data.shops})
          that.setData({favorites: res.data.favorites})
          // console.log(9999999,this.data.favorites)

          let _fav = that.data.favorites

          for (var k in _fav) {
            _fav[k].right = 0
            _fav[k].startRight = 0
            _fav[k].lift = 0
            _fav[k].startLift = 0
            // console.log(5555, _fav[k])
          }
          that.setData({favorites: _fav})
          // console.log(3333,that.data.favorites)

      },
      fail:(res) => {
        console.log("hey fail request T T")
        console.log(res)
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

    wx.navigateTo({
      url: `/pages/showshop/showshop`,
    })
  },

  showImage: function (e) {
    const data = e.currentTarget.dataset
    const artistId = data.artistid

    wx.navigateTo({
      url: `/pages/showimage/showimage`,
    })
  },

  showArtist: function (e) {
    const data = e.currentTarget.dataset
    const artistId = data.artistid

    wx.navigateTo({
      url: `/pages/showartist/showartist?id=${artistId}`,
    })
  },

  showArt: function(e) {
    const data = e.currentTarget.dataset
    const artId = data.artid


    wx.navigateTo({
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

  drawStart: function (e) {
    // console.log("drawStart");  
    // console.log(3333,e)
    var touch = e.touches[0];
    const startX = touch.clientX;
    const startY = touch.clientY;
    var favorites = this.data.favorites;
    for (var i in favorites) {
      // var data = favorites[i];
      favorites[i].startRight = startX;
      favorites[i].startLift = startX;
    }
    // key = true;
  },

  drawEnd: function (e) {
    // console.log("drawEnd");
    // console.log(4444,e)
    var favorites = this.data.favorites;
    for (var i in favorites) {
      console.log(3333,data)
      var data = favorites[i];
      if (data.right <= -50 )   {
          data.right = -100;
      }else if (data.right >-49 && data.right <49) {
          data.right = 0
      }else if (data.right > 50) {
          data.right = 100;
      }

    }
    this.setData({
      favorites: favorites
    });
  },

  drawMove: function (e) {
    //console.log("drawMove");
    console.log(6666,e)
    var self = this;
    var dataId = e.currentTarget.dataset.favoriteId;
    const favorites = this.data.favorites;
    const currentTarget = this.data.favorites.find(f => f.id == dataId);
    // console.log(this.data.favorites);
    console.log(dataId);
    console.log(currentTarget);
    // if (key) {
      var touch = e.touches[0];
      const endX = touch.clientX;
      const endY = touch.clientY;
      console.log("startX=" + startX + " endX=" + endX);
      // if (endX - startX == 0)
      //   return;
      // var res = favorites;
      //从右往左  

      currentTarget.lift = currentTarget.startLift - endX;
      currentTarget.right = currentTarget.startRight - endX;

      // if ((endX - startX) < 0) {
      //   for (var k in res) {
      //     var data = res[k];
      //     if (res[k].id == dataId) {
      //       var startRight = res[k].startRight;
      //       var change = startX - endX;
      //       startRight += change;
      //       if (startRight > maxRight)
      //         startRight = maxRight;
      //       res[k].right = startRight;
      //     }
      //   }
      // } else {//从左往右  
      //   for (var k in res) {
      //     var data = res[k];
      //     if (res[k].id == dataId) {
      //       var startRight = res[k].startRight;
      //       var change = endX - startX;
      //       startRight -= change;
      //       if (startRight < 0)
      //         startRight = 0;
      //       res[k].right = startRight;
      //     }
      //   }
      // }
      self.setData({
        favorites: favorites
      });

    // }
  },

  //删除item  
  delItem: function (e) {
    var dataId = e.target.dataset.id;
    console.log("删除" + dataId);
    var favorites = this.data.favorites;
    var newfavorites = [];
    for (var i in favorites) {
      var item = favorites[i];
      if (item.id != dataId) {
        newfavorites.push(item);
      }
    }
    this.setData({
      favorites: newfavorites
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