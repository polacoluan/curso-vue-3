// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type: "error",
    text: "teste"
  }),
  actions:{
    notifyAlert(){
        this.showAlert = true;
        setTimeout(() => {  
            this.showAlert = false;
        }, 2000)
    },
    notifyAlertCreated(){
      this.type = "success";
      this.text = "Tarefa criada com sucesso";
      this.notifyAlert();
    },
    notifyAlertDeleted(){
      this.type = "warning";
      this.text = "Tarefa deletada";
      this.notifyAlert();
    },
    notifyAlertUpdated(){
      this.type = "info";
      this.text = "Tarefa editada com sucesso";
      this.notifyAlert();
    }
  }
})