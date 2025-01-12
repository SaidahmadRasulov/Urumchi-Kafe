<template>
    <div class="sm:h-[60vh] h-[50vh] py-5 overflow-y-scroll flex flex-wrap justify-around gap-5">
        <MealCard v-for="item in mealsList" :item="item" :key="item.id" />
    </div>
</template>

<script>
import { useMealsStore } from '../store';
import MealCard from './MealCard.vue';

export default {
    components: { MealCard },
    data() {
        const mealsStore = useMealsStore();
        return {
            mealsList: mealsStore.meals
        };
    }
};
</script>

<style lang="">

</style>
