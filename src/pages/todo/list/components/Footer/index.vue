<!--
 * @Author: cest
 * @Date: 2022-08-03 10:22:35
 * @LastEditTime: 2022-08-11 16:36:30
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/pages/todo/list/components/Footer/index.vue
 * @Description: Footer
-->

<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
import type { CheckboxValueType } from 'element-plus/es'
import { storeToRefs } from 'pinia'

import { useTodoStore } from '~/store/todo'
const todoStore = useTodoStore()

// const todoList = ref()
// const doneTodoList = ref()
const { todoList, doneTodoList } = storeToRefs(todoStore)
const refReverseCheck = ref(false)
const checkAll = computed(() => {
  if (doneTodoList.value.length === 0)
    return false
  if (doneTodoList.value.length === todoList.value.length)
    return true

  return false
})
const isIndeterminate = computed(() => {
  console.log('doneTodoList.length', doneTodoList.value.length)
  console.log('todoList.length', todoList.value.length)
  return doneTodoList.value.length > 0
        && doneTodoList.value.length < todoList.value.length
})

/**
 * 全选
 */
const handleCheckAllTodo = (value: CheckboxValueType) => {
  console.log('handleCheckAllTodo value', value)
  todoStore.checkAll(value as boolean)
}

/**
 * 反选
 */
const handleReverseCheck = (value: CheckboxValueType) => {
  console.log('handleReverseCheck value', value)
  refReverseCheck.value = value as boolean
  todoStore.reverse()
}

/**
 * 清除已完成
 */
const clearAllDoneEventHandler = (e: Object) => {
  console.log('clearAllDoneEventHandler e', e)
  todoStore.clearAllDone()
}
</script>

<template lang="pug">
.Footer.flex.items-center.justify-between
  .flex
    el-checkbox(
      border
      :model-value="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllTodo") 全选
    el-checkbox(
      v-model="refReverseCheck"
      border
      @change="handleReverseCheck") 反选
  .flex.items-center.justify-end
    el-alert(
      :title="`已完成 ${doneTodoList.length} / 全部 ${todoList.length}`"
      type="info"
      :closable="false")
    el-button(
      v-if="doneTodoList.length > 0"
      class="todo-del-icon"
      type="danger"
      :icon="Delete"
      circle
      @click="clearAllDoneEventHandler")
</template>

<style lang="stylus" scoped src="./stylus/index.styl" />

