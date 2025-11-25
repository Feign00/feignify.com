<template>
  <footer class="footer">
    <div class="container footer__container">
      <p>&copy; {{ new Date().getFullYear() }} Feign. All rights reserved.</p>
      <p class="icp-info">
        <a href="https://beian.miit.gov.cn/" target="_blank">陇ICP备2025016955号</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-text);
  color: white;
  padding: 2rem 0;
  margin-top: auto;
}

.footer__container {
  text-align: center;
}

.icp-info {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.icp-info a {
  color: gray;
  text-decoration: none;
  transition: color 0.3s ease;
}

.icp-info a:hover {
  color: var(--color-primary);
}
</style>
