<script setup>
defineProps({
  photo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="photo-card">
    <div class="photo-card__image-wrapper">
      <img :src="photo.url" :alt="photo.caption" class="photo-card__image" loading="lazy" />
    </div>
    <div class="photo-card__content">
      <p class="photo-card__caption">{{ photo.caption }}</p>
    </div>
  </div>
</template>

<style scoped>
.photo-card {
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.photo-card:hover {
  transform: translateY(-5px);
}

.photo-card__image-wrapper {
  aspect-ratio: 4/3;
  overflow: hidden;
}

.photo-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.photo-card:hover .photo-card__image {
  transform: scale(1.05);
}

.photo-card__content {
  padding: 1rem;
}

.photo-card__caption {
  font-weight: 500;
  color: var(--color-text);
}
</style>
