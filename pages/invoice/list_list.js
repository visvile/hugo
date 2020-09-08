
// // import { Base } from '../../utils/base.js';

// class List extends Base {

//   constructor() {
//     super();
//   }
//   //获取数据
//   //page:分页默认值1
//   //openid:微信唯一ID
//   //ticket:门票，每个接口都是需要传这个参数
//   //status:订单状态，1，2，3，4，5
//   //callback 回调函数
//   //获取除商品列表
//   getOrderListPageData(page,callback) {
//     var param = {
//       data: {
//         page:page,
//         access_token: wx.getStorageSync('token')
//       },
//       url: '/my/invoice_list',
//       sCallback: function (data) {
//         callback && callback(data);
//       }
//     };
//     this.request(param);
//   }
// };

// export { List };