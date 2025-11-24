<script setup>
defineProps({
  content: Object,
});
</script>

<template>
  <div class="overflow-hidden rounded-xl bg-white shadow-md">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img
          class="h-60 w-full object-cover md:h-full md:w-60"
          :src="`/src/assets/${content.thumbnail}`"
          :alt="content.thumbnailAlt"
        />
      </div>
      <div class="flex flex-col gap-4 p-8">
        <h3>{{ content.title }}</h3>
        <p class="text-gray-500">{{ content.description }}</p>
        <div>
          <a :href="`${content.link}`"
            ><button
              class="mt-2 transform rounded-lg bg-black px-4 py-2 font-bold text-white transition hover:cursor-pointer hover:opacity-80 hover:shadow-lg hover:shadow-black/5"
            >
              Learn more →
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
