// pages/browse/browse.js

const app = getApp()
const paths = require('../../common/apiPaths')
const auth_key = wx.getStorageSync("auth_key")

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
    wx.request({
      url: paths.getAllConversations,
      data: {
        auth_key: auth_key
      },
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
    if (e.currentTarget.dataset.user_id) {
    this.setData({
      convName: e.currentTarget.dataset.name,
      convId: e.currentTarget.dataset.user_id
    })
    this.setData({
      inbox: false
    })
    wx.request({
      url: paths.getConverstation + `${e.currentTarget.dataset.user_id}`,
      data: {
        auth_key: auth_key
      },
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
    this.setData({
      nada: '',
      lastOne: ""
    })
    wx.request({
      url: paths.postMessage,
      method: "post",
      data: {
        auth_key: wx.getStorageSync("auth_key"),
        user_id: recipient_id,
        content: content
      },
      success: res => {
        wx.request({
          url: paths.getConverstation + `${that.data.convId}`,
          data: {
            auth_key: auth_key
          },
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