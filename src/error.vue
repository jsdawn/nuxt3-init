<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-red-500 mb-4">
          {{ error.statusCode }}
        </h1>
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">
          {{ error.statusCode === 404 ? '页面未找到' : '出错了' }}
        </h2>
        <p class="text-gray-600 mb-8">{{ error.message }}</p>
        <el-button type="primary" @click="handleError" class="w-full">
          返回首页
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 开发环境优先显示错误在控制台
// 生产环境优先显示错误在error页面
const props = defineProps({
  error: Object,
});

const handleError = () => {
  clearError({ redirect: '/' });
};
</script>
