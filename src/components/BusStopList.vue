<template>
  <bus-data-list v-bind="data" />
</template>

<script lang="ts" setup>
import BusDataList from '@/components/common/BusDataList.vue';
import useStore from '@/store';
import { reactive } from 'vue';

interface BusStopListProps {
  enableSearch?: boolean;
}

const props = defineProps<BusStopListProps>();

const store = useStore();

const data = reactive({
  title: `Bus Line: ${store.state.selectedLine}`,
  label: 'Bus Stops',
  enableSearch: props.enableSearch,
  enableSort: true,
  list: store.state.stops.slice(0, 3),
});
</script>

<style lang="scss" scoped></style>
