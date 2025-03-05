export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_name || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },     
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '@/assets/scss/main.scss',
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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',   
    "@nuxtjs/style-resources",
    'nuxt-i18n',
    '@nuxtjs/svg-sprite',
    'nuxt-lazy-load',  
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  styleResources: {
    scss: [
        // '~/assets/scss/fonts.scss',
        '~/assets/scss/variables.scss',        
        // '~/assets/scss/main.scss',
    ]
  },
  
  build: {
    extractCSS: true,
    optimizeCSS: true,
    html: {
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        removeComments: true,
        preserveLineBreaks: false,
        collapseWhitespace: true
      }
    }, 
  },
  i18n: {
    strategy: 'prefix',
    baseUrl: process.env.APP_HOST,
    seo: true,
    defaultLocale: 'ru',
    locales: [
      {
        code: 'ru',
        name: 'Русский',
        iso: 'ru-UA',
        file: 'ru.json'
      },
      {
        code: 'ua',
        name: 'Українська',
        iso: 'uk-UA',
        file: 'ua.json'
      }
    ],
    lazy: true,
    langDir: 'lang/'
  },
}
