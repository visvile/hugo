const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    index1:0,
    list:[{
      id:'0',
      title:'充1000元',
    },{
      id:'1',
      title:'充500元',
    },{
      id:'2',
      title:'充100元',
    },{
      id:'3',
      title:'充50元',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  rechPrice(e){
    console.log(e)
    var index1 = e.currentTarget.dataset.index1
    this.setData({
      index1:index1
    })
  }
  
})