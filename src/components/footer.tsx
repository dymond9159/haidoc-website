import { routes } from "@/lib/router"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  const t = useTranslations("footer")
  const tHeader = useTranslations("header")
  return (
    <footer className="border-t border-system-5 bg-system-2 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo size="sm" className="-ml-4 mb-4" />
            <p className="text-sm text-system-10">{t("description")}</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">{t("quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={routes.home()} className="text-system-11 hover:text-primary-9">
                  {tHeader("navMenu.home")}
                </Link>
              </li>
              <li>
                <Link href={routes.about()} className="text-system-11 hover:text-primary-9">
                  {tHeader("navMenu.about")}
                </Link>
              </li>
              <li>
                <Link href={routes.pricing()} className="text-system-11 hover:text-primary-9">
                  {tHeader("navMenu.pricing")}
                </Link>
              </li>
              <li>
                <Link href={routes.contact()} className="text-system-11 hover:text-primary-9">
                  {tHeader("navMenu.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">{t("legal")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={routes.privacy()} className="text-system-11 hover:text-primary-9">
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href={routes.terms()} className="text-system-11 hover:text-primary-9">
                  {t("termsOfService")}
                </Link>
              </li>
              <li>
                <Link href={routes.cookie()} className="text-system-11 hover:text-primary-9">
                  {t("cookiePolicy")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">{t("contactUs")}</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-system-11 hover:text-primary-9">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-system-11 hover:text-primary-9">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-system-11 hover:text-primary-9">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-sm text-system-10">{t("contactUsAt")}</p>
              <p className="text-sm font-medium">support@hai-doc.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-system-5 pt-8 text-center text-sm text-system-10">
          <p>
            &copy; {new Date().getFullYear()} HaiDoc. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
