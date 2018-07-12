import Vue from 'vue';
import Router from 'vue-router';

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
        },
      ],
    },
    {
      path: '*',
      redirect: '/account/create-account',
    },
  ],
});
