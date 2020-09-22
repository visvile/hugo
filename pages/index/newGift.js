// pages/index/newGift.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active_rules:'2',
    num:0,
    news_goods:[{
      goods_id: 27,
      image: "http://192.168.1.27/uploads/activity/20200609/c536fbe8b961162dd31192cf8068e0ae.png",
      news_price: "2",
      price: 35.18,
      remark: "新人专享",
      sup_spu_id: 22,
      title: "¥35.18/份(2斤)",
    }],
    page:1,
    image_icon:app.globalData.image_icon,
    discount:[{
      goods_type_id: 1,
      goods_type_name: "蔬菜",
      price_one: "50",
      price_two: "10",
      type_name: "蔬菜专享",
    },
    {
      goods_type_id: 1,
      goods_type_name: "蔬菜",
      price_one: "50",
      price_two: "10",
      type_name: "蔬菜专享",
    },
    {
      goods_type_id: 1,
      goods_type_name: "蔬菜",
      price_one: "50",
      price_two: "10",
      type_name: "蔬菜专享",
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.loadData();
  },
  // loadData: function () {
  //   var that = this;
  //   //获取ajax请求数据接口
  //   var page = that.data.page
  //   model.getOrderListPageData(page,(data) => {
  //     console.log(data);
  //     let artArr = data.data.news_goods;
  //     for (var i = 0; i < artArr.length; i++) {
  //       that.data.news_goods.push(artArr[i]);
  //     }
  //     //循环遍历banner
  //     that.setData({
  //       discount:data.data.discount,
  //       news_goods:that.data.news_goods,
  //       image:data.data.image
  //     });
  //   });
  // },
   //下滑方法从写接口  触底刷新
  //  onReachBottom: function () {
  //   var page = this.data.page + 1
  //   this.setData({
  //     page: page
  //   })
  //   this.loadData();
  // },
  // lingQu(e){
  //   //获取ajax请求数据接口
  //   model.getLingQuPageData((data) => {
  //     console.log(data);
  //     if(data.code == 1){
  //       wx.showModal({
  //         content: data.msg,
  //       })
  //     }else{
  //       wx.showModal({
  //         content: data.msg,
  //       })
  //     }
  //   });
  // },
  /* 加数 */
  // addCount: function (e) {
  //   //console.log("刚刚您点击了加1");
  //   var num = this.data.num;
  //   // 总数量-1  
  //   if (num < 1000) {
  //     this.data.num++;
  //   }
  //   // 将数值与状态写回  
  //   this.setData({
  //     num: this.data.num
  //   });
  // },
  /* 减数 */
  // delCount: function (e) {
  //   console.log("刚刚您点击了减1");
  //   var num = this.data.num;
  //   // 商品总数量-1
  //   if (num >= 1) {
  //     this.data.num--;
  //   }
  //   // 将数值与状态写回  
  //   this.setData({
  //     num: this.data.num
  //   });
  // },
  // getCount: function (e) {
  //   var num = this.data.num;
  //   console.log(num);
  //   wx.showToast({
  //     title: "数量：" + num + "",
  //   })
  // },
  //跳转详情
// clearanceContent(e){
//   var that = this;
//     //获取ajax请求数据接口
//     model.getShouQuanListPageData( (data) => {
//       console.log(data);
//       var is_ok = data.data.is_ok
//       var type = data.data.type
//       if(type == 2){
//         wx.navigateTo({
//           url: '../login/login',
//         })
//       }else{
//         if(is_ok == 2){
//           wx.showModal({
//             title: '提示',
//             content: '正在审核中',
//             success (res) {
//               if (res.confirm) {
//                 console.log('用户点击确定')
//               } else if (res.cancel) {
//                 console.log('用户点击取消')
//               }
//             }
//           })
//           return false;
//         }else{
//           var id = e.currentTarget.id
//           wx.navigateTo({
//             url: '../clearance/content?id=' + id,
//           })
//       }
//       }
//     });
// },

})