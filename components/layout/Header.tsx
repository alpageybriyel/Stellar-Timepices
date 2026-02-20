"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, Menu, X, Search, Facebook, Instagram } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

import Image from "next/image"

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
          ? "bg-[#1d2c48] border-b border-white/5 py-4 shadow-xl" 
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 group flex items-center">
          <Image
            src="/stellar.png"
            alt="Stellar"
            width={310}
            height={200}
            className="h-16 w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative font-oswald text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:text-gold group",
                pathname === item.href ? "text-gold" : "text-white/80"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full",
                pathname === item.href && "w-full"
              )} />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
            <a 
              href="https://www.facebook.com/profile.php?id=61563499544853" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold transition-colors duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/stellartimepieces_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.tiktok.com/@stellartimepieces" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold transition-colors duration-300"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <button className="relative group p-2">
            <Search className="w-5 h-5 text-white/80 transition-all duration-300 group-hover:text-gold group-hover:scale-110" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-white p-2"
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
            className="absolute top-full left-0 right-0 glass border-t border-white/5 overflow-hidden md:hidden"
          >
            <nav className="flex flex-col p-8 gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-oswald text-xl font-bold tracking-widest uppercase transition-colors hover:text-gold",
                    pathname === item.href ? "text-gold" : "text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
