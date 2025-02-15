<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

const seoMeta = reactive({
  title: '木得 mood',
  description: '木得是英文mood（心境）的中文谐音，有木心情都来mood。',
});

onMounted(() => {
  console.log('[RuntimeConfig] apiBase: ' + runtimeConfig.public.apiBase);
});

// 入口seo设置，页面使用useSeoMeta
// useServerSeoMeta({
//   title: () => seoMeta.title,
//   description: () => seoMeta.description,
// });
</script>

<style lang="scss">
#app {
}
</style>
