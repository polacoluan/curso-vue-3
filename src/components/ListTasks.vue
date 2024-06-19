<template>
    <v-text-field 
        clearable 
        label="Add Tasks"
        @keyup.enter="addTask"
        v-model="task.title"
    ></v-text-field>

  <v-list lines="three" select-strategy="classic">
    <v-list-subheader>General</v-list-subheader>

    <v-list-item 
        v-for="task, index in tasks"
        :key="index"
        :value="index"
        >
      <template v-slot:prepend="{ isActive }">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
        </v-list-item-action>
      </template>

      <v-list-item-title>{{ task.title }}</v-list-item-title>

      <v-list-item-subtitle>
        {{ task.description }}
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script setup>

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

const addTask = () =>{
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

<style>
</style>