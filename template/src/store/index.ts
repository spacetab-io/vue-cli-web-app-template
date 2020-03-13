import Vue from 'vue';
import Vuex, {
  Store,
} from 'vuex';
import createVuexCache from 'vuex-cache';

Vue.use(Vuex);

const plugins = [createVuexCache()];

export default new Store({
  modules: {},
  plugins,
  strict: process.env.NODE_ENV === 'production',
});
