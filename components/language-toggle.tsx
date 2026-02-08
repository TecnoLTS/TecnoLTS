"use client"

import { Languages } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const nextLang = language === "en" ? "es" : "en"
  const title = language === "en" ? "Cambiar a Español" : "Switch to English"

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={() => setLanguage(nextLang)}
    >
      <div title={title}>
        <div className="flex items-center justify-center gap-1">
          <Languages className="h-4 w-4" />
          <span className="text-xs font-medium">
            {language === "en" ? "ES" : "EN"}
          </span>
        </div>
        <span className="sr-only">Toggle language</span>
      </div>
    </Button>
  )
}
