// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: false,
  },
  ssr: true,
  srcDir: 'src/',

  // 运行时根据 env文件中以 NUXT_ 开头的下划线命名法覆盖config中的值
  // 构建后不会读取 env文件，仅使用config默认值
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: 'api_secret_token_default',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: 'https://api.prod.com',
    },
  },

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
    devProxy: {
      '/dev-api': {
        target: process.env.NUXT_PUBLIC_API_BASE,
        changeOrigin: true,
      },
    },
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
    port: 3008,
    host: 'localhost',
  },
});
