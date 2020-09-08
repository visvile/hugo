
import { Base } from '../../utils/base.js';

class List extends Base {

  constructor() {
    super();
  }
 //我的页面钱包
  getMymoney(page,type,callback) {
    var param = {
      data: {
        token: wx.getStorageSync('token'),
        page:1,
        type:type
      },
      url: '/My/wallet',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
   //我的银行卡提交
   getMycard(formData,account,callback) {
    var param = {
      data: {
        token: wx.getStorageSync('token'),
        name:formData.name,
        number:formData.card,
        open_bank:account,
        remark:formData.branch,
      },
      url: '/My/addBank',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  // 获取银行卡信息
  getBank(callback) {
    var param = {
      data: {
        token: wx.getStorageSync('token'),
      },
      url: '/My/getBank',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};
export { List };