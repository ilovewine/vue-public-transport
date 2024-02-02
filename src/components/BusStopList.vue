<template>
  <bus-data-list
    @select="selectStop"
    enable-sort
    label="Bus Stops"
    v-bind="data"
    interactive
  >
    <template #default="{ label }">
      <bus-list-item :label="label" :active="active(label)" interactive />
    </template>
  </bus-data-list>
</template>

<script lang="ts" setup>
import BusDataList from '@/components/common/BusDataList.vue';
import BusListItem from '@/components/common/BusListItem.vue';
import useStore from '@/store';
import { MUTATION } from '@/store/mutations';
import { computed, reactive } from 'vue';

interface BusStopListProps {
  enableSearch?: boolean;
}

const props = defineProps<BusStopListProps>();

const store = useStore();

const selectStop = (stop: string) => {
  const stopData = store.state.selectedLine?.stops.find(
    (stopData) => stopData.stop === stop
  );
  store.commit(MUTATION.SET_CURRENT_STOP, stopData);
};

const active = computed(
  () => (stop: string) => store.state.selectedStop?.stop === stop
);

const data = reactive({
  title: computed(() => `Bus Line: ${store.state.selectedLine?.line}`),
  enableSearch: props.enableSearch,
  list: computed(() =>
    store.state.selectedLine?.stops.map((stopData) => stopData.stop)
  ),
  select: selectStop,
  isReady: computed(() => Boolean(store.state.selectedLine)),
});
</script>

<style lang="scss" scoped></style>
