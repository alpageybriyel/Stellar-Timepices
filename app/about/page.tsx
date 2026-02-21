import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Facebook, Instagram, Award, Users, MapPin, Search } from "lucide-react"
import { VideoShowcase } from "@/components/ui/video-showcase"
import { FadeIn } from "@/components/ui/fade-in"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1d2c48] z-0" />
        <div className="absolute left-[-10%] top-0 font-oswald text-[30vw] font-black text-white/5 select-none pointer-events-none uppercase leading-none">
          Legacy
        </div>
        
        <div className="relative z-10 text-center text-white px-6 space-y-6">
          <FadeIn>
            <span className="font-oswald text-[#f0ae22] text-xs font-bold tracking-[0.5em] uppercase block mb-4">Establishing Excellence</span>
            <h1 className="font-oswald text-5xl md:text-8xl font-bold uppercase tracking-widest leading-none">
              The <span className="text-[#f0ae22]">Stellar</span> <br /> Story
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Founder Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-32">
          <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
            <FadeIn direction="right">
              <div className="space-y-6">
                <span className="font-oswald text-[#f0ae22] text-xs font-bold tracking-[0.4em] uppercase block">MEET THE FOUNDER</span>
                <h2 className="font-oswald text-4xl md:text-5xl font-bold text-[#1d2c48] uppercase leading-tight">
                  Chad Allen <br /> <span className="text-[#f0ae22]">Salita</span>
                </h2>
                <div className="w-20 h-1 bg-[#f0ae22]" />
              </div>
              
              <div className="space-y-6 text-[#1d2c48]/70 leading-relaxed font-poppins text-lg">
                <p>
                  Stellar Timepieces isn&apos;t just a business for Chad Allen Salita; it&apos;s a lifelong obsession turned into a legacy. Beginning as a private collector with an eye for rare provenance, Chad recognized a void in the market for a truly trust-driven luxury watch experience in the Philippines.
                </p>
                <p>
                  Based in <span className="font-bold text-[#1d2c48]">General Trias, Cavite</span>, he has built more than just a boutique—he has fostered a community. Today, Chad leads a movement of over <span className="font-bold text-[#1d2c48]">80,000 collectors</span>, personally curating every piece that enters the Stellar vault.
                </p>
                <blockquote className="border-l-4 border-[#f0ae22] pl-6 py-2 italic text-[#1d2c48] font-medium">
                  &quot;We don&apos;t just sell watches. We establish trust. Every timepiece carries a story, and we are here to ensure that story continues with absolute authenticity.&quot;
                </blockquote>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeIn direction="left" className="relative group">
               <div className="absolute -top-6 -right-6 w-1/2 h-1/2 bg-[#f0ae22]/10 -z-10" />
               <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-[#1d2c48]/5 -z-10" />
               
               <div className="relative aspect-[4/5] border-2 border-gray-100 p-3 group-hover:border-[#f0ae22] transition-colors duration-700">
                  <Image 
                    src="/chad-salita.jpg"
                    alt="Chad Allen Salita - Founder of Stellar Timepieces"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle Badge */}
                  <div className="absolute bottom-10 right-10 bg-[#1d2c48] text-white p-6 shadow-2xl">
                    <p className="font-oswald text-xs font-bold uppercase tracking-[0.2em]">Curator In Chief</p>
                  </div>
               </div>
            </FadeIn>
          </div>
        </section>

        {/* Trivia & Milestones Grid */}
        <section className="mb-32">
          <div className="text-center mb-16 space-y-4">
             <span className="font-oswald text-[#f0ae22] text-xs font-bold tracking-[0.5em] uppercase block">THE STELLAR ARCHIVE</span>
             <h2 className="font-oswald text-4xl font-bold text-[#1d2c48] uppercase tracking-widest">Business Trivia</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Users className="w-6 h-6" />, 
                title: "80K+ Strong", 
                desc: "One of the largest organized horological communities in the region." 
              },
              { 
                icon: <MapPin className="w-6 h-6" />, 
                title: "Cavite Base", 
                desc: "Strategically headquartered in General Trias for personalized viewing experiences." 
              },
              { 
                icon: <Award className="w-6 h-6" />, 
                title: "100% Provenance", 
                desc: "Zero tolerance for non-authentic items, backed by individual curation by Chad." 
              },
              { 
                icon: <Search className="w-6 h-6" />, 
                title: "Private Sourcing", 
                desc: "Chad personally handles the acquisition of rare pieces from global private collections." 
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-gray-50 p-10 border border-gray-100 hover:border-[#f0ae22] transition-all duration-500 group">
                <div className="mb-6 text-[#1d2c48] group-hover:text-[#f0ae22] transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-oswald text-xl font-bold uppercase mb-4 text-[#1d2c48] tracking-wide">{item.title}</h3>
                <p className="text-sm text-[#1d2c48]/60 font-poppins leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>

      {/* Video Showcase Section */}
      <VideoShowcase 
        title="Experience the Curation" 
        subtitle="Inside the Stellar Vault with Chad Allen Salita"
      />

      {/* Philosophy Section */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <section className="bg-gray-50 p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-[0.03] rotate-[-5deg] translate-x-1/4 translate-y-1/4">
            <Image src="/stellar.png" alt="" width={600} height={200} className="brightness-0" />
          </div>
          
          <div className="relative z-10 space-y-12 max-w-3xl">
            <h2 className="font-oswald text-3xl md:text-5xl font-bold text-[#1d2c48] uppercase tracking-tighter leading-none">
              Defining the <span className="text-[#f0ae22]">Standard</span> of Trust
            </h2>
            <div className="space-y-6 text-[#1d2c48]/70 font-poppins leading-loose text-lg">
              <p>
                At Stellar Timepieces, our philosophy is simple: we treat every client like a fellow collector. We understand the weight of these investments—both financial and emotional.
              </p>
              <p>
                Whether you are unboxing your first Rolex or consigning a Patek Philippe, Chad Allen Salita and the Stellar team ensure the process is seamless, secure, and purely horological.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
