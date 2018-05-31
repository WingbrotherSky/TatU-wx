const translation = require ('/../../utils/translation.js')

// components/TText/TText.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
        observer: function(n) {
        // console.log(n)
        const language = ['en', 'zh_CN'].includes(wx.getStorageSync('language')) ? wx.getStorageSync('language') : 'en'
        // console.log(language)
        // console.log(translation.default['en']['Tap Above to Enter'])
        this.setData({translatedText: translation.default[language][n]})
        }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
