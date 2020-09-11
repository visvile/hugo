//index.js
//获取应用实例
const app = getApp()
import {
  List
} from '/model.js';
var model = new List();
Page({
  data: {
    fixTop:'',
    scrollTop:0,
    id:0,
    statusBarHeight: app.globalData.statusBarHeight + 'px',
    navigationBarHeight:app.globalData.statusBarHeight ,
    image_icon:app.globalData.image_icon,
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    getcarousel:[    //轮播图
      {
        id:0,
        img:'http://218.16.125.44:81/img/20181027/131850560896851634.png'
      },
      {
        id:1,
        img:'http://218.16.125.44:81/img/20181027/131850560896851634.png'
      }
    ],
    iconimg:[1,2,3,4,5,6,7,8,9,10 ],   //分类图标
    shopping:[
      app.globalData.image_icon + 'xihongshi.png',
      app.globalData.image_icon + 'xihongshi.png',
      app.globalData.image_icon + 'xihongshi.png',
      app.globalData.image_icon + 'xihongshi.png',
      ],    //活动商品
      shoppings:[
        app.globalData.image_icon + 'xihongshi.png',
        app.globalData.image_icon + 'xihongshi.png',
      ],
    getactive:[{
      id:0,
      title:'拼团',
      hint:'组团享折扣',
      img: app.globalData.image_icon + 'xihongshi.png',
    },
    {
      id:1,
      title:'特价',
      hint:'底价不限购',
      img: app.globalData.image_icon + 'xihongshi.png',
    },
    {
      id:2,
      title:'清仓',
      hint:'安心来捡漏',
      img: app.globalData.image_icon + 'xihongshi.png',
    }],
    listScrollShop:[],
    index:0,
    flag:0,
    shoplist:[{
      img: app.globalData.image_icon + 'xihongshi.png',
      id:0,
      name:'土豆',
      hint:'约500g/份',
      chandi:'产地：河北',
      money:'￥25.00',
      moy:'￥30.00',
      biaoxi:'一刻达',
      more:app.globalData.image_icon + 'more.png'
    },{
      id:1,
      img:'https://hbimg.huabanimg.com/239eb7bb5c79824b039444e24e377c414ebd25eeebbd7-9s0Nns_fw658/format/webp',
      name:'西红柿',
      hint:'约250g/份',
      chandi:'产地：吉林',
      money:'￥12.00',
      moy:'￥18.00',
      biaoxi:'一刻达',
      more:app.globalData.image_icon + 'more.png'
    },{
      id:2,
      name:'茄子',
      img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1913720567,1657534009&fm=26&gp=0.jpg',
      hint:'约250g/份',
      chandi:'产地：吉林',
      money:'￥12.00',
      moy:'￥18.00',
      biaoxi:'一刻达',
      more:app.globalData.image_icon + 'more.png'
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
      more:app.globalData.image_icon + 'more.png'
    },
    {
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
      more:app.globalData.image_icon + 'more.png'
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
      more:app.globalData.image_icon + 'more.png'
    }],
    new:1,
    laseimgidnex:0
  },

  onLoad(){
    var that = this
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
          lng:res.longitude
        })
        that.listData();
      }
     })
  },
  listData:function(){
    var that = this
    var lat = that.data.lat
    var lng = that.data.lng
    console.log(lat,lng)
    model.getIndexAddress(lat,lng, (data) => {
      console.log(data)
      that.setData({
        iconimg:data.data.category,
        listScrollShop:data.data.sup_type
      })
    })
  },
  listScroll(e){
    console.log(e)
    var that = this
    var index = e.currentTarget.dataset.index
      that.setData({
        flag:index
      })
  },
  onShow(){
    var selt = this;
    wx.createSelectorQuery().select('.navs').boundingClientRect(function(res){
      selt.setData({
        fixTop:res.top
      })
      console.log(res.top)
   }).exec()
  },
    // 滑动监听
    onPageScroll:function(res){
      let self=this;
      let top=res.scrollTop;
        self.setData({
          scrollTop:top
      })
      console.log(res)
  },
  // 购划算
  gotoghs(){
    wx.navigateTo({
      url: './effective',
    })
  },
  //晚间菜场
  gotowjcc(){
    wx.navigateTo({
      url: './market',
    })
  },
  // 定位
  gotoaddress(){
    wx.navigateTo({
      url: './address',
    })
  },
  gotoActive(){
    wx.navigateTo({
      url: './groupbuy'
    })
    console.log(id)
  },
  //搜索
  gotosearchpage(){
    wx.navigateTo({
      url: './search'
    })
  },
  
})
