<!--
 * @Author: cest
 * @Date: 2022-08-03 10:22:35
 * @LastEditTime: 2022-08-10 14:52:16
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/pages/todo/list/components/Item/index.vue
 * @Description: Item
-->
<script lang="ts">
import { Delete } from '@element-plus/icons-vue'
import { useTodoStore } from '~/store/todo'

export default {
  name: 'Item',
  props: {
    todo: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const todoStore = useTodoStore()
    // const store = useStore()
    const deleteEventHandler = (e: any) => {
      // console.log('deleteEventHandler e.currentTarget', e.currentTarget.dataset)
      const { id } = e.currentTarget.dataset
      todoStore.remove({ id })
      ElMessage.closeAll()
      ElMessage.success('删除成功')
    }
    return {
      Delete,
      deleteEventHandler,
    }
  },
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

