<template>
  <button type="button" class="btn btn-primary px-3 py-1">{{ number }}</button>
</template>

<script lang="ts" setup>
interface BusLineProps {
  number: number;
}

defineProps<BusLineProps>();
</script>

<style lang="scss" scoped></style>
