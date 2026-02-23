import "./globals.css"
import type { Metadata } from "next"
import { Oswald, Poppins, Playfair_Display } from "next/font/google"
import { Providers } from "@/components/providers"
import { Toaster } from "@/components/ui/sonner"
import { BackToTop } from "@/components/ui/back-to-top"

export const metadata: Metadata = {
  title: "Stellar Timepieces",
  description: "Defining the pinnacle of horological excellence.",
  icons: {
    icon: "/stellar.png",
  },
}

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.variable} ${poppins.variable} ${playfair.variable} font-sans antialiased text-foreground bg-background`}>
        <Providers>
          {children}
          <BackToTop />
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
