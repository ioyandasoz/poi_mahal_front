<template>
  <div class="input_container auth_container_number">
    <label class="input_title" for="">Номер телефона</label>
    <div class="number_container">
      <div class="number_prefix">
        +992
      </div>
      <CInput v-model:value="number" placeholder="## ### ## ##" />
    </div>
  </div>
  <CButton @click="authStore.getPincode" :disabled="number.length < 9" style="width: 100%;" size="lg" theme="primary">Войти</CButton>
</template>

<script setup lang="ts">
import { CInput, CButton } from '@/components/ui';
import { authModel } from '@/entities/auth'
import { ref } from 'vue';

const authStore = authModel()
const number = ref('')
</script>

<style scoped lang="scss">
.auth_container_number {
  margin-bottom: 32px;
  margin-top: 110px;
}

.number_container {
  display: flex;
}

.number_prefix {
  font-size: 15px;
  padding: 12px;
  text-align: center;
  border: 1px solid var(--grey-lighten-1);
  border-radius: 12px;
  flex: 1;
  margin-right: 8px;
  cursor: default;
}
</style>