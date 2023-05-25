export default defineNuxtRouteMiddleware((to, from) => {

    const emailCookie = useCookie('Email')
  
    if ( emailCookie.value == null ) {
      return navigateTo('/')
     }
  })