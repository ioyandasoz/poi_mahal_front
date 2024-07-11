<template>
  <div class="select-block">
    <input
      class="select"
      :class="{ error: props.error }"
      :value="value"
      :type="inputType"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      @input="updateValue"
      @blur="fill = 'var(--grey-lighten-1)'"
      @focus="fill = 'var(--grey-color)'"
    >
    <div @click="listStatus = !listStatus" :class="`img img_arrow ${listStatus ? 'img_arrow_rotate' : 'img_arrow_default'}`">
      <ArrowIcon />
    </div>
    <div v-if="value" class="img img_clear" @click="clearInput">
      <ClearIcon :fill="fill" />
    </div>
    <ul v-if="listStatus" class="list">
      <li @click="console.log(11222)" class="list_item">тест</li>
      <li class="list_item">тест</li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import { ClearIcon, ArrowIcon } from '@/components/icons'

interface Props {
  error?: boolean;
  value?: any;
  placeholder?: string;
  type?: string;
  disabled?: boolean
}

const fill = ref('var(--grey-color)')
const listStatus = ref(false)

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})
const emits = defineEmits(['update:value'])
const showPassword = ref(false) as Ref<boolean>

const inputType = computed(() => (
  showPassword.value ? 'text' : props.type
))

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emits('update:value', target.value)
}

const clearInput = () => {
  emits('update:value', '')
}
</script>


<style lang="scss" scoped>
.select-block {
  position: relative;
}

ul li:not(:last-child) {
  border-bottom: 1px solid var(--grey-lighten-1);
}

.list {
  position: absolute;
  width: 100%;
  border-radius: 12px;
  z-index: 5;
  margin: 0;
  padding: 0;
  margin-top: 2px;
  box-shadow: 0px 4px 8px 0px color(display-p3 0 0 0 / 0.16), 0px 0px 4px 0px color(display-p3 0 0 0 / 0.20);

  &_item {
    padding: 14px 16px;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    cursor: pointer;
  }
}

.img {
  position: absolute;
  cursor: pointer;

  &_clear {
    right: 42px;
    top: 14px;
  }

  &_arrow {
    height: 20px;
    width: 20px;
    right: 14px;
    top: 12px;
    transition: all 0.2s linear;
    transform-origin: center;
    &_default {
      transform: rotate(0);
    }
    &_rotate {
      transform: rotate(180deg);
    }
  }
}

.select {
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: var(--grey-darken-3);
  background-color: var(--grey-lighten-3);
  border: 1px solid var(--grey-lighten-1);
  border-radius: 12px;
  padding: 12px 42px 12px 12px;
  caret-color: var(--primary-color);
  outline: none;

  &::placeholder {
    color: var(--grey-color);
  }
  &:focus {
    border-color: var(--primary-color);
  }
  &.error {
    border-color: var(--error-color);
  }

  &.error:focus {
    border-color: var(--error-color);
  }
}
</style>
