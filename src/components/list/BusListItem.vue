<template>
  <component
    data-test="list-item"
    :class="{ active }"
    class="text-decoration-none"
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
    // color: #1952e1;
  }
}
</style>
