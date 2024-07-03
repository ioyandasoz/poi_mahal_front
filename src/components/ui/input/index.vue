<template>
  <div class="input-block">
    <input
      class="input"
      v-mask="'## ### ## ##'"
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
    <div v-if="value" class="img img_clear" @click="clearInput">
      <ClearIcon :fill="fill"/>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import { ClearIcon } from '@/components/icons'

interface Props {
  error?: boolean;
  value?: any;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  mask?: string
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
.img {
  position: absolute;
  cursor: pointer;

  &_clear {
    right: 14px;
    top: 14px;
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

  &::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }
  &::placeholder {
    color: var(--grey-color);
  }
}
</style>
