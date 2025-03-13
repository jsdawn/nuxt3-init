<template>
  <div class="v-layout">
    <div class="h-10 bg-blue-400">
      <el-icon class="mr-2" size="20px"><Bell /></el-icon>
      layout nav
    </div>

    <slot></slot>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>

<style lang="scss" scoped>
.v-layout {
}
</style>
