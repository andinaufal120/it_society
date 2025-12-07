import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import FormPage from "@/views/FormPage.vue";
import ITNSAPage from "@/views/courses/ITNSAPage.vue";
import CyberSecPage from "@/views/courses/CyberSecPage.vue";
import CloudCompPage from "@/views/courses/CloudCompPage.vue";
import CablingPage from "@/views/courses/CablingPage.vue";
import BlogPage from "@/views/BlogPage.vue";
import BlogContentPage from "@/views/BlogContentPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import CoursesPage from "@/views/CoursesPage.vue";
import NotFound from "@/views/NotFound.vue";

import { blogs } from "@/assets/data/blogs/blogs.js";

const blogRoutes = blogs.map((blog) => ({
  path: `${blog.link}`,
  name: `${blog.link}`,
  component: BlogContentPage,
  props: { content: blog },
  meta: { title: `${blog.title} - Blog - IT Society` },
}));

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: { title: "IT Society - Home" },
  },
  {
    path: "/join",
    name: "Form",
    component: FormPage,
    meta: { title: "Join IT Society - Registration Form" },
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: { title: "About - IT Society" },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: BlogPage,
    meta: { title: "Blogs - IT Society" },
  },
  {
    path: "/courses",
    name: "Courses",
    component: CoursesPage,
    meta: { title: "Courses - IT Society" },
  },
  {
    path: "/courses/itnsa",
    name: "ITNSA Courses",
    component: ITNSAPage,
    meta: { title: "IT Network Systems Administration Courses - IT Society" },
  },
  {
    path: "/courses/cybersec",
    name: "Cyber Security Courses",
    component: CyberSecPage,
    meta: { title: "Cyber Security Courses - IT Society" },
  },
  {
    path: "/courses/cloudcomp",
    name: "Cloud Computing Courses",
    component: CloudCompPage,
    meta: { title: "Cloud Computing Courses - IT Society" },
  },
  {
    path: "/courses/cabling",
    name: "IT Network Cabling Courses",
    component: CablingPage,
    meta: { title: "IT Network Cabling Courses - IT Society" },
  },
  ...blogRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { title: "404 Not Found - IT Society" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
