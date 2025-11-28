<script setup>
defineProps({
  content: Object,
});
</script>

<template>
  <div class="card-thumbnail">
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
            ><button class="btn-primary">Learn more →</button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
