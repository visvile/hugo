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
    flag:1,
    hiddenName:true,
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
  getClickcart(){
    console.log('点击了购物车')
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
    if (this.data.getClickcart) {
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
})