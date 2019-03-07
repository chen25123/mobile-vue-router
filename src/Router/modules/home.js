/**
 * 子页面的主页级别
 */
export default [
  {
    path: '/mainPage',
    name: 'mainPage',
    component: r => require.ensure([], () => r(require('../../Page/Home/index')), 'Home/index'),
    meta: { title: '测试页面A', depth: 1 }
  },
  {
    path: '/second',
    name: 'second',
    component: r => require.ensure([], () => r(require('../../Page/Home/second')), 'Home/second'),
    meta: { title: '测试页面B', depth: 1 }
  }
]
