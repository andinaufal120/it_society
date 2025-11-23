<script setup>
defineProps({
  subHeading: String,
});
</script>

<template>
  <div class="items-center px-5 py-24 md:px-36 lg:px-72">
    <div class="grid grid-cols-1 gap-8">
      <!-- Hero Text -->
      <div class="grid grid-cols-1 gap-8">
        <h1>
          <!-- HTML injection from parent -->
          <slot name="heading"></slot>
        </h1>
        <p>{{ subHeading }}</p>
      </div>
    </div>
  </div>
</template>
