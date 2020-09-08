// pages/index/addressadd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    address:''
  },
    //挑起地图
    openMap(e){
      var that = this
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          const latitude = res.latitude
          const longitude = res.longitude
          const speed = res.speed
          const accuracy = res.accuracy
        }
      })
      wx.chooseLocation({
        success(res) {
          console.log('res',res)
          that.data.address  = res.address
          that.data.name = res.name
          that.setData({
            lng:res.longitude,
            lat:res.latitude,
            address:res.address,
            name:res.name
          })
        }
      })
    },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
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