<template>
    <div>
        <v-text-field clearable label="Add Tasks" @keyup.enter="addTask" v-model="task.title"></v-text-field>
        <ListTasks :tasks="tasks" />
    </div>
</template>

<script setup>

import ListTasks from './ListTasks.vue';
import { ref } from 'vue';

const tasks = ref([
    {
        title: "Estudar Vue",
        description: "Estudar Vue com Vuetify"
    },
    {
        title: "Ler Documentação",
        description: "Ler a documetação do Vuetify"
    }
]);

const task = ref({
    title: "",
    description: ""
});

const addTask = () => {
    tasks.value.push({
        title: task.value.title,
        description: task.value.description
    })
    task.value = {
        title: "",
        description: ""
    }
};
</script>