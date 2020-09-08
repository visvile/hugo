// pages/invoice/addInvoice.js
var app = getApp();
// import {
//   List
// } from '/addInvoice_list.js';
// var model = new List();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal:false,
    page:1,
    list:[{
      id:0,
      number:'餐厅食材采购',
      pay_time:'2020-08-31 13：37',
      old_price:'201.25'
    },{
      id:0,
      number:'餐厅食材采购',
      pay_time:'2020-08-31 13：37',
      old_price:'201.45'
    }],
    goods_list:[{
      id:0,
      title:'土豆红心 1两大',
      price:'￥5.2',
      num:'X3',
    },{
      id:0,
      title:'土豆红心 1两大',
      price:'￥5.2',
      num:'X3',
    }],
    
    index:0,
    clickId:0,
    select_all: false,
  },

  //new 全选 单选
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  selectall: function () {//全选与反全选
    console.log(this.data)
    var that = this;
    for (let i = 0; i < that.data.list.length; i++) {
      that.data.list[i].checked = (!that.data.select_all)
    }
    that.setData({
      list: that.data.list,
      select_all: (!that.data.select_all)
    })
  },


  // 单选
  // radioChange(e) {
  //   const items = this.data.list
  //   for (let i = 0, len = items.length; i < len; ++i) {
  //     items[i].checked = items[i].value === e.detail.value
  //   }
  //   this.setData({
  //     items:items
  //   })
  // },
  // 弹出遮罩层
  // 外面的弹窗
  btn:function (e) {
    console.log(e)
    this.setData({
      showModal:true,
      index:e.currentTarget.dataset.index,
      clickId:e.currentTarget.id
    })
  },

  // 禁止屏幕滚动
  preventTouchMove:function () {
  },

  // 弹出层里面的弹窗
  ok:function () {
    this.setData({
      showModal:false
    })
  },
  onLoad: function (options) {
    // this.loadData();
  },
  // loadData: function () {
  //   var that = this;
  //   //获取ajax请求数据接口
  //   var page = that.data.page
  //   model.getOrderListPageData(page,(data) => {
  //     console.log(data);
  //     let artArr = data.data;
  //     for (var i = 0; i < artArr.length; i++) {
  //       that.data.list.push(artArr[i]);
  //       that.data.list[i].checked = false
  //     }
  //     // //循环遍历banner
  //     that.setData({
  //       list:that.data.list,

  //     });
  //   });
  // },
   //下滑方法从写接口  触底刷新
   onReachBottom: function () {
    var page = this.data.page + 1
    this.setData({
      page: page
    })
    // this.loadData();
  },
  nextTo(e){
    if(this.data.clickId == 0){
      wx.showModal({
        content: '请选择要开票的订单',
      })
    }else{
      wx.navigateTo({
        url: './fillInvoicePaper?id=' + this.data.clickId,
      })
    }
    
  }
})