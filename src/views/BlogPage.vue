<script setup>
import PageHeader from "@/components/PageHeader.vue";
import Card from "@/components/Card.vue";

import { blogs } from "@/assets/data/blogs/blogs";
</script>

<template>
  <PageHeader subHeading="Keep updated with the latest news and articles.">
    <template #heading>
      Welcome to our<br /><span class="text-brick-ember">Blog</span> Page.
    </template>
  </PageHeader>

  <section class="section-wrapper bg-space-indigo">
    <div class="section-header text-white">
      <h2>Recent Blogs</h2>
      <p class="text-white">
        Stay informed with our latest articles, insights, and updates from the
        IT world.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8">
      <ul class="grid grid-cols-1 gap-8" role="list">
        <li v-for="content in blogs" :key="content.title" class="list-none">
          <Card :content="content" />
        </li>
      </ul>
    </div>
  </section>
</template>
