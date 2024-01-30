<template>
  <div class="container-fluid">
    <header class="row mb-4">
      <div class="col-12">
        <h1 class="mb-5">Timetable</h1>
      </div>
      <div class="col-12 bg-white">
        <bus-navigation />
      </div>
    </header>
    <main class="row">
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
</script>

<style lang="scss" scoped></style>
