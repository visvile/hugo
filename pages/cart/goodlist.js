var app = getApp();
Page({
  data: {
    image_icon:app.globalData.image_icon,
    // switchTitle1: '包邮',
    // switchTitle2: '团购',
    // itemTitle: '筛选',
    option1: [
      { text: '全部商品', value: 0 },
      { text: '米面', value: 1 },
      { text: '蔬菜', value: 2 },
    ],
    option2: [
      { text: '综合排序', value: 'a' },
      { text: '倒序', value: 'b' },
      { text: '销量最多', value: 'c' },
    ],
    option3: [
      { text: '筛选', value: 'e' },
      { text: '咋滴咋滴', value: 'f' },
      { text: '常购商品', value: 'g' },
    ],
    value1: 0,
    value2: 'a',
    value3:'e',
    //横向滚动
    listScroll:[{     //选项卡导航
      id:0,
      name:'不限',
    },{
      id:1,
      name:'0-5元',      
    },{
      id:2,
      name:'5-10元',      
    },{
      id:3,
      name:'10-15元',      
    },{
      id:4,
      name:'15-20元',      
    },{
      id:5,
      name:'20-30元',      
    }],
    flag:0,
    index:0,
    shoplist:[{
      img:app.globalData.image_icon + 'xihongshi.png',
      id:0,
      name:'土豆',
      hint:'约500g/份',
      chandi:'产地：河北',
      money:'￥25.00',
      moy:'￥30.00',
      biaoxi:'一刻达',
    },{
      id:1,
      img:'https://hbimg.huabanimg.com/239eb7bb5c79824b039444e24e377c414ebd25eeebbd7-9s0Nns_fw658/format/webp',
      name:'西红柿',
      hint:'约250g/份',
      chandi:'产地：吉林',
      money:'￥12.00',
      moy:'￥18.00',
      biaoxi:'一刻达',
    },{
      id:2,
      name:'茄子',
      img:'https://cdn.pixabay.com/photo/2014/04/03/09/58/eggplant-309459__340.png',
      hint:'约250g/份',
      chandi:'产地：吉林',
      money:'￥12.00',
      moy:'￥18.00',
      biaoxi:'一刻达',
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
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
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
    },{
      id:3,
      img:app.globalData.image_icon + 'xihongshi.png',
      name:'辣椒',
      hint:'约180g/份',
      chandi:'产地：吉林',
      money:'￥8.9.00',
      moy:'￥12.00',
      biaoxi:'一刻达',
    }],
  },
  listScroll(e){
    console.log(e)
    var that = this
    var index = e.currentTarget.dataset.index
      that.setData({
        flag:index
      })
  },
  /* 加数 */
  addCount: function (e) {
    //console.log("刚刚您点击了加1");
    var num = this.data.num;
    // 总数量-1  
    if (num < 1000) {
      this.data.num++;
    }
    // 将数值与状态写回  
    this.setData({
      num: this.data.num
    });
  },
  /* 减数 */
  delCount: function (e) {
    console.log("刚刚您点击了减1");
    var num = this.data.num;
    // 商品总数量-1
    if (num >= 1) {
      this.data.num--;
    }
    // 将数值与状态写回  
    this.setData({
      num: this.data.num
    });
  },
  getCount: function (e) {
    var num = this.data.num;
    console.log(num);
    wx.showToast({
      title: "数量：" + num + "",
    })
  },
  //横向滚动
  threeclass:function(e){
    let id = e.currentTarget.dataset.id
    this.setData({
      id:id
    })
  },
  
  // 下拉切换
  hideNav: function () {
    this.setData({
      displays: "none"
    })
  },
    // 区域
  tabNav: function (e) {
    this.setData({
      displays: "block"
    })
    this.setData({
      selected1: false,
      selected2: false,
      selected: true
    })
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
 
      var showMode = e.target.dataset.current == 0;
 
      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
    }
  },
  // 下拉切换中的切换
  // 区域
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected1: true
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true
    })
  },
  // 下拉菜单1 2 3 4
    // 区域
  clickSum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _sum: e.target.dataset.num
    })
    this.setData({
      first: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    console.log(text)
  },
  onLoad: function (options) {
 
  },
  clickMum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _mum: e.target.dataset.num
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    console.log(text)
  },
  onLoad: function (options) {
 
  },
  clickCum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _cum: e.target.dataset.num
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    console.log(text)
  },
  onLoad: function (options) {
 
  },
  // 售价
  clickNum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _num: e.target.dataset.num
    })
    this.setData({
      second: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    console.log(text)
  },
  onLoad: function (options) {
 
  },
  // 房型
  clickHouse: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _res: e.target.dataset.num
    })
    this.setData({
      thirds: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
  },
  onLoad: function (options) {
 
  },
 
  // 筛选
  choseTxtColor: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    console.log(e.currentTarget.dataset.id)
    this.setData({
      one: id
    })
  },
  chaoxiang: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      two: id
    })
  },
  louceng: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      third: id
    })
  },
  zhuangxiu: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      four: id
    })
  },
  leibei: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      five: id
    })
  },
  tese: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      six: id
    })
  },
  paixu: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      seven: id
    })
  }
})