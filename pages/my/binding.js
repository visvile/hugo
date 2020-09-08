const app = getApp()
import {
  List
} from '/model.js';
var model = new List();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    index:0,
    list:{},
    array:[{
      id:1,
      name:'中国招商银行'
    },{
      id:2,
      name:'中国银行'
    },{
      id:3,
      name:'中国建设银行'
    },{
      id:4,
      name:'中国工商银行'
    },{
      id:5,
      name:'中国农业银行'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.listData();
  },
  listData:function(){
    var that = this
    model.getBank((data) => {
      console.log(data)
      that.setData({
        list: data.data
      })
    });
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', this.data.array[e.detail.value].name)
    console.log()
    this.setData({
      index: e.detail.value,
      account : this.data.array[e.detail.value].name
    })
    console.log(this.data.array[e.detail.value].name)
  },
  
  //提交表单
  formSubmit: function (e) {
    var that = this
    console.log('e', e);
    //提交表单
    var formData = e.detail.value;
    console.log('formData', formData)
    //提交 判断是否为空
    if(formData.name == ''){
      wx.showModal({
        content: '请填持卡人姓名',
      })
      return false;
    }
    if(formData.card == ''){
      wx.showModal({
        content: '请填写银行卡号',
      })
      return false;
    }

    if(formData.branch == ''){
      wx.showModal({
        content: '请填写支行信息',
      })
      return false;
    }
    if(that.data.index == 0){
      var account = that.data.array[0].name
    }else{
      var account = that.data.account
    }
    console.log(account),
    model.getMycard(formData,account,(data) => {
      console.log(data)
      if(data.code == 1){
        wx.showToast({
          title: '绑定成功',
          icon: 'success',
          duration: 2000,
        })
      }else{
        wx.showToast({
          title: '绑定失败',
          icon: 'fail',
          duration: 2000,
        })
      }
    });
    wx.navigateTo({
      url: '/pages/my/wallet',
    })
  },
  
})