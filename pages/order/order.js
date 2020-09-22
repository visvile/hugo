const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    group:1, //有订单的  2未有订单的
    index1:0,
    couTop:[{
      id:0,
      name:'全部' 
    },{
      id:1,
      name:'待付款'
    },{
      id:2,
      name:'待发货'
    },{
      id:3,
      name:'待收货'
    },{
      id:4,
      name:'退款/售后'
    }],
    list:[{
      rightstatus:[{
        statusimg:1,
      },
      {
        statusimg:0,
      }],//状态 0取消订单 1去支付 2已退款 3评价 4查看详情 5催货 6查看物流 7确认收货 8再次购买 9删除订单
      time:'2018-09-12 18:33',
      status_data:'待付款',
      images:[app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg'],
      images_num:'11',
      price:'18.50'
    },{
      rightstatus:[{
        statusimg:4,
      },
      {
        statusimg:3,
      },
      {
        statusimg:9,
      }],//状态 0取消订单 1去支付 2已退款 3评价 4查看详情 5催货 6查看物流 7确认收货 8再次购买 9删除订单
      time:'2018-09-12 18:33',
      status_data:'已完成',
      images:[app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg'],
      images_num:'11',
      price:'18.50'
    },{
      rightstatus:[{statusimg:9}],//状态 0取消订单 1去支付 2已退款 3评价 4查看详情 5催货 6查看物流 7确认收货 8再次购买 9删除订单
      time:'2018-09-12 18:33',
      status_data:'已取消',
      images:[app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg'],
      images_num:'11',
      price:'18.50'
    },{
      rightstatus:[{statusimg:9}],//状态 0取消订单 1去支付 2已退款 3评价 4查看详情 5催货 6查看物流 7确认收货 8再次购买 9删除订单
      time:'2018-09-12 18:33',
      status_data:'已退款',
      images:[app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg'],
      images_num:'11',
      price:'18.50'
    },{
      rightstatus:[{
        statusimg:1,
      },
      {
        statusimg:0,
      }],//状态 0取消订单 1去支付 2已退款 3评价 4查看详情 5催货 6查看物流 7确认收货 8再次购买 9删除订单
      time:'2018-09-12 18:33',
      status_data:'待付款',
      images:[app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg'],
      images_num:'11',
      price:'18.50'
    },{
      rightstatus:[{
        statusimg:5,
      }],//状态 0取消订单 1去支付 2已退款 3评价 4查看详情 5催货 6查看物流 7确认收货 8再次购买 9删除订单
      time:'2018-09-12 18:33',
      status_data:'待发货',
      images:[app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg'],
      images_num:'11',
      price:'18.50'
    },{
      rightstatus:[{
        statusimg:7,
      },{
        statusimg:6,
      }],//状态 0取消订单 1去支付 2已退款 3评价 4查看详情 5催货 6查看物流 7确认收货 8再次购买 9删除订单
      time:'2018-09-12 18:33',
      status_data:'已发货',
      images:[app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg'],
      images_num:'11',
      price:'18.50'
    },{
      rightstatus:[{
        statusimg:8,
      },{
        statusimg:0,
      }],//状态 0取消订单 1去支付 2已退款 3评价 4查看详情 5催货 6查看物流 7确认收货 8再次购买 9删除订单
      time:'2018-09-12 18:33',
      status_data:'已退款',
      images:[app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg'],
      images_num:'11',
      price:'18.50'
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  top(e){
    console.log(e)
    var index1 = e.currentTarget.dataset.index1
    this.setData({
      index1:index1
    })
  },
  getClickToast(){
    wx.showToast({
      title: '催货成功,小哥火速为您配送',
      icon:'none'
    })
  },
  gotoDetail(){
    wx.navigateTo({
      url: './detail',
    })
  },
})