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
          class="h-48 w-full object-cover md:h-full md:w-48"
          :src="`/src/assets/${content.thumbnail}`"
          :alt="content.thumbnailAlt"
        />
      </div>
      <div class="p-8">
        <a
          href="#"
          class="mt-1 block font-serif text-lg leading-tight font-medium text-black hover:underline"
          ><h3>{{ content.title }}</h3></a
        >
        <p class="mt-2 font-serif text-gray-500">{{ content.description }}</p>
      </div>
    </div>
  </div>
</template>
