<template>
  <div class="row gap-3">
    <div class="col bg-white rounded">
      <bus-stop-list />
    </div>

    <div class="col bg-white rounded">
      <bus-time-list />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BusStopList from '@/components/BusStopList.vue';
import BusTimeList from '@/components/BusTimeList.vue';
</script>

<style lang="scss" scoped></style>
