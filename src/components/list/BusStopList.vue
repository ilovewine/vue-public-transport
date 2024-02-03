<template>
  <bus-data-list @select="selectStop" v-bind="data" interactive>
    <template #header>
      <h2 class="my-4">{{ data.title }}</h2>
      <div class="d-flex gap-1 align-items-center mb-3" @click="onClick">
        <h3 class="m-0">Bus Stops</h3>
        <sort-icon class="icon" />
      </div>
    </template>
    <template #default="{ label }">
      <bus-list-item :label="label" :active="active(label)" interactive />
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
  list: computed(() =>
    store.state.selectedLine?.stops.map((stopData) => stopData.stop)
  ),
  select: selectStop,
  isReady: computed(() => Boolean(store.state.selectedLine)),
});

const onClick = () => console.log('test');
</script>

<style lang="scss" scoped>
.icon {
  color: #9a9da4;
}
</style>
