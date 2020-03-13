/* eslint no-underscore-dangle: 0 */
/* eslint import/export: 0 */
/* eslint import/order: 0 */
/* eslint import/no-duplicates: 0 */
/* eslint-disable import/unambiguous */
/* eslint-disable no-duplicate-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'vue-localstorage' {
  import { PluginObject } from 'vue';

  const vueLocalStorage: PluginObject<void>;
  export default vueLocalStorage;
}
{{#if_eq install_spacetabVueComponents true}}
declare module '@spacetabs/vue-components' {
  import { Vue } from 'vue-property-decorator';

  export default class Component extends Vue { }
}
{{/if_eq}}

declare const VERSION: string;
declare const __stage: string;
declare const __vcs: string;
declare const __config: {};

declare module 'vue-simple-svg' {
  export const SimpleSVG: any;
}

declare module 'vue-fragment';

declare interface Window {
  // TODO: Temp thing to run tests
  $app: any;
}
