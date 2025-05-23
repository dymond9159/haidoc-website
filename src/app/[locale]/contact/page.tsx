"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function ContactPage() {
  const t = useTranslations("contact")
  const [status, setStatus] = useState<null | "success" | "error">(null)

  return (
    <div className="flex flex-col gap-16 py-12">
      <section className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl font-bold mb-4">{t("pageTitle")}</h1>
        <p className="text-lg text-system-11 mb-8">{t("pageDescription")}</p>
      </section>
      <section className="container mx-auto px-6 md:px-12 grid gap-12 md:grid-cols-2">
        <form
          className="flex flex-col gap-4 p-8 rounded-lg border shadow"
          onSubmit={(e) => {
            e.preventDefault()
            setStatus("success") // Placeholder for now
          }}
        >
          <label className="text-left font-medium">
            {t("form.name")}
            <Input className="w-full mt-1 p-2 border rounded" type="text" name="name" required />
          </label>
          <label className="text-left font-medium">
            {t("form.email")}
            <Input className="w-full mt-1 p-2 border rounded" type="email" name="email" required />
          </label>
          <label className="text-left font-medium">
            {t("form.message")}
            <Textarea className="w-full mt-1 p-2 border rounded" name="message" rows={5} required />
          </label>
          <Button type="submit" className="bg-primary-9 hover:bg-primary-10 text-white py-2 rounded font-semibold">
            {t("form.submit")}
          </Button>
          {status === "success" && <p className="text-green-600 mt-2">{t("form.success")}</p>}
          {status === "error" && <p className="text-red-600 mt-2">{t("form.error")}</p>}
        </form>
        <div className="flex flex-col gap-4 justify-center p-8 rounded-lg ">
          <h2 className="text-2xl font-semibold mb-2">{t("infoTitle")}</h2>
          <div className="text-left">
            <p>
              <span className="font-medium">{t("email")}:</span> {t("emailValue")}
            </p>
            <p>
              <span className="font-medium">{t("phone")}:</span> {t("phoneValue")}
            </p>
            <p>
              <span className="font-medium">{t("address")}:</span> {t("addressValue")}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
