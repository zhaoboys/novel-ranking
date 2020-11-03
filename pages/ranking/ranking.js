// pages/rankingh/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sum:{},
    rank:{
      male:'男生排行榜',
      female:'女生排行榜',
      picture:'总排行榜',
      epub:'其他排行榜'
    },
    navindex:'male'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.zhuishushenqi.com/ranking/gender',
      method:'GET',
      success: res => {
        let sum={}
        sum.male=res.data.male
        sum.female=res.data.female
        sum.picture=res.data.picture
        sum.epub=res.data.epub
        this.setData({
          sum
        })
        console.log(this.data.sum)
      }
    })
  },
  navtap(e){
    let index=e.target.dataset.index
    this.setData({
      navindex:index
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