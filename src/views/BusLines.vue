<template>
  <div class="d-flex flex-column h-100">
    <div class="mb-3">
      <bus-line-picker />
    </div>

    <div class="flex-grow-1 position-relative">
      <bus-line-preview class="preview" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BusLinePicker from '@/modules/bus-lines/BusLinePicker.vue';
import BusLinePreview from '@/modules/bus-lines/BusLinePreview.vue';
</script>

<style lang="scss" scoped>
.preview {
  position: absolute;
  left: 0;
  bottom: 1rem;
  right: 0;
  height: calc(100% - 1rem);
}
</style>
