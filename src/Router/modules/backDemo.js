/**
 * 返回效果的Demo
 */
export default [
  {
    path: '/backDemoIndex',
    name: 'backDemoIndex',
    component: r => require.ensure([], () => r(require('../../Page/BackDemo/index')), 'BackDemo/index'),
    meta: { title: '入口选择页面' }
  },
  {
    path: '/backAPage',
    name: 'backAPage',
    component: r => require.ensure([], () => r(require('../../Page/BackDemo/aPage')), 'BackDemo/aPage'),
    meta: { title: '操作起始页面aaaaa', isStartPage: true }
  },
  {
    path: '/backAPageA',
    name: 'backAPageA',
    component: r => require.ensure([], () => r(require('../../Page/BackDemo/aPagea')), 'BackDemo/aPagea'),
    meta: { title: '操作起始页面bbb', isStartPage: true }
  },
  {
    path: '/backAPageB',
    name: 'backAPageB',
    component: r => require.ensure([], () => r(require('../../Page/BackDemo/aPageb')), 'BackDemo/aPageb'),
    meta: { title: '操作起始页面CCC', isStartPage: true }
  },
  {
    path: '/backBPage',
    name: 'backBPage',
    component: r => require.ensure([], () => r(require('../../Page/BackDemo/bPage')), 'BackDemo/bPage'),
    meta: { title: '第一个输入页面', group: 'backDemo' }
  },
  {
    path: '/backCPage',
    name: 'backCPage',
    component: r => require.ensure([], () => r(require('../../Page/BackDemo/cPage')), 'BackDemo/cPage'),
    meta: { title: '第二个输入页面', group: 'backDemo' }
  },
  {
    path: '/backDPage',
    name: 'backDPage',
    component: r => require.ensure([], () => r(require('../../Page/BackDemo/dPage')), 'BackDemo/dPage'),
    meta: { title: '结果页面', group: 'backDemo' }
  },
  {
    path: '/other',
    name: 'other',
    component: r => require.ensure([], () => r(require('../../Page/BackDemo/other')), 'BackDemo/other'),
    meta: { title: '结果页面' }
  }
]
