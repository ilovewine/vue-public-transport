<template>
  <bus-data-list enable-sort label="Bus Stops" v-bind="data" />
</template>

<script lang="ts" setup>
import BusDataList from '@/components/common/BusDataList.vue';
import useStore from '@/store';
import { computed, reactive } from 'vue';

interface BusStopListProps {
  enableSearch?: boolean;
}

const props = defineProps<BusStopListProps>();

const store = useStore();

const data = reactive({
  title: computed(() => `Bus Line: ${store.state.selectedLine?.line}`),
  enableSearch: props.enableSearch,
  list: computed(() =>
    store.state.selectedLine?.stops.map((stopData) => stopData.stop)
  ),
  isReady: computed(() => Boolean(store.state.selectedLine)),
});
</script>

<style lang="scss" scoped></style>
