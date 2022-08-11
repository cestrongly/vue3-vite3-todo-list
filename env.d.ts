/*
 * @Author: cest
 * @Date: 2022-08-11 10:47:01
 * @LastEditTime: 2022-08-11 10:53:55
 * @LastEditors: cest
 * @FilePath: /vue3-vite3-todo-list/env.d.ts
 * @Description: 编辑描述内容
 */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}