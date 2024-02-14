<template>
  <component
    data-test="list-item"
    :class="{ active }"
    class="text-decoration-none fs-3"
    :is="interactive ? 'a' : 'span'"
  >
    {{ label }}
  </component>
</template>

<script lang="ts" setup>
interface BusListItemProps {
  active?: boolean;
  label: string;
  interactive?: boolean;
}

defineProps<BusListItemProps>();
</script>

<style lang="scss" scoped>
.text-decoration-none {
  color: unset;
  &.active {
    color: var(--bs-primary);
  }
}
</style>
