export default defineNuxtConfig({
  app: {
    head: {
      title: 'Kanban-AV',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        {
          rel: 'icon', 
          type: 'image/x-icon', 
          href: '/assets/images/favicon-32x32.png' 
        },
      ],
    },
},
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  plugins: [
    '~/plugins/fontawesome.js'
  ]
})