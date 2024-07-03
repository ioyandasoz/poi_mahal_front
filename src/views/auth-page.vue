<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <div class="auth_container">
          <img class="auth_container_logo" src="../assets/images/Logo.svg" alt="">
          <div class="input_container auth_container_number">
            <label class="input-title" for="">Номер телефона</label>
            <div class="number_container">
              <div class="number_prefix">
                +992
              </div>
              <CInput v-model:value="number" placeholder="## ### ## ##"/>
            </div>
          </div>
          <CButton :disabled="number.length < 9" style="width: 100%;" size="lg" theme="primary">Продолжить</CButton>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { CInput, CButton } from '@/components/ui';
import { ref } from 'vue';

const number = ref('')
</script>

<style scoped lang="scss">
.auth_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &_logo {
    margin-bottom: 60px;
  }

  &_number {
    margin-bottom: 40px
  }
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