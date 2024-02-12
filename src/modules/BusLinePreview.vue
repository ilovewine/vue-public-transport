<template>
  <div class="row gap-3 pb-3">
    <div class="col px-0 position-relative">
      <bus-stop-list data-test="bus-stop-list" />
    </div>

    <div class="col px-0 position-relative">
      <bus-time-list data-test="bus-time-list" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BusStopList from '@/components/list/BusStopList.vue';
import BusTimeList from '@/components/list/BusTimeList.vue';
</script>

<style lang="scss" scoped></style>
