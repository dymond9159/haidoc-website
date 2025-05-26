"use client"

import { Button } from "@/components/ui/button"
import { useRoutes } from "@/hooks/use-localized-routes"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useRouter } from "nextjs-toploader/app"
import { useMobile } from "../hooks/use-mobile"
import { LanguageSwitcher } from "./common/language-switcher"
import { Logo } from "./logo"

interface NavItem {
  label: string
  href: string
}

export function Header() {
  const t = useTranslations("header")
  const routes = useRoutes()

  const router = useRouter()
  const isMobile = useMobile()

  const navItems: NavItem[] = [
    {
      label: t("navMenu.home"),
      href: routes.home(),
    },
    {
      label: t("navMenu.pricing"),
      href: routes.pricing(),
    },
    {
      label: t("navMenu.contact"),
      href: routes.contact(),
    },
    {
      label: t("navMenu.about"),
      href: routes.about(),
    },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-system-5 bg-system-1">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="w-full flex items-center justify-between gap-4">
          <Logo size="sm" />
          {!isMobile && (
            <nav className="flex-1 flex items-center justify-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-secondary-11 hover:text-secondary-11",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          {!isMobile && (
            <>
              <Button onClick={() => router.push(routes.login())}>{t("cta.login")}</Button>
              <Button variant="ghost" onClick={() => router.push(routes.register())}>
                {t("cta.register")}
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
