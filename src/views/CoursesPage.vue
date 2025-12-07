<script setup>
import PageHeader from "@/components/PageHeader.vue";
import Card from "@/components/Card.vue";
import courses from "@/assets/data/courses";
</script>

<template>
  <section>
    <PageHeader
      subHeading="Some loves to find something hidden, some loves to connect the wire, some don't know what they love to do. Let's see through all our courses to see what you might love the most."
    >
      <template #heading>
        Let's see what<br /><span class="text-brick-ember">you're in</span> to.
      </template>
    </PageHeader>

    <div
      class="bg-space-indigo grid grid-cols-1 gap-8 px-5 py-16 md:px-36 lg:px-72"
    >
      <div class="section-header">
        <h2 class="text-white">Our Courses</h2>
        <p class="text-white">
          Explore our diverse range of courses designed to equip you with the
          skills and knowledge needed to excel in the IT industry.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-8">
        <ul class="grid grid-cols-1 gap-8" role="list">
          <li v-for="content in courses" :key="content.title" class="list-none">
            <Card :content="content" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
