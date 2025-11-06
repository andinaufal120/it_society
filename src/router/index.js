import { createWebHistory, createRouter } from "vue-router";

import Hero from "../components/Hero.vue";
import Home from "../components/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hero",
    name: "Hero",
    component: Hero,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
