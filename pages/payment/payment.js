const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    flag:0,
    dz:0,
    hiddenName:true,
    listsingle:[{
      id:0,
      name:'一刻达',
      status:0,
    },
    {
      id:1,
      status:1,
      name:'到店自取',
    }],
    getshopping:[{
      id:0,
      img:app.globalData.image_icon + 'xihongshi.png',
      title:'[可口可乐]汽水 碳酸饮料',
      number:'10',
      moeney:'￥25.00',
      monyes:'￥30.00',
    },{
      id:0,
      img:app.globalData.image_icon + 'xihongshi.png',
      title:'[可口可乐]汽水 碳酸饮料',
      number:'10',
      moeney:'￥25.00',
      monyes:'￥30.00',
    },
    ]
    },
    listtopScroll(e){
      console.log(e)
      var that = this
      var index = e.currentTarget.dataset.index
      console.log(e.currentTarget.dataset.index)
        that.setData({
          flag:index
        })
    },
    gotoselect(){
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
      if (this.data.gotoselect) {
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