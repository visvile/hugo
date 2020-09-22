// pages/ceshi/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
 
  },
  getHfpay(){
    wx.request({
      url: 'https://hfpay.testpnr.com/api/hfpay/pay012',
      
      data:{
        version:'10',                  //版本号
        mer_cust_id:'1234567891589758',          //商户客户号
        order_id:'202009151443',                 //订单号
        order_date:'20201915',               //订单日期	
        app_pay_type:'07',                //支付类型07
        trans_amt:'100.00',                  //交易金额
        goods_desc:'这是一个非常好的商品，超级好吃哦',
        dev_info_json:{                 //商品描述
          ipAddr:'10.99.195.11',
          devType:'2',
          IMEI:'3553200846666033'
        }
      },
      success:function(data){
        console.log(data)
      }
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