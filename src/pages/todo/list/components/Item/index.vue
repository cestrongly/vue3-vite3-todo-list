<!--
 * @Author: cest
 * @Date: 2022-08-03 10:22:35
 * @LastEditTime: 2022-08-11 16:38:02
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/pages/todo/list/components/Item/index.vue
 * @Description: Item
-->

<script lang="ts" setup>
import { Delete } from '@element-plus/icons-vue'
import { useTodoStore } from '~/store/todo'
defineProps({
  todo: {
    type: Object,
    default: () => ({}),
  },
  index: {
    type: Number,
    default: 0,
  },
})

const todoStore = useTodoStore()
// const store = useStore()
const deleteEventHandler = (e: any) => {
  // console.log('deleteEventHandler e.currentTarget', e.currentTarget.dataset)
  const { id } = e.currentTarget.dataset
  todoStore.remove({ id })
  ElMessage.closeAll()
  ElMessage.success('删除成功')
}
</script>

<template lang="pug">
el-checkbox(
  :label="todo.id") {{todo.name}}
  el-button(
    v-if="todo.done"
    class="todo-del-icon"
    type="danger"
    :icon="Delete"
    circle
    @click.stop="deleteEventHandler"
    :data-id="todo.id")
</template>

<style lang="stylus" scoped src="./stylus/index.styl" />

