import { createIntlMiddleware } from 'next-intl/server'

export default createIntlMiddleware({
  locales: ['en', 'de', 'pl'],
  defaultLocale: 'de',
})
