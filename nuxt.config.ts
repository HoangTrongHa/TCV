// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    defaultLocale: 'vi',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'vi', iso: 'vi-VN', name: 'Tieng Viet', file: 'vi.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    ],
    vueI18n: './i18n/i18n.config.ts',
  },
})

