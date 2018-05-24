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
      success:(res) => {
          that.setData({shops: res.data.shops})
      }
    })
  },


  bindSubmit: function (e) {
    let name = e.detail.value.name;
    let shop = e.detail.value.shop;
    let location = e.detail.value.location;
    let style = e.detail.value.style
    let id = this.data.id;

    let artist = {
      name: name,
      shop: shop,
      location: location,
      style: style,
    }


    wx.request({
      url: '/pages/addartist/addartist', //*******WAITING FOR SERVER*******//
      method: "POST",
      data: artist,
      success(res) {
        wx.redirectTo({
          url: '/pages/showartist/showartist'
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
          url: '/pages/addartist/addartist'
        })

      },




    })
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