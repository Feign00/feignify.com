<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursorDot = ref(null)
const isHovering = ref(false)
const isClicking = ref(false)
const isVisible = ref(false)
const particles = ref([])

// Mouse position
let mouseX = 0
let mouseY = 0

// Current position for interpolation
let dotX = 0
let dotY = 0

// Particle settings
const MAX_PARTICLES = 20
const PARTICLE_LIFE = 1.0 // seconds

const createParticle = (x, y) => {
  const angle = Math.random() * Math.PI * 2
  const speed = Math.random() * 0.5 + 0.2
  const size = Math.random() * 4 + 2
  
  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    life: 1.0,
    size,
    color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)` // Cyan to Blue range
  }
}

const onMouseMove = (e) => {
  const prevX = mouseX
  const prevY = mouseY
  
  mouseX = e.clientX
  mouseY = e.clientY
  
  if (!isVisible.value) isVisible.value = true

  // Spawn particles based on distance moved to avoid clumping when still
  const dist = Math.hypot(mouseX - prevX, mouseY - prevY)
  if (dist > 2) {
    particles.value.push(createParticle(mouseX, mouseY))
    // Cap number of particles
    if (particles.value.length > MAX_PARTICLES) {
      particles.value.shift()
    }
  }
}

const onMouseDown = () => {
  isClicking.value = true
}

const onMouseUp = () => {
  isClicking.value = false
}

const onMouseEnter = (e) => {
  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
    isHovering.value = true
  }
}

const onMouseLeave = (e) => {
  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
    isHovering.value = false
  }
}

// Animation loop
const animate = () => {
  // Lerp factor
  const dotFactor = 1 // Instant

  dotX += (mouseX - dotX) * dotFactor
  dotY += (mouseY - dotY) * dotFactor

  if (cursorDot.value) {
    cursorDot.value.style.transform = `translate(${dotX}px, ${dotY}px) scale(${isClicking.value ? 0.8 : 1})`
  }
  
  // Update particles
  for (let i = particles.value.length - 1; i >= 0; i--) {
    const p = particles.value[i]
    p.x += p.vx
    p.y += p.vy
    p.life -= 0.02
    
    if (p.life <= 0) {
      particles.value.splice(i, 1)
    }
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  // Check for touch device
  if (window.matchMedia('(pointer: coarse)').matches) {
    return
  }

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mousedown', onMouseDown)
  document.addEventListener('mouseup', onMouseUp)
  
  // Use event delegation for hover effects
  document.addEventListener('mouseover', onMouseEnter)
  document.addEventListener('mouseout', onMouseLeave)

  requestAnimationFrame(animate)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mousedown', onMouseDown)
  document.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('mouseover', onMouseEnter)
  document.removeEventListener('mouseout', onMouseLeave)
})
</script>

<template>
  <div class="custom-cursor-wrapper">
    <div 
      v-for="(p, index) in particles" 
      :key="index"
      class="cursor-particle"
      :style="{
        left: p.x + 'px',
        top: p.y + 'px',
        width: p.size + 'px',
        height: p.size + 'px',
        opacity: p.life,
        backgroundColor: p.color
      }"
    ></div>
    <div ref="cursorDot" class="cursor-dot" :class="{ 'is-hovering': isHovering }"></div>
  </div>
</template>

<style scoped>
.custom-cursor-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.cursor-dot {
  position: absolute;
  top: -4px; /* Center offset (width/2) */
  left: -4px;
  width: 8px;
  height: 8px;
  background-color: #000;
  border-radius: 50%;
  will-change: transform;
  transition: background-color 0.2s;
}

.cursor-particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
}

.cursor-dot.is-hovering {
  background-color: rgba(255, 100, 100, 0.8);
}

/* Hide default cursor when this component is active */
:global(body) {
  cursor: none;
}

:global(a), :global(button) {
  cursor: none;
}

@media (pointer: coarse) {
  .custom-cursor-wrapper {
    display: none;
  }
  :global(body) {
    cursor: auto;
  }
  :global(a), :global(button) {
    cursor: pointer;
  }
}
</style>
