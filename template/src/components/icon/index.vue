<template>
  <i class="app-icon"
     :class="{
       [`app-icon--${name}`]: name,
     }"
     @click="$emit('click', $event)">
    <svg class="app-icon__svg">
      <use :xlink:href="`#app-icon-${name}`" />
    </svg>
  </i>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import './_icons-list';


@Component({
  name: 'AppIcon',
})
export default class AppIcon extends Vue {

  @Prop({ type: String, required: true })
  public name!: string;

}
</script>

<style lang="scss">
  .app-icon {
    $root: &;

    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;

    &__svg {
      width: inherit;
      max-width: 100%;
      height: inherit;
      max-height: 100%;
    }
  }
</style>
