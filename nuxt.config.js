import meta from './meta.json'
const webpack = require('webpack')
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: meta.name || 'Van Nguyen',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: meta.description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://behance.com' },
      { rel: 'preconnect', href: 'https://www.linkedin.com/' },
      { rel: 'preconnect', href: 'https://dribbble.com' },
      { rel: 'prerender', href: '/' },
      { rel: 'prerender', href: '/about' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/main', '~assets/styles/material_icons'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-lazyload', '~/plugins/utils.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'cookie-universal-nuxt',
    '@bazzite/nuxt-optimized-images',
    'nuxt-webfontloader',
    [
      'bootstrap-vue/nuxt',
      {
        bootstrapCss: false
      }
    ],
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ]
  ],
  styleResources: {
    scss: ['~assets/styles/_core.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    },
    optimization: {
      splitChunks: {
        name: true
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  manifest: {
    name: 'Van Nguyen — Product Designer',
    short_name: 'Van Nguyen'
  },

  webfontloader: {
    custom: {
      families: [
        'IBM Plex Serif:n5,n7',
        'IBM Plex Sans:n5,n7',
        'Material Icons'
      ],
      urls: [
        'https://fonts.googleapis.com/css?family=IBM+Plex+Serif:500,700&display=swap',
        'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400&display=swap',
        'https://fonts.googleapis.com/icon?family=Material+Icons&display=block'
      ]
    }
  },
  optimizedImages: {
    optimizeImages: true
  }
}
