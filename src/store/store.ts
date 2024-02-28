import { defineStore } from 'pinia'
import type { InitialState } from './model'

const initialState: InitialState = {
    activeRoute:"",
    todoList: []
}

export const useStore = defineStore('todoStore', {
    state: () => ({...initialState}),
    getters: {},
    actions: {
        setActiveRoute(route: string) {
          this.activeRoute = route;
        },
        getItem(val: string) {
          if (this.todoList.some(el => el?.value === val)) {
            return;
          }
          this.todoList.push({
            id: Math.floor(Math.random() * 10001),
            value: val
          });
        },
        deleteItem(id: number) {
          this.todoList = this.todoList.filter((e) => e?.id !== id);
        },
        emptyList() {
          this.todoList = [];
        },
      },
})