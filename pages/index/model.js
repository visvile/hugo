
import { Base } from '../../utils/base.js';

class List extends Base {

  constructor() {
    super();
  }
 //首页请求接口
  getIndexAddress(lat,lng,callback) {
    var param = {
      data: {
        // access_token: wx.getStorageSync('token'),
        lat:lat,
        lng:lng
      },
      url: '/index/index',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
   //地址页面请求
   getAddress(lat,lng,callback) {
    var param = {
      data: {
        access_token: wx.getStorageSync('token'),
        lat:lat,
        lng:lng,
      },
      url: '/Order/address_list',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  //商品详情
  getShopDetail(id,callback) {
    var param = {
      data: {
        token: wx.getStorageSync('token'),
        id:id,
      },
      url: '/Goods/detail',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
// 搜索
// 获取数据
  //page:分页默认值1
  //openid:微信唯一ID
  //ticket:门票，每个接口都是需要传这个参数
  //status:订单状态，1，2，3，4，5
  //callback 回调函数
  //获取除商品列表
  getOrderListPageData(page,search_name,sup_id,callback) {
    var param = {
      data: {
        page:page,
        search_name:search_name,
        sup_id:sup_id,
        access_token: wx.getStorageSync('token')
      },
      url: '/Index/search_list',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  //获取商品列表
  getOrderList1PageData(page,callback) {
    var param = {
      data: {
        access_token: wx.getStorageSync('token'),
        page:page
      },
      url: '/index/index',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
// end
};
export { List };