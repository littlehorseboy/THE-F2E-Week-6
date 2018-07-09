import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/create-account',
      name: 'CreateAccount',
      component: () => import('@/pages/CreateAccount'),
    },
    {
      path: '*',
      redirect: '/create-account',
    },
  ],
});
