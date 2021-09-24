export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', exact: true, component: '@/pages/index/index' },
      { path: '/core', component: '@/pages/core/index' },
      { path: '/advanced', component: '@/pages/advanced/index' },
      { path: '/api', component: '@/pages/api/index' },
      { path: '/hook', component: '@/pages/hook/index' },
      // 404
      { path: '/404', component: '@/pages/notFound/notFound' },
      // 404
      { path: '*', redirect: '/404' }
    ]
  }
]

