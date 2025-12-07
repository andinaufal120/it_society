<script setup>
import PageHeader from "@/components/PageHeader.vue";
import AboutCourse from "@/components/courses/AboutCourse.vue";
import Tabs from "@/components/Tabs.vue";
import TabPanel from "@/components/TabPanel.vue";
import CourseCard from "@/components/courses/CourseCard.vue";

import course_hero from "@/assets/images/hero/cybersec_course_hero.png";
import cybersecCourseCategories from "@/assets/data/courses/cybersec-course-categories";

const AboutCourseContent = {
  list: [
    "This course is designed to provide a comprehensive introduction to Cyber Security concepts and practices.",
    "You will learn about terms and threats in cybersecurity world, cryptography, security protocols, risks, hardening, and penetrating techniques.",
    "The curriculum covers essential topics such as CIA triad, malicious software, network attacks, social engineering, and more.",
    "Hands-on labs and real-world scenarios will be incorporated to enhance practical skills and knowledge.",
    "By the end of the course, you will be equipped with the skills needed to defend and penetrate IT networks and systems effectively.",
  ],
};
</script>

<template>
  <PageHeader
    subHeading="Our Cyber Security learning path provides a structured guide to help you develop skills needed for defending and penetrating systems."
    :image="course_hero"
    imageAlt="Two people planning strategies to protect systems using methods like identity and access protection, firewall, and vulnerability assessment."
  >
    <template #heading>
      Cyber Security<br /><span class="text-brick-ember">Courses</span>
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
              v-for="item in cybersecCourseCategories[0].intro_to_cybersecurity"
              :key="item.title"
            >
              <RouterLink :to="item.link">
                <CourseCard :content="item" />
              </RouterLink>
            </li>
            <li
              v-for="item in cybersecCourseCategories[0].hardening"
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
              v-for="item in cybersecCourseCategories[0].intro_to_cybersecurity"
              :key="item.title"
            >
              <RouterLink :to="item.link">
                <CourseCard :content="item" />
              </RouterLink>
            </li>
            <li
              v-for="item in cybersecCourseCategories[0].hardening"
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
