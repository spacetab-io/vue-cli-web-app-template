<template>
  <div class="app-layout-default">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';


@Component({
  name: 'layout-default',
})
export default class LayoutDefault extends Vue {}
</script>
