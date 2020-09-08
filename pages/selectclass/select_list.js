
import { Base } from '../../utils/base.js';

class List extends Base {

  constructor() {
    super();
  }
 //分类页面接口
  getSelecded(supplier,type,page,type_id,callback) {
    var param = {
      data: {
        // access_token: wx.getStorageSync('token'),
        supplier:18,
        type:type,
        page:page,
        type_id:type_id
      },
      url: '/Index/goods_type_list',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};
export { List };