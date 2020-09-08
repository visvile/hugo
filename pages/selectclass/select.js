const app = getApp()
import {
  List
} from '/select_list.js';
var model = new List();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    type:1, //默认一级分类
    type_id:'',
    image_icon:app.globalData.image_icon,
    back:false,
    artArr:[],
    flags:0,
    flagss:0,
    flagsss:0,
    page:1,
    listScroll:[],
    listSecond:[],
    listsingle:[],
    index:0,
    flag:0,
    activeKey: 0,
    num:0,
    status:0,
    MenuFloat:'none',
    goods_list:[{
      id:0,
      name:'葫芦波 - 水洗',
      num:0,
      img:app.globalData.image_icon + 'xihongshi.png',
      money:'￥20.99',
    },
    {
      id:1,
      name:'西红柿 - 水洗',
      num:0,
      img:app.globalData.image_icon + 'xihongshi.png',
      money:'￥10.99',
    }]
  },

  widthFix(e){
    this.setData({
      MenuFloat:'block'
    })
  },
  xxx(e){
    this.setData({
      MenuFloat:'none'
    })
  },
  // 一级分类
  listScroll(e){
    console.log(e)
    var that = this
    var index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.index
      that.setData({
        flag:index,
        supplier:18,
        type_id:id,
        type:1,
        page:1,
      })
      this.listData()
  },
  // 二级分类
  listleftScroll(e){
    console.log(e)
    var that = this
    let id = e.currentTarget.dataset.index
    var index = e.currentTarget.dataset.index
    console.log(e.currentTarget.dataset.index)
      that.setData({
        flags:index,
        supplier:18,
        type_id:id,
        type:2,
        page:1,
      })
      this.listData();
  },
  // 三级分类
  listtopScroll(e){
    console.log(e)
    var that = this
    var index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.index
    console.log(e.currentTarget.dataset.index)
      that.setData({
        flagss:index,
        supplier:18,
        type_id:id,
        type:3,
        page:1,
      })
      this.listData();
  },
  clickmore: function (e) {
    console.log(e.currentTarget.dataset.index);
    var that = this
    var num = that.data.num;
    var status = that.data.status
    // 总数量+1  
    if (num < 1 ){
        that.data.status = 1
    }if(num < 9) {
      that.data.num++;
    }
    // 将数值与状态写回  
    this.setData({
      num: that.data.num,
      status:that.data.status
    });
  },
  clicksign: function (e) {
    console.log(e.currentTarget.dataset.index);
    var that = this
    var num = that.data.num;
    // 总数量-1  
    if (num > 0) {
      that.data.num--;
    }if (num < 2) {
       that.data.status = 0
    }
    // 将数值与状态写回  
    this.setData({
      num: that.data.num,
      status:that.data.status
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.listData()
  },
  listData:function(){
    var that = this
    var supplier  = that.data.supplier 
    var type  = that.data.type 
    var page  = that.data.page 
    var type_id  = that.data.type_id 
    model.getSelecded(supplier, type, page, type_id,(data) => {
      let artArr = data.data.goods_list;
      for (var i = 0; i < artArr.length; i++) {
        that.data.goods_list.push(artArr[i]);
      }
      that.setData({
        listScroll : data.data.one_type,
        listSecond : data.data.two_type,
        listsingle : data.data.three_type,
        goods_list : data.data.goods_list
      })
      console.log(that.data.goods_list)
      console.log(data.data)
    })
  },

    //下滑方法从写接口  触底刷新
    onReachBottom: function () {
    var page = this.data.page + 1
    this.setData({
      page: page
    })
    this.listData();
  },
  gotodetail(e){
    var id = e.currentTarget.id
    console.log(id)
    wx.navigateTo({
      url: '/pages/index/groupdetail?id=' + id
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})