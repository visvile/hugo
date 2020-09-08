
import { Config } from 'config.js';

class Base {
  constructor() {
    "use strict";
    this.baseRequestUrl = Config.restUrl;
  }
  //Ajax
  request(param) {
    var url = this.baseRequestUrl + param.url;
    if (!param.type) {
      param.type = 'GET';
    };

    
    wx.request({
      url: url,
      data: param.data,
      header: {
        'content-type': 'application/json'
      },
      method: param.type,
      success: function (res) {
        param.sCallback && param.sCallback(res.data);
      },
      fail: function (err) {
        console.log('报错信息：'.err);
      }
    })
  };
  //获取元素上绑定的值
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  };
}

export { Base }