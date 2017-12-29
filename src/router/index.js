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
            component: r => require.ensure([], () => r(require(`../views/Home/index.vue`)), 'home_index')
          }, {
            path: 'race',
            name: 'home_race',
            component: r => require.ensure([], () => r(require(`../views/Home/raceVideo.vue`)), 'home_race')
          }, {
            path: 'quiz',
            name: 'home_quiz',
            component: r => require.ensure([], () => r(require(`../views/Home/quiz.vue`)), 'home_quiz')
          }, {
            path: 'super',
            name: 'home_super',
            component: r => require.ensure([], () => r(require(`../views/Home/superVideo.vue`)), 'home_super')
          }, {
            path: 'pic',
            name: 'home_pic',
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
    }
  ]
})
