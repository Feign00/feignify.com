<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { regions, photos } from '../data/travelData'
import PhotoCard from '../components/PhotoCard.vue'

const route = useRoute()
const regionId = route.params.id

const region = computed(() => regions.find(r => r.id === regionId))
const regionPhotos = computed(() => photos.filter(p => p.regionId === regionId))
</script>

<template>
  <div v-if="region" class="region-page">
    <div class="region-hero" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${region.coverImage})` }">
      <div class="container region-hero__content">
        <h1 class="region-hero__title">{{ region.name }}</h1>
      </div>
    </div>

    <div class="container region-content">
      <div class="region-description">
        <h2 class="section-title">About {{ region.name }}</h2>
        <p>{{ region.description }}</p>
      </div>

      <div class="region-gallery">
        <h2 class="section-title">Photos from {{ region.name }}</h2>
        <div class="photo-grid">
          <PhotoCard v-for="photo in regionPhotos" :key="photo.id" :photo="photo" />
        </div>
        <p v-if="regionPhotos.length === 0" class="no-photos">No photos added yet.</p>
      </div>
    </div>
  </div>
  <div v-else class="container not-found">
    <h1>Region not found</h1>
    <RouterLink to="/map" class="btn">Back to Map</RouterLink>
  </div>
</template>

<style scoped>
.region-hero {
  height: 50vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 3rem;
}

.region-hero__title {
  font-size: 4rem;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.region-content {
  padding-bottom: 4rem;
}

.region-description {
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
  font-size: 1.2rem;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.no-photos {
  text-align: center;
  color: var(--color-text-light);
}

.not-found {
  padding: 4rem 0;
  text-align: center;
}
</style>
