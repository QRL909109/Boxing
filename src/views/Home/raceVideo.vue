<!-- 赛事视频 -->
<template>
	<div class="race-wrap">
		<div v-for="item in raceList">
			<h3>{{item.title}}</h3>
			<ul>
				<li v-for="(option,index) in item.list" v-if="index===1">
					<flexbox align="flex-start">
      			<flexbox-item :span="4">
      				<div class="flex-demo">
      					<img src="../../assets/img/2.png" alt="">
      				</div>
      			</flexbox-item>
      			<flexbox-item>
      				<div class="flex-demo">{{option.name}}</div>
      			</flexbox-item>
    			</flexbox>
				</li>
        <li v-for="(option,index) in item.list" v-if="index!==1">
          <i class="icon"></i>
          <span>{{option.name}}</span>
        </li>
			</ul>
		</div>
	</div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      raceList: [{
        title: '2017.12.24 昆仑决66-武汉站',
        list: [{
          name: '维塔利力克伊朗悍将夺金腰带'
        }, {
          name: '维塔利大战侯塞因三回合夺取75kg级世界冠军'
        }, {
          name: '阿听两次被重击读秒无缘决赛'
        }, {
          name: '许永霸击败迪亚比无悬念晋级'
        }, {
          name: '陆地神龙高祥遗憾落败'
        }, {
          name: '杨雨疯狂输出数次击倒丹尼斯'
        }]
      }, {
        title: '2017.12.10 昆仑决66-武汉站',
        list: [{
          name: '维塔利力克伊朗悍将夺金腰带'
        }, {
          name: '维塔利大战侯塞因三回合夺取75kg级世界冠军'
        }, {
          name: '阿听两次被重击读秒无缘决赛'
        }, {
          name: '许永霸击败迪亚比无悬念晋级'
        }, {
          name: '陆地神龙高祥遗憾落败'
        }, {
          name: '杨雨疯狂输出数次击倒丹尼斯'
        }]
      }]
    }
  }
}
</script>
<style lang="sass">
  h3
    text-align: center
    background-color: #CFD8DC
    padding: 5px
  ul
    padding: 0
    margin: 0
    li
      list-style: none
      padding: 10px
      border-bottom: 1px solid #cccccc
      &:last-child
        border-bottom: none
      img
        width: 3rem
        height: 2rem
        vertical-align: top
</style>
