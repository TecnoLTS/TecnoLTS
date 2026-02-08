"use client"

import { Languages } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function LanguageToggle({ lang }: { lang: "en" | "es" }) {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith("/es") ? "es" : "en"
  const effectiveLang = lang ?? currentLang
  const nextLang = effectiveLang === "en" ? "es" : "en"
  const title = effectiveLang === "en" ? "Cambiar a Español" : "Switch to English"

  return (
    <Button
      variant="ghost"
      size="icon"
      asChild
      className="h-9 w-9"
    >
      <Link href={`/${nextLang}`} title={title} prefetch>
        <div className="flex items-center justify-center gap-1">
          <Languages className="h-4 w-4" />
          <span className="text-xs font-medium">
            {effectiveLang === "en" ? "ES" : "EN"}
          </span>
        </div>
        <span className="sr-only">Toggle language</span>
      </Link>
    </Button>
  )
}
