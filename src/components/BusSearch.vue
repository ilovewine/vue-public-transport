<template>
  <div>
    <input type="text" role="search" placeholder="Search..." v-model="model" />
  </div>
</template>

<script lang="ts" setup>
const model = defineModel<string>({ default: '' });
</script>

<style lang="scss" scoped></style>
