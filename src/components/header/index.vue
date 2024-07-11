<template>
    <ion-header class="ion-no-border">
      <div class="header">
        <BackIcon class="header_icon"></BackIcon>
        <h3 class="header_title">
          Авторизация
        </h3>
      </div>
    </ion-header>
</template>

<script setup lang="ts">
import { IonHeader } from '@ionic/vue'
import { BackIcon } from '@/components/icons'
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 12px 8px;
  border-bottom: 1px solid var(--grey-lighten-1);
  cursor: pointer;

  &_icon {
    position: absolute;
    width: 20px;
    height: 28px;
  }

  &_title{
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
  }
}
</style>