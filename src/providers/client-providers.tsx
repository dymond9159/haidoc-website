"use client"

import { ThemeProvider } from "@/providers/theme-provider"
import type { ReactNode } from "react"

import { MainLayout } from "@/components/layouts/main-layout"
import { ToastProvider } from "@/components/ui/toast"

interface ProvidersProps {
  children: ReactNode
}

export function ClientProviders({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange>
      <ToastProvider>
        <MainLayout>{children}</MainLayout>
      </ToastProvider>
    </ThemeProvider>
  )
}
