<!-- <script setup>
const loading = ref(true)
const products = ref([])
const error = ref(false)
const nuxtApp = useNuxtApp()
const { $redis } = nuxtApp
async function fetchPosts() {
  const response = await fetch('https://fakestoreapi.com/products')
  products.value = await response.json()
  loading.value = false
}

onMounted(() => {
  setTimeout(() => {
    fetchPosts()
    saveProducts()
  }, 1000)
})
async function saveProducts() {

  for (product in products){
    const res = await $redis.get(product.id,0);
  }
}
// }
// saveProducts()


</script>


<template>
    


</template>


<style>

</style> -->
<script setup>
</script>
<template>
    
</template>