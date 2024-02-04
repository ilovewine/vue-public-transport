<template>
  <svg viewBox="0 0 102 102" preserveAspectRatio="none" class="svg">
    <rect
      width="100%"
      height="100%"
      stroke-dasharray="5, 5"
      stroke-width="0.7"
      fill="none"
    />
  </svg>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.svg {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  rect {
    stroke: #9a9da4;
    $radius: $border-radius / 3;
    rx: $radius;
    ry: $radius;
  }
}
</style>
