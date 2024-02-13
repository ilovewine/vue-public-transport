<template>
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    class="svg"
  >
    <rect
      width="100%"
      height="100%"
      fill="none"
      stroke-width="4"
      stroke-dasharray="30,40"
      stroke-dashoffset="0"
      stroke-linecap="round"
      class="rectangle"
    />
  </svg>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
$border-radius: var(--bs-border-radius);
.svg {
  border-radius: $border-radius;
}
.rectangle {
  stroke: #9a9da4;
  rx: $border-radius;
  ry: $border-radius;
}
</style>
