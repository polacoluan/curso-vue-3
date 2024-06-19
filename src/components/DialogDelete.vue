<template>
    <div class="text-center pa-4">
      <v-dialog
        v-model="props.dialog"
        max-width="450"
        persistent
      >
        <v-card
          prepend-icon="mdi-delete"
          title="Você tem certeza que quer deletar?"
        >
          <template v-slot:actions>
            <v-spacer></v-spacer>
            
            <v-btn @click="$emit('toggleDelete')">
              Não
            </v-btn>
            <v-btn @click="$emit('deleteTask')">
              Sim
            </v-btn>
  
          </template>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script setup>
    const props = defineProps({
        dialog: Boolean
    });
</script>