<template>
  <bus-data-list v-bind="data">
    <template #header>
      <bus-search class="mb-3" v-model="searchValue" />
      <div class="d-flex gap-1 align-items-center mb-3">
        <h3 class="m-0">Bus Stops</h3>
        <sort-icon class="icon" />
      </div>
    </template>
    <template #default="{ label }">
      <bus-list-item :label="label" />
    </template>
  </bus-data-list>
</template>

<script lang="ts" setup>
import BusDataList from './BusDataList.vue';
import BusSearch from '../BusSearch.vue';
import BusListItem from './BusListItem.vue';
import SortIcon from '@/assets/SortIcon.vue';
import useStore from '@/store';
import { reactive, computed, watch, shallowRef, onUnmounted } from 'vue';
import { ACTION } from '@/store/actions';
import debounce from '@/utils/debounce';

const store = useStore();

const searchValue = shallowRef('');

watch(searchValue, () => {
  debounce(() => store.dispatch(ACTION.FILTER_STOPS, searchValue.value), 500);
});

const data = reactive({
  list: computed(() => store.state.filteredStops),
  isReady: computed(() => Boolean(store.state.stops.length)),
});

onUnmounted(() => {
  store.dispatch(ACTION.RESET_FILTERED_STOPS);
});
</script>

<style lang="scss" scoped>
.icon {
  color: #9a9da4;
}
</style>
