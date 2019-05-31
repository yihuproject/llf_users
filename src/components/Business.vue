<template>
  <div class="business">
    <van-row class="business_title">
      <van-col class="business_title_col" :span="23" :offset="1">
        商家信息
      </van-col>
    </van-row>
    <van-row class="business_store_img">
      <van-col :span="23" offset="1">
        <img src="/static/images/icon_bnt_dnzp@2x.png" alt="">
        <img src="/static/images/icon_bnt_dpzp@2x.png" alt="">
      </van-col>
    </van-row>
    <van-row class="business_store_contact">
      <van-col :span="22" offset="1">
        <p class="business_store_contact_address">深圳市宝安区新安街道宝民社区宝民一路五巷1号</p>
        <span class="business_store_contact_icon"><img src="/static/images/order_ic_dianhua.png" alt=""></span>
      </van-col>
    </van-row>
    <van-row class="business_detail_info">
      <van-col :span="24">
        <van-row class="business_detail_info_name">
          <van-col :span="23" :offset="1">
            <span class="left">商家名称</span>
            <span class="right">果实先生</span>
          </van-col>
        </van-row>
        <van-row class="business_detail_info_classify">
          <van-col :span="23" :offset="1">
            <span class="left">商家分类</span>
            <span class="right">水果</span>
          </van-col>
        </van-row>
        <van-row class="business_detail_info_tel">
          <van-col :span="23" :offset="1">
            <span class="left">商家电话</span>
            <span class="right">020-607829842000</span>
          </van-col>
        </van-row>
        <van-row class="business_detail_info_open_time">
          <van-col :span="23" :offset="1">
            <span class="left">营业时间</span>
            <span class="right">09:00-20:00</span>
          </van-col>
        </van-row>
        <van-row class="business_detail_info_img">
          <van-col :span="23" :offset="1">
            <span class="left">营业执照</span>
            <span class="right">
              <router-link to="/"><van-icon name="arrow"></van-icon></router-link>
            </span>
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

      }
    }
  }
</script>

<style lang="stylus">
  .business
    width: 10rem
    height: auto
    background:#e5e5e5
    .business_title
      background:#fff
      padding:15px 0
      .business_title_col
        font-size:17PX
        font-weight:bold
        color:rgba(0,0,0,1)
    .business_store_img
      background:#fff
      padding:15px 0
      .van-col
        img
          width: 182px
          height: 182px
          margin-right: 30px
    .business_store_contact
      background:#fff
      padding:15px 0
      .business_store_contact_address
        font-size:14PX
        color:#666
        width: 650px
        overflow:hidden
        float: left
      .business_store_contact_icon:after
        content:""
        display:table
        clear:both
      .business_store_contact_icon
        display:inline-block
        width: 36px
        height: 36px
        float: left
        img
          width: 36px
          height: 36px
    .business_detail_info
      margin-top: 30px
      background:#fff
      .business_detail_info_name,.business_detail_info_classify,.business_detail_info_tel,.business_detail_info_open_time,.business_detail_info_img
        .van-col
          height: 88px
          line-height: 88px
          border-bottom:1PX solid #e5e5e5
          font-size:18PX
          display:flex
          flex-flow:row nowrap
          justify-content:space-between
          align-items:center
          .left,.right
            display:inline-block
            height: 88px
            line-height: 88px
          .left
            color:#333
          .right
            color:#666
            margin-right: 30px
            i
              display:inline-block
              height: 88px
              line-height: 88px
              color:#666
</style>
