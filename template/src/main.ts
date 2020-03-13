import Vue, {
  CreateElement,
  VNode,
} from 'vue';
import VueMeta from 'vue-meta';
{{#if_eq need_responsiveReady true}}
import Vue2TouchEvents from 'vue2-touch-events';
{{/if_eq}}
{{#if_eq install_spacetabVueComponents true}}
import SpacetabsVueComponents from '@spacetabs/vue-components/src';
{{/if_eq}}

import App from '@/App.vue';
{{#if_eq need_i18n true}}
import {
  i18n,
} from '@/plugins/vue-i18n';
{{/if_eq}}
import {
  router,
} from '@/plugins/vue-router';
import { declension } from '@/utils/declension-helper';

import './plugins/vuex';
import './plugins/vuex-router-sync';
import store from './store';

Vue.use(VueMeta);
{{#if_eq need_responsiveReady true}}
Vue.use(Vue2TouchEvents);
{{/if_eq}}
{{#if_eq install_spacetabVueComponents true}}
Vue.use(SpacetabsVueComponents);
{{/if_eq}}

Vue.filter('declension', declension);

Vue.config.productionTip = false;

// eslint-disable-next-line import/exports-last
export const app = new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: (h: CreateElement): VNode => h(App),
});

if (__stage !== 'prod') {
  window.$app = app;
}
