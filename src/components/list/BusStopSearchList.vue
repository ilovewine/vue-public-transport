<template>
  <bus-data-list class="rounded-bottom" v-bind="data">
    <template #header>
      <bus-stop-list-header @sort="changeOrder" />
    </template>
    <template #default="{ label }">
      <bus-list-item :label="label" data-test="bus-list-item" />
    </template>
  </bus-data-list>
</template>

<script lang="ts" setup>
import BusDataList from '@/components/list/BusDataList.vue';
import BusListItem from '@/components/list/elements/BusListItem.vue';
import BusStopListHeader from '@/components/list/elements/BusStopListHeader.vue';
import useStore from '@/store';
import { reactive, computed } from 'vue';

const store = useStore();

const data = reactive({
  sortable: computed(() => store.state.filteredStops),
  isReady: computed(() => Boolean(store.state.stops.list.length)),
});

const changeOrder = () => store.state.filteredStops.changeOrder();
</script>

<style lang="scss" scoped></style>
