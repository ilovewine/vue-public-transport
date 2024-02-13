<template>
  <div class="app-content pt-7 container-fluid">
    <header class="row mb-3">
      <div class="col-12">
        <h1 class="title mb-5">Timetable</h1>
      </div>
      <div class="col-12 bg-white rounded">
        <bus-navigation />
      </div>
    </header>
    <main class="flex-grow-1 my-7 mx-6">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script lang="ts" setup>
import BusNavigation from '@/components/common/BusNavigation.vue';

import useStore from './store';
import { ACTION } from './store/actions';

const store = useStore();

store.dispatch(ACTION.INITIALIZE_DATA);
</script>

<style lang="scss" scoped>
.app-content {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
