"use client"

import { Languages } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const { language } = useLanguage()
  const currentFromPath = pathname?.split("/")[1]
  const currentLanguage = currentFromPath === "en" || currentFromPath === "es" ? currentFromPath : language
  const nextLang = currentLanguage === "en" ? "es" : "en"
  const title = currentLanguage === "en" ? "Cambiar a Español" : "Switch to English"

  const handleToggle = () => {
    const normalizedPath = pathname || "/"
    const withoutLang = normalizedPath.replace(/^\/(en|es)(?=\/|$)/, "") || "/"
    const destination = `/${nextLang}${withoutLang === "/" ? "" : withoutLang}`
    const query = typeof window !== "undefined" ? window.location.search : ""
    const href = query ? `${destination}${query}` : destination

    router.push(href)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={handleToggle}
    >
      <div title={title}>
        <div className="flex items-center justify-center gap-1">
          <Languages className="h-4 w-4" />
          <span className="text-xs font-medium">
            {currentLanguage === "en" ? "ES" : "EN"}
          </span>
        </div>
        <span className="sr-only">Toggle language</span>
      </div>
    </Button>
  )
}
