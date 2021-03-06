export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
 /*  target: 'static', */
  ssr: false,
  head: {
    title: 'pendu-game',
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
        rel: 'icon', type: 'image/x-icon', 
        href: '/favicon.ico' 
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Patrick+Hand&display=swap'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
     // charge un module Node.js directement (ici c'est un fichier SASS)
     /* 'bulma', */
     // fichier CSS dans le projet
     '@/assets/css/main.css',
     // fichier SCSS dans le projet
     '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  generate: {
    fallback: '404.html'
  }
}
