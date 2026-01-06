<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import CustomCursor from './components/CustomCursor.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-900">
    <CustomCursor />
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
