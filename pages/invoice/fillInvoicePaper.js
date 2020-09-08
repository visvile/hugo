// pages/invoice/fillInvoicePaper.js
// var dateTimePicker = require('../../utils/dateTimePicker');
var app = getApp();
// import {
//   List
// } from '/fillInvoicePaper_list.js';
// var model = new List();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper_big:'block',
    swiper_small:'none',
    currentData : 0,
    date: '2020-05-01',
    time: '00:00',
    dateTimeArray: null,
    dateTime: null,
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2020,
    endYear: 2021,
    swiper_height:520,
    type:2,
    image_icon:app.globalData.image_icon
  },
  //获取当前滑块的index
  bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current,
    })
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    console.log(e)
    if(e.currentTarget.dataset.current == 1){
      this.setData({
        type:1,
        swiper_big:'none',
        swiper_small:'block',
      })
    }else{
      this.setData({
        type:2,
        swiper_big:'block',
        swiper_small:'none',
      })
    }
   
    const that = this;

    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  getDateTime: function(e) {
    console.log('点击确定选择的时间是:',e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad(options){
  //   this.setData({
  //     id : options.id
  //   })
  //   // 获取完整的年月日 时分秒，以及默认显示的数组
  //   var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
  //   var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
  //   // 精确到分的处理，将数组的秒去掉
  //   var lastArray = obj1.dateTimeArray.pop();
  //   var lastTime = obj1.dateTime.pop();
    
  //   this.setData({
  //    dateTime: obj.dateTime,
  //    dateTimeArray: obj.dateTimeArray,
  //    dateTimeArray1: obj1.dateTimeArray,
  //    dateTime1: obj1.dateTime
  //   });
  //   },
    changeDate(e){
    this.setData({ date:e.detail.value});
    },
    changeTime(e){
    this.setData({ time: e.detail.value });
    },
    changeDateTime(e){
    this.setData({ dateTime: e.detail.value });
    },
    changeDateTime1(e) {
    this.setData({ dateTime1: e.detail.value });
    },
    changeDateTimeColumn(e){
    var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;
    
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    
    this.setData({
     dateTimeArray: dateArr,
     dateTime: arr
    });
    },
    changeDateTimeColumn1(e) {
    var arr = this.data.dateTime1, dateArr = this.data.dateTimeArray1;
    
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    
    this.setData({ 
     dateTimeArray1: dateArr,
     dateTime1: arr
    });
  },
  onShow(e){
    this.loadData();
  },
  loadData: function () {
    var that = this;
    //获取ajax请求数据接口
    var id = that.data.id
    // model.getOrderListPageData(id,(data) => {
    //   console.log(data);
    //   // let artArr = data.data;
    //   // for (var i = 0; i < artArr.length; i++) {
    //   //   that.data.list.push(artArr[i]);
    //   // }
    //   // // //循环遍历banner
    //   that.setData({
    //     list_all:data.data,
    //     price:data.data.price
    //   });
    // });
  },


  //提交表单
  formSubmit: function (e) {
    var that = this
    console.log('e', e);
    //提交表单
    var formData = e.detail.value;
    var type = that.data.type;
    var price = that.data.price;
    var order_id = that.data.id;
    console.log('formData', formData)
    //提交 判断是否为空
    // if(formData.name == ''){
    //   wx.showModal({
    //     content: '请填写店铺名称',
    //   })
    //   return false;
    // }
   
    // model.getTiJiaoPageData(type,price,order_id,formData, (data) => {
    //   console.log(data)
    //   if (data.code == 1) {
    //     wx.showToast({
    //       title: '提交成功',
    //       icon: 'success',
    //       duration: 2000,
    //     });
    //     setTimeout(function(){
    //       wx.navigateBack({
    //         delta: 2,
    //       })
    //     },2000)
    //   } else {
    //     wx.showToast({
    //       title: data.msg,
    //       icon: 'error',
    //       dutation: 2000,
    //     })
    //   }
    // });
  },
  
})