<template>
  <div>
    <div class="input_container">
      <label class="input_title">Адрес<span class="required">*</span></label>
      <CInput></CInput>
      <CButton theme="secondary">
        <template #icon>
          <AddLocationIcon/>
        </template>
        Указать на карте
      </CButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CInput, CSelect, CButton } from '@/components/ui'
import { AddLocationIcon } from '@/components/icons'
</script>

<style scoped lang="scss">

</style>