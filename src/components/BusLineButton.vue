<template>
  <button type="button" class="primary">{{ line }}</button>
</template>

<script lang="ts" setup>
interface BusLineProps {
  line: number;
}

defineProps<BusLineProps>();
</script>

<style lang="scss" scoped></style>
