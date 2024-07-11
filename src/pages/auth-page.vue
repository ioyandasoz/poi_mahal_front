<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <div class="auth_container">
          <img class="auth_container_logo" src="../assets/images/Logo.svg" alt="">
          <component :is="authScreens[authStore.authStep]"></component>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent} from '@ionic/vue';
import { PhoneNumberScreen, PincodeScreen } from '@/components/auth-page'
import { authModel } from '@/entities/auth'
import { ref } from 'vue';

const authStore = authModel()
const authScreens = [PhoneNumberScreen, PincodeScreen]

</script>

<style scoped lang="scss">
.auth_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  &_logo {
    max-width: 143px;
    max-height: 32px;
    width: 100%;
    height: 100%;
  }
}
</style>