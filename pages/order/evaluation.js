// pages/order/evaluation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index1:0,
    index2:4,
    riderCommentList:[{
      name:'送货慢',
      id:0,
    },
    {
      name:'biubiu',
      id:1,
    },
    {
      name:'biubiu',
      id:2,
    },{
      name:'biubiu',
      id:3,
    }],
  },
  onChange() {

  },
  onChange(e){
    console.log(e)
    var index2  =e.detail
    this.setData({
      index2:index2
    })
  },
   // 多选评价标签
   checkboxChange(e){
    console.log(e)
    var index1 = e.currentTarget.dataset.index1
    this.setData({
      index1:index1
    })
  },
  chenkboxBiao(e){
    var index = e.currentTarget.dataset.index
    this.setData({
      index1 : this.data.index
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