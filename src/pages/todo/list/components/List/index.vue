<!--
 * @Author: cest
 * @Date: 2022-08-03 10:22:35
 * @LastEditTime: 2022-08-10 16:41:35
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/pages/todo/list/components/List/index.vue
 * @Description: List
-->
<script lang="ts">
// import { ref } from 'vue'

// import { useStore } from 'vuex'
// import { useState } from '@/hooks/useState'
// import { mapHelper } from '@/hooks/useMapper'
// import { MAP } from '@/store/modules/todo'
// import Item from '../Item/index.vue'

// export default {
//   name: 'List',
//   props: {
//     todoList: {
//       type: Array,
//       default: () => []
//     },
//     checkAll: {
//       type: Boolean,
//       default: false
//     },
//     isIndeterminate: {
//       type: Boolean,
//       default: false
//     }
//   },
//   setup() {
//     const store = useStore()

//     const todoStoreState = useState(MAP.NAMESPACED, {
//       todoList: [MAP.TODO_LIST],
//       doneTodoList: state => {
//         console.log('state2:', state)
//         return state[MAP.DONE_TODO_LIST]
//       }
//     })

//     const handleChange = (value) => {
//       console.log('handleChange value', value)
//       store.commit(mapHelper(MAP.NAMESPACED, MAP.UPDATE), { doneTodoList: value });
//     }

//     return {
//       handleChange,
//       ...todoStoreState
//     };
//   },
//   components: { Item }
// }
</script>

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
