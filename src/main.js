// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import 'normalize-scss/sass/normalize/_import-now.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App';
import router from './router';
import store from './store';

library.add(faDotCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VeeValidate);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
