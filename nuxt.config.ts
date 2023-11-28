export default defineNuxtConfig({
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  plugins: [
    '~/plugins/fontawesome.js'
  ]
})