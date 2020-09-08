// pages/index/effective.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    getshopping:[{
      id:0,
      img:app.globalData.image_icon + 'xihongshi.png',
      title:'[可口可乐]汽水 碳酸饮料',
      number:'10',
      moeney:'￥25.00',
      monyes:'￥30.00',
    }],
    listScroll:[{     //选项卡导航
      id:0,
      name:'优选商品',
    },{
      id:1,
      name:'水果秒杀',      
    },{
      id:2,
      name:'蔬菜秒杀',      
    },{
      id:3,
      name:'肉禽秒杀',      
    },{
      id:4,
      name:'酒水饮料',      
    },{
      id:5,
      name:'酒水饮料',      
    }],
    index:0,
    flag:0,
    active_rules:[1,2],
  },
  listScroll(e){
    console.log(e)
    var that = this
    var index = e.currentTarget.dataset.index
      that.setData({
        flag:index
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