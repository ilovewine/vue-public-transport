<template>
  <div class="d-flex flex-column h-100">
    <div class="position-relative">
      <div class="row">
        <div
          class="col-12 position-relative rounded-top p-1 bg-white rounded-top"
        >
          <bus-search v-model="searchValue" data-test="bus-search" />
        </div>
      </div>
    </div>
    <div class="position-relative flex-grow-1">
      <div class="list row">
        <div class="col-12 position-relative px-0">
          <bus-stop-search-list data-test="bus-stop-search-list" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BusStopSearchList from '@/components/list/BusStopSearchList.vue';
import BusSearch from '@/components/BusSearch.vue';
import useStore from '@/store';
import { ACTION } from '@/store/actions';
import debounce from '@/utils/debounce';
import { onUnmounted, shallowRef, watch } from 'vue';

const store = useStore();

const searchValue = shallowRef('');

watch(searchValue, () => {
  debounce(() => {
    store.dispatch(ACTION.FILTER_STOPS, searchValue.value);
  }, 500);
});

onUnmounted(() => {
  store.dispatch(ACTION.RESET_FILTERED_STOPS);
});
</script>

<style lang="scss" scoped>
.list {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
}
</style>
