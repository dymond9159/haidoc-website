"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import config from "@/config"
import { MapPinIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function ContactPage() {
  const t = useTranslations("contact")
  const [status, setStatus] = useState<null | "success" | "error">(null)

  const encodedAddress = encodeURIComponent(config.address ?? "")
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${config.googleMapsApiKey}&q=${encodedAddress}&zoom=15`

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
        <div className="flex flex-col gap-4 px-8 rounded-lg space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-2">{t("infoTitle")}</h2>
            <div className="text-left space-y-2">
              <div>
                <span className="font-medium">{t("email")}:</span>{" "}
                <a href={`mailto:${config.supportEmail}`} className="text-secondary hover:underline">
                  {config.supportEmail}
                </a>
              </div>
              <div>
                <span className="font-medium">{t("phone")}:</span>{" "}
                <a href={`tel:${config.phone}`} className="text-secondary hover:underline">
                  {config.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="contact-map-container space-y-4">
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <div className="mb-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline flex flex-row gap-2 items-start"
              >
                <div className="mt-1">
                  <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                </div>
                {config.address}
              </a>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Google Map of our location"
                src={mapSrc}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
