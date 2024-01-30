<template>
  <div class="container-fluid m-3">
    <header class="row">
      <div class="col-12">
        <h1>Timetable</h1>
      </div>
      <div class="col-12">
        <nav class="navbar navbar-expand-md">
          <router-link to="/lines">Bus Lines</router-link>
          <router-link to="/stops">Bus Stops</router-link>
        </nav>
      </div>
    </header>
    <main class="row">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use 'scss';
</style>
