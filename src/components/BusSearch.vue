<template>
  <div
    class="input-group position-relative d-inline-flex align-items-center rounded py-2 px-3"
  >
    <input
      data-test="input"
      class="input fs-3 border-0"
      type="text"
      role="search"
      placeholder="Search..."
      v-model="model"
    />
    <search-icon class="icon" />
  </div>
</template>

<script lang="ts" setup>
import SearchIcon from '@/assets/SearchIcon.vue';

const model = defineModel<string>({ default: '' });
</script>

<style lang="scss" scoped>
.input-group {
  border: 1px solid var(--bs-gray-300);
  &:focus-within {
    border-color: var(--bs-primary);
    .icon {
      color: var(--bs-primary);
    }
  }
}
.input {
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--bs-gray-400);
  }
}
.icon {
  color: var(--bs-gray-400);
}
</style>
