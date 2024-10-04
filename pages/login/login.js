Page({
  data: {
    // 页面数据
  },
  onLogin: function(e) {
    if (e.detail.userInfo) {
      // 用户点击了同意授权
      wx.login({
        success: res => {
          // 发起网络请求
          wx.request({
            url: '你的登录接口地址',
            method: 'POST',
            data: {
              code: res.code
            },
            success: function(response) {
              // 根据返回结果处理登录逻辑
              if (response.data.success) {
                // 登录成功
                wx.showToast({
                  title: '登录成功',
                  icon: 'success'
                });
                // 可以在这里跳转到其他页面
              } else {
                // 登录失败
                wx.showToast({
                  title: '登录失败',
                  icon: 'none'
                });
              }
            }
          });
        }
      });
    } else {
      // 用户点击了拒绝授权
      wx.showToast({
        title: '授权失败，无法登录',
        icon: 'none'
      });
    }
  }
});