<template>
  <bus-data-list label="Time" v-bind="data" />
</template>

<script lang="ts" setup>
import BusDataList from '@/components/common/BusDataList.vue';
import { computed, reactive } from 'vue';
import useStore from '@/store';

const store = useStore();

const data = reactive({
  title: computed(() => `Bus Stop: ${store.state.selectedStop?.stop}`),
  list: computed(() => store.state.selectedStop?.timetable),
  isReady: computed(() => Boolean(store.state.selectedStop)),
});
</script>

<style lang="scss" scoped></style>
