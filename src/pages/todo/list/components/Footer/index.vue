<!--
 * @Author: cest
 * @Date: 2022-08-03 10:22:35
 * @LastEditTime: 2022-08-10 17:41:57
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/pages/todo/list/components/Footer/index.vue
 * @Description: Footer
-->
<script lang="ts">
// import { computed, ref } from 'vue'
// import { Delete } from '@element-plus/icons-vue'

// import { useStore } from 'vuex'
// import { useState } from '@/hooks/useState'
// import { mapHelper } from '@/hooks/useMapper'
// import { MAP } from '@/store/modules/todo'
// import Item from '../Item/index.vue'

// export default {
//   name: 'Footer',
//   setup() {
//     const store = useStore()
//     const refReverseCheck = ref(false)

//     const todoStoreState = useState(MAP.NAMESPACED, {
//       todoList: [MAP.TODO_LIST],
//       doneTodoList: state => {
//         console.log('state2:', state)
//         return state[MAP.DONE_TODO_LIST]
//       }
//     })

//     const isIndeterminate = computed(() => {
//       console.log('todoStoreState.doneTodoList.length', todoStoreState.doneTodoList.value.length)
//       console.log('todoStoreState.todoList.length', todoStoreState.todoList.value.length)
//       return todoStoreState.doneTodoList.value.length > 0
//       && todoStoreState.doneTodoList.value.length < todoStoreState.todoList.value.length
//     })

//     const checkAll = computed(() => {
//       if (todoStoreState.doneTodoList.value.length === 0) {
//         return false
//       } if (todoStoreState.doneTodoList.value.length === todoStoreState.todoList.value.length) {
//         return true
//       }
//       return false
//     })

//     /**
//      * 全选
//      */
//     const handleCheckAllTodo = value => {
//       console.log('handleCheckAllTodo value', value)
//       store.commit(mapHelper(MAP.NAMESPACED, MAP.CHECK_ALL_TODO), value)
//     }

//     /**
//      * 反选
//      */
//     const handleReverseCheck = value => {
//       console.log('handleReverseCheck value', value)
//       refReverseCheck.value = value
//       store.commit(mapHelper(MAP.NAMESPACED, MAP.REVERSE_TODO_DONE))
//     }

//     /**
//      * 清除已完成
//      */
//     const clearAllDoneEventHandler = e => {
//       console.log('clearAllDoneEventHandler e', e)
//       store.commit(mapHelper(MAP.NAMESPACED, MAP.CLEAR_ALL_DONE))
//     }

//     return {
//       Delete,
//       checkAll,
//       isIndeterminate,
//       refReverseCheck,
//       handleCheckAllTodo,
//       handleReverseCheck,
//       clearAllDoneEventHandler,
//       ...todoStoreState
//     }
//   },
//   components: { Item }
// }
</script>

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
  // store.commit(mapHelper(MAP.NAMESPACED, MAP.CHECK_ALL_TODO), value)
}

/**
     * 反选
     */
const handleReverseCheck = (value: CheckboxValueType) => {
  console.log('handleReverseCheck value', value)
  refReverseCheck.value = value as boolean
  // store.commit(mapHelper(MAP.NAMESPACED, MAP.REVERSE_TODO_DONE))
}

/**
     * 清除已完成
     */
const clearAllDoneEventHandler = (e: Object) => {
  console.log('clearAllDoneEventHandler e', e)
  // store.commit(mapHelper(MAP.NAMESPACED, MAP.CLEAR_ALL_DONE))
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

