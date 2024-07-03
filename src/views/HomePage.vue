<template>
  <ion-page>
    <ion-content>
      asdsad
      <CInput v-model:value="test"></CInput>
      <CButton size="sm" theme="secondary">assa</CButton>
      <CSelect v-model:value="test"></CSelect>
    </ion-content>
  </ion-page>
  фывыфв
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CInput, CButton, CSelect } from '@/components/ui/'

const test = ref()
</script>
