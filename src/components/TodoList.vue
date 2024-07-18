<template>
  <div>
    <v-text-field
      clearable
      label="Add Tasks"
      :rules="rules"
      @keyup.enter="taskStore.addTask"
      v-model="taskStore.titleTaskCreating"
    ></v-text-field>
    <ListTasks />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import ListTasks from "./ListTasks.vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
const rules = [
  (value) => {
    if (value) return true;

    return "Você precisa colcoar um título.";
  },
];
onMounted(() => {
  taskStore.getTasks();
});
</script>