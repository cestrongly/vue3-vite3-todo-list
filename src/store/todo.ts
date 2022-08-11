/*
 * @Author: cest
 * @Date: 2022-08-10 13:28:37
 * @LastEditTime: 2022-08-11 15:22:34
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/store/todo.ts
 * @Description: TodoStore
 */

import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

interface Todo {
  id: string
  name: string
  done: boolean
}
export const useTodoStore = defineStore('todo', () => {
  const TODO_LIST: Array<Todo> = [
    { id: '1638256190206', name: '敲代码', done: true },
    { id: '1638256191770', name: '整理笔记', done: false },
    { id: '1638256193996', name: '吃饭', done: false },
  ]

  const DONE_TODO_LIST = ['1638256190206']

  const doneTodoList = ref(JSON.parse(JSON.stringify(DONE_TODO_LIST)))
  const todoList = ref(JSON.parse(JSON.stringify(TODO_LIST)))

  /**
   * 名字重复校验
   * @param name
   * @returns
   */
  const isExitsName = (name: String) => {
    return todoList.value.some((item: any) => item.name === name)
  }

  /**
   * 添加 todo
   * @param {*} payload
   */
  const add = (payload: any) => {
    console.log('ADD: payload', payload)
    todoList.value.unshift(payload)
  }

  /**
   * 删除 todo
   * @param param0
   */
  const remove = ({ id }: any) => {
    todoList.value.splice(todoList.value.indexOf(id), 1)
    console.log('remove', todoList)
    doneTodoList.value.splice(doneTodoList.value.indexOf(id), 1)
  }

  const update = ({ doneTodoList = [] }) => {
    console.log('update doneTodoList', doneTodoList)
    const store = useTodoStore()
    store.$patch((state) => {
      state.doneTodoList = doneTodoList
      state.todoList = Array.from(state.todoList, todo => ({
        ...<Todo>todo,
        done: doneTodoList.includes((<Todo>todo).id as never),
      }))
    })
  }

  /**
   * 重置 todo
   */
  const reset = () => {
    const store = useTodoStore()
    store.$patch((state) => {
      state.doneTodoList = ref(JSON.parse(JSON.stringify(DONE_TODO_LIST)))
      console.log(state.doneTodoList)
      state.todoList = JSON.parse(JSON.stringify(TODO_LIST))
    })
    console.log('DONE_TODO_LIST', DONE_TODO_LIST)
  }
  return {
    todoList,
    doneTodoList,
    isExitsName,
    add,
    remove,
    update,
    reset,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))

