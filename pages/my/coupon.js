const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    index1:0,
    couTop:[{
      id:0,
      name:'全部'
    },{
      id:1,
      name:'未使用'
    },{
      id:2,
      name:'已使用'
    }],
    list:[{
      id:0,
      status:1, // 1可使用 2不可使用 3已过期
      title:'五得力大米专享',
      pirce:'50.00',
      man_price:'200',
      time:'2020-06-18 12:00',
      xu_price:'3'
    },{
      id:1,
      status:2, // 1可使用 2不可使用 3已过期
      title:'五得力大米专享',
      pirce:'50.00',
      man_price:'200',
      time:'2020-06-18 12:00',
      xu_price:'3'
    },{
      id:2,
      status:3, // 1可使用 2不可使用 3已过期
      title:'五得力大米专享',
      pirce:'50.00',
      man_price:'200',
      time:'2020-06-18 12:00',
      xu_price:'3'
    },{
      id:2,
      status:3, // 1可使用 2不可使用 3已过期
      title:'五得力大米专享',
      pirce:'50.00',
      man_price:'200',
      time:'2020-06-18 12:00',
      xu_price:'3'
    },{
      id:2,
      status:3, // 1可使用 2不可使用 3已过期
      title:'五得力大米专享',
      pirce:'50.00',
      man_price:'200',
      time:'2020-06-18 12:00',
      xu_price:'3'
    },{
      id:2,
      status:3, // 1可使用 2不可使用 3已过期
      title:'五得力大米专享',
      pirce:'50.00',
      man_price:'200',
      time:'2020-06-18 12:00',
      xu_price:'3'
    },{
      id:2,
      status:3, // 1可使用 2不可使用 3已过期
      title:'五得力大米专享',
      pirce:'50.00',
      man_price:'200',
      time:'2020-06-18 12:00',
      xu_price:'3'
    },{
      id:2,
      status:3, // 1可使用 2不可使用 3已过期
      title:'五得力大米专享',
      pirce:'50.00',
      man_price:'200',
      time:'2020-06-18 12:00',
      xu_price:'3'
    },{
      id:2,
      status:3, // 1可使用 2不可使用 3已过期
      title:'五得力大米专享',
      pirce:'50.00',
      man_price:'200',
      time:'2020-06-18 12:00',
      xu_price:'3'
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
  }
 
})