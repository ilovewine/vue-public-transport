<template>
  <div class="d-flex flex-column h-100">
    <div class="mb-3">
      <bus-line-picker data-test="bus-line-picker" />
    </div>

    <div class="flex-grow-1 position-relative">
      <bus-line-preview class="preview" data-test="bus-line-preview" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BusLinePicker from '@/modules/BusLinePicker.vue';
import BusLinePreview from '@/modules/BusLinePreview.vue';
</script>

<style lang="scss" scoped>
.preview {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
}
</style>
