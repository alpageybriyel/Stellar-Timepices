"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const toastOptions: ToasterProps = {
  position: "bottom-right",
  closeButton: true,
  richColors: true,
}

export function Toaster() {
  const { theme } = useTheme()

  return (
    <Sonner theme={theme === "dark" ? "dark" : "light"} {...toastOptions} />
  )
}
