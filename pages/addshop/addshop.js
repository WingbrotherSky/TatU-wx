const app = getApp()
const paths = require('../../common/apiPaths')

Page({
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
    wx.request({
      url: paths.getAllShops,
      success: (res) => {
        that.setData({ shops: res.data.shops })
      }
    })
  },
  addArtistToShop: function (e) {
    const data = e.currentTarget.dataset
    const artistId = data.artistid

    wx.navigateTo({
      url: `/pages/addartist/addartist`,
    })
  },

  bindSubmit: function (e) {
    let shopname = e.detail.value.shopname;
    let tagline = e.detail.value.tagline;
    let location = e.detail.value.location;
    let style = e.detail.value.style
    let id = this.data.id;

    let shop = {
      shopname: shopname,
      tagline: tagline,
      location: location,
      style: style,
    }


    wx.request({
      url: '/pages/addshop/addshop', //*******WAITING FOR SERVER*******//
      method: "POST",
      data: artist,
      success(res) {
        wx.redirectTo({
          url: '/pages/showshop/showshop'
        })
      }
    })
  },


  listenerBtnChooseImage: function (e) {
    var that = this
    // Upload an image
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log('success')
        that.setData({
          src: res.tempFilePaths,
          image_url: res.tempFilePaths[0]
        })
        console.log(res)
        console.log(that.data)
        // Get image info
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            console.log(res.width)
            console.log(res.height)
            console.log(111, res.path)
            let files = that.data.files
            files.push(res.path)
            that.setData({ files: files })
          }
        })
      }, takePicture: function () {
        // console.log("test")

        wx.reLaunch({
          url: '/pages/addshop/addshop'
        })

      },




    })

    // START TABBAR
  //   goBack: function (e) {
  //     console.log(333, "back")
  //     wx.reLaunch({
  //       url: '/pages/index/index',    //// change to one page before
  //     })
  //   },

  // goBrowse: function (e) {
  //   wx.reLaunch({
  //     url: '/pages/browse/browse',
  //   })
  // },

  // goAddShop: function (e) {
  //   wx.reLaunch({
  //     url: '/pages/addshop/addshop'
  //   })
  // },
  // goInbox: function (e) {
  //   wx.reLaunch({
  //     url: '/pages/inbox/inbox',
  //   })
  // },
  // goShowShop: function (e) {
  //   wx.reLaunch({
  //     url: '/pages/showshop/showshop'
  //   })
  // },

  // END TABBAR

  },
  previewImage: function (e) {
    let that = this
    var data = e.currentTarget.dataset

    wx.previewImage({
      current: that.data.image_url, // 当前显示图片的http链接
      urls: [that.data.image_url]
    })
  }
})