import { Redis } from '@upstash/redis/cloudflare'
export default defineNuxtPlugin(nuxtApp => {


  const redisClient = new Redis({
    url: 'https://settled-sheepdog-35714.upstash.io',
    token: nuxtApp.$config.public.TOKEN,
  })

  return {
    provide: {
      redis: redisClient as Redis
    }
  }
})
