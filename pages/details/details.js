// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:{},
    reviews:[],
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id
    // 请求书籍详情
    wx.request({
      url: 'https://api.zhuishushenqi.com/book/'+id,
      method:'GET',
      success:res => {
        this.setData({
          details:res.data,
          id
        })
        // 设置动态标题
        wx.setNavigationBarTitle({
          title:res.data.majorCate+'/'+res.data.title,
        })
      }
    })
    // 获取热门书评
    wx.request({
      url: 'https://api.zhuishushenqi.com/post/review/by-book',
      method:'GET',
      data:{
        book:id,
        sort:'comment-count',
        start:0,
        limit:10
      },
      success: res => {
        this.setData({
          reviews:res.data.reviews
        })
        console.log(this.data.reviews)
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