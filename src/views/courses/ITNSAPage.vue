<script setup>
import PageHeader from "@/components/PageHeader.vue";
import AboutCourse from "@/components/courses/AboutCourse.vue";
import CourseCard from "@/components/courses/CourseCard.vue";
import Tabs from "@/components/Tabs.vue";
import TabPanel from "@/components/TabPanel.vue";

import course_hero from "@/assets/images/hero/itnsa_course_hero.png";
import itnsaCourseCategories from "@/assets/data/courses/itnsa-course-categories";

const AboutCourseContent = {
  list: [
    "This course is designed to provide a comprehensive introduction to IT Network and System Administration (ITNSA) concepts and practices.",
    "You will learn about networking fundamentals, system administration, security protocols, and troubleshooting techniques.",
    "The curriculum covers essential topics such as TCP/IP, DNS, DHCP, server management, and virtualization.",
    "Hands-on labs and real-world scenarios will be incorporated to enhance practical skills and knowledge.",
    "By the end of the course, you will be equipped with the skills needed to manage and maintain IT networks and systems effectively.",
  ],
};
</script>

<template>
  <PageHeader
    subHeading="Our ITNSA learning path provides a structured guide to help you develop essential IT skills needed for administering IT systems."
    :image="course_hero"
    imageAlt="A person administering IT network and servers with his laptop."
  >
    <template #heading>
      IT Network System Administration<br /><span class="text-brick-ember"
        >Courses</span
      >
    </template>
  </PageHeader>

  <AboutCourse :content="AboutCourseContent" />

  <div class="section-wrapper">
    <div class="section-header">
      <h2>Modules</h2>
      <p>
        Start building foundation with Core modules or jump right away to
        Extension modules.
      </p>
    </div>

    <Tabs :tabs="['Core', 'Extension']">
      <!-- Tab 1: Core -->
      <TabPanel :index="0">
        <div class="justify-between gap-8">
          <ol
            class="flex flex-col justify-around gap-8 p-4 md:flex-row md:flex-wrap md:overflow-auto"
          >
            <li
              v-for="item in itnsaCourseCategories[0].computer_network"
              :key="item.title"
            >
              <RouterLink :to="item.link">
                <CourseCard :content="item" />
              </RouterLink>
            </li>
            <li
              v-for="item in itnsaCourseCategories[0].server_administration"
              :key="item.title"
            >
              <RouterLink :to="item.link">
                <CourseCard :content="item" />
              </RouterLink>
            </li>
          </ol>
        </div>
      </TabPanel>

      <!-- Tab 2: Extension -->
      <TabPanel :index="1">
        <div class="justify-between gap-8">
          <ol
            class="flex flex-col justify-around gap-8 p-4 md:flex-row md:flex-wrap md:overflow-auto"
          >
            <li
              v-for="item in itnsaCourseCategories[0].advanced_networking"
              :key="item.title"
            >
              <RouterLink :to="item.link">
                <CourseCard :content="item" />
              </RouterLink>
            </li>
            <li
              v-for="item in itnsaCourseCategories[0].advanced_services"
              :key="item.title"
            >
              <RouterLink :to="item.link">
                <CourseCard :content="item" />
              </RouterLink>
            </li>
          </ol>
        </div>
      </TabPanel>
    </Tabs>
  </div>
</template>

<style scoped>
a {
  @apply no-underline;
}
</style>
