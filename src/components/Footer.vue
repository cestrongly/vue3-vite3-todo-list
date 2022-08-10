<!--
 * @Author: cest
 * @Date: 2022-08-10 08:58:17
 * @LastEditTime: 2022-08-10 15:00:44
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/src/components/Footer.vue
 * @Description: 编辑描述内容
-->
<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <a
      icon-btn i-carbon-campsite
      rel="noreferrer"
      href="/"
      title="GitHub"
    />

    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>

    <a
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
