<template>
  <bus-data-list v-bind="data">
    <template #header>
      <h2 class="mb-6">{{ data.title }}</h2>
      <div class="mb-5">
        <h3 class="m-0">Time</h3>
      </div>
    </template>
    <template #default="{ label }">
      <bus-list-item :label="label" data-test="bus-list-item" />
    </template>
  </bus-data-list>
</template>

<script lang="ts" setup>
import BusDataList from '@/components/list/BusDataList.vue';
import BusListItem from '@/components/list/elements/BusListItem.vue';
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
