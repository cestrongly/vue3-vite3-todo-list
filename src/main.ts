/*
 * @Author: cest
 * @Date: 2022-08-10 08:58:17
 * @LastEditTime: 2022-08-10 10:58:24
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/main.ts
 * @Description: 编辑描述内容
 */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
// Tailwind CSS Preflight
import '@unocss/reset/tailwind.css'
// Unocss 高性能且极具灵活性的即时原子化 CSS 引擎
import 'uno.css'
// 网络字体
import './assets/fonts/dm/index.css'
// 主体样式
import './assets/styls/index.styl'
// 页面样式
import './styles/main.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
