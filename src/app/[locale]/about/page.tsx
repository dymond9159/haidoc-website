"use client"

import { Button } from "@/components/ui/button"
import { routes } from "@/lib/router"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function AboutPage() {
  const t = useTranslations("about")
  return (
    <div className="flex flex-col gap-16 py-12">
      <section className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl font-bold mb-4">{t("pageTitle")}</h1>
        <p className="text-lg text-system-11 mb-8">{t("pageDescription")}</p>
      </section>
      <section className="container mx-auto px-6 md:px-12 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{t("missionTitle")}</h2>
          <p className="text-system-11 mb-6">{t("missionDesc")}</p>
          <h2 className="text-2xl font-semibold mb-2">{t("visionTitle")}</h2>
          <p className="text-system-11 mb-6">{t("visionDesc")}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">{t("valuesTitle")}</h2>
          <ul className="list-disc list-inside text-system-11 space-y-2">
            {t.raw("values").map((value: string, idx: number) => (
              <li key={idx}>{value}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">{t("teamTitle")}</h2>
        <p className="text-system-11 mb-6">{t("teamDesc")}</p>
      </section>
      <section className="container mx-auto px-6 md:px-12 text-center">
        <Link href={routes.contact()}>
          <Button size="lg" className="bg-primary-9 hover:bg-primary-10">
            {t("contactCta")}
          </Button>
        </Link>
      </section>
    </div>
  )
}
