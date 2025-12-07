import "./assets/main.css";

import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "IT Society";
  }
});

createApp(App).use(router).mount("#app");
