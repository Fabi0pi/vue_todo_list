type Nullable<T> = T | null

export type InitialState = {
    activeRoute: Partial<string>
    todoList: Nullable<TodoList>[]
}

type TodoList = {
    id: Nullable<number>
    value: Partial<string>
}
