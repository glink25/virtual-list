<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Counter from '@/components/Counter.vue';
import List from '@/components/List';

const { t, locale } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});

const list = Array.from({ length: 3000 }, (_, i) => i);
</script>

<template>
  <div class="flex justify-center items-center">
    {{ $t('hello') }}
    <div class="i-mdi-home" />
  </div>
  <Counter />
  <List :list="list">
    <template #default="{ item, index }">
      <div class="h-8">{{ item }}</div>
    </template>
  </List>
</template>
