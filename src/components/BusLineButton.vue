<template>
  <button
    type="button"
    class="btn btn-primary px-3 py-1 fs-3 fw-medium"
    :class="{ active }"
  >
    {{ number }}
  </button>
</template>

<script lang="ts" setup>
interface BusLineProps {
  number: number;
  active?: boolean;
}

defineProps<BusLineProps>();
</script>

<style lang="scss" scoped></style>
