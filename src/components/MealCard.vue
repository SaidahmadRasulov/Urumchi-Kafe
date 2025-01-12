<template>
    <div class="sm:w-1/4 bg-white meal_card h-[300px] w-full py-2 rounded-md">
      <div class="card_header h-[100px] w-[150px] mx-auto">
          <img :src="item.image" class="h-full w-full object-cover" alt="Meal Image" />
        <!-- <img src="../assets/logo.jpg" class="h-full w-full object-cover" alt="Meal Image" /> -->
      </div>
      
      <div class="card_body text-center mt-5">
        <h3 class="text-lg font-bold">{{ item.name }}</h3>
        <p class="text-gray-600">Порция: {{ item.size }}</p>
        <p class="text-gray-800 font-semibold">Цена: {{ item.price }} с</p>
      </div>
      <div class="card_footer flex justify-center mt-12">
        <button 
          @click="handleAdd(item)" 
          class="bg-green text-white px-4 py-2 rounded hover:bg-green-700">
          Добавить в корзину
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { useMealsStore } from '../store';
  
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleAdd(item) {
        if (item) {
          const mealsStore = useMealsStore();
          mealsStore.addCart(item);
        }
      }
    }
  };
  </script>
  