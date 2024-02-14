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
  border: 1px solid #e2e4ea;
  &:focus-within {
    border-color: #1952e1;
    .icon {
      color: #1952e1;
    }
  }
}
.input {
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #9a9da4;
  }
}
.icon {
  color: #9a9da4;
}
</style>
