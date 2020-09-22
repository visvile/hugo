const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isselect:2,
    hiddenName:true,
    image_icon:app.globalData.image_icon,
  },
  clickfales(){
    var that = this
    wx.showModal({
      title: '提示',
      content: '好不容易选好,确定取消吗？',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.data.isselect
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  clickAfter(){
    this.setData({
      hiddenName:!this.data.hiddenName
    })
    if (this.data.gotoselect) {
      this.setData({
        isPage: "scroll",
        showModalStatus: true,
      })
    } else {
      this.setData({
        isPage: "hidden",
        showModalStatus: false,
      })
    }
  },
  showMask:function(){
    this.setData({
      hiddenName:!this.data.hiddenName
    })
    if (this.data.clickAfter) {
      this.setData({
        isPage: "hidden",
        showModalStatus: false,
      })
    } else {
      this.setData({
        isPage: "scroll",
        showModalStatus: true,
      })
    }
  },
  gotoRefund(){
    wx.navigateTo({
      url: './refund',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})