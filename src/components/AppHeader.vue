<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="sticky top-0 z-50 h-16 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
    <div class="container mx-auto h-full flex items-center justify-between px-4">
      <RouterLink to="/" class="text-2xl font-extrabold text-blue-600 tracking-tight hover:opacity-80 transition-opacity">
        TravelLog
      </RouterLink>
      <nav>
        <ul class="flex gap-8 items-center">
          <li>
            <RouterLink to="/" class="font-medium text-gray-700 hover:text-blue-600 transition-colors relative group" active-class="text-blue-600" v-scramble>
              Home
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/map" class="font-medium text-gray-700 hover:text-blue-600 transition-colors relative group" active-class="text-blue-600" v-scramble>
              Map
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/gallery" class="font-medium text-gray-700 hover:text-blue-600 transition-colors relative group" active-class="text-blue-600" v-scramble>
              Gallery
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/logs" class="font-medium text-gray-700 hover:text-blue-600 transition-colors relative group" active-class="text-blue-600" v-scramble>
              Logs
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/profile" class="font-medium text-gray-700 hover:text-blue-600 transition-colors relative group" active-class="text-blue-600" v-scramble>
              Profile
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
