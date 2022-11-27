import colors from 'vuetify/es5/util/colors'

import en from './localization/en.json'
import fr from './localization/fr.json'
const messages = {
  en,
  fr
}
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  target: 'server',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/localization.js',
    '~/plugins/vue-social-sharing.js',
    {
      src: '~plugins/vue-slider-component.js',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'vue-social-sharing/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'http://44.202.244.118/api/', // Used as fallback if no runtime config is provided
  },
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: messages
  }
},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/_global.scss'],
    theme: {
      dark: false,
      themes: {
        background:'#f5f5f5'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
