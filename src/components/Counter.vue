<script setup lang="ts">
import { useCountStore } from '@/stores/count';
const { count } = storeToRefs(useCountStore());
const { increase } = useCountStore();

const click = () => {
  increase;
};
</script>

<template>
  <div class="card">
    <button type="button" @click="increase">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
