<template>
  <div
    class="to-space-indigo relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-b from-black px-4"
  >
    <!-- Animated moving and twinkling stars -->
    <div class="absolute inset-0">
      <div
        v-for="n in 50"
        :key="n"
        class="bg-floral-white star-move absolute rounded-full"
        :style="starStyle(n)"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center">
      <div class="relative mb-8">
        <h1
          class="text-floral-white/10 text-[180px] leading-none font-bold select-none sm:text-[250px]"
        >
          404
        </h1>
        <div class="absolute inset-0 flex items-center justify-center">
          <p class="text-floral-white text-2xl font-semibold sm:text-3xl">
            Lost in space? 🚀
          </p>
        </div>
      </div>

      <p class="text-floral-white/80 mx-auto mb-12 max-w-md text-lg">
        This page seems to have wandered off into the void.
      </p>

      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <router-link
          to="/"
          class="bg-floral-white text-space-indigo inline-flex items-center rounded-md px-6 py-3 font-semibold transition hover:bg-[#ffcf99]"
        >
          <svg
            class="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Return to Earth
        </router-link>

        <button
          @click="goBack"
          class="text-floral-white ring-floral-white/30 hover:bg-floral-white/10 inline-flex items-center rounded-md bg-transparent px-6 py-3 font-semibold ring-1 transition ring-inset"
        >
          <svg
            class="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Go Back
        </button>
      </div>

      <div class="mt-12">
        <p class="text-floral-white/50 mb-4 text-sm">Quick links:</p>
        <div class="flex flex-wrap justify-center gap-3">
          <router-link
            to="/"
            class="text-floral-white text-sm underline transition hover:text-[#ffcf99]"
          >
            Home
          </router-link>
          <span class="text-floral-white/30">•</span>
          <router-link
            to="/join"
            class="text-floral-white text-sm underline transition hover:text-[#ffcf99]"
          >
            Register
          </router-link>
          <span class="text-floral-white/30">•</span>
          <router-link
            to="/about"
            class="text-floral-white text-sm underline transition hover:text-[#ffcf99]"
          >
            About
          </router-link>
        </div>
      </div>

      <div class="text-floral-white/30 mt-8 text-xs">
        Attempted to access:
        <code class="bg-floral-white/5 rounded px-2 py-1">{{
          attemptedUrl
        }}</code>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const attemptedUrl = computed(() => route.path);

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/");
  }
};

// Generate random star styles
const starStyle = (n) => {
  const size = Math.random() * 3 + 1;
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  const duration = Math.random() * 20 + 10;
  const delay = Math.random() * 5;

  return {
    width: size + "px",
    height: size + "px",
    left: startX + "%",
    top: startY + "%",
    animationDuration: duration + "s",
    animationDelay: delay + "s",
  };
};
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translate(10px, -10px) scale(1);
  }
  90% {
    opacity: 1;
    transform: translate(-10px, 10px) scale(1);
  }
  100% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
}

.star-move {
  animation: float infinite ease-in-out;
}
</style>
