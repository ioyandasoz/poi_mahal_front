<template>
  <button :disabled="props.disabled" @mouseover="fill = 'var(--primary-color)'" @mouseout="fill = 'var(--white-color)'" class="button" :class="classes">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

import { computed, ref } from 'vue';
import type { Ref } from 'vue';

interface Props {
  theme: string;
  size?: string;
  disabled?: boolean 

}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})
const fill = ref('var(--white-color)') as Ref<string>

const classes = computed(() => ({
  [`button__${props.theme}`]: !!props.theme,
  [`button__${props.size}`]: !!props.size,
}));

</script>

<style lang="scss" scoped>
.button {
  border-radius: 12px;
  line-height: 20px;
  font-weight: 500;
  font-size: 16px;
  outline: none;

  &__primary {
    background-color: var(--primary-color);
    color: var(--grey-lighten-3);
  }
  &__secondary {
    background-color: var(--special-2-color);
    color: var(--grey-darken-3);
  }
  &__link {
    background: none;
    color: var(--primary-color);
    padding: 0 !important;
  }
  &__sm {
    padding: 7px 16px;
    font-size: 15px;
  }
  &__md {
    padding: 10px 20px;
  }
  &__lg {
    padding: 14px 24px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>