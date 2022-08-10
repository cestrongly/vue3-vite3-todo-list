/*
 * @Author: cest
 * @Date: 2022-08-10 08:58:17
 * @LastEditTime: 2022-08-10 10:11:06
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/main.ts
 * @Description: 编辑描述内容
 */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import './assets/fonts/dm/index.css'
import './assets/styls/index.styl'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
