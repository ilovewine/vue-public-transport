<template>
  <div class="col-12 bg-white container-fluid mb-4">
    <div class="row">
      <div class="col-12">
        <h2>Select Bus Line</h2>
      </div>
      <div class="col-12 d-flex bus-lines">
        <bus-line-button
          v-for="line in lines"
          :key="line.id"
          :number="line.line"
        />
      </div>
    </div>
  </div>

  <div class="col-12 bg-white"></div>
</template>

<script lang="ts" setup>
import BusLineButton from '@/components/BusLineButton.vue';

const lines = [
  {
    line: 1,
    id: 1,
  },
  {
    line: 2,
    id: 2,
  },
];
</script>

<style lang="scss" scoped>
.bus-lines {
  gap: 1rem;
}
</style>
