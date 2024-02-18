import { reactive } from 'vue';

const tdList:Record<string, any> = []
const lists:Record<string, any>[] = [
    // tdList --> example --> {yellow: ["camera, bagno"]},
]
const tags = ['yellow','green','blue','grey']

export const store = reactive({
    activeRoute: '',
    setActiveRoute (route: string)  {
        store.activeRoute = route
      },
    todolist: new Array,
    getItem (val: string ) {
        if (store.todolist.includes(val)) return
        store.todolist.push({
            id: Math.floor(Math.random() * 10001),
            value: val
        })
    },
    emptyList () {
        store.todolist = []
    },
})