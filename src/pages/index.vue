<template>
  <div class="v-page home-page">首页</div>
</template>

<script setup>
const config = useRuntimeConfig();

console.log(config);
console.log("环境变量："+ process.env.NODE_ENV);
</script>

<style lang="scss">
.home-page {
}
</style>
