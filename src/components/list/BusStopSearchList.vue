<template>
  <bus-data-list class="rounded-bottom" v-bind="data">
    <template #header>
      <div class="d-flex gap-1 align-items-center my-3">
        <h3 class="m-0">Bus Stops</h3>
        <sort-icon class="icon" @click="changeOrder" data-test="sort-icon" />
      </div>
    </template>
    <template #default="{ label }">
      <bus-list-item :label="label" data-test="bus-list-item" />
    </template>
  </bus-data-list>
</template>

<script lang="ts" setup>
import BusDataList from './BusDataList.vue';
import BusListItem from './BusListItem.vue';
import SortIcon from '@/assets/SortIcon.vue';
import useStore from '@/store';
import { reactive, computed } from 'vue';

const store = useStore();

const data = reactive({
  sortable: computed(() => store.state.filteredStops),
  isReady: computed(() => Boolean(store.state.stops.list.length)),
});

const changeOrder = () => store.state.filteredStops.changeOrder();
</script>

<style lang="scss" scoped>
.icon {
  color: #9a9da4;
  cursor: pointer;
}
</style>
