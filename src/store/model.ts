export type Nullable<T> = T | null

export type InitialState = {
    activeRoute: Partial<string>
    todoList: Nullable<TodoList>[]
}

export type TodoList = {
    id: number
    value: string
}
