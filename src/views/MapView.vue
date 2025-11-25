<script setup>
import InteractiveMap from '../components/InteractiveMap.vue'
</script>

<template>
  <div class="map-page">
    <div class="container">
      <h1 class="section-title">My Travel Map</h1>
      <div class="map-wrapper">
        <InteractiveMap />
      </div>
    </div>
  </div>
</template>

<style scoped>
.map-page {
  padding: 2rem 0;
}

.map-wrapper {
  height: 70vh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}
</style>
