<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" subtitle="To do List"
          title="Luan de Carvalho">
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list :lines="false" density="compact" nav>
        <router-link v-for="(item, i) in items" :key="i" :value="item" :to="item.to">
          <v-list-item  color="primary">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title :textContent="item.text"></v-list-item-title>
        </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>To do List</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(null);

const items = [
  { text: 'My Files', icon: 'mdi-folder', to: '/' },
  { text: 'Shared with me', icon: 'mdi-account-multiple', to: 'about' },
];

</script>

<style scoped>
  a{
    text-decoration: none;
    color: #505050;
  }
</style>