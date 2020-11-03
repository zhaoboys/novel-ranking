// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify:{},
    rank:{
      male:"男生分类",
      female:"女生分类",
      picture:"特殊分类",
      press:"其他分类"
    },
    navindex:"male"
  },
  navtap(e) {
    let index=e.target.dataset.index
    this.setData({
      navindex:index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.zhuishushenqi.com/cats/lv2/statistics',
      method:'GET',
      success: res => {
        let obj={}
        for(let key in res.data) {
          if(key !="ok"){
            obj[key]=res.data[key]
          }
        }
        this.setData({
          classify:obj
        })
        console.log(this.data.classify)
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