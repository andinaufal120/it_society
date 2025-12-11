<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="w-full text-center shadow-lg md:w-52 lg:w-72">
    <header
      :class="`flex flex-col items-center gap-2 bg-${content.cardColor} pt-4 pb-10`"
    >
      <div class="rounded-full bg-white p-2">
        <div v-html="content.svg"></div>
      </div>
      <h4>{{ content.title }}</h4>
    </header>
    <section class="card-content">
      <p>{{ content.description }}</p>
      <p :class="`card-label text-${content.labelColor}`">
        {{ content.label }}
      </p>
    </section>
  </div>
</template>
