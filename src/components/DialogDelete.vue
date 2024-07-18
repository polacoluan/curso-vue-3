<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogDelete" max-width="450" persistent>
      <v-card
        prepend-icon="mdi-delete"
        title="Você tem certeza que quer deletar?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red-darken-1"
            variant="elevated"
            @click="taskStore.toggleDelete()"
          >
            Não
          </v-btn>
          <v-btn
            color="red-darken-1"
            @click="taskStore.deleteTask()"
            variant="outlined"
          >
            Sim
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
</script>