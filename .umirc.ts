import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index/index' },
    { path: '/core', component: '@/pages/coreIdea/coreIdea' },
    { path: '/advanced', component: '@/pages/advancedGuidelines/advancedGuidelines' },
    { path: '/api', component: '@/pages/api/api' },
    { path: '/hook', component: '@/pages/hook/hook' },
  ],
  fastRefresh: {},
});
