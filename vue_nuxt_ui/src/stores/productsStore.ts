import { ref } from 'vue'
import { defineStore } from 'pinia';
import axios, { AxiosError} from 'axios'


export const useProductsStore = defineStore('products', () => {
    const products = ref([])

    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://200b4cae67943554.mokky.dev/items"
        );
        products.value = response.data
      } catch (error) {
        if (error instanceof AxiosError) {
            console.error(
                "Error fetching products:", 
                error, 
                "response status:",
                error.response?.status
            );
        } else {
            console.error('Unknown error:', error)
        }
      }
    }

    return {products, fetchProducts}
})