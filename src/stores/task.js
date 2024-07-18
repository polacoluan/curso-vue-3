// Utilities
import { defineStore } from 'pinia'
import { useAlertStore } from './alert';

const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        titleTaskCreating: "",
        indexTaskSelected: 0,
        showDialogTaskFields: false,
        showDialogDelete: false
    }),
    actions: {
        addTask() {
            if(!this.titleTaskCreating) return;   
            this.tasks.push({
                title: this.titleTaskCreating
            })
            this.titleTaskCreating = "";
            this.saveLocalData();
            alertStore.notifyAlert();
        },
        toggleDelete(index) {
            this.showDialogDelete = !this.showDialogDelete;
            if (index != null) {

                this.indexTaskSelected = index;
            }
        },
        deleteTask() {
            this.tasks.splice(this.indexTaskSelected, 1);
            this.toggleDelete();
            this.saveLocalData();
        },
        toggleEdit(index) {
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if (index != null) {

                this.indexTaskSelected = index;
            }
            this.saveLocalData();
        },
        saveLocalData(){
            localStorage.setItem('tasks',
                JSON.stringify(this.tasks)
            )
        },
        getTasks(){
            let items = localStorage.getItem('tasks');
            if(items){
                this.tasks = JSON.parse(items);
            }
        }
    }
})
