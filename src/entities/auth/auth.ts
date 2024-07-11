import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const authStep = ref(0)

  const getPincode = () => {
    authStep.value = 1
  }
  return {
    authStep,
    getPincode
  };
});