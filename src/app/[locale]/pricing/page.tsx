"use client"

import { useTranslations } from "next-intl"
import { useRouter } from "nextjs-toploader/app"

import { PlanCard } from "@/components/cards"
import { PlanList } from "@/lib/constants"
import { routes } from "@/lib/router"
import { PlanType } from "@/types"

export default function PlansPage() {
  const router = useRouter()
  const t = useTranslations("pricing")

  const handleContinue = (type: PlanType) => {
    switch (type) {
      case PlanType.Business:
        router.push(routes.login())
        break
      case PlanType.BusinessPlus:
        router.push(routes.subscription())
        break
      case PlanType.Company:
        router.push(routes.proposal())
        break
    }
  }

  return (
    <div className="space-y-0">
      {/* Header with background */}
      <div className="h-[200px] md:h-[240px] py-10 px-2 md:px-10 bg-secondary-4 bg-[url(/images/haidoc-banner.svg)] bg-cover bg-center">
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-xl sm:text-2xl md:text-3xl font-bold">{t("pageTitle")}</h1>
          <p className="mx-auto max-w-2xl text-center font-medium">{t("pageDescription")}</p>
        </div>
      </div>
      {/* Plans Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y gap-5 p-6 -mt-[50px] md:-mt-[95px] ">
        {PlanList.map((plan, index) => (
          <PlanCard
            key={index}
            titleKey={plan.titleKey}
            priceKey={plan.priceKey}
            currencyKey={plan?.currency}
            periodKey={plan?.period}
            featuresKeys={plan.featuresKeys}
            onContinue={() => handleContinue(plan.type)}
          />
        ))}
      </div>
    </div>
  )
}
