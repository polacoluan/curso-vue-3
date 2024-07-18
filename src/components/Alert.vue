<template>
  <div class="alert-notification">
    <v-alert
      text="Tarefa criada com sucesso"
      type="success"
      closable
    ></v-alert>
  </div>
</template>

<style scoped>
   .alert-notification{
        position: fixed;
        z-index: 1;
        width: 100%;
        bottom: 50px;
        padding: 0 30% 0 30%;
   } 
</style>