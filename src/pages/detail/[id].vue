<template>
  <div class="v-page page-detail">
    <Head>
      <Title>{{ title }}</Title>
    </Head>

    <div>{{ id }}：{{ title }}</div>
  </div>
</template>

<script setup>
const route = useRoute();
const id = ref(route.params.id || 0);
const title = ref(route.query.title || '详情');
</script>

<style lang="scss">
.page-detail {
}
</style>
