<template>
  <v-list lines="three" select-strategy="classic">
    <v-list-subheader>Tasks</v-list-subheader>

    <v-list-item 
      v-for="task, index in taskStore.tasks" 
      :key="index" 
      :value="index"
      @click="taskStore.toggleDoneTask(index)">
      <template v-slot:prepend="{ }">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
        </v-list-item-action>
      </template>

      <v-list-item-title>{{ task.title }}</v-list-item-title>

      <v-list-item-subtitle>
        {{ task.description }}
      </v-list-item-subtitle>

      <template v-slot:append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="grey-lighten-1" icon="mdi-dots-vertical" variant="text" v-bind="props">
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="taskStore.toggleEdit(index)">
              <v-list-item-title value="editar">Editar</v-list-item-title>
            </v-list-item>
            <v-list-item @click="taskStore.toggleDelete(index)">
              <v-list-item-title value="deletar">Deletar</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-list-item>
  </v-list>
  <DialogTaskFields :task="taskStore.tasks[taskStore.indexTaskSelected]" />
  <DialogDelete :task="taskStore.tasks[taskStore.indexTaskSelected]" />
</template>

<script setup>
import DialogTaskFields from './DialogTaskFields.vue';
import DialogDelete from './DialogDelete.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();
</script>

<style></style>