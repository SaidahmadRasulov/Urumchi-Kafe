import { createPinia, defineStore } from "pinia";
export const pinia = createPinia();

// Imported images
import lagman from '../assets/lagman.png';
import ayrimsay from '../assets/ayrimsay.png';
import achuet from '../assets/achiq gosh.png';
import ganfan from '../assets/ganfan.png';
import manti from '../assets/manti.png';
import kebab from '../assets/kebab.png';
import koygosh from '../assets/koygosh.png';
import molgosh from '../assets/molgosh.png';
import logo from '../assets/logo.jpg'

export const useMealsStore = defineStore('meals', {
  state: () => ({
    meals: [
      { 
        id: 1, 
        name: "Лагман (Маленький)", 
        size: 0.7, 
        price: 220, 
        image: lagman 
      },
      { 
        id: 2, 
        name: "Лагман (Большой)", 
        size: 1, 
        price: 240, 
        image: lagman 
      },
      { 
        id: 3, 
        name: "Айримсей", 
        size: 1, 
        price: 280, 
        image: ayrimsay 
      },
      { 
        id: 4, 
        name: "Ачуу эт", 
        size: 1, 
        price: 320, 
        image: achuet 
      },
      { 
        id: 5, 
        name: "Ганфан (Маленький)", 
        size: 0.7, 
        price: 220, 
        image: ganfan
      },
      { 
        id: 6, 
        name: "Ганфан (Большой)", 
        size: 1, 
        price: 240, 
        image: ganfan
      },
      { 
        id: 7, 
        name: "Манты", 
        size: 1, 
        price: 200, 
        image: manti 
      },
      { 
        id: 8, 
        name: "Кебаб", 
        size: 1, 
        price: 80, 
        image: kebab 
      },
      { 
        id: 9, 
        name: "Кой эти", 
        size: 1, 
        price: 150, 
        image: koygosh 
      },
      { 
        id: 10, 
        name: "Мал эти", 
        size: 1, 
        price: 140, 
        image: molgosh 
      },
      { 
        id: 11, 
        name: "Нан", 
        size: 1, 
        price: 30, 
        image: logo 
      },
      { 
        id: 12, 
        name: "Чай", 
        size: 1, 
        price: 20, 
        image: logo 
      },
      { 
        id: 13, 
        name: "Кофе", 
        size: 1, 
        price: 30, 
        image: logo 
      }
    ],
    cartList: []     
  }),
  getters: {
    cart() {
      return this.cartList;
    },
    totalPrice() {
      return this.cartList.reduce((total, item) => {
        return total + (item.price * item.custom_count);
      }, 0);
    }
  },
  actions: {
    addCart(item) {
      const existingItem = this.cartList.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.custom_count += 1;
      } else {
        this.cartList.push({
          ...item,
          custom_count: 1
        });
      }
      console.log("CartList: ", this.cartList);
    },
    removeFromCart(itemId) {
        const index = this.cartList.findIndex(item => item.id === itemId);
        if (index !== -1) {
          this.cartList.splice(index, 1); 
        }
      },
      removeFromItem(id) {
        const existingItem = this.cartList.find(cartItem => cartItem.id === id);
        if (existingItem) {
          existingItem.custom_count -= 1;
          if (existingItem.custom_count <= 0) {
            this.cartList = this.cartList.filter(cartItem => cartItem.id !== id);
          }
        }
      }
      
  }
});
