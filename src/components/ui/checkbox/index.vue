<template>
  <label class="checkbox">
    <input
      :value="value"
      :disabled="disabled"
      @change="updateValue"
      type="checkbox">
    <span class="checkbox_checkmark"></span>
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
interface Props {
  disabled?: boolean;
  value?: string
}
const props = defineProps<Props>()
  const emits = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
</script>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 28px;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;

  &_checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    border: 2px solid var(--grey-color);
    border-radius: 6px;

    &::after {
      content: url('../../../assets/images/checkmark.svg');
      position: absolute;
      display: none;
      top: -2px;
      left: 2px;
    }
  }

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked~.checkbox_checkmark {
      background-color: var(--primary-color);
      border-color: var(--primary-color);
    }
    &:checked~.checkbox_checkmark::after {
      display: block;
    }
  }
}
</style>
