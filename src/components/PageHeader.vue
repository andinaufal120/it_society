<script setup>
defineProps({
  subHeading: String,
  image: URL,
  imageAlt: String,
});
</script>

<template>
  <div class="section-wrapper grid grid-cols-1 gap-12 md:grid-cols-2">
    <div class="grid grid-cols-1 gap-8">
      <!-- Hero Text -->
      <div class="flex flex-col gap-8 text-center md:text-left">
        <h1>
          <!-- HTML injection from parent -->
          <slot name="heading"></slot>
        </h1>
        <p class="">{{ subHeading }}</p>
      </div>
    </div>
    <div v-if="image" class="hidden justify-end md:flex">
      <img
        class="md:h-lg w-sm rounded-3xl md:w-lg"
        :src="image"
        :alt="imageAlt"
      />
    </div>
  </div>
</template>
