/*
 * @Author: cest
 * @Date: 2022-08-10 08:58:17
 * @LastEditTime: 2022-08-11 17:40:03
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/main.ts
 * @Description: vue 入口文件
 */
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { createPinia } from 'pinia'
import App from './App.vue'
// Tailwind CSS Preflight
import '@unocss/reset/tailwind.css'
// Unocss 高性能且极具灵活性的即时原子化 CSS 引擎
import 'uno.css'
// element-plus 主题 暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 网络字体
import './assets/fonts/dm/index.css'
// 主体样式
import './assets/styls/index.styl'
// 页面样式
import './styles/main.css'

const app = createApp(App)
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
})
console.log('VITE_BASE:', import.meta.env)
// console.log('process.env:', process.env)
app
  .use(router)
  .use(createPinia())
  .mount('#app')
