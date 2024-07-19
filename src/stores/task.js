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
                title: this.titleTaskCreating,
                done: false
            })
            this.titleTaskCreating = "";
            this.saveLocalData();
            alertStore.notifyAlertCreated();
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
            alertStore.notifyAlertDeleted();
        },
        updateTask(){
            this.saveLocalData();
            this.toggleEdit();
            alertStore.notifyAlertUpdated();
        },
        toggleEdit(index) {
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if (index != null) {

                this.indexTaskSelected = index;
            }
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
        },
        toggleDoneTask(index){
            this.tasks[index].done = !this.tasks[index].done;
            this.saveLocalData();
        }
    }
})
