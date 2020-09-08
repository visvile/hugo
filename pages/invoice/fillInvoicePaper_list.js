
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
//   getOrderListPageData(id,callback) {
//     var param = {
//       data: {
//         id:id,
//         access_token: wx.getStorageSync('token')
//       },
//       url: '/my/get_invoice',
//       sCallback: function (data) {
//         callback && callback(data);
//       }
//     };
//     this.request(param);
//   }
//   //提交
//   getTiJiaoPageData(type,price,order_id,formData,callback) {
//     var param = {
//       data: {
//         access_token:wx.getStorageSync('token'),
//         order_id:order_id,  //多个逗号分隔
//         price:price,  //金额
//         type:type,  //1电子2纸质
//         title:formData.title,  //抬头
//         identify:formData.identify,  //识别号
//         reg_address:formData.reg_address,  //注册地址
//         bank:formData.bank, //银行
//         bank_number:formData.bank_number,
//         username:formData.username,   //联系人
//         phone:formData.phone,   //手机号
//         address:formData.address,  //详细地址
//         email:formData.email,  //邮箱  
//         remark:formData.remark,  //备注  
//       },
//       url: '/my/invoice_add',
//       sCallback: function (data) {
//         callback && callback(data);
//       }
//     };
//     this.request(param);
//   }
// };

// export { List };