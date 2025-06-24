import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Suspense, type ReactNode } from "react"
import { Loading } from "../common"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-system-0">
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="overflow-y-hidden">
          <ScrollArea className="h-full">
            {children}
            <Footer />
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </main>
      </Suspense>
    </div>
  )
}
