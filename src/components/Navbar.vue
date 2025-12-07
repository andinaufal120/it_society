<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const isOpen = ref(false);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
];
</script>

<template>
  <nav
    class="bg-floral-white fixed top-0 right-0 left-0 z-50 flex w-full flex-row items-center justify-between px-8 py-5 md:px-24"
  >
    <div>
      <RouterLink to="/">
        <img
          class="min-w-32 md:min-w-36"
          src="@/assets/itsociety_wordmark.svg"
          alt="Wordmark"
        />
      </RouterLink>
    </div>

    <div class="hidden flex-row items-center gap-8 md:flex">
      <!-- Desktop links -->
      <div>
        <ul class="flex flex-row gap-6 font-medium text-black" role="list">
          <li v-for="link in navLinks" :key="link.href">
            <RouterLink class="navbar-link" :to="link.href">
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <RouterLink to="/join">
          <button class="btn-primary">Join Now</button>
        </RouterLink>
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
        class="hover:text-brick-ember h-10 w-10 rounded-4xl p-2 text-black transition hover:bg-neutral-300"
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
        class="hover:text-brick-ember h-10 w-10 rounded-4xl p-2 text-black transition hover:bg-neutral-300"
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
    <div
      v-if="isOpen"
      class="bg-apricot-cream w-full rounded-xl px-6 py-4 md:hidden"
    >
      <ul class="flex flex-col gap-4 font-medium text-black" role="list">
        <li v-for="link in navLinks" :key="link.href">
          <RouterLink class="navbar-link" :to="link.href">{{
            link.name
          }}</RouterLink>
        </li>
      </ul>

      <div class="mt-4">
        <RouterLink to="/join">
          <button class="btn-primary">Join Now</button>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
