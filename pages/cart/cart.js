//logs.js
const util = require('../../utils/util.js')
var app = getApp();
import {
  List
} from '/model.js';
var model = new List();
Page({
  data: {
    image_icon:app.globalData.image_icon,
    back:false,
    index:0,
    getshopping:[{
      id:0,
      img:app.globalData.image_icon + 'xihongshi.png',
      title:'[可口可乐]汽水 碳酸饮料',
      number:'10',
      moeney:'￥25.00',
      monyes:'￥30.00',
    },{
      id:1,
      img:app.globalData.image_icon + 'xihongshi.png',
      title:'[可口可乐]汽水 碳酸饮料',
      number:'10',
      moeney:'￥25.00',
      monyes:'￥30.00',
    }],
    catshopping:[{
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
    ],
    num:0,
    status:0,
    name:0,
    clickId:0,
    select_all: false,
    
  },
  // 点击获取每个id
  // checkboxChange(e) {
  //   var that = this
  //   console.log(e)
  //   var name = e.currentTarget.dataset.index
  //   console.log(name);
  //   that.setData({
  //     name:name
  //   })
  // },
  //点击加一
  clickmore: function (e) {
    console.log(e)
    var that = this
    var index  = e.currentTarget.dataset.index
    var num = that.data.num;
    console.log(index)
    // 总数量+1  
    if (num < 1 ){
        that.data.status = 1
    }if(num < 9) {
      that.data.num++;
    }
    // 将数值与状态写回  
    this.setData({
      num: that.data.num,
      status:that.data.status
    });
  },
  //点击减一
  clicksign: function (e) {
    console.log(e.currentTarget.dataset.index);
    var that = this
    var num = that.data.num;
    // 总数量-1  
    if (num > 0) {
      that.data.num--;
    }if (num < 2) {
       that.data.status = 0
    }
    // 将数值与状态写回  
    this.setData({
      num: that.data.num,
      status:that.data.status
    });
  },
    // 调用方法
    // onLoad: function () {
    //   this.listData();
    // },
    // 获取购物车的数据
    // listData:function(){
    //   var that = this
    //   var lat = that.data.lat
    //   var lng = that.data.lng
    //   console.log(lat,lng)
    //   model.getSoppingCart(lat,lng, (data) => {
    //     that.setData({
    //       getshopping:data.data,
    //     })
    //     console.log(data)
    //   })
    // },

  // 全选与单选
  checkboxChanges: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  selectall: function () {//全选与反全选
    console.log(this.data)
    var that = this;
    for (let i = 0; i < that.data.getshopping.length; i++) {
      that.data.getshopping[i].checked = (!that.data.select_all)
    }
    that.setData({
      getshopping: that.data.getshopping,
      select_all: (!that.data.select_all)
    })
  },
  //跳转凑单页面
  gotogoodlist(){
    wx.navigateTo({
      url: './goodlist'
    })
  },
})
