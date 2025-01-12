<script setup>
import { DataTable, Column } from 'primevue';
</script>

<template>
    <div class="cart_content">
      <h1 class="text-2xl text-white">Корзинка</h1>
      <div class="hidden sm:block">
        <DataTable :value="cartItems" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }" class="text-white">
          <Column field="name" header="Название">
            <template #body="slotProps">
              <div class="py-3">{{ slotProps.data.name }}</div>
            </template>
          </Column>
          <Column field="portion" header="Порция">
            <template #body="slotProps">
              <div>{{ slotProps.data.size }}</div>
            </template>
          </Column>
          <Column field="count" header="Кол-во">
            <template #body="slotProps">
              {{ slotProps.data.custom_count || 1 }}
            </template>
          </Column>
          <Column field="price" header="Цена">
            <template #body="slotProps">
              {{ slotProps.data.price }}
            </template>
          </Column>
          <Column field="summary" header="Сумма">
            <template #body="slotProps">
              {{ slotProps.data.price * slotProps.data.custom_count || 0 }}
            </template>
          </Column>
          <Column field="action" header="Действие">
            <template #body="slotProps">
              <div class="flex gap-10">
                <i class="pi pi-plus hover:cursor-pointer hover:text-coral" @click="handleAdd(slotProps.data)"></i>
                <i class="pi pi-trash hover:cursor-pointer hover:text-coral" @click="handleDelete(slotProps.data.id)"></i>
                <i class="pi pi-minus hover:cursor-pointer hover:text-coral" @click="handleRemove(slotProps.data.id)"></i>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
      <div class="block sm:hidden h-[40vh] overflow-y-scroll">
        <div 
          v-for="item in cartItems" 
          :key="item.id" 
          class=" text-white p-4 mb-4 rounded-lg shadow"
        >
          <p class="flex items-center justify-between"><strong>Название:</strong> {{ item.name }}</p>
          <p class="flex items-center justify-between"><strong>Кол-во:</strong> {{ item.custom_count || 1 }}</p>
          <p class="flex items-center justify-between"><strong>Цена:</strong> {{ item.price }}c</p>
          <p class="flex items-center justify-between"><strong>Сумма:</strong> {{ item.price * item.custom_count || 0 }}c</p>
          <div class="flex justify-center gap-4 mt-2">
            <i class="pi pi-plus cursor-pointer hover:text-coral" @click="handleAdd(item)"></i>
            <i class="pi pi-trash cursor-pointer hover:text-coral" @click="handleDelete(item.id)"></i>
            <i class="pi pi-minus cursor-pointer hover:text-coral" @click="handleRemove(item.id)"></i>
          </div>
        </div>
      </div>      
      <div class="prices_section flex justify-between items-center mt-10 text-white">
        <h1>В Корзине {{ cartItems.length }} продуктов.</h1>
        <h1>Общая Сумма: {{ totalSum }} cом</h1>
      </div>
    </div>
  </template>
  
  <script>
  import { useMealsStore } from '../store';
  
  export default {
    data() {
      const mealsStore = useMealsStore();
      return {
        mealsStore,
      };
    },
    computed: {
      cartItems() {
        return this.mealsStore.cart;
      },
      totalSum() {
        return this.mealsStore.totalPrice;
      }
    },
    methods: {
      handleAdd(item) {
        this.mealsStore.addCart(item);
      },
      handleDelete(id) {
        this.mealsStore.removeFromCart(id);
      },
      handleRemove(id){
        this.mealsStore.removeFromItem(id)
      }
    }
  };
  </script>
  