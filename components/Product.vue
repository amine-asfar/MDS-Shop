<script setup >

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
    })
    


</script>


<template>
    
      <img :src="props.product.image" alt="" class="rounded m-auto w-18"/>
        <h2 class="text-center font-bold  my-5">{{ props.product.title }}</h2>
        <p class="text-center">{{ props.product.description }}</p>
        <div class="flex justify-around items-center my-5">
                <p class="text-center">{{ props.product.price }}</p>
                <button class="bg-blue-500 text-white rounded-md p-2 m-2" @click="$emit('addProduct',props.product)" >Add to cart</button>
            </div>
    

</template>


<style>

</style>
