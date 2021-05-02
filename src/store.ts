import { defineStore } from 'pinia'

export type Todo = {
  id: number
  text: string
  done: boolean
}

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [
      { id: 0, text: 'aaa', done: true },
      { id: 1, text: 'bbbbbbb', done: false },
      { id: 2, text: 'ccc', done: false },
    ] as Todo[],
  }),
  getters: {
    count() {
      return this.todos.length
    },
    completedCount() {
      return this.todos.filter((v) => v.done).length
    },
  },
  actions: {
    add(text: string) {
      this.todos.push({
        id: this.todos.length + 1,
        text,
        done: false,
      })
    },
    toggle(id: number) {
      this.todos = this.todos.map((v) => ({
        ...v,
        done: id === v.id ? !v.done : v.done,
      }))
    },
  },
})
