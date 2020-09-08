// pages/invoice/list.js
var app = getApp();
// import {
//   List
// } from '/list_list.js';
// var model = new List();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    list:[{
      id:0,
      title:'北京参数网络科技有限公司',
      content:'蔬菜*肉禽*鸡蛋',
      type_name:'纸质发票',
      contents:'餐厅食材采购',
      price:'￥4324.43'
    }],
    image_icon:app.globalData.image_icon
  },
  onLoad: function (options) {
  },
  onShow(e){
    // this.setData({
    //   list:[]
    // })
    this.loadData();
  },
  loadData: function () {
    var that = this;
    //获取ajax请求数据接口
    var page = that.data.page
    // model.getOrderListPageData(page,(data) => {
    //   console.log(data);
    //   let artArr = data.data;
    //   for (var i = 0; i < artArr.length; i++) {
    //     that.data.list.push(artArr[i]);
    //   }
    //   // //循环遍历banner
    //   that.setData({
    //     list:that.data.list
    //   });
    // });
  },
   //下滑方法从写接口  触底刷新
   onReachBottom: function () {
    // var page = this.data.page + 1
    // this.setData({
    //   page: page
    // })
    // this.loadData();
  },
  //跳转发票详情
  // details(e){
  //   console.log(e.currentTarget.id)
  //   var id = e.currentTarget.id
  //   wx.navigateTo({
  //     url: './electronicsCon?id=' + id,
  //   })
  // }
})