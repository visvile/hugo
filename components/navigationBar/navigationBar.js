const app = getApp()

Component({

  properties: {
    text: {
      type: String,
      value: '每日菜场'
    },
    back: {
      type: Boolean,
      value: true
    },
    home: {
      type: Boolean,
      value: false
    }
  },
  data: {
    statusBarHeight: app.globalData.statusBarHeight + 'px',
    navigationBarHeight: (app.globalData.statusBarHeight + 44) + 'px'
  },

  methods: {
    backHome: function () {
      let pages = getCurrentPages()
      wx.navigateBack({
        delta: pages.length
      })
    },
    back: function () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
})