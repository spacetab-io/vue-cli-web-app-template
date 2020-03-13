import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from '../routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollBehavior(): any {
    return {
      x: 0,
      y: 0,
    };
  },
});

export {
  router,
};

export default {
  router,
};
