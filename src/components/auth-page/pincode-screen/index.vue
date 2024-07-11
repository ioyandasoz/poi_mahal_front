<template>
  <div class="pincode">
    <p class="pincode_text">
      Введите код из смс. Мы отправили его на номер +992 92 *** **00
    </p>
    <div class="pincode_input">
      <CInput ref="pincode"></CInput>
    </div>
    <div class="pincode_buttons">
      <CButton size="lg" theme="primary">
        Далее
      </CButton>
      <CButton size="lg" theme="secondary">
        Отправить еще раз - 00:28
      </CButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CButton, CInput } from '@/components/ui'
import { onMounted, ref } from 'vue'
const pincode = ref()
onMounted(() => {
  console.log(pincode);
  
})
</script>

<style scoped lang="scss">
.pincode {
  margin-top: 50px;

  &_text {
    font-size: 15px;
    line-height: 28px;
    font-weight: 400;
    text-align: center;
    color: var(--grey-darken-1);
    margin: 0;
  }

  &_input {
    margin-top: 24px;
  }

  &_buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 32px;
  }
}
</style>