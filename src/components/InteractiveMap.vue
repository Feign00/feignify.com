<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { regions } from '../data/travelData'

// Fix for Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png'
})

const mapContainer = ref(null)
const router = useRouter()

onMounted(() => {
  const map = L.map(mapContainer.value, {
    attributionControl: false
  }).setView([20, 0], 2)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

  regions.forEach(region => {
    const marker = L.marker(region.coordinates)
      .addTo(map)
      .bindTooltip(region.name, {
        permanent: false,
        direction: 'top'
      })
    
    marker.on('click', () => {
      router.push({ name: 'region', params: { id: region.id } })
    })
  })
})
</script>

<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
  min-height: 500px;
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 1;
}
</style>
