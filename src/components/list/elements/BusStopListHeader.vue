<template>
  <div class="d-flex align-items-center mb-5">
    <h3 class="m-0">Bus Stops</h3>
    <div class="sort-button d-inline-flex" @click="emit('sort')">
      <sort-icon data-test="sort-icon" class="icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortIcon from '@/assets/SortIcon.vue';

const emit = defineEmits<{
  sort: [void];
}>();
</script>

<style lang="scss" scoped>
.sort-button {
  padding: 0.25rem;
  cursor: pointer;
}
.icon {
  color: #9a9da4;
}
</style>
