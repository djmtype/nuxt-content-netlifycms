import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  modules: ['@nuxt/content'],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  content: {
    documentDriven: true
  }
})
