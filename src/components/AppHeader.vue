<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <RouterLink to="/" class="header__logo">TravelLog</RouterLink>
      <nav class="header__nav">
        <ul class="header__menu">
          <li><RouterLink to="/" class="header__link" v-scramble>Home</RouterLink></li>
          <li><RouterLink to="/map" class="header__link" v-scramble>Map</RouterLink></li>
          <li><RouterLink to="/gallery" class="header__link" v-scramble>Gallery</RouterLink></li>
          <li><RouterLink to="/about" class="header__link" v-scramble>About</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: var(--header-height);
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.header__logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary);
}

.header__menu {
  display: flex;
  gap: 2rem;
}

.header__link {
  font-weight: 500;
  color: var(--color-text);
}

.header__link:hover,
.header__link.router-link-active {
  color: var(--color-primary);
}
</style>
