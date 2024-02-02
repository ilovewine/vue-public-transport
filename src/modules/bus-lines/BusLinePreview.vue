<template>
  <div class="row gap-3 pb-3">
    <div class="col px-0 position-relative">
      <bus-stop-list class="position-absolute w-100" />
    </div>

    <div class="col px-0 position-relative">
      <bus-time-list class="position-absolute w-100" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BusStopList from '@/components/list/BusStopList.vue';
import BusTimeList from '@/components/list/BusTimeList.vue';
</script>

<style lang="scss" scoped></style>
