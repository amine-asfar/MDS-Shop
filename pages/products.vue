<script setup>

import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'


definePageMeta({
  middleware: 'protector',
   
})
const loading = ref(true)
const products = ref([])
const cart = ref([])

const open = ref(false)
const totalPrice =ref(0)

function addProduct (product) {
    cart.value.push(product)
    totalPrice.value += product.price


    
}
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
    
    <Navbar @openCart= "open = true"/>
    <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                    <button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="open = false">
                      <span class="sr-only">Close panel</span>
                      <Icon name="mdi:close-thick" class="h-6 w-6 " aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <DialogTitle class="text-base font-semibold leading-6 text-gray-900">Products</DialogTitle>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <div v-for="product in cart" :key="product.id" class="flex justify-around items-center w-3/4 my-5">
                        <img :src="product.image" alt="" class="rounded m-auto w-4"/>
                        <h2 class="text-center font-bold  my-5">{{ product.title }}</h2>
                        <div class="flex justify-around items-center my-5">
                            <p class="text-center">{{ product.price }}</p>
                        </div>
                        
                        <button class="rounded-md p-2 m-2" @click="cart.splice(cart.indexOf(product),1);totalPrice -= product.price" ><Icon name="mdi:close-thick" class="h-6 w-6 text-red-700" aria-hidden="true" /></button>
                    </div>
                    <p class=" font-bold">Total : {{ totalPrice }}</p>

                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
    

<div class=" min-h-screen place-content-center">
    
        <Icon v-if="loading" name="svg-spinners:bars-fade" size="40" />
    
<div v-else class="flex flex-wrap justify-around mt-14">
    <div v-for="product in products" :key="product.id" class="bg-gray-200 w-1/4 p-2 m-2 ">
        <Product :product="product" @addProduct="addProduct(product)"/>
    
  </div>
  
  </div>
</div>


</template>
