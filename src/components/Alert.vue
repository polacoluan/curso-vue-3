<template>
  <div class="alert-notification">
    <v-alert
      class="animate__animated animate__bounce"
      :text="alertStore.text"
      :type="alertStore.type"
      closable
    ></v-alert>
  </div>
</template>
<script setup>
import 'animate.css';
import { useAlertStore } from "@/stores/alert";
const alertStore = useAlertStore();
</script>
<style scoped>
   .alert-notification{
        position: fixed;
        z-index: 1;
        width: 100%;
        bottom: 50px;
        padding: 0 30% 0 30%;
   } 
</style>