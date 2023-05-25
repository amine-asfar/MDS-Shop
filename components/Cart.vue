<script setup>
defineProps({
    cart: {
        type: Array,
        required: true
    },
    open: {
        type: Boolean,
        required: true
    }
})
function closeCart(){
    $emit('closeCart')
}

</script>


<template>
    <div>
        <div v-if="open" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div class="bg-white w-1/2 h-1/2 rounded-md">
                <div class="flex justify-between items-center">
                    <h2 class="text-center font-bold text-2xl">Cart</h2>
                    <button class="text-2xl" @click="closeCart()"><Icon name="ic:round-close" size="30"/></button>
                </div>
                <div class="flex flex-col justify-around items-center">
                    <div v-for="product in cart" :key="product.id" class="flex justify-around items-center w-3/4 my-5">
                        <img :src="product.image" alt="" class="rounded m-auto w-18"/>
                        <h2 class="text-center font-bold  my-5">{{ product.title }}</h2>
                        <p class="text-center">{{ product.description }}</p>
                        <div class="flex justify-around items-center my-5">
                            <p class="text-center">{{ product.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

</template>


<style>

</style>
