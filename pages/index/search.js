// pages/search/index.js
const app = getApp();
import {
  List
} from '/model.js';
var model = new List();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    search_name:0,
    sup_id:0,
    goods_list:[],
    arr2:[],
    search_ss:'',
    no_input:'block', //输入框内是否有文字   block 无    none  有
    searchShow:1, //搜索按钮显示  1显示 2隐藏
    searchHide:2, //取消（搜索）按钮显示  1显示 2隐藏
    searchHistory:'block',
    image_icon:app.globalData.image_icon
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      sup_id:options.sup_id
    })
    
    
  },
  onShow(e){
    //搜索历史
    var that = this
    wx.getStorage({
      key: 'recentSearch',
      success: function (res) {
        for (let i in res.data) {
          that.data.arr2.push(res.data[i])
        };
        console.log(that.data.arr2)
        that.setData({
          arr2: that.data.arr2
        })
      }
    })
    this.loadorData();
    setTimeout(function(){
      that.loadData();
    },100)

  },
  searchHide(e){
    this.setData({
      no_input:'block',
      goods_list:[],
      searchShow:1, //搜索按钮显示  1显示 2隐藏
    searchHide:2, //取消（搜索）按钮显示  1显示 2隐藏
    search_ss:''
    })
  },
  searchS(e){
    //这里的_val是获取input值的临时变量
    this.setData({
      no_input:'none',
      searchShow:2, //搜索按钮显示  1显示 2隐藏
    searchHide:1, //取消（搜索）按钮显示  1显示 2隐藏
    })
    let _val = this.data.search_name
    if (_val == '') {
      this.message('请输入要搜索的内容');
      return false;
    }
    //判断_val是否在数组中
    if (this.data.arr2.indexOf(_val) != -1) {
        this.loadData()
    } else {
      //否，把_val push到arr2中
      this.data.arr2.push(_val)
    };
    //把新的arr2存储到缓存中
    wx.setStorageSync('recentSearch', this.data.arr2);
    wx.getStorage({
      key: 'recentSearch',
      success: function (res) {
        //输出缓存内容
        console.log(res)
      }
    })
    this.setData({
      search_name:this.data.search_name,
      page:1,
      goods_list:[],
      arr2:this.data.arr2
    })
    this.loadData();
  },
  loadData: function () {
    var that = this;
    console.log('that.data.arr2.length',that.data.arr2.length)
    if(that.data.arr2.length <= 0){
      that.setData({
        searchHistory: 'none'
      })
    }else{
      that.setData({
        searchHistory: 'block'
      })
    }
    //获取ajax请求数据接口
    var page = that.data.page
    var search_name = that.data.search_name
    var sup_id = that.data.sup_id
    model.getOrderListPageData(page,search_name,sup_id,(data) => {
      console.log(data);
      let artArr = data.data.goods_list;
      for (var i = 0; i < artArr.length; i++) {
        that.data.goods_list.push(artArr[i]);
      }
      that.setData({
        recommend:data.data.recommend,
        goods_list:that.data.goods_list
      });
    });
  },
  //首次进入 获取推荐
  loadorData: function () {
    var that = this;
    if(that.data.arr2.length <= 0){
      that.setData({
        searchHistory: 'none'
      })
    }
    //获取ajax请求数据接口
    var page = that.data.page
    var search_name = that.data.search_name
    var sup_id = that.data.sup_id
    model.getOrderListPageData(page,search_name,sup_id,(data) => {
      console.log(data);
      let artArr = data.data.goods_list;
      for (var i = 0; i < artArr.length; i++) {
        that.data.goods_list.push(artArr[i]);
      }
      that.setData({
        recommend:data.data.recommend,
      });
    });
  },
   //下滑方法从写接口  触底刷新
   onReachBottom: function () {
    var page = this.data.page + 1
    this.setData({
      page: page
    })
    this.loadData();
  },
  inputBin(e){
    console.log(e.detail.value)
    this.setData({
      search_name:e.detail.value
    })
    var value = this.data.search_name
    if(value == ''){
      this.setData({
        no_input:'block',
        goods_list:[],
        searchShow:1, //搜索按钮显示  1显示 2隐藏
        searchHide:2, //取消（搜索）按钮显示  1显示 2隐藏
      })
    }
    // else{
    //   this.setData({
    //     no_input:'none'
    //   })
    // }
    

  },
  //点击历史搜索
  search_url:function(e){
    console.log(e.currentTarget.id)
    var id = e.currentTarget.id
    
    this.setData({
      search_name:id,
      search_ss:id,
      goods_list:[],
      page:1,
      searchShow:2, //搜索按钮显示  1显示 2隐藏
      searchHide:1, //取消（搜索）按钮显示  1显示 2隐藏
    })
    var value = this.data.search_ss
    if(value.length == 0){
      this.setData({
        no_input:'block',
        goods_list:[]
      })
    }
    else{
      this.setData({
        no_input:'none',
      })
    }
    this.loadData();
  },
  //删除历史记录
  search_lsdel :function(){
    wx.removeStorageSync('recentSearch')
    this.setData({
      arr2:[],
      searchHistory:'none'
    })
  },
  details(e){
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../clearance/content?id=' + e.currentTarget.id,
    })
  }

})