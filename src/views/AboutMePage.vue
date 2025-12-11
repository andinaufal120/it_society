<script setup>
import PageHeader from "@/components/PageHeader.vue";
import CourseCard from "@/components/courses/CourseCard.vue";

import course_hero from "@/assets/images/hero/cloudcomp_course_hero.png";

const skills = [
  {
    computer_network: [
      {
        title: "Networking",
        description: "Saya bisa Computer Networking",
        label: "System Administration",
        svg: `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="green"
            class="size-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        `,
        cardColor: "green-200",
        labelColor: "green-800",
        link: "/courses/itnsa/networking-concepts",
      },
      {
        title: "Skill lagi",
        description: "Skill lain",
        label: "System Administration",
        svg: `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="green"
            class="size-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        `,
        cardColor: "green-200",
        labelColor: "green-800",
        link: "/courses/itnsa/networking-concepts",
      },
      {
        title: "Skill lagi lagi",
        description: "Lorem ipsum aja.",
        label: "System Administration",
        svg: `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="green"
            class="size-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        `,
        cardColor: "green-200",
        labelColor: "green-800",
        link: "/courses/itnsa/networking-concepts",
      },
    ],
    server_administration: [
      {
        title: "GitHub Actions",
        description: "Yang penting harus ada linting.",
        label: "Server Administration",
        svg: `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="red"
            class="size-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
            />
          </svg>
        `,
        cardColor: "red-200",
        labelColor: "red-800",
        link: "/courses/itnsa/linux-administration-fundamental",
      },
    ],
  },
];
</script>

<template>
  <PageHeader
    subHeading="Saya adalah mahasiswa Informatika angkatan 2024 di Institut Teknologi Kalimantan. Saya adalah berpengalaman di bidang System Administrator."
    :image="course_hero"
    imageAlt="A cloud practicioner composing cloud infrastructure using her magic wand."
  >
    <template #heading>
      <span class="text-brick-ember">Andi Naufal</span><br />Nurfadhil
    </template>
  </PageHeader>

  <div class="section-wrapper">
    <div class="section-header">
      <h2>Skills</h2>
      <p>Ini adalah skill saya.</p>
    </div>
    <div class="justify-between gap-8">
      <ol
        class="flex flex-col justify-around gap-8 p-4 md:flex-row md:flex-wrap md:gap-0 md:overflow-auto"
      >
        <li v-for="item in skills[0].computer_network" :key="item.title">
          <RouterLink :to="item.link">
            <CourseCard :content="item" />
          </RouterLink>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
a {
  @apply no-underline;
}
</style>
