<template>
  <div class="flex gap-[5rem] items-center">
    <CustomNavbar />
    <RouterView class="h-[80vh] my-5 bg-green w-4/5 p-10" />
  </div>
  <div class="footer_layout w-full h-[14vh] py-2 bg-green">
    <img src="./assets/logo.jpg" class="w-[10vw] mx-auto object-cover h-full" alt="">
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import CustomNavbar from "./components/CustomNavbar.vue";
export default {
  components: {
    RouterView,
    CustomNavbar,
  },
};
</script>
<style></style>
