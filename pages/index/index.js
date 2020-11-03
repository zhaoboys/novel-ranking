const app=getApp()

Page({
  data: {
    // 存储所有分类
    charts:{},
    epub:[],
    hotWords:{},
    hotWordsitem:[]
  },
  onLoad (options) {
    // 获取所有的排行榜
    wx.request({
      url: 'https://api.zhuishushenqi.com/ranking/gender',
      method:"GET",
      success: res => {
        this.setData({
          charts:res.data
        })
        // 因为异步请求，因此需要在success中再次请求，得到结果后才能用charts.male.length
        for(let i=0;i<this.data.charts.epub.length;i++){
          let id=this.data.charts.epub[i]._id
          wx.request({
            url: 'https://api.zhuishushenqi.com/ranking/'+id,
            method:"GET",
            success:res => {
              let ranking=res.data.ranking
              this.data.epub[i]={
                title:ranking.title,
                books:ranking.books
              }
              this.setData({
                epub:this.data.epub
              })
            }
          })
        }
        console.log(this.data.charts)
        console.log(this.data.epub)
      }
    })

    ////////////////////////////////////////////
    wx.request({
      url: 'https://api.zhuishushenqi.com/book/hot-word',
      method:'GET',
      success: res =>{
        this.setData({
          hotWords:res.data
        })
        // console.log(this.data.hotWords)
        let arr=[]
        this.data.hotWords.newHotWords.forEach((item,i) =>{
          wx.request({
            url: 'https://api.zhuishushenqi.com/book/'+item.book,
            method:'GET',
            success: res => {
              arr[i]=res
              this.setData({
                hotWordsitem:arr
              })
            }
          })
        })
      }
    })
  }
})