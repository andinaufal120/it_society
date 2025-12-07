<template>
  <div>
    <Hero />

    <div class="section-wrapper">
      <div class="mb-12 flex flex-col gap-4 text-center">
        <h2 class="font-['bodoni-moda'] text-3xl">Meet IT Society</h2>
        <p>
          We are a student organization that focuses on developing students'
          skills in information technology through various activities and
          projects.
        </p>
      </div>
      <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div class="bg-apricot-cream flex rounded-xl pt-8 pl-8 shadow-lg">
          <img
            class="max-w-full shrink"
            src="@/assets/it_society_photoshoot0.webp"
            alt="IT Society Community Image"
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
              class="mr-2 inline-block -translate-y-0.5"
            >
              <path
                d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
              ></path>
            </svg>
            We are community
          </h3>
          <p>
            Less organizational overhead. More productivity. We kept our way
            aligned with our main goal: <strong>skill growth</strong>.
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-8 px-5 py-16 md:px-36 lg:px-72">
      <div class="mb-12 flex flex-col gap-4 text-center">
        <h2 class="font-['bodoni-moda'] text-3xl">Our Courses</h2>
        <p>
          Explore our diverse range of courses designed to equip you with the
          skills and knowledge needed to excel in the IT industry.
        </p>
      </div>
      <div class="flex flex-col gap-8">
        <ul class="flex flex-row flex-wrap gap-8" role="list">
          <li v-for="content in courses" :key="content.title" class="list-none">
            <RouterLink :to="content.link">
              <CourseCard :content="content" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="bg-space-indigo grid grid-cols-1 gap-8 px-5 py-16 md:px-36 lg:px-72"
    >
      <div class="section-header">
        <h2 class="text-white">Our Activities</h2>
        <p class="text-white">
          We organize a variety of activities to foster learning and
          collaboration among our members.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-8">
        <ul class="grid grid-cols-1 gap-8" role="list">
          <li
            v-for="content in activities"
            :key="content.title"
            class="list-none"
          >
            <Card :content="content" />
          </li>
        </ul>
      </div>
    </div>

    <CTA />
  </div>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import CourseCard from "@/components/courses/CourseCard.vue";
import Card from "@/components/Card.vue";
import CTA from "@/components/CTA.vue";
import activities from "@/assets/data/activities";

