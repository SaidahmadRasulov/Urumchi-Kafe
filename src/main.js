import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import 'primeicons/primeicons.css';
import { pinia } from "./store";
import PrimeVue from 'primevue/config';

createApp(App).use(router).use(pinia).use(PrimeVue).mount("#app");
