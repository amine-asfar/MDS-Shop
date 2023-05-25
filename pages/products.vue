<script setup>
import { Image } from 'react-bootstrap';


definePageMeta({
  middleware: 'protector',
    layout: 'products',
})
const loading = ref(true)
const products = ref([])


async function fetchPosts() {
  const response = await fetch('https://fakestoreapi.com/products')
  products.value = await response.json()
  loading.value = false
}

onMounted(() => {
  setTimeout(() => {
    fetchPosts()
  }, 1000)
})
</script>


<template>
<div class=" grid-cols-3 min-h-screen place-content-center">

    <Icon v-if="loading" name="svg-spinners:bars-fade" size="40"/>

<div v-else class="flex flex-wrap justify-around mt-14">

  <div v-for="product in products" :key="product.id" class="bg-gray-200 w-1/4 p-2 m-2  grid-cols-3">
      <img :src="product.image" alt="" class="rounded m-auto w-18"/>
        <h2 class="text-center font-bold  my-5">{{ product.title }}</h2>
        <p class="text-center">{{ product.description }}</p>
        <div class="flex justify-around items-center my-5">
                <p class="text-center">{{ product.price }}</p>
                <button class="bg-blue-500 text-white rounded-md p-2 m-2">Add to cart</button>
            </div>
    
  </div>
    
  </div>
</div>


</template>
