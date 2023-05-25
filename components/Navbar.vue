<script setup >
    const emailCookie= useCookie('Email')
    function Logout(){
        emailCookie.value = ''
        navigateTo('/')
    }
</script>


<template>
    <div class=" bg-gray-700 flex  justify-around  items-center">
        <button class=" text-white" @click="Logout()" ><Icon name="tabler:logout-2" size="30"/></button>
        <p class=" text-white text-lg">{{emailCookie}}</p>
        <button class=" text-white" @click="$emit('openCart')"><Icon name="ic:round-local-grocery-store" size="30"/></button>
    </div>
</template>


