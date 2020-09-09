var app = getApp();
import {
  List
} from '/model.js';
var model = new List();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    image_icon:app.globalData.image_icon,
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    getcarousel:[    //轮播图
      {
        id:0,
        img:'http://218.16.125.44:81/img/20181027/131850560896851634.png'
      },
      {
        id:1,
        img:'http://218.16.125.44:81/img/20181027/131850560896851634.png'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
    this.listData()
  },
  listData:function(){
    var that = this
    var id = that.data.id
    model.getShopDetail(id,(data) => {
      console.log(data)
      // that.setData({

      // })
    })
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