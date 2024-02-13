<template>
  <div class="input-group">
    <input
      data-test="input"
      class="input"
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
  position: relative;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e4ea;
  border-radius: var(--bs-border-radius);
  display: inline-flex;
  align-items: center;
  &:focus-within {
    border-color: #1952e1;
    .icon {
      color: #1952e1;
    }
  }
}
.input {
  border: none;
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
