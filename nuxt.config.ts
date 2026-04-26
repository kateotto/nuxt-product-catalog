// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@bubblesortt/nuxt-es-toolkit',
    '@element-plus/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
  ],
  nitro: {
    serverAssets: [
      {
        baseName: 'data',
        dir: './server/assets/data',
      },
    ],
  },
})
