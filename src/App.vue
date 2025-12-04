<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="bg-floral-white pt-16">
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
</template>
