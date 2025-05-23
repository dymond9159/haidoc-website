const appUrl = process.env.NEXT_PUBLIC_APP_URL

export const routes = {
  home: () => "/",
  pricing: () => "/pricing",
  contact: () => "/contact",
  about: () => "/about",
  login: () => `${appUrl}/login`,
  register: () => `${appUrl}/register`,
  subscription: () => `${appUrl}/subscription`,
  proposal: () => `${appUrl}/proposal`,
  terms: () => "/legal/terms-of-service",
  privacy: () => "/legal/privacy-policy",
  cookie: () => "/legal/cookie-policy",
}
