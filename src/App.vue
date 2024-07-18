<template>
  <v-app>
    <v-main>
      <Alert v-if="alertStore.showAlert"/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useAlertStore } from './stores/alert';
const alertStore = useAlertStore();

</script>
