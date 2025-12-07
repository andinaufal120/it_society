<script setup>
import PageHeader from "@/components/PageHeader.vue";
import AboutCourse from "@/components/courses/AboutCourse.vue";
import Tabs from "@/components/Tabs.vue";
import TabPanel from "@/components/TabPanel.vue";
import CourseCard from "@/components/courses/CourseCard.vue";

import course_hero from "@/assets/images/hero/cloudcomp_course_hero.png";
import cloudcompCourseCategories from "@/assets/data/courses/cloudcomp-course-categories";

const AboutCourseContent = {
  list: [
    "This course is designed to provide a comprehensive introduction to Cloud Computing concepts and practices.",
    "You will learn about cloud service models, deployment models, virtualization, and cloud security.",
    "The curriculum covers essential topics such as IaaS, PaaS, SaaS, cloud storage, and cloud networking.",
    "You also will learn how to prevent unwanted billing surprises when using cloud services.",
    "Hands-on labs and real-world scenarios will be incorporated to enhance practical skills and knowledge.",
    "By the end of the course, you will be equipped with the skills needed to leverage cloud infrastructures and services effectively.",
  ],
};
</script>

<template>
  <PageHeader
    subHeading="Our Cloud Computing learning path provides a structured guide to help you develop essential skills to leverage cloud infrastructures and services efficiently."
    :image="course_hero"
    imageAlt="A cloud practicioner composing cloud infrastructure using her magic wand."
  >
    <template #heading>
      Cloud Computing<br /><span class="text-brick-ember">Courses</span>
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
              v-for="item in cloudcompCourseCategories[0].computer_network"
              :key="item.title"
            >
              <RouterLink :to="item.link">
                <CourseCard :content="item" />
              </RouterLink>
            </li>
            <li
              v-for="item in cloudcompCourseCategories[0].server_administration"
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
              v-for="item in cloudcompCourseCategories[0].computer_network"
              :key="item.title"
            >
              <RouterLink :to="item.link">
                <CourseCard :content="item" />
              </RouterLink>
            </li>
            <li
              v-for="item in cloudcompCourseCategories[0].server_administration"
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
