

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
			devSourcemap: true,
		},
  },

  modules: ['@nuxt/content'],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  content: {
    documentDriven: true
  },

  // css: [
  //   // Load a Node.js module directly (here it's a Sass file).

  //   // SCSS file in the project
  //   '@/assets/styles/main.css'
  // ]
  //  css: ['~/assets/styles/main.css'],
  // app: {
  //   head: {
  //     link: [
  //       { rel: 'stylesheet', href: 'assets/styles/main.css' }
  //     ],
  //   }
  // }
   
})
