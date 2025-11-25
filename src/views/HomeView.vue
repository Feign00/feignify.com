<script setup>
import InteractiveMap from '../components/InteractiveMap.vue'
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="container hero__container">
        <h1 class="hero__title">Explore the World with Me</h1>
        <p class="hero__subtitle">Documenting my journey across the globe, one photo at a time.</p>
        <RouterLink to="/gallery" class="btn hero__cta">View Gallery</RouterLink>
      </div>
    </section>

    <section class="featured-map container">
      <h2 class="section-title">Where I've Been</h2>
      <div class="map-wrapper">
        <InteractiveMap />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  color: white;
  margin-bottom: 4rem;
}

.hero__container {
  text-align: center;
}

.hero__title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.hero__subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.map-wrapper {
  height: 500px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}

.featured-map {
  margin-bottom: 4rem;
}
</style>
