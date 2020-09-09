// pages/order/refund.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    shopList:[{
      id:0,
      img:'/images/lele.png',
      title:'[可乐可乐] 汽水 碳酸饮料',
      mone:'25.00',
      hxjg:'30.00',
      num:'1'
    },{
      id:0,
      img:'/images/lele.png',
      title:'[可乐可乐] 汽水 碳酸饮料',
      mone:'25.00',
      hxjg:'30.00',
      num:'1'
    }]
  },
  onChange(event) {
    this.setData({
      result: event.detail,
    });
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