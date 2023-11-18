import { defineStore } from "pinia"; 

export const useProductStore = defineStore({
    id: 'product',
    state() {
      return {
        products: [
          {
            id: 1,
            title: 'Fall Limited Edition Sneakers',
            price: 250,
            discountPercentage: 50,
            images: ['../images/image-product-1.jpg', '../images/image-product-2.jpg', '../images/image-product-3.jpg', '../images/image-product-4.jpg'],
            description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          }
        ]
      }
    },
    getters: {

    },
    actions: {
        images() {
            console.log(this.products.images[0]);
        }
    }
  }
)