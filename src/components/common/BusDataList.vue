<template>
  <div class="d-flex flex-column">
    <template v-if="list">
      <bus-search v-if="enableSearch" />
      <h2 v-else>{{ title }}</h2>
      <h3>{{ label }} <span v-if="enableSort">&#f0dc;</span></h3>
      <ul class="list-group list-group-flush">
        <li v-for="item in list" class="list-group-item">{{ item }}</li>
      </ul>
    </template>
    <h3 v-else>{{ emptyPlaceholder }}</h3>
  </div>
</template>

<script lang="ts" setup>
import BusSearch from '@/components/BusSearch.vue';
import useStore from '@/store';
import { computed } from 'vue';

interface BusDataBoxProps {
  title?: string;
  label?: string;
  enableSearch?: boolean;
  enableSort?: boolean;
  list?: unknown[];
}

defineProps<BusDataBoxProps>();

const store = useStore();

const emptyPlaceholder = computed(
  () =>
    `Please select the bus ${store.state.selectedLine ? 'stop' : 'line'} first`
);
</script>

<style lang="scss" scoped></style>
