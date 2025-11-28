<script setup>
import { ref } from "vue";
const isOpen = ref(false);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
];
</script>

<template>
  <nav
    class="fixed top-0 right-0 left-0 z-50 flex w-full flex-row items-center justify-between bg-apricot-cream px-5 py-4 shadow-sm"
  >
    <div>
      <a href="/"
        ><img
          class="min-h-[46px] min-w-[161px]"
          src="@/assets/itsociety_wordmark.svg"
          alt="Wordmark"
          width="161"
          height="46"
      /></a>
    </div>

    <div class="hidden flex-row items-center gap-8 md:flex">
      <!-- Desktop links -->
      <div>
        <ul class="flex flex-row gap-6 font-medium text-black" role="list">
          <li v-for="link in navLinks" :key="link.href">
            <a class="navbar-link" :href="link.href">{{ link.name }}</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="#">
          <button
            class="transform rounded-lg bg-black px-4 py-2 font-bold text-white transition hover:cursor-pointer hover:bg-white hover:text-black hover:shadow-lg hover:shadow-black/5"
          >
            Join Now
          </button>
        </a>
      </div>
    </div>

    <!-- Mobile hamburger -->
    <button
      class="flex items-center md:hidden"
      @click="isOpen = !isOpen"
      :aria-expanded="isOpen"
      aria-label="Toggle navigation"
    >
      <!-- Hamburger -->
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 rounded-4xl p-2 text-black transition hover:bg-neutral-300 hover:text-brick-ember"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <!-- Close -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 rounded-4xl p-2 text-black transition hover:bg-neutral-300 hover:text-brick-ember"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Mobile nav (vertical) -->
    <div v-if="isOpen" class="w-full bg-apricot-cream px-6 py-4 md:hidden">
      <ul class="flex flex-col gap-4 font-medium text-black" role="list">
        <li v-for="link in navLinks" :key="link.href">
          <a class="navbar-link" :href="link.href">{{ link.name }}</a>
        </li>
      </ul>

      <div class="mt-4">
        <a href="#">
          <button
            class="w-full transform rounded-lg bg-black px-4 py-2 font-bold text-white transition hover:cursor-pointer hover:bg-white hover:text-black hover:shadow-lg hover:shadow-black/5"
          >
            Join Now
          </button>
        </a>
      </div>
    </div>
  </nav>
</template>
