// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: false,
  },
  ssr: true,
  srcDir: 'src/',

  app: {
    head: {
      title: 'Element Plus + Nuxt 3',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ElementPlus + Nuxt3' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          //  Nuxt 组件/页面样式中全局插入语句
          additionalData: `@use "~/assets/styles/element/index.scss" as element;`,
        },
      },
    },
  },

  nitro: {
    // devProxy: {
    //   '/proxyApi': {
    //     target: process.env.NUXT_PUBLIC_API_BASE,
    //     changeOrigin: true,
    //   },
    // },
  },

  // elementPlus
  elementPlus: {
    importStyle: 'scss',
  },

  // tailwindcss
  tailwindcss: {
    viewer: true,
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  devServer: {
    port: 3001,
    host: 'localhost',
  },
});
