//app.js
App({
  onLaunch: function () {
    var that = this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: function (r) {
        console.log('r----------',r)
        var code = r.code;
        that.globalData.code = code;
        if (code) {
          console.log(code)
          wx.request({
            url: that.globalData.ip_address + '/index.php/client/Login/getOpenid',
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              code: code
            },
            success: function (data) {
              console.log('data.data.data----------',data.data.data)
              wx.setStorageSync('token',data.data.data.openid)
                wx.setStorageSync('token',data.data.data.openid)
                wx.setStorage({
                  key:"token",
                  data:data.data.data.openid
                })
                wx.setStorage({
                  key:"session_key",
                  data:data.data.data.session_key
                })
                console.log(data)
              // wx.setStorageSync('session_key',data.data.data.session_key)
            },
            
            // fail: function () {
            //   console.log('系统错误')
            //   var res = {
            //     status: 300,
            //     data: '错误'
            //   }
            //   reject(res);
            // }
          })
        } else {
          console.log('获取用户登录态失败！' + r.errMsg)
        }
      },
      fail: function () {
        console.log('登陆失败')
      }
    })
    //获取状态栏高度
    wx.getSystemInfo({
      success:function(res){
        that.globalData.statusBarHeight = res.statusBarHeight;
      }
    }),
    // 获取用户信息
    wx.getSetting({
      // success: res => {
      //   if (res.authSetting['scope.userInfo']) {
      //     // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
      //     wx.getUserInfo({
      //       success: res => {
      //         // 可以将 res 发送给后台解码出 unionId
      //           // console.log('data.data.data----------',data.data.data)
      //           wx.setStorageSync('token',data.data.data.openid)
      //             wx.setStorageSync('token',data.data.data.openid)
      //             wx.setStorage({
      //               key:"token",
      //               data:data.data.data.openid
      //             })
      //             wx.setStorage({
      //               key:"session_key",
      //               data:data.data.data.session_key
      //             })
      //           wx.setStorageSync('session_key',data.data.data.session_key)
      //         this.globalData.userInfo = res.userInfo

      //         // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      //         // 所以此处加入 callback 以防止这种情况
      //         if (this.userInfoReadyCallback) {
      //           this.userInfoReadyCallback(res)
      //         }
      //       }
      //     })
      //   }
      // }
    })
  },
  globalData: {
    height:0,
    userInfo: null,
    code: '',
    openid: '',
    ticket: '',
    class:0,
    index:0,
    sysWidth:wx.getSystemInfoSync().windowWidth, //图片宽度
      ip_address: 'http://192.168.1.22:80', //接口
      image_icon:'http://192.168.1.22:80/static/pc/icon1/'
  },
  
})