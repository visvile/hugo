const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    group:1, //1有参加拼团  2未参加拼团
    index1:0,
    couTop:[{
      id:0,
      name:'全部' 
    },{
      id:1,
      name:'拼团中'
    },{
      id:2,
      name:'拼团成功'
    },{
      id:3,
      name:'拼团失败'
    }],
    list:[{
      status:'1',//状态 1拼团中 2拼团成功 3拼团失败
      time:'2018-09-12 18:33',
      status_data:'支付成功',
      images:[app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg'],
      images_num:'11',
      price:'18.50'
    },{
      status:'3',//状态 1拼团中 2拼团成功 3拼团失败
      time:'2018-09-12 18:33',
      status_data:'拼团失败',
      images:[app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg'],
      images_num:'11',
      price:'18.50'
    },{
      status:'2',//状态 1拼团中 2拼团成功 3拼团失败
      time:'2018-09-12 18:33',
      status_data:'待发货',
      images:[app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg',app.globalData.image_icon + 'kele.jpg'],
      images_num:'11',
      price:'18.50'
    }]
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
})