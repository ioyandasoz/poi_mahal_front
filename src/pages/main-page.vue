<template>
  <ion-page>
    <ion-content>
      <div class="name_block">
        <div class="container">
          <div class="input_container indent">
            <label class="input_title" for="">Название компании<span class="required">*</span></label>
            <CInput></CInput>
          </div>
          <div class="input_container">
            <label class="input_title" for="">Сфера деятельности<span class="required">*</span></label>
            <CSelect></CSelect>
          </div>
        </div>
      </div>
      <div class="address_block">
        <div class="container">
          <SelectAddress></SelectAddress>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { SelectAddress } from '@/components/main-page'
import { CInput, CSelect } from '@/components/ui'
</script>

<style scoped lang="scss">
ion-content {
  --background: var(--grey-lighten-2)
}
.name_block {
  padding: 16px 0 20px;
  background-color: var(--grey-lighten-3);
  border-radius: 0 0 20px 20px;
}
.indent {
  margin-bottom: 16px;
}
.address_block {
  margin-top: 20px;
  padding: 20px 0 20px;
  background-color: var(--grey-lighten-3);
  border-radius: 20px;
}
</style>