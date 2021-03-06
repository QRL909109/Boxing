import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/500',
      component: r => require.ensure([], () => r(require(`@/components/Common/500/500.vue`)), '500')
    },
    {
      path: '*',
      component: r => require.ensure([], () => r(require(`@/components/Common/404/index.vue`)), '404')
    },
    // --- 首页
    {
      path: '/home',
      name: 'Home',
      redirect: '/home/main/index',
      component: r => require.ensure([], () => r(require(`../views/layout.vue`)), 'layout'),
      children: [
        {
          path: 'main',
          component: r => require.ensure([], () => r(require(`../views/Home/layout.vue`)), 'home_layout'),
          children: [{
            path: 'index',
            name: 'home_index',
            meta: {index: 0},
            component: r => require.ensure([], () => r(require(`../views/Home/index.vue`)), 'home_index')
          }, {
            path: 'race',
            name: 'home_race',
            meta: {index: 1},
            component: r => require.ensure([], () => r(require(`../views/Home/raceVideo.vue`)), 'home_race')
          }, {
            path: 'quiz',
            name: 'home_quiz',
            meta: {index: 2},
            component: r => require.ensure([], () => r(require(`../views/Home/quiz.vue`)), 'home_quiz')
          }, {
            path: 'super',
            name: 'home_super',
            meta: {index: 3},
            component: r => require.ensure([], () => r(require(`../views/Home/superVideo.vue`)), 'home_super')
          }, {
            path: 'pic',
            name: 'home_pic',
            meta: {index: 4},
            component: r => require.ensure([], () => r(require(`../views/Home/picGroup.vue`)), 'home_pic')
          }]
        }
      ]
    },
    // --- 消息
    {
      path: '/info',
      name: 'Info',
      redirect: '/info/index',
      component: r => require.ensure([], () => r(require(`../views/layout.vue`)), 'layout'),
      children: [{
        path: 'index',
        name: 'info_index',
        component: r => require.ensure([], () => r(require(`../views/Info/index.vue`)), 'info_index')
      }]
    },
    // --- 个人主页
    {
      path: '/personal',
      name: 'Personal',
      redirect: '/personal/index',
      component: r => require.ensure([], () => r(require(`../views/layout.vue`)), 'layout'),
      children: [{
        path: 'index',
        name: 'personal_index',
        component: r => require.ensure([], () => r(require(`../views/Personal/index.vue`)), 'personal_index')
      }]
    },
    // --- 充值界面
    {
      path: '/recharge',
      name: 'Recharge',
      component: r => require.ensure([], () => r(require(`../views/Recharge/index.vue`)), 'recharge_index')
    },
    // --- 竞猜界面
    {
      path: '/quiz',
      name: 'Quiz',
      redirect: '/quiz/index',
      component: r => require.ensure([], () => r(require(`../views/Quiz/layout.vue`)), 'layout'),
      children: [{
        path: 'index',
        name: 'quiz_index',
        component: r => require.ensure([], () => r(require(`../views/Quiz/index.vue`)), 'quiz_index')
      }, {
        path: 'list',
        name: 'quiz_list',
        component: r => require.ensure([], () => r(require(`../views/Quiz/list.vue`)), 'quiz_list')
      }, {
        path: 'game',
        name: 'quiz_game',
        component: r => require.ensure([], () => r(require(`../views/Quiz/game.vue`)), 'quiz_game')
      }, {
        path: 'introduction',
        name: 'quiz_introduction',
        component: r => require.ensure([], () => r(require(`../views/Quiz/introduction.vue`)), 'quiz_introduction')
      }, {
        path: 'recording',
        name: 'quiz_recording',
        component: r => require.ensure([], () => r(require(`../views/Quiz/recording.vue`)), 'quiz_recording')
      }]
    }
  ]
})
