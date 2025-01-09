<template>
    <div class="container_fluid rounded-e-2xl h-[50vh] bg-green w-[100px]">
        <div class="navbar_nav">
            <ul class="nav_group flex flex-col items-center justify-between gap-[5rem] py-5">
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
                <li class="nav_item text-4xl h-[33%]">
                    <RouterLink to="/contact" :class="$route.path == '/contact' ? 'text-coral' : 'text-white' " >
                        <i class="pi pi-phone"></i>
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