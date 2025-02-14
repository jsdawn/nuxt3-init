// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: false,
  },
  srcDir: 'src/',

  modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt'],

  tailwindss: {},
  elementPlus: {},
});
