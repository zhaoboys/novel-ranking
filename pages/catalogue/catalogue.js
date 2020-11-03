// pages/catalogue/catalogue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chapters:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id
    wx.request({
      url: `https://api.zhuishushenqi.com/btoc?book=${id}&view=summary`,
      method:'GET',
      success: res => {
        console.log(res)
        wx.request({
          url: `https://api.zhuishushenqi.com/atoc/${res.data[0]._id}?view=chapters`,
          method:'GET',
          success: res => {
            res.data.chapters.forEach((val,index)=>{
              // 获取最后一个_的位置
              let indexx=val.title.lastIndexOf('_')
              // 获取正规的章节标题
              let title=val.title.slice(indexx+1)
              res.data.chapters[index].title=title
            })
            console.log(res)
            this.setData({
              chapters:res.data.chapters
            })
            console.log(this.data.chapters)
          }
        })
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