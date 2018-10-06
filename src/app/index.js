import Vue from 'vue';
import App from './App.vue';
import { sync } from 'vuex-router-sync';

import { createRouter } from './router'
import { createStore } from './store';

const createApp = () => {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });

  return { app, router, store };
};

export default createApp;
