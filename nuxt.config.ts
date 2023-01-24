import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/style.scss', '@/assets/styles.scss', '@/assets/fontawesome/css/all.min.css'],

  app: {
    head: {
      script: [
        {src: 'https://cdn.jsdelivr.net/npm/sweetalert2@9'},
        {src: 'https://widget.cloudinary.com/v2.0/global/all.js'},
        // {src: 'https://unpkg.com/@glidejs/glide@3.5.2/dist/glide.min.js'},
        {src: 'https://cdn.reamaze.com/assets/reamaze.js', async: true},
        {src: 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js'},
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: 'https://res.cloudinary.com/ironabode/image/upload/v1665066045/index_r7xgcc.webp'},
        // {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.5.0/css/glide.core.min.css'},
        // {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.5.0/css/glide.theme.min.css'},
        {rel: 'stylesheet', href: 'https://unpkg.com/flickity@2/dist/flickity.min.css'},
      ]
    }
  },

  //- Runtime Template Config
  hooks: {
    'vite:extendConfig': (config, {isClient, isServer}) => {
      if(isClient) {
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler'
      }
    }
  },

  nitro: {
    commonJS: {
      dynamicRequireTargets: [
        './node_modules/@vue/compiler-core',
        './node_modules/@vue/compiler-dom',
        './node_modules/@vue/compiler-ssr',
        './node_modules/vue/server-renderer',
        './node_modules/vue'
      ]
    },
  },

  alias: {
    '@vue/compiler-core': '@vue/compiler-core',
    '@vue/compiler-dom': '@vue/compiler-dom',
    '@vue/compiler-ssr': '@vue/compiler-ssr',
    'vue/server-renderer': 'vue/server-renderer',
    'estree-walker': 'estree-walker',
    '@babel/parser': '@babel/parser'
  },
  //- End Runtime Template Config

  runtimeConfig: {
    public: {
      auth_cookie: process.env.auth_cookie
    }
  },

  modules: [
    ['@pinia/nuxt',
    {
      autoImports: ['defineStore', 'storeToRefs', ['defineStore', 'definePiniaStore']]
    }]
  ],

  vite: {
    vue: {
      reactivityTransform: true, // Enables $ref sugar
    }
  }
})
