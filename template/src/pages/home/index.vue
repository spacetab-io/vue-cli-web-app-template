<template>
  <layout-default>
    Home page
  </layout-default>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

import LayoutDefault from '@/layouts/default.vue';


@Component({
  name: 'home-page',
  components: { LayoutDefault },
})
export default class HomePage extends Vue {}
</script>
