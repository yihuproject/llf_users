<template>
  <div class="detail">
    <van-row class="product_banner">
      <van-col :span="24">
        <img src="/static/images/tab_bnt_bj_xs.png">
      </van-col>
    </van-row>
    <van-row class="product_detail">
      <van-col :span="22" :offset="1">
        <van-row class="product_detail_title">
          <van-col :span="24">
            超级豪华水果套餐西瓜+甜橙+芒果
          </van-col>
        </van-row>
        <van-row class="product_detail_detail">
          <van-col :span="4">
            月售985
          </van-col>
          <van-col :span="1">|</van-col>
          <van-col :span="4">
            月售985
          </van-col>
        </van-row>
        <van-row class="product_detail_price">
          <van-col class="product_detail_price_realprice" :span="4">
            ￥14.9
          </van-col>
          <van-col class="product_detail_price_p" :span="4">
            ￥32.8
          </van-col>
          <van-col class="product_detail_price_discount" :span="4">
            4.69折
          </van-col>
          <van-col class="product_detail_price_add" :span="4" :offset="4">
            <router-link to="/add">+</router-link>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row class="product_describe">
      <van-col :span="22" :offset="1">
        <van-row>
          <van-col class="product_describe_title" :span="24">
            商品详情
          </van-col>
        </van-row>
        <van-row>
          <van-col class="product_describe_more" :span="24">
            暂无商品信息
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row class="product_valuate">
      <van-col :span="23" :offset="1">
        <van-row class="product_valuate_title">
          <van-col :span="24">商品评价</van-col>
        </van-row>
        <van-row class="product_valuate_items" v-for="(item,index) in customerItems">
          <van-col :span="24">
            <van-row>
              <van-col class="product_valuate_items_img" :span="4">
                <img :src="item.portrait">
              </van-col>
              <van-col class="product_valuate_items_info" :span="14" :offset="1">
                <p class="product_valuate_items_info_title">{{item.userName}}</p>
                <p class="product_valuate_items_info_thumb_up">
                  <img src="/static/images/pingjia_ic_dianz.png" v-show="item.isThumbsUp==true">
                  <img class="thumb_up_false" src="/static/images/pingjia_ic_dianz1.png" v-show="item.isThumbsUp==false">
                  <i v-show="item.isThumbsUp==true">{{item.thumb}}</i>
                </p>
              </van-col>
              <van-col class="product_valuate_items_time" :span="5">
                {{item.time}}
              </van-col>
            </van-row>
            <van-row>
              <van-col class="product_valuate_items_content" :span="20" :offset="3">
                {{item.content}}
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        p_item:[],
        totalData:null,
        customerItems:[
          {
            portrait:"/static/images/icon_bnt_dnzp@2x.png",
            userName:"阿打发打发",
            isThumbsUp:true,
            thumb:"赞了该商品",
            time:"2019.04.28",
            content:"水果套餐超级好吃的，就是量有点少了，下次 记得多放点水果哈"
          },
          {
            portrait:"/static/images/icon_bnt_dnzp@2x.png",
            userName:"阿打发打发",
            isThumbsUp:false,
            time:"2019.04.28",
            content:"水果套餐超级好吃的，就是量有点少了，下次 记得多放点水果哈"
          },
        ]
      }
    },
    mounted () {
      
       var formData = new FormData();
       formData.append("member_id",1);
       formData.append("store_id",6);
       formData.append("goods_id",49);
       this.$axios.post("/u1/goods_detail",formData,{headers: {"Content-Type":"application/json"}})
       .then((data)=>{
       	console.log(data);
        if (data.data.code == 200) {
          console.log(data.data);
          this.totalData = data.data.data;
          console.log(this.totalData);
        }
       })
       .catch((err)=>{
       	console.log(err);
       })
      
    }
  }
</script>

<style scoped lang="stylus">
  .detail
    width: 10rem
    height: auto
    background:#e5e5e5
    .product_banner
      width: 100%
      background:#fff
      img
        width: 100%
        height: 460px
    .product_detail
      background:#fff
      padding-top:30px
      .product_detail_title
        color:#333
        font-size:17PX
        font-weight:bold
        color:rgba(0,0,0,1)
        padding-bottom: 22px
      .product_detail_detail
        color:#999
        line-height: 33px
        padding-bottom: 22px
        text-align:center
      .product_detail_price
        line-height: 33px
        padding-bottom: 22px
        text-align:left
        .product_detail_price_realprice
          font-weight: bold
          font-size:16PX
          color:#FF4A4A
        .product_detail_price_p
          color:#999
          text-decoration:line-through
          font-size:15PX
        .product_detail_price_discount
          font-size:15PX
          color:#FF4A4A
        .product_detail_price_add
          background:orange
          width: 34px
          text-align:center
          height: 34px
          line-height: 34px
          font-size:20PX
          border-radius:50%
          a
            color:#fff
    .product_describe
      background:#fff
      line-height: 50px
      margin: 30px 0
      padding: 15px 0
      .product_describe_title
        color:#333
        font-weight: bold
        font-size:17PX
      .product_describe_more
        color:#999
        font-size:15PX
    .product_valuate
      background:#fff
      margin-bottom: 30px
      .product_valuate_title
        color:#333
        font-weight: bold
        font-size:17PX
        margin: 15px 0
      .product_valuate_items
        width: 100%
        height: auto
        padding: 30px 0
        border-bottom:1PX solid #e5e5e5
        .product_valuate_items_img
          width: 66px
          height: 66px
          border-radius:50%
          overflow:hidden
          margin-top: 8px
          img
            width: 66px
            height: 66px
        .product_valuate_items_info
          line-height: 40px
          .product_valuate_items_info_title
            color:#333
            font-size:15PX
          .product_valuate_items_info_thumb_up
            color:#999
            font-size:12PX
            img
              width: 24px
              height: 24px
            img.thumb_up_false
              margin-top: 10px
        .product_valuate_items_time
          color:#999
          text-align:right
          font-size:14PX
          margin-left: 30px
        .product_valuate_items_content
          font-size:15PX
          color:#333
          text-align:justify
          line-height: 41px
</style>
