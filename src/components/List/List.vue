<script setup lang="ts">
import { useList,type Props } from './hooks';
const props = defineProps<Props>();
const { assistRef,listForRender } = useList(props);
</script>

<template>
  <div ref="assistRef"></div>
  <template v-for="(item, index) in listForRender" :key="index">
    <slot v-bind="{ item, index }"></slot>
  </template>
  <div></div>
</template>
