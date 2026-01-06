<script setup>
import { ref, computed } from 'vue'
import { photos, regions } from '../data/travelData'
import PhotoCard from '../components/PhotoCard.vue'

const selectedRegion = ref('all')

const filteredPhotos = computed(() => {
  if (selectedRegion.value === 'all') {
    return photos
  }
  return photos.filter(photo => photo.regionId === selectedRegion.value)
})
</script>

<template>
  <div class="gallery-page container">
    <h1 class="section-title">Photo Gallery</h1>

    <div class="filters">
      <button 
        class="filter-btn" 
        :class="{ active: selectedRegion === 'all' }"
        @click="selectedRegion = 'all'"
      >
        All
      </button>
      <button 
        v-for="region in regions" 
        :key="region.id"
        class="filter-btn"
        :class="{ active: selectedRegion === region.id }"
        @click="selectedRegion = region.id"
      >
        {{ region.name }}
      </button>
    </div>

    <div class="photo-grid">
      <PhotoCard v-for="photo in filteredPhotos" :key="photo.id" :photo="photo" />
    </div>
  </div>
</template>

<style scoped>
.gallery-page {
  padding: 2rem 1rem;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary);
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background-color: var(--color-primary);
  color: white;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
