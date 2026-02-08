"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ScrollToTopButton() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      const maxScroll = doc.scrollHeight - window.innerHeight
      const percent = maxScroll > 0 ? window.scrollY / maxScroll : 0
      setVisible(percent >= 0.15)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <a
        href="#top"
        className="relative bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label={t.ui.scrollTopAria}
      >
        <ArrowUp className="w-5 h-5 relative z-10" />
        <span className="absolute right-full mr-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl border border-gray-700">
          {t.ui.scrollTopText}
        </span>
      </a>
    </div>
  )
}
