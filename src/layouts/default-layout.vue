<template>
  <ion-page>
    <ion-tabs>
      <Header></Header>
      <ion-router-outlet></ion-router-outlet>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTabs, IonRouterOutlet} from '@ionic/vue';
import { Header } from '@/components/header'
</script>