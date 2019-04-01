module.exports = {
  locales: [
    {
      code: "en",
      iso: "en-US",
      name: "English",
      file: "en.js"
    },
    {
      code: "de",
      iso: "de-DE",
      name: "Deutsch",
      file: "de.js"
    }
  ],
  rootRedirect: null,
  defaultLocale: "en",
  lazy: true,
  detectBrowserLanguage: {
    useCookie: false
  },
  langDir: "i18n/",
  parsePages: true,
  vueI18n: {
    fallbackLocale: "en"
  },
  seo: false
}
