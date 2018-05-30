// pages/browse/browse.js

const app = getApp()
const paths = require('../../common/apiPaths')
const requests = require("../../common/apiClient")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: "",
    inbox: true,
    items: [],
    nada: '',
    lastOne: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const that = this
    const auth_key = wx.getStorageSync("auth_key")
    requests.get({
      url: paths.getAllConversations,
      success: res => {
        console.log(11111,res)
        that.setData({
          conversations: res.data.users
        })
        that.setData({
          items: that.data.conversations
        })
      }
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

  toggleInbox: function(e) {
   
    const that = this
    const auth_key = wx.getStorageSync("auth_key")
    if (e.currentTarget.dataset.shop_id) {
    this.setData({
      convName: e.currentTarget.dataset.name,
      convId: e.currentTarget.dataset.shop_id
    })
    this.setData({
      inbox: false
    })
    requests.get({
      url: paths.getConverstation + `${e.currentTarget.dataset.shop_id}`,
      success: res => {
        that.setData({
          items: res.data.messages,
          lastOne: "last"
        })
        console.log(res)
      }
    }) 
    }
  },
  bindSubmit: function (e) {
    console.log(e)
    const that = this
    let recipient_id = this.data.convId
    let content = e.detail.value.content
    const auth_key = wx.getStorageSync("auth_key")
    this.setData({
      nada: '',
      lastOne: ""
    })
    requests.post({
      url: paths.postMessage,
      data: {
        shop_id: recipient_id,
        content: content
      },
      success: res => {
        requests.get({
          url: paths.getConverstation + `${that.data.convId}`,
          success: res => {
            that.setData({
              items: res.data.messages,
              lastOne: "last"
            })
            console.log(res)
          }
        })
      }

    })
  },
  
})