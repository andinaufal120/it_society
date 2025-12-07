<script setup>
import PageHeader from "@/components/PageHeader.vue";
import AboutCourse from "@/components/courses/AboutCourse.vue";
import Tabs from "@/components/Tabs.vue";
import TabPanel from "@/components/TabPanel.vue";
import CourseCard from "@/components/courses/CourseCard.vue";

import course_hero from "@/assets/images/hero/cabling_course_hero.png";
import cablingCourseCategories from "@/assets/data/courses/cabling-course-categories";

const AboutCourseContent = {
  list: [
    "This course is designed to provide a comprehensive introduction to IT Network Cabling concepts and practices.",
    "You will learn about network media types, cable installation techniques, and safety protocols.",
    "The curriculum covers essential topics such as cable types, connectors, standards, and testing methods.",
    "By the end of the course, you will be equipped with the skills needed to pull and terminate network cables properly and safely.",
  ],
};
</script>

<template>
  <PageHeader
    subHeading="Our IT Network Cabling learning path provides a structured guide to help you develop essential skills needed for pulling and terminating network cables properly and safely."
    :image="course_hero"
    imageAlt="A person administering IT network and servers with his laptop."
  >
    <template #heading>
      IT Network Cabling<br /><span class="text-brick-ember">Courses</span>
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
              v-for="item in cablingCourseCategories[0].computer_network"
              :key="item.title"
            >
              <RouterLink :to="item.link">
                <CourseCard :content="item" />
              </RouterLink>
            </li>
            <li
              v-for="item in cablingCourseCategories[0].server_administration"
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
              v-for="item in cablingCourseCategories[0].computer_network"
              :key="item.title"
            >
              <RouterLink :to="item.link">
                <CourseCard :content="item" />
              </RouterLink>
            </li>
            <li
              v-for="item in cablingCourseCategories[0].server_administration"
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
