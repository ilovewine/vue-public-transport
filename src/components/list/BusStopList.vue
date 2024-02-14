<template>
  <bus-data-list @select="selectStop" v-bind="data" interactive>
    <template #header>
      <h2 class="mb-6">{{ data.title }}</h2>
      <div class="d-flex align-items-center mb-5">
        <h3 class="m-0">Bus Stops</h3>
        <div class="sort-button d-inline-flex" @click="changeOrder">
          <sort-icon data-test="sort-icon" class="icon" />
        </div>
      </div>
    </template>
    <template #default="{ label: stopData }">
      <bus-list-item
        :label="stopData.stop"
        :active="active(stopData.stop)"
        data-test="bus-list-item"
        interactive
      />
    </template>
  </bus-data-list>
</template>

<script lang="ts" setup>
import BusDataList from '@/components/list/BusDataList.vue';
import BusListItem from '@/components/list/BusListItem.vue';
import SortIcon from '@/assets/SortIcon.vue';
import useStore from '@/store';
import { MUTATION } from '@/store/mutations';
import { computed, reactive } from 'vue';
import { BusStopModel } from '@/types/BusStopModel';

const store = useStore();

const selectStop = (stop: BusStopModel) => {
  store.commit(MUTATION.SET_CURRENT_STOP, stop);
};

const active = computed(
  () => (stop: string) => store.state.selectedStop?.stop === stop
);

const data = reactive({
  title: computed(() => `Bus Line: ${store.state.selectedLine.line}`),
  sortable: computed(() => store.state.selectedLine.stops),
  select: selectStop,
  isReady: computed(() => Boolean(store.state.selectedLine.line)),
});

const changeOrder = () => store.state.selectedLine.stops.changeOrder();
</script>

<style lang="scss" scoped>
.sort-button {
  padding: 0.25rem;
  cursor: pointer;
}
.icon {
  color: #9a9da4;
}
</style>
