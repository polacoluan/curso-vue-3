// Utilities
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            {
                title: "Estudar Vue",
                description: "Estudar Vue com Vuetify"
            },
            {
                title: "Ler Documentação",
                description: "Ler a documetação do Vuetify"
            }
        ],
        titleTaskCreating: "",
        indexTaskSelected: 0,
        showDialogTaskFields: false,
        showDialogDelete: false
    }),
    actions:{
        addTask(){
            this.tasks.push({
                title: this.titleTaskCreating
            })
            this.titleTaskCreating = "";
        },
        toggleDelete(index){
            this.showDialogDelete = !this.showDialogDelete;
            if (index != null) {
          
              this.indexTaskSelected = index;
            }
        },
        deleteTask(){
            this.tasks.splice(this.indexTaskSelected, 1);
            this.toggleDelete();
        },
        toggleEdit(index){
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if (index != null) {
          
              this.indexTaskSelected = index;
            }
          }
    }
})
