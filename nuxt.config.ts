import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

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
  runtimeConfig: {
    productsCsv: readFileSync(resolve('./server/assets/data/products.csv'), 'utf-8'),
  },
})
