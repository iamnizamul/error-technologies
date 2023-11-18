<template>
  <product-details></product-details>
</template>

<script setup>
import ProductDetails from "./Components/ProductDetails.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}

/* @media (max-width: 156em) */
 /* (57.5 / 100) * 16 = 9.2 1em = 1rem = 9.2px 1440px / 9.2 = 156.52  */
/* { */
  html {
    font-size: 57.5%;
  }

  body {
    /* height: 100vh; */
    /* width: 100% */
    /* overflow: auto; */
  }

/* } */
</style>