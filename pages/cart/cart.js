//logs.js
const util = require('../../utils/util.js')
var app = getApp();
Page({
  data: {
    image_icon:app.globalData.image_icon,
    back:false,
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
    status:0
  },
  clickmore: function (e) {
    console.log(e.currentTarget.dataset.index);
    var that = this
    var num = that.data.num;
    var status = that.data.status
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
  gotogoodlist(){
    wx.navigateTo({
      url: './goodlist'
    })
  },
  onLoad: function () {

  }
})
