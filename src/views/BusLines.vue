<template>
  <div class="row">
    <div class="col-12 mb-3">
      <bus-line-picker />
    </div>

    <div class="col-12">
      <bus-line-preview />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BusLinePicker from '@/modules/bus-lines/BusLinePicker.vue';
import BusLinePreview from '@/modules/bus-lines/BusLinePreview.vue';
</script>

<style lang="scss" scoped></style>
