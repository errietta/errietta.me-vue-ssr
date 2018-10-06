import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import CV from '../components/CV.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/cv', component: CV },
    ]
  });
}
