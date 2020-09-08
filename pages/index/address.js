// pages/search/index.js
const app = getApp();
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
import {
  List
} from '/model.js';
var model = new List();
var qqmapsdk = new QQMapWX({
  key: 'OGHBZ-NPNWO-IFGW6-SXXHC-5TB37-FHFYO' // 必填
}); 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    image_icon:app.globalData.image_icon,
    no_input:'block', //输入框内是否有文字   block 无    none  有
    searchShow:1, //搜索按钮显示  1显示 2隐藏
    searchHide:2, //取消（搜索）按钮显示  1显示 2隐藏
    address:0,
    listaddress:[],
    nearbyList:[{
      id:0,
      address:'吉林省长春市南关区解放大路与珲春街交汇',
    },
    {
      id:0,
      address:'吉林省长春市南关区解放大路与珲春街交汇',
    },{
      id:0,
      address:'吉林省长春市南关区解放大路与珲春街交汇',
    }]
  },
  onLoad(){
    var that = this
    that.listData();
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude
				const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log(res)
        that.setData({
          lat:res.latitude,
          lng:res.longitude,
          address:res.address
        })
        
        that.listDatas();
        console.log(res)
      }
     })
  },
  //挑起地图
  openMap(e){
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
				const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
      }
    })
    wx.chooseLocation({
      success(res) {
        console.log('res',res)
        that.data.address  = res.address
        that.setData({
          lng:res.longitude,
          lat:res.latitude,
          address:res.address
        })
      }
    })
  },
  searchHide(e){
    this.setData({
      searchShow:1, //搜索按钮显示  1显示 2隐藏
      searchHide:2, //取消（搜索）按钮显示  1显示 2隐藏
    })
  },
  searchS(e){
    //这里的_val是获取input值的临时变量
    this.setData({
      searchShow:2, //搜索按钮显示  1显示 2隐藏
      searchHide:1, //取消（搜索）按钮显示  1显示 2隐藏
    })
  },
  listData:function(){
    var _this = this
    qqmapsdk.reverseGeocoder({
      success:function(res){
        console.log(res)
        var address = res.result.address
        console.log(address)
        _this.data.address  = res.address
        _this.setData({
          address: address,
        });
      }
    })
  },
  listDatas:function(){
    var that = this
    var lat = that.data.lat
    var lng = that.data.lng
    console.log(lat,lng)
    model.getAddress(lat,lng, (data) => {
      that.setData({
        listaddress:data.data.address,
        listnear:data.data.near
      })
      console.log(data)
    })
  },
  gotoaddressadd(){
    wx.navigateTo({
      url: './addressadd',
    })
  },
})