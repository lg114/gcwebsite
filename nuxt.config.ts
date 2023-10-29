// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/<gcwebsite>/', // baseURL: '/<repository>/'
    buildAssetsDir: '.output', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  }
})
