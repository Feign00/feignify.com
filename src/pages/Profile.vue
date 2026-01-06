<template>
  <div class="about-page container">
    <h1 class="section-title">About Me</h1>
    <div class="about-content">
      <div class="about-image">
        <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop" alt="Traveler" />
      </div>
      <div class="about-text">
        <p>
          Hello everyone, I'm Feign — a backend developer who loves programming and traveling. I have a deep fascination with the customs and cultures of different places around the world. Because of this, I've always had a dream: to travel around the world, visit every place I want to see, and experience the beauty brought by diverse cultures and landscapes.
        </p>
        <p>
          Professionally, I focus on backend development and am dedicated to building stable and efficient system architectures. Currently, I hope to participate in, or independently develop, a game that can bring joy and entertainment to players. With technology and creativity, I want to create an experience that makes people happy. Perhaps one day, my game will accompany many players through countless enjoyable moments, and in this process, I hope to continue improving my programming skills and teamwork experience.
        </p>
        <p>
          This website is a space where I document my journey and share updates on my projects. Whenever I visit a new city or make progress on development, I will update it here: from cozy cafés in narrow streets to magnificent mountains and lakes; from backend architectural ideas to every iteration of game features — all of these will leave a trace on this page.
        </p>
        <p>
          I hope that in the days to come, you can follow my footsteps and witness both my journey around the world and the realization of my programming dreams. Feel free to visit anytime, and I look forward to chatting with you in the comment section, sharing more interesting stories together!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding: 2rem 1rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.about-image img {
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.about-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}
</style>
