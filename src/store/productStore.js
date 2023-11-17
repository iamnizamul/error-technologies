import { defineStore } from "pinia";

export const useProductStore = defineStore({
    id: 'products',
    state() {
      return {
        products: [
          {
            id: 1,
            title: 'Fall Limited Edition Sneakers',
            price: '$250',
            discount: '50%',
            images: ['../images/image-product-1', '../images/image-product-2', '../images/image-product-3', '../images/image-product-4'],
            description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can Offer."
          }
        ]
      }
    }
  }
)