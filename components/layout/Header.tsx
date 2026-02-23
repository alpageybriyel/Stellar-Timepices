"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, Menu, X, Search, Facebook, Instagram } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || isMobileMenuOpen 
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4" 
          : "bg-transparent py-8"
      )}
    >
      <div className="mx-auto max-w-7xl px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 group flex items-center">
          <Image
            src="/stellarblack.png"
            alt="Stellar"
            width={400}
            height={260}
            className="h-14 md:h-20 w-auto object-contain transition-all duration-500"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative font-oswald text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-accent group",
                pathname === item.href ? "text-accent" : "text-foreground"
              )}
            >
              {item.name === "Shop" ? "Collections" : item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full",
                pathname === item.href && "w-full"
              )} />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/contact">
            <Button size="sm" className="h-10 px-8 text-[10px] tracking-[0.2em]">
              CONTACT
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background border-t border-border overflow-hidden md:hidden"
          >
            <nav className="flex flex-col p-8 gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-oswald text-lg font-bold tracking-widest uppercase transition-colors hover:text-accent",
                    pathname === item.href ? "text-accent" : "text-foreground"
                  )}
                >
                  {item.name === "Shop" ? "Collections" : item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-4">CONTACT</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
