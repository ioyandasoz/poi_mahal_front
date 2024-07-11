<template>
  <ion-page>
    <ion-content>
      <p>asdsad</p>
      <CInput v-model:value="test"></CInput>
      <CButton size="sm" theme="secondary">assa</CButton>
      <div style="display: flex; align-items: center;">
        <CSelect v-model:value="test2"></CSelect>
        <CSelect v-model:value="test2"></CSelect>
        <Checkbox value="1" v-model="selectedValue2">Я принимаю условия
          пользовательского соглашения</Checkbox>
        <Checkbox value="2" v-model="selectedValue2">Я принимаю условия
          пользовательского соглашения</Checkbox>
        <Toggle></Toggle>
        <div>
          <Radio v-for="option in options" :key="option.value" :name="'group1'" :value="option.value"
            v-model="selectedValue">
            {{ option.label }}
          </Radio>
        </div>
      </div>
      <p>фывыфв</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { ref } from 'vue';
import { CInput, CButton, CSelect, Checkbox, Toggle, Radio } from '@/components/ui/';

const test = ref();
const test2 = ref();
const selectedValue = ref('')
const selectedValue2 = ref([]) 

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]
</script>
