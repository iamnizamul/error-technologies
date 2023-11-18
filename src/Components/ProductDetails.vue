<template>
  <div class="container">
    <div class="content-container">
      <div class="image-container">
        <div class="cover-image-container">
          <img class="cover-image" :src="coverImage" alt="" />
        </div>
        <div class="icon-image-container">
          <ul>
            <li
              v-for="image in images"
              :key="image"
              @mouseover="newCoverImage(image)"
            >
            <div class="icon-image-div"
                :class="image === coverImage ? 'active' : 'notActive'"
            >
              <img
                class="icon-image"
                :src="image"
                alt=""
              />
            </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="description-container">
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
        <div class="offer">
          <h3 class="offer-price">${{ offerPrice }}</h3>
          <h6 class="discount">{{ discountPercentage }}%</h6>
        </div>
        <h4 class="price">${{ price }}</h4>
        <div class="input-container">
          <div class="quantity-container">
            <h5 class="minus" @click="subtract">-</h5>
            <h5 class="count">{{ count }}</h5>
            <h5 class="plus" @click="add">+</h5>
          </div>
          <div class="cart-container">
            <ion-icon name="cart-outline"></ion-icon>
            <h6>Add to cart</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductStore } from "../store/productStore.js";

const store = useProductStore();
const product = ref("");
const images = ref("");
const coverImage = ref("");
const count = ref(0);

product.value = store.products[0];
images.value = product.value.images;

coverImage.value = images.value[0];
console.log(coverImage);

const { title } = product.value;
const { description } = product.value;
const { price } = product.value;
const { discountPercentage } = product.value;
const offerPrice = price * (discountPercentage / 100);
console.log(offerPrice);

function newCoverImage(img) {
  coverImage.value = img;
}

function subtract() {
  if (count.value !== 0) {
    count.value--;
  }
}

function add() {
  count.value++;
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
    overflow-x: scroll;
}

.content-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15rem;
  width: 75vw;
  margin-top: 8rem;
  margin-bottom: 8rem;
}
.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
}

.cover-image-container {
  margin-bottom: 4rem;
}

.cover-image {
  height: 50rem;
  width: 50rem;
  border-radius: 2rem;
}

ul {
  list-style: none;
}

.icon-image-container ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.33rem;
}

.icon-image-div{
    height: 10rem;
  width: 10rem;
    border-radius: 10px;
}

.icon-image {
    height: 100%;
    width: 100%;
border-radius: 10px;
}

.icon-image-div:hover .icon-image,
.active .icon-image{
  opacity: 0.25;
  cursor: pointer;  
}

.icon-image-div:hover,
.active {
    outline: 3px solid hsl(26, 100%, 55%);

}

.description-container {
  max-width: 100%;
  max-height: 50rem;
  padding-top: 5rem;
}

.title {
  font-size: 5rem;
  margin-bottom: 3rem;
}

.description {
  font-size: 1.8rem;
  color: #999;
  line-height: 1.8;
}

.offer {
  margin-top: 3rem;
  display: flex;
  align-items: center;
}

.offer-price {
  font-size: 3.2rem;
  margin-right: 1.8rem;
  font-weight: 600;
}

.discount {
  font-size: 1.8rem;
  background-color: hsl(25, 100%, 94%);
  border-radius: 10px;
  padding: 4px 8px;
  color: hsl(26, 100%, 55%);
  font-weight: 500;
}

.price {
  margin-top: 1.2rem;
  font-size: 1.8rem;
  color: #999;
  text-decoration: line-through;
  font-weight: 600;
}

.input-container {
  display: flex;
  align-items: center;
  margin-top: 5rem;
  gap: 4rem;
}

.quantity-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(223, 64%, 98%);
  gap: 3rem;
  /* width: max-content; */
  height: 5rem;
  width: 15rem;
  /* padding: 0 1.8rem; */
  border-radius: 10px;
  font-size: 2.4rem;
  color: hsl(26, 100%, 55%);
}

.plus,
.minus {
  cursor: pointer;
}

.count {
  color: black;
  font-size: 1.8rem;
  width: 4rem;
  text-align: center;
}

.cart-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 5rem;
  width: 25rem;
  border-radius: 10px;
  color: #fff;
  background-color: hsl(26, 100%, 55%);
  font-size: 2.4rem;
  cursor: pointer;
}

ion-icon {
  --ion-icon-stoke-width: 32px;
}
</style>