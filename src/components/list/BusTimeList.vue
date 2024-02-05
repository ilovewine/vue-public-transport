<template>
  <bus-data-list v-bind="data">
    <template #header>
      <h2 class="my-4">{{ data.title }}</h2>
      <div class="d-flex gap-1 align-items-center mb-3">
        <h3 class="m-0">Time</h3>
      </div>
    </template>
    <template #default="{ label }">
      <bus-list-item :label="label" />
    </template>
  </bus-data-list>
</template>

<script lang="ts" setup>
import BusDataList from '@/components/list/BusDataList.vue';
import BusListItem from '@/components/list/BusListItem.vue';
import { computed, reactive } from 'vue';
import useStore from '@/store';

const store = useStore();

const data = reactive({
  title: computed(() => `Bus Stop: ${store.state.selectedStop.stop}`),
  sortable: computed(() => store.state.selectedStop.timetable),
  isReady: computed(() => Boolean(store.state.selectedStop.stop)),
});
</script>

<style lang="scss" scoped></style>
