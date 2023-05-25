<script setup>
 const emailInput = ref('') 
 const routes = useRouter()
 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 const emailCookie = useCookie('Email')

 function setCookie(cookie) {
    if (!emailRegex.test(cookie)) {
       // emailCookie.value = "false"
        alert('Please enter a valid email')
        return
    }else{
        emailCookie.value = cookie
        navigateTo('/products')
    }
  
}
</script>


<template>
    <div class=" bg-gray-600 grid min-h-screen place-content-center" >
        <div class=" text-center">
        <Icon name="material-symbols:alternate-email" size="60"/>
        <UInput placeholder="Email" type="email" appearance="white" size="xl" class=" my-6" v-model="emailInput" @keyup.enter="setCookie(emailInput)"/>
    </div>
    </div>
    
</template>


<style>

</style>
