import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

import { PreFooterCTA } from "./PreFooterCTA"

export function Footer() {
  return (
    <>
      <PreFooterCTA />
      <footer className="bg-secondary text-secondary-foreground pt-24 pb-12 border-t border-border/20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Brand */}
        <div className="md:col-span-4 space-y-8">
          <Link href="/" className="inline-block group">
            <Image
              src="/stellar.png"
              alt="Stellar"
              width={200}
              height={60}
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-secondary-foreground/40 font-poppins text-sm leading-relaxed max-w-sm tracking-wide">
            Defining the pinnacle of horological excellence. We curate only the most exceptional timepieces for those who demand nothing less than perfection.
          </p>
          <div className="flex gap-4 pt-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61563499544853" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/40 hover:text-accent hover:border-accent transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/stellartimepieces_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/40 hover:text-accent hover:border-accent transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@stellartimepieces" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/40 hover:text-accent hover:border-accent transition-all duration-300"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-2 space-y-8">
          <h3 className="font-oswald text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Collection</h3>
          <ul className="space-y-4">
            {["All Watches", "Rolex", "Patek Philippe", "Audemars Piguet"].map((link) => (
              <li key={link}>
                <Link href="/shop" className="text-secondary-foreground/30 hover:text-accent transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 space-y-8">
          <h3 className="font-oswald text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Explorer</h3>
          <ul className="space-y-4">
            {["About Us", "Our Heritage", "Authentication", "Contact"].map((link) => (
              <li key={link}>
                <Link href="/about" className="text-secondary-foreground/30 hover:text-accent transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-4 space-y-8">
          <h3 className="font-oswald text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Newsletter</h3>
          <p className="text-secondary-foreground/40 font-poppins text-sm tracking-wide">Stay informed about our latest acquisitions and exclusive events.</p>
          <div className="relative">
            <Input 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-b border-secondary-foreground/10 border-t-0 border-x-0 text-secondary-foreground placeholder:text-secondary-foreground/20 focus-visible:ring-0 focus:border-accent px-0 h-12 rounded-none transition-all duration-500"
            />
            <Button variant="link" className="absolute right-0 top-0 h-12 text-accent font-oswald text-[10px] font-bold uppercase tracking-[0.2em] hover:text-secondary-foreground p-0">
              JOIN
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-24 pt-8 border-t border-secondary-foreground/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-secondary-foreground/20 text-[10px] font-bold tracking-[0.2em] uppercase">© 2026 STELLAR TIMEPIECES. DEFINING TIME.</p>
        <div className="flex gap-8">
          <Link href="#" className="text-secondary-foreground/20 hover:text-secondary-foreground text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">Privacy</Link>
          <Link href="#" className="text-secondary-foreground/20 hover:text-secondary-foreground text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">Terms</Link>
        </div>
      </div>
      </footer>
    </>
  )
}
