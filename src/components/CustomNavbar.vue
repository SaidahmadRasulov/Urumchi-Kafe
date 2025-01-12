<template>
    <div class="container_fluid sm:rounded-e-2xl sm:h-[30vh] h-[11.5vh] bg-green w-full sm:w-[100px] flex sm:block items-center justify-center">
        <div class="navbar_nav">
            <ul class="nav_group flex sm:flex-col items-center justify-between gap-[5rem] h-full sm:py-5">
                <li class="nav_item text-4xl h-[33%]">
                    <RouterLink to="/" :class="$route.path == '/' ? 'text-coral' : 'text-white' " >
                        <i class="pi pi-home"></i>
                    </RouterLink>
                </li>
                <li class="nav_item text-4xl h-[33%]">
                    <RouterLink to="/cart" :class="$route.path == '/cart' ? 'text-coral' : 'text-white' " >
                        <i class="pi pi-cart-plus"></i>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    
}
</script>
<style lang="">
    
</style>