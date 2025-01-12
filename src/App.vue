<template>
  <div class="font-monst flex sm:block flex-col-reverse">
    <div class="flex sm:flex-row flex-col-reverse sm:gap-[5rem] gap-[3rem] items-center">
      <CustomNavbar />
      <RouterView class="sm:h-[80vh] mt-5 h-[64vh] sm:my-5 bg-green sm:w-4/5 w-[90%] p-5" />
    </div>
    <div class="bg-green">
      <div class="footer_layout w-full justify-evenly text-white flex items-center h-[14vh] py-2 px-2">
        <h1 class="text-[10px] sm:text-[14px]">@Copywrite by Rasulov Developer</h1>
        <img src="./assets/logo.jpg" class="sm:w-[10vw] w-[40vw] object-cover h-full" alt="">
        <h1 class="text-[10px] sm:text-[14px]">Telefon Nomer: +996 ( 555 ) 550-409</h1>
      </div>
    </div>
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
