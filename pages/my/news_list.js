const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    list:[{
      img:app.globalData.image_icon + 'kele.jpg',
      status:'1',//状态  1已读 2未读
      title:'通知消息',
      time:'2020-05-24  12:39:12',
      nr:'金龙鱼大豆油全场低价来袭，开始时间今日12点整',
      status_data:'2'
    },{
      img:app.globalData.image_icon + 'kele.jpg',
      status:'1',//状态  1已读 2未读
      title:'通知消息',
      time:'2020-05-24  12:39:12',
      nr:'金龙鱼大豆油全场低价来袭，开始时间今日12点整',
      status_data:'2'
    },{
      img:app.globalData.image_icon + 'kele.jpg',
      status:'2',//状态  1已读 2未读
      title:'通知消息',
      time:'2020-05-24  12:39:12',
      nr:'金龙鱼大豆油全场低价来袭，开始时间今日12点整',
      status_data:'2'
    },{
      img:app.globalData.image_icon + 'kele.jpg',
      status:'2',//状态  1已读 2未读
      title:'通知消息',
      time:'2020-05-24  12:39:12',
      nr:'金龙鱼大豆油全场低价来袭，开始时间今日12点整',
      status_data:'99+'
    }]
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