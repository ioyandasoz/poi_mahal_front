<template>
  <div class="input-block">
    <input
      class="input"
      :value="value" 
      :type="inputType"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :style="props.error ? 'border-color: var(--error-color); outline-color: var(--error-color);' :
       'border-color: var(--grey-lighten-1); outline-color: var(--primary-color);' "
      @input="updateValue"
      @blur="fill = 'var(--grey-lighten-1)'"
      @focus="fill = 'var(--grey-color)'"
    >
    <div @click="" class="img img_arrow">
      <ArrowIcon/>
    </div>
    <div v-if="value" class="img img_clear" @click="clearInput">
      <ClearIcon :fill="fill"/>
    </div>
    <ul class="list">
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
.input-block {
  position: relative;
}
.list {
  border-radius: 12px;
  z-index: 5;
  list-style: none;
  margin: 0;
  padding: 0;
  background: var(--grey-lighten-1);
  margin-top: 12px;
  &_item {
    padding: 14px 16px;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
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
    right: 14px;
    top: 12px;
  }
}
.input {
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

  &::placeholder {
    color: var(--grey-color);
  }
}
</style>
