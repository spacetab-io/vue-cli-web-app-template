import Vue from 'vue';
import VueI18n from 'vue-i18n';

import messages from '../locale';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
});

export const i18nCustomLang = (lang: string): VueI18n => new VueI18n({
  locale: lang || 'ru',
  fallbackLocale: 'en',
  messages,
});
