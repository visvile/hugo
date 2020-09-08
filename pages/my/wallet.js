const app = getApp()
import {
  List
} from '/model.js';
var model = new List();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    index1:0,
    page:1,
    arrAy:[],
    none:'暂时没有数据',
    list:{},
    listScroll:[],
    wallet_status:2, //是否填写卡号  1填写 2未填写
    couTop:[{
      id:0,
      name:'全部' 
    },{
      id:1,
      name:'收入'
    },{
      id:2,
      name:'支出'
    },{
      id:3,
      name:'转入'
    }],
    listScroll:[{
      addtime:'2020/08/11 10：04：56',
      price:'66,666.00',
      title:'充值成功'
    },{
      addtime:'2020/08/11 10：04：56',
      price:'66,666.00',
      title:'充值成功'
    },{
      addtimeme:'2020/08/11 10：04：56',
      price:'66,666.00',
      title:'充值成功'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.listData();
  },
  listData:function(){
    var that = this
    var page = page
    var type = that.data.index1
    model.getMymoney(page,type, (data) => {
      console.log(data)
      var arrAy = data.data.list
      for( var i = 0; i < arrAy.length; i++){
        that.data.listScroll.push(arrAy[i]);
      }
      that.setData({
        list : data.data,
        listScroll :data.data.list
      })
      console.log('全部的列表' , that.data.listScroll)
      console.log(that.data.list)
      if(data.data.is_bank == 1){
        that.setData({
          wallet_status : 1
        })
      }
      if(data.data.list = ''){
        that.setData({
          none:none
        })
      }
    })
  },
  onReachBottom: function () {
    var page = this.data.page + 1
    this.setData({
      page: page
    })
    this.listData();
  },
  clickTab: function (e) {
    console.log(e)
    var index1 = e.currentTarget.dataset.index1
      this.setData({
        index1:e.currentTarget.dataset.index1,
        list:[],
        page:1
      })
    this.listData();
    },
  gotoaddwallet(){
    wx.navigateTo({
      url: './binding',
    })
  },
  
  gotowithdrawal(){
    wx.navigateTo({
      url: './recharge',
    })
  },
})