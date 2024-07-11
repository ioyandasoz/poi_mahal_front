<template>
  <div class="flex">
    <label class="switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + .slider {
      background-color: var(--primary-color);
    }

    &:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--grey-lighten-1);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50px;

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 2px;
      top: 2px;
      margin: auto 0;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      background-color: var(--grey-lighten-3);
      border-radius: 50px;
    }
  }
}
</style>
