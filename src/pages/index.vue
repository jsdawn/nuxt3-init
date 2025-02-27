<template>
  <div class="v-page page-home">
    <Head>
      <Title>商品列表</Title>
    </Head>
    <!-- 加载状态 -->
    <div v-if="status == 'pending'">Loading...</div>
    <!-- 商品列表 -->
    <ul v-else>
      <li
        class="cursor-pointer"
        v-for="product in products.data"
        :key="product.id"
        @click="clickItem(product)"
      >
        {{ product.title }} - ￥{{ product.price }}
      </li>
    </ul>

    <!-- 分页器 -->
    <div>
      <el-button type="primary" @click="handlePageChange(page + 1)">
        下一页
      </el-button>
      <el-button type="primary" @click="refresh">刷新本页</el-button>
    </div>
  </div>
</template>

<script setup>
import { listArticles } from '@/api/articles';

const page = ref(1); // 默认第一页
const pageSize = ref(10); // 每页条数

// 使用 useAsyncData 获取商品列表
const {
  data: products,
  status,
  refresh,
} = await useAsyncData(
  'products', // 唯一 key，用于防止重复请求
  () => listArticles({ page: page.value, size: pageSize.value }),
  {
    watch: [page], // 监听 page 变化，自动重新请求
  },
);

function handlePageChange(newPage) {
  page.value = newPage;
  // refresh();  // 使用 watch page
}

async function clickItem(item) {
  await navigateTo('/detail/' + item.id + `?title=${item.title}`);
}

onMounted(() => {});
</script>
