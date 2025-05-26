"use client"

import { Icon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Slider from "@/components/ui/Slider"
import { useRoutes } from "@/hooks/use-localized-routes"
import { useTranslations } from "next-intl"
import Link from "next/link"

const images = [
  "/images/slider/telemedicine_1.webp",
  "/images/slider/telemedicine_2.webp",
  "/images/slider/telemedicine_3.webp",
  "/images/slider/telemedicine_4.webp",
  "/images/slider/telemedicine_5.webp",
  "/images/slider/telemedicine_6.webp",
]

export default function LandingPage() {
  const t = useTranslations()
  const routes = useRoutes()

  const features = [
    {
      title: t("home.features.onlineConsultationsTitle"),
      description: t("home.features.onlineConsultationsDesc"),
      icon: "message-square",
    },
    {
      title: t("home.features.qualifiedProfessionalsTitle"),
      description: t("home.features.qualifiedProfessionalsDesc"),
      icon: "doctor",
    },
    {
      title: t("home.features.digitalRecordsTitle"),
      description: t("home.features.digitalRecordsDesc"),
      icon: "file-text",
    },
    {
      title: t("home.features.digitalPrescriptionsTitle"),
      description: t("home.features.digitalPrescriptionsDesc"),
      icon: "prescription",
    },
    {
      title: t("home.features.medicationRemindersTitle"),
      description: t("home.features.medicationRemindersDesc"),
      icon: "clock",
    },
    {
      title: t("home.features.examResultsTitle"),
      description: t("home.features.examResultsDesc"),
      icon: "lab-result",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative p-0">
        <Slider images={images}>
          <div className="h-full container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 -mt-15">
              <div className="flex flex-col justify-center space-y-12">
                <div className="space-y-8">
                  <h1 className="text-3xl text-white text-shadow-lg font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                    {t("home.heroTitle")}
                  </h1>
                  <p className="max-w-[600px] text-white text-shadow-md md:text-xl">{t("home.heroDescription")}</p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link href={routes.register()}>
                    <Button size="lg" className="bg-primary-9 hover:bg-primary-10">
                      {t("cta.startNow")}
                    </Button>
                  </Link>
                  <Link href={routes.login()}>
                    <Button size="lg" variant="outline">
                      {t("cta.login")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* Features Section */}
      <section className="bg-system-1 py-20">
        <div className="container mx-auto px-6 md:px-14">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("home.whyChoose")}</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-system-11 md:text-xl">{t("home.whyChooseDescription")}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg border border-system-5 bg-system-2 p-6 text-center"
              >
                <div className="mb-4 rounded-full bg-primary-2 p-3">
                  <Icon name={feature.icon as any} className="h-6 w-6 text-primary-9" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-system-11">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-9 py-20 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("home.readyToStart")}</h2>
            <p className="mx-auto max-w-[700px] md:text-xl">{t("home.joinThousands")}</p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={routes.register()}>
                <Button size="lg" variant="secondary">
                  {t("cta.createAccount")}
                </Button>
              </Link>
              <Link href={routes.login()}>
                <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
                  {t("cta.login")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
