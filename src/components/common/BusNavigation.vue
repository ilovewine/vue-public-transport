<template>
  <nav role="navigation" class="nav nav-underline">
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      :class="{ active: unref(active(route.path)) }"
      class="nav-link px-4 router-link"
      >{{ route.name }}</router-link
    >
  </nav>
</template>

<script lang="ts" setup>
import { computed, unref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const routes = router.getRoutes().filter((route) => !route.redirect);
const active = (to: string) => computed(() => to === route.path);
</script>

<style lang="scss" scoped>
.nav-underline {
  .nav-link {
    &.active {
      color: $nav-link-hover-color;
      border-color: $nav-underline-link-active-color;
      font-weight: $nav-link-font-weight;
    }
  }
}
</style>
