import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
    component: HomePage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
