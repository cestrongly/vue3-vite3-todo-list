<!--
 * @Author: cest
 * @Date: 2022-08-03 10:22:35
 * @LastEditTime: 2022-08-11 16:36:51
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/pages/todo/list/components/Header/index.vue
 * @Description: Header
-->

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import GithubFill from '../SVG/github-fill.vue'
import { useTodoStore } from '~/store/todo'

const todoStore = useTodoStore()
console.log('todoStore', todoStore)
const refName = ref('')

/**
  * 添加 todo
  * @param {*} key
  */
const addTodo = (key: String) => {
  console.log('todoStore.todoList.length', todoStore.todoList.length)
  if (todoStore.todoList.length >= 10) {
    ElMessage.closeAll()
    ElMessage.warning('最多可添加 10 个')
    refName.value = ''
    return
  }

  if (!key.trim()) {
    ElMessage.closeAll()
    ElMessage.warning('输入项不能为空')
    return
  }

  const res = todoStore.isExitsName(key)
  console.log('EXISTS_NAME', res)
  if (res) {
    ElMessage.closeAll()
    ElMessage.warning('输入项已经存在')
    return
  }

  todoStore.add({
    // id
    id: String((new Date()).valueOf()),
    // 任务名称
    name: key,
    // 完成状态
    done: false,
  })

  ElMessage.closeAll()
  ElMessage.success('添加成功')
  refName.value = ''
}
/**
 * Enter 事件
 * @param {*} e
 */
const keyupEventHandler = (e: any) => {
  // console.log('keyupEventHandler e', e)
  const { keyCode, target } = e
  if (keyCode === 13) {
    console.log('keyupEventHandler target', target)
    console.log('keyupEventHandler todo', refName.value)
    addTodo(refName.value)
  }
}

/**
 * 添加事件
 * @param {*} e
 */
const addEventHandler = (e: any) => {
  console.log('keyupEventHandler e', e)
  addTodo(refName.value)
}
</script>

<template lang="pug">
.Header
  el-card
    el-alert(
      center
      :closable="false"
      effect="dark"
      title="vue3-todo-list"
      type="success")
      el-link(
        :underline="false"
        href="https://gitee.com/cestr/vue3-todo-list"
      )
        GithubFill
    el-input(
      v-model="refName"
      maxlength="20"
      placeholder="最大长度20，回车进行添加"
      @keyup="keyupEventHandler"
    )
      template(#append)
        el-button(:icon="Plus" @click="addEventHandler") 添加
</template>

<style lang="stylus" scoped src="./stylus/index.styl" />
