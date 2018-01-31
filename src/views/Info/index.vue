<!-- 资料库 -->
<template>
  <div class="info-wrap height100">
    <div class="info-search">
      <div class="weui-search-bar" id="searchBar">
        <form class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <span @click="handleGetSearch">
              <icon type="search"></icon>
            </span>
            <input type="search" class="weui-search-bar__input" v-model="searchValue" placeholder="搜索" @keyup.enter.stop.prevent="handleGetSearch">
            <span @click="clearSearch" v-show="searchValue !== ''">
              <icon type="clear" ></icon>
            </span>
          </div>
        </form>
      </div>
    </div>
    <view-box ref="viewBox">
      <div class="info-result">
        <div class="info-result-item" v-for="item in resultList">
          <title-model :showBottomBorder=true>
            <span slot="title">
              <span class="title-model__title">{{item.country_name}}</span>
              <img :src="item.country_icon" :alt="item.country_name" class="img-icon">
            </span>
            <flexbox :gutter="0" wrap="wrap">
              <flexbox-item :span="1/3" v-for="(item2, index2) in item.boxers" :key="index2">
                <router-link :to="`/info/introduction?id=${item2.id}`">
                  <div class="info-thirt" >
                    <img :src="item2.avatar" :alt="item2.name" class="img-radio">
                    <span>{{item2.name}}</span>
                    <span class="grey-font-weight">{{item2.weight}} KG</span>
                  </div>
                </router-link>
              </flexbox-item>
            </flexbox>
          </title-model>
        </div>
      </div>
    </view-box>
  </div>
</template>
<script>
  import { Flexbox, FlexboxItem, ViewBox, Icon } from 'vux'
  import titleModel from '@/components/titleModel'
  import info from '@/lib/api/info'
  export default {
    data () {
      return {
        searchValue: '',
        resultList: []
      }
    },
    created () {
      this.handleGetSearch()
    },
    components: {
      Flexbox,
      FlexboxItem,
      titleModel,
      ViewBox,
      Icon
    },
    methods: {
      clearSearch () {
        this.searchValue = ''
      },
      handleGetSearch () {
        this.$store.dispatch('updateLoadingStatus', {isLoading: true})
        info.GetSearchList({
          text: this.searchValue
        }).then(data => {
          this.resultList = data
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        }).catch(_ => {
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        })
      }
  
    }
  }
</script>
<style lang="sass">
  .info-wrap
    .info-search
      .weui-search-bar
        position: relative
        padding: 8px 10px
        display: flex
        box-sizing: border-box
        background-color: #EFEFF4
        .weui-search-bar__form
          position: relative
          -webkit-box-flex: 1
          -webkit-flex: auto
          flex: auto
          background-color: #EFEFF4
          &:after 
            content: ''
            position: absolute
            left: 0
            top: 0
            width: 200%
            height: 200%
            -webkit-transform: scale(0.5)
            transform: scale(0.5)
            -webkit-transform-origin: 0 0
            transform-origin: 0 0
            border-radius: 10px
            border: 1px solid #E6E6EA
            box-sizing: border-box
            background: #FFFFFF
        .weui-search-bar__box 
          position: relative
          padding-left: 30px
          padding-right: 30px
          height: 100%
          width: 100%
          box-sizing: border-box
          z-index: 1
          .weui-icon-search,
            position: absolute
            left: 10px
            top: 0
            line-height: 40px
          .weui-icon-clear
            position: absolute
            right: 10px
            top: 0
            line-height: 40px
          .weui-search-bar__input 
            padding: 4px 0
            width: 100%
            height: 1.42857143em
            border: 0
            font-size: 14px
            line-height: 1.42857143em
            box-sizing: content-box
            background: transparent
    .info-result
      margin-top: 0.3rem
      margin-bottom: 50px
      .info-result-item
        margin-bottom: 0.3rem
        .img-icon
          width: 0.5rem
        .info-thirt
          display: flex
          justify-content: center
          flex-direction: column
          align-items: center
          margin: 0.15rem 0.3rem
          min-height: 2rem
          line-height: 0.43rem
          img
            width: 1.5rem
          .grey-font-weight
            color: #bababa
</style>
