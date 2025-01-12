import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CartPage from "../pages/CartPage.vue";

const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    id: 2,
    name: "Cart",
    path: "/cart",
    component: CartPage,
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
