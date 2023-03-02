<template>
  <el-container class="container">
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside class="aside">Aside</el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.container {
  height: 100%;

  .header {
    @include flex;
    background-image: linear-gradient(to right, #115385, #7EC2ED);
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }

  .aside {
    width: 200px;
    padding: 20px;
    border-right: 1px solid #e3e3e3;
  }

  .main {
    padding: 0;
  }
}
</style>