const courses = [
  {
    title: "IT Network System Administration",
    description:
      "Learn the fundamentals of computer networking, system administration, and network security to build a solid foundation in IT infrastructure management.",
    label: "",
    svg: `
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43 10C45.2091 10 47 11.7909 47 14V18C47 20.2091 45.2091 22 43 22H5C2.79086 22 1 20.2091 1 18V14C1 11.7909 2.79086 10 5 10H43ZM33.5 14C32.1193 14 31 15.1193 31 16.5C31 17.8807 32.1193 19 33.5 19C34.8807 19 36 17.8807 36 16.5C36 15.1193 34.8807 14 33.5 14ZM40.5 14C39.1193 14 38 15.1193 38 16.5C38 17.8807 39.1193 19 40.5 19C41.8807 19 43 17.8807 43 16.5C43 15.1193 41.8807 14 40.5 14Z"
          fill="#C61212"
        />
        <path
          d="M43 23C45.2091 23 47 24.7909 47 27V31C47 33.2091 45.2091 35 43 35H5C2.79086 35 1 33.2091 1 31V27C1 24.7909 2.79086 23 5 23H43ZM33.5 27C32.1193 27 31 28.1193 31 29.5C31 30.8807 32.1193 32 33.5 32C34.8807 32 36 30.8807 36 29.5C36 28.1193 34.8807 27 33.5 27ZM40.5 27C39.1193 27 38 28.1193 38 29.5C38 30.8807 39.1193 32 40.5 32C41.8807 32 43 30.8807 43 29.5C43 28.1193 41.8807 27 40.5 27Z"
          fill="#C61212"
        />
      </svg>
    `,

    cardColor: "apricot-cream",
    labelColor: "apricot-cream",
    link: "/courses/itnsa",
  },
  {
    title: "Cyber Security",
    description:
      "Gain essential knowledge and skills in protecting computer systems and networks from cyber threats, including ethical hacking, risk management, and incident response.",
    label: "",
    svg: `
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="20" width="36" height="27" rx="3" fill="#111D4A" />
        <path
          d="M24 2C26.0092 2.00001 27.9992 2.46042 29.8555 3.35449C31.7115 4.24854 33.3978 5.55909 34.8184 7.21094C36.2391 8.86296 37.3669 10.824 38.1357 12.9824C38.9046 15.1409 39.2998 17.4547 39.2998 19.791H36.5996C36.5996 17.867 36.2738 15.9612 35.6406 14.1836C35.0074 12.4062 34.0791 10.791 32.9092 9.43066C31.7393 8.07041 30.3507 6.99112 28.8223 6.25488C27.2936 5.51859 25.6547 5.13965 24 5.13965C22.3454 5.13965 20.7064 5.5186 19.1777 6.25488C17.6493 6.99112 16.2607 8.07041 15.0908 9.43066C13.9209 10.7911 12.9926 12.4062 12.3594 14.1836C11.7262 15.9611 11.4004 17.867 11.4004 19.791H8.7002C8.7002 17.4547 9.09538 15.1409 9.86426 12.9824C10.6332 10.824 11.7609 8.86296 13.1816 7.21094C14.6022 5.55909 16.2885 4.24854 18.1445 3.35449C20.0008 2.46044 21.9908 2 24 2Z"
          fill="#C61212"
        />
      </svg>
    `,

    cardColor: "apricot-cream",
    labelColor: "apricot-cream",
    link: "/courses/cybersec",
  },
  {
    title: "Cloud Computing",
    description:
      "Discover the principles and practices of cloud computing, including cloud architecture, deployment models, and services offered by leading cloud providers.",
    label: "",
    svg: `
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5771 36.252C11.1841 36.5253 11.8284 36.7286 12.501 36.8535L11.7217 39.75H9.63672L10.5771 36.252ZM5.66992 29.8496C5.78031 30.5415 5.97352 31.2055 6.24023 31.8311L2.59668 33.2939V33.3984L8 35.5684V37.8691L0 34.3467V32.3467L5.66992 29.8496ZM17.1094 37.8691V37H19.083L17.1094 37.8691ZM32.0625 8C37.8615 8 42.5625 12.701 42.5625 18.5C42.5625 19.2388 42.485 19.9596 42.3398 20.6553C45.4072 21.9382 47.5625 24.9672 47.5625 28.5C47.5625 33.1944 43.7569 37 39.0625 37H19.083L25.1094 34.3467V32.3467L17.1094 28.8242V31.125L22.5127 33.2939V33.3984L17.1094 35.5684V37H14.0625C13.5289 37 13.0073 36.9476 12.501 36.8535L15.4717 25.8184H13.3867L10.5771 36.252C8.6337 35.3768 7.07757 33.7948 6.24023 31.8311L8 31.125V28.8242L5.66992 29.8496C5.59978 29.41 5.5625 28.9593 5.5625 28.5C5.5625 24.6287 8.15106 21.3635 11.6914 20.3369C11.6077 19.9041 11.5625 19.4573 11.5625 19C11.5625 15.134 14.6965 12 18.5625 12C20.1768 12 21.6625 12.5478 22.8467 13.4658C24.6295 10.2089 28.0877 8 32.0625 8Z"
          fill="#C61212"
        />
      </svg>
    `,

    cardColor: "apricot-cream",
    labelColor: "apricot-cream",
    link: "/courses/cloudcomp",
  },
  {
    title: "IT Network Cabling",
    description:
      "Understand the essentials of network cabling, including types of cables, installation techniques, and best practices for maintaining a reliable network infrastructure.",
    label: "",
    svg: `
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_21_245)">
          <path
            d="M39 0C42.866 0 46 3.13401 46 7V20C46 23.866 42.866 27 39 27C35.134 27 32 23.866 32 20V40C32 44.4183 28.4183 48 24 48C19.5817 48 16 44.4183 16 40V41C16 44.866 12.866 48 9 48C5.13401 48 2 44.866 2 41V29C2 25.134 5.13401 22 9 22C12.866 22 16 25.134 16 29V8C16 3.58172 19.5817 0 24 0C28.4183 0 32 3.58172 32 8V7C32 3.13401 35.134 0 39 0Z"
            fill="#111D4A"
          />
        </g>
        <defs>
          <clipPath id="clip0_21_245">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `,

    cardColor: "apricot-cream",
    labelColor: "apricot-cream",
    link: "/courses/cabling",
  },
];
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
