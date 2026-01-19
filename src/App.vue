<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Index from './components/Index.vue'
</script>

<template>
  <div class="app-container">
    <Navbar />

    <main>
      <router-view />
    </main>
    

    <Footer/>
  </div>
</template>

<style>
/* CSS Global (Dùng chung toàn app) */
:root {
  --brand-blue: #2D5BFF;
}
.btn-primary {
  background-color: var(--brand-blue);
  border-color: var(--brand-blue);
}
.text-brand-blue {
  color: var(--brand-blue);
}
html {
  scroll-behavior: smooth;
}
</style>