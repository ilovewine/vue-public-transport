<template>
  <bus-data-list @select="selectStop" v-bind="data" interactive>
    <template #header>
      <h2 class="mb-6">{{ data.title }}</h2>
      <bus-stop-list-header @sort="changeOrder" />
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
import BusListItem from '@/components/list/elements/BusListItem.vue';
import BusStopListHeader from '@/components/list/elements/BusStopListHeader.vue';
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
