<template>
  <div>
    <div class="">
      <span>home</span>
      <span>home2</span>
      <el-button>element UI</el-button>

      <el-button type="primary" @click="ElMessage('hello')">button</el-button>
      <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
      <LazyElButton type="warning">lazy button</LazyElButton>
    </div>
  </div>
</template>
