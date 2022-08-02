const router = [
  {
    path: '/',
    component: '@/layouts/layout',
    routes: [
      { path: '/', component: '@/pages/index' },
      { path: '/exit', component: '@/pages/Exit' },
      { path: '/list', component: '@/pages/List' },
      { path: '/addeditproject/:id?', component: '@/pages/AddEditProject' },
      { path: '/projectdetail/:id?', component: '@/pages/ProjectDetail' },
      { path: '/addflowpath/:id?', component: '@/pages/AddFlowPath' },
    ],
  },
];

export default router;
