import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Facebook, Instagram } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <Image
          src=""
          alt="Watchmaker"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1d2c48]/80" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-oswald text-5xl md:text-6xl font-bold uppercase tracking-widest mb-4">
            Our Heritage
          </h1>
          <p className="font-poppins text-lg max-w-2xl mx-auto text-white/80">
            A legacy of precision, passion, and unparalleled luxury since 1985.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-24">
        
        {/* Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-oswald text-3xl font-bold text-[#1d2c48] uppercase">
              The Standard of Excellence
            </h2>
            <div className="w-16 h-1 bg-[#f0ae22]" />
            <p className="text-[#1d2c48]/70 leading-relaxed font-poppins">
              StellarTime was founded with a singular mission: to provide collectors and enthusiasts with access to the world&apos;s most exquisite timepieces. We believe that a luxury watch is not merely an accessory, but a testament to human ingenuity and artistry.
            </p>
            <p className="text-[#1d2c48]/70 leading-relaxed font-poppins">
              Our team of expert horologists rigorously inspects every piece that enters our vault, ensuring that authenticity and quality are never compromised.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] bg-gray-100">
             <Image 
               src=""
               alt="Luxury Watch Detail"
               fill
               className="object-cover"
             />
          </div>
        </section>

        {/* Values */}
        <section className="bg-gray-50 p-12 -mx-6 md:-mx-12 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-3xl font-bold text-[#1d2c48] uppercase">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#1d2c48] text-[#f0ae22] flex items-center justify-center mx-auto text-2xl font-bold font-oswald rounded-none">
                01
              </div>
              <h3 className="font-oswald text-xl font-bold uppercase">Authenticity</h3>
              <p className="text-sm text-[#1d2c48]/60 font-medium">
                we guarantee the provenance and originality of every timepiece we sell.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#1d2c48] text-[#f0ae22] flex items-center justify-center mx-auto text-2xl font-bold font-oswald rounded-lg">
                02
              </div>
              <h3 className="font-oswald text-xl font-bold uppercase">Expertise</h3>
              <p className="text-sm text-[#1d2c48]/60 font-medium">
                Our team consists of certified watchmakers and industry veterans.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#1d2c48] text-[#f0ae22] flex items-center justify-center mx-auto text-2xl font-bold font-oswald rounded-lg">
                03
              </div>
              <h3 className="font-oswald text-xl font-bold uppercase">Service</h3>
              <p className="text-sm text-[#1d2c48]/60 font-medium">
                We are dedicated to providing a seamless and personalized experience.
              </p>
            </div>
          </div>
        </section>

        {/* Social */}
        <section className="text-center space-y-8 pt-12">
            <h2 className="font-oswald text-2xl font-bold text-[#1d2c48] uppercase tracking-widest">Connect With Us</h2>
            <div className="flex justify-center gap-6">
                <a href="https://www.facebook.com/profile.php?id=61563499544853" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-gray-100 flex items-center justify-center text-[#1d2c48] hover:text-gold hover:border-gold transition-all duration-300">
                    <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/stellartimepieces_/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-gray-100 flex items-center justify-center text-[#1d2c48] hover:text-gold hover:border-gold transition-all duration-300">
                    <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@stellartimepieces" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-gray-100 flex items-center justify-center text-[#1d2c48] hover:text-gold hover:border-gold transition-all duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                </a>
            </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}
