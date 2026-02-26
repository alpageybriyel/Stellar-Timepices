import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Award, Users, MapPin, Search } from "lucide-react"
import { VideoShowcase } from "@/components/ui/video-showcase"
import { FadeIn } from "@/components/ui/fade-in"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#111111 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
        
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.6em] uppercase block mb-8">Established 2024</span>
            <h1 className="font-serif text-6xl md:text-9xl tracking-tight leading-none text-foreground">
              The Stellar <br /> <span className="italic">Story</span>
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* Founder Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="space-y-12 order-2 lg:order-1">
            <FadeIn direction="right">
              <div className="space-y-6">
                <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.4em] uppercase block">Visionary</span>
                <h2 className="font-serif text-5xl md:text-7xl text-foreground leading-tight tracking-tight">
                  Chad Allen <br /> <span className="italic">Salita</span>
                </h2>
              </div>
              
              <div className="space-y-8 text-muted-foreground leading-relaxed font-poppins text-lg max-w-xl">
                <p>
                  Stellar Timepieces isn&apos;t just a business for Chad Allen Salita; it&apos;s a lifelong obsession turned into a legacy. Chad recognized a void in the market for a truly trust-driven luxury watch experience.
                </p>
                <p>
                  Based in <span className="font-bold text-foreground">General Trias, Cavite</span>, he has built more than just a boutique—he has fostered a community of over <span className="font-bold text-foreground">80,000 collectors</span>.
                </p>
                <blockquote className="border-l border-accent pl-8 py-4 italic text-foreground font-serif text-2xl">
                  &quot;We don&apos;t just sell watches. We establish trust globally.&quot;
                </blockquote>
              </div>
            </FadeIn>
          </div>
          
          <div className="order-1 lg:order-2">
            <FadeIn direction="left" className="relative">
               <div className="relative aspect-[4/5] bg-card border border-border p-4 rounded-[6px]">
                  <Image 
                    src="/chad.jpg"
                    alt="Chad Allen Salita - Founder of Stellar Timepieces"
                    fill
                    className="object-cover rounded-[4px]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Floating ID Card Style Badge */}
                  <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-card border border-border p-6 md:p-10 rounded-[6px] shadow-2xl">
                    <p className="font-oswald text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Curator In Chief</p>
                    <div className="w-8 md:w-12 h-px bg-accent mt-2 md:mt-4" />
                  </div>
               </div>
            </FadeIn>
          </div>
        </section>

        {/* Values Grid */}
        <section className="mb-40">
          <div className="text-center mb-24 space-y-4">
             <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.5em] uppercase block">Our Essence</span>
             <h2 className="font-serif text-4xl md:text-6xl text-foreground tracking-tight">Business <span className="italic">Values</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                icon: <Users className="w-6 h-6" />, 
                title: "80K+ Strong", 
                desc: "One of the largest organized horological communities in the region." 
              },
              { 
                icon: <MapPin className="w-6 h-6" />, 
                title: "Cavite Base", 
                desc: "Strategically headquartered in General Trias for personalized service." 
              },
              { 
                icon: <Award className="w-6 h-6" />, 
                title: "Absolute Provenance", 
                desc: "Zero tolerance for non-authentic items, backed by individual curation." 
              },
              { 
                icon: <Search className="w-6 h-6" />, 
                title: "Private Sourcing", 
                desc: "Chad personally handles the acquisition of rare pieces globally." 
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-card p-12 rounded-[12px] border border-border hover:border-accent transition-all duration-500 group">
                <div className="mb-8 text-accent group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-oswald text-xs font-bold uppercase mb-4 text-foreground tracking-widest">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-poppins leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>

      {/* Video Showcase Section */}
      <VideoShowcase 
        title="Experience the Curation" 
        subtitle="Inside the Stellar Vault with Chad Allen Salita"
        videoUrl="https://www.youtube.com/watch?v=0OQS68dF5f0"
        autoplay={true}
      />

      {/* Philosophy Section */}
      <div className="max-w-7xl mx-auto px-6 py-40">
        <section className="bg-card p-16 lg:p-32 rounded-[20px] border border-border relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <Image src="/stellar.png" alt="" fill className="object-contain brightness-0 dark:invert p-40" />
          </div>
          
          <div className="relative z-10 space-y-12 max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-7xl text-foreground tracking-tight leading-tight">
              Defining the <span className="italic">Standard</span> of Trust
            </h2>
            <div className="space-y-8 text-muted-foreground font-poppins leading-relaxed text-xl">
              <p>
                At Stellar Timepieces, our philosophy is simple: we treat every client like a fellow collector. We understand the weight of these investments—both financial and emotional.
              </p>
              <p>
                Whether you are unboxing your first Rolex or consigning a Patek Philippe, our team ensures the process is seamless, secure, and purely horological.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
