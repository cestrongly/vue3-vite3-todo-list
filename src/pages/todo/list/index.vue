<!--
 * @Author: cest
 * @Date: 2022-08-10 11:29:52
 * @LastEditTime: 2022-08-10 16:24:29
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/pages/todo/list/index.vue
 * @Description: TODO List
-->
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Header from './components/Header/index.vue'
import List from './components/List/index.vue'
import Footer from './components/Footer/index.vue'

import { useTodoStore } from '~/store/todo'
const todoStore = useTodoStore()
const { todoList } = storeToRefs(todoStore)
// const todoList = ref()
const isReset = ref(false)
// 重置
const resetAndFreshEventHandler = async (e: object) => {
  console.log('resetAndFreshEventHandler e', e)
  todoStore.reset()
}
</script>

<template lang="pug">
el-row(justify="center")
  el-col(:xs="24")
    Header
    el-card
      template(v-if="todoList.length>0")
        List(:todoList="todoList")
        el-divider(style="margin:10px 0")
        Footer
      el-empty(v-else)
        el-button(
          type="primary"
          :loading="isReset"
          @click="resetAndFreshEventHandler")
          | 重新刷新
</template>
