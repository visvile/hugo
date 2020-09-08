const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  radiochange:function(e){
    console.log('radio发生change事件，携带的value值为：',e.detail.value)
  },
  gotorecharge(){
    wx.navigateTo({
      url: './recharge',
    })
  }
 
})