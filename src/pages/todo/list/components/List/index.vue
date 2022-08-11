<!--
 * @Author: cest
 * @Date: 2022-08-03 10:22:35
 * @LastEditTime: 2022-08-11 16:38:20
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/pages/todo/list/components/List/index.vue
 * @Description: List
-->

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Item from '../Item/index.vue'
import { useTodoStore } from '~/store/todo'

const todoStore = useTodoStore()
const { doneTodoList, todoList } = storeToRefs(todoStore)
console.log('doneTodoList', doneTodoList)
console.log('todoList', todoList)

const handleChange = (value: any) => {
  console.log('handleChange value', value)
  todoStore.update({ doneTodoList: value })
}
</script>

<template lang="pug">
.List
  el-checkbox-group(
    :model-value="doneTodoList"
    @change="handleChange")
    Item(
      v-for="(todo,index) in todoList"
      :key="index"
      :todo="todo"
      :index="index" )
</template>

<style lang="stylus" scoped>
@import './stylus'
</style>
