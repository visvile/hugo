// pages/order/refund.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    select_all: false,
    shopList:[{
      id:0,
      img:'{{image_icon}}kele.png',
      title:'[可乐可乐] 汽水 碳酸饮料',
      mone:'25.00',
      hxjg:'30.00',
      num:'1'
    },{
      id:0,
      img:'{{image_icon}}kele.png',
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
   // 全选与单选
  checkboxChanges: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  selectall: function () {//全选与反全选
    console.log(this.data)
    var that = this;
    for (let i = 0; i < that.data.shopList.length; i++) {
      that.data.shopList[i].checked = (!that.data.select_all)
    }
    that.setData({
      shopList: that.data.shopList,
      select_all: (!that.data.select_all)
    })
  },
  gotoReunds(){
    wx.redirectTo({
      url: './refunds',
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