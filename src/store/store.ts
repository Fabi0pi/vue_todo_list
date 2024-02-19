import { reactive, watch } from 'vue';
import type { InitialState } from './model';

const initialState: InitialState = {
    activeRoute:"",
    todoList: []
}

export const store = reactive({
    ...initialState,
    setActiveRoute (route: string)  {
        store.activeRoute = route
      },
    getItem (val: string ) {
        if (store.todoList.some(el => el?.value === val)) {
            return
        }
        store.todoList.push({
            id: Math.floor(Math.random() * 10001),
            value: val
        })
    },
    deleteItem (id: number) {
        store.todoList = store.todoList.filter((e) => e?.id !== id)
    },
    emptyList () {
        store.todoList = []
    },
})


watch(store, (storeUpdated) => {
    console.log("STORE", {...storeUpdated});
})