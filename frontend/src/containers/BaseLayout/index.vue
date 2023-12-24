<script setup lang="ts">
const menuList = [
  {
    name: '文件管理',
    path: '',
    icon: ''
  }, {
    name: '文件管理',
    path: '',
    icon: ''
  }, {
    name: '文件管理',
    path: '',
    icon: ''
  }
];
</script>

<template>
  <div class="container">
    <div class="topBar">topBar</div>
    <div class="menu">
      <div v-for="menu in menuList">{{ menu.name }}</div>
    </div>
    <div class="content">content</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 40px 0 0 100px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
.topBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: rgb(20, 24, 80);
  color: rgb(255, 255, 255);
}
.menu {
  position: fixed;
  top: 40px;
  left: 0;
  bottom: 0;
  width: 100px;
  height: calc(100% - 40px);
  background-color: rgb(6, 31, 70);
  color: rgb(255, 255, 255);
}
.content {
  width: 100%;
  height: 100%;
}
</style>
