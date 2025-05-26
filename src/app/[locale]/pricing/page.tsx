"use client"

import { useTranslations } from "next-intl"

import { PricingPatient } from "@/components/pricing/pricing-patient"
import { PricingProvider } from "@/components/pricing/pricing-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

enum PlanCategory {
  Provider = "provider",
  Patient = "patient",
}

export default function PlansPage() {
  const t = useTranslations("pricing")

  return (
    <div className="space-y-0">
      <div className="w-full p-4">
        <Tabs defaultValue={PlanCategory.Provider}>
          <TabsList variant="rounded" className="mx-auto">
            <TabsTrigger variant="rounded" value={PlanCategory.Provider}>
              {t("tabs.provider")}
            </TabsTrigger>
            <TabsTrigger variant="rounded" value={PlanCategory.Patient}>
              {t("tabs.patient")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value={PlanCategory.Provider}>
            <PricingProvider />
          </TabsContent>
          <TabsContent value={PlanCategory.Patient}>{<PricingPatient />}</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
