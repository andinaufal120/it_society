<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="section-wrapper">
    <header class="section-header">
      <div class="relative h-96 w-full overflow-hidden rounded-xl">
        <img
          class="h-full w-full object-cover"
          :src="content.thumbnail"
          :alt="content.thumbnailAlt"
        />
        <div
          class="absolute bottom-0 left-0 h-full w-full content-center bg-black/40 text-center text-3xl font-bold text-white"
        >
          <h1 class="font-inter text-white">{{ content.title }}</h1>
        </div>
      </div>
    </header>

    <div class="prose flex max-w-none flex-col gap-4">
      <div>
        <p class="text-sm text-gray-500">
          Published on
          {{
            new Date(content.publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </p>
      </div>
      <div v-html="content.content" class="space-y-4"></div>
    </div>
  </div>
</template>
