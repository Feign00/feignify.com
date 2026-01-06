<script setup>
import InteractiveMap from '../components/InteractiveMap.vue'
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center text-white mb-16 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
          alt="Travel Background" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-4 text-center z-10 relative">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md tracking-tight">Explore the World with Me</h1>
        <p class="text-lg md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
          Documenting my journey across the globe, one photo at a time.
        </p>
        <RouterLink 
          to="/gallery" 
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
        >
          View Gallery
        </RouterLink>
      </div>
    </section>

    <!-- Interactive Map Section -->
    <section class="container mx-auto px-4 mb-20">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-800 relative inline-block">
          Where I've Been
          <span class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"></span>
        </h2>
      </div>
      
      <div class="h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
        <InteractiveMap />
      </div>
    </section>
  </div>
</template>
