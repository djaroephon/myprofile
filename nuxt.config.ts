  // https://nuxt.com/docs/api/configuration/nuxt-config
  import tailwindcss from "@tailwindcss/vite";
  export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/fonts','@hypernym/nuxt-anime'],
    icon:{
      serverBundle: 'local'
    },
    css:['~/src/assets/css/main.css'],
    vite: {
      plugins: [tailwindcss()]
    },
    app: {
      head: {
        title: 'Djaroephon-Portfolio',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: 'Portfolio Djaroephon Djohan Syuhada, Web Developer' },
          { name: 'author', content: 'Djaroephon Djohan Syuhada' },
          { name: 'keywords', content: 'Djaroephon, Djohan Syuhada, Portfolio, Web Developer, Frontend Developer, Backend Developer, Fullstack Developer' },
          { name: 'theme-color', content: '#0d9488' },
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
      }
    }
  })