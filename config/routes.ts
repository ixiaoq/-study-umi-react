export default [
  // 404
  { path: '/404', component: '@/pages/notFound/notFound' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', exact: true, component: '@/pages/index/index' },

      { path: '/core', redirect: '/core/index' },
      { path: '/core/:name', component: '@/pages/core/index' },

      { path: '/advanced', redirect: '/advanced/index' },
      { path: '/advanced/:name', component: '@/pages/advanced/index' },

      { path: '/api', redirect: '/api/index' },
      { path: '/api/:name', component: '@/pages/api/index' },

      { path: '/hook', redirect: '/hook/index' },
      { path: '/hook/:name', component: '@/pages/hook/index' },

      // 404
      { path: '*', redirect: '/404' },
    ],
  },
];
