import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/contact", name: "Contact", component: Contact },
    {
      path: "/privacy-policy",
      name: "Privacy Policy",
      component: PrivacyPolicy,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

createApp(App).use(router).mount("#app");
