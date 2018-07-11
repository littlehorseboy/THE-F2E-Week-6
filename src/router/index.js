import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/account',
      name: 'Account',
      component: () => import('@/pages/Account'),
      children: [
        {
          path: 'create-account',
          name: 'CreateAccount',
          component: () => import('@/components/CreateAccount'),
        },
        {
          path: 'general-infomation',
          name: 'GeneralInfomation',
          component: () => import('@/components/GeneralInfomation'),
        },
        {
          path: 'update-profile-picture',
          name: 'UpdateProfilePicture',
          component: () => import('@/components/UpdateProfilePicture'),
        },
        {
          path: 'payment-method',
          name: 'PaymentMethod',
          component: () => import('@/components/PaymentMethod'),
        },
        {
          path: 'congratulations',
          name: 'Congratulations',
          component: () => import('@/components/Congratulations'),
          beforeEnter(to, from, next) {
            store.dispatch('updateStep', 1);
            next('create-account');
          },
        },
      ],
    },
    {
      path: '*',
      redirect: '/account/create-account',
    },
  ],
});
