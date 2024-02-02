<template>
  <div class="row py-4 bg-white rounded">
    <div class="col-12">
      <h2 class="mb-4">Select Bus Line</h2>
    </div>
    <div class="col-12 d-flex flex-wrap bus-lines">
      <bus-line-button
        v-for="line in lines"
        :key="line.line"
        :number="line.line"
        :active="isLineSelected(line)"
        @click="setBusLine(line)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BusLineButton from '@/components/BusLineButton.vue';
import { BusLineModel } from '@/model/BusLine';
import useStore from '@/store';
import { computed } from 'vue';
import { GETTER } from '@/store/getters';
import { ACTION } from '@/store/actions';

const store = useStore();

const lines = computed(() => store.state.lines);

const isLineSelected = computed(
  () => (line: BusLineModel) => store.getters[GETTER.IS_LINE_SELECTED](line)
);

const setBusLine = (line: BusLineModel) => {
  if (store.getters[GETTER.IS_LINE_SELECTED](line))
    store.dispatch(ACTION.SELECT_LINE, null);
  else store.dispatch(ACTION.SELECT_LINE, line);
};
</script>

<style lang="scss" scoped>
.bus-lines {
  gap: 0.5rem;
}
</style>
