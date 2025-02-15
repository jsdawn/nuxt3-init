<template>
  <div class="v-layout">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>

<style lang="scss">
@use '~/assets/styles/index.scss'; // global>element style

.v-layout {
}
</style>
