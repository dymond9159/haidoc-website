"use client"

import { useLocale } from "@/providers/locale-provider"

const appUrl = process.env.NEXT_PUBLIC_APP_URL
const defaultLocale = "en"

export const useRoutes = () => {
  const { locale } = useLocale()

  return {
    home: () => `/`,
    pricing: () => `/pricing`,
    contact: () => `/contact`,
    about: () => `/about`,
    login: () => `${appUrl}/${locale}/login`,
    register: () => `${appUrl}/${locale}/register`,
    subscription: () => `${appUrl}/${locale}/subscription`,
    proposal: () => `${appUrl}/${locale}/proposal`,
    terms: () => `/legal/terms-of-service`,
    privacy: () => `/legal/privacy-policy`,
    cookie: () => `/legal/cookie-policy`,
  }
}
