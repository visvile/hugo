
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
};
export { List };