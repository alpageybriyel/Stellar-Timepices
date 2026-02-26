"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { MapPin, Mail, Clock, Facebook, Instagram } from "lucide-react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Message sent successfully!")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Header */}
      <div className="bg-background text-foreground pt-48 pb-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#111111 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10">
          <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">Get in Touch</span>
          <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-none mb-4 text-foreground">
            Contact <span className="italic">Stellar</span>
          </h1>
          <p className="mt-8 text-muted-foreground font-poppins text-lg max-w-xl mx-auto leading-relaxed">
            We are here to assist you with any inquiries regarding our world-class collection or bespoke services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Contact Info */}
        <div className="space-y-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.4em] uppercase block">Boutique</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight">
                Showroom <span className="italic">Service</span>
              </h2>
            </div>
            <p className="text-muted-foreground font-poppins text-lg leading-relaxed max-w-md">
              Visit our flagship sanctuary to experience our collection in person. Appointments are recommended for personalized consultations.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-oswald text-[10px] font-bold uppercase tracking-widest text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed font-poppins">
                  General Trias, Cavite<br />
                  Philippines
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-oswald text-[10px] font-bold uppercase tracking-widest text-foreground mb-1">Digital</h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed font-poppins">
                  stellartimepieces@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-oswald text-[10px] font-bold uppercase tracking-widest text-foreground mb-1">Inquiry Hours</h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed font-poppins">
                  Mon - Sun: 9:00 AM - 10:00 PM<br />
                  Appointments Recommended
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-border space-y-8">
            <h3 className="font-oswald text-[10px] font-bold text-foreground uppercase tracking-widest">Connect Electronically</h3>
            <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61563499544853" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-border rounded-full flex items-center justify-center text-foreground hover:text-accent hover:border-accent transition-all duration-500">
                    <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/stellartimepieces_/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-border rounded-full flex items-center justify-center text-foreground hover:text-accent hover:border-accent transition-all duration-500">
                    <Instagram className="w-5 h-5" />
                </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border p-10 md:p-16 rounded-[12px] shadow-sm">
          <div className="mb-12">
            <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Direct Message</span>
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              Inquiry <span className="italic">Portal</span>
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest font-oswald">Name</label>
                <Input required className="bg-muted border-border h-12 rounded-[6px] text-foreground" placeholder="YOUR NAME" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest font-oswald">Email</label>
                <Input type="email" required className="bg-muted border-border h-12 rounded-[6px] text-foreground" placeholder="YOUR EMAIL" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest font-oswald">Subject</label>
              <select className="flex h-12 w-full rounded-[6px] border border-border bg-muted px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-foreground font-poppins">
                <option>General Inquiry</option>
                <option>Sell Your Watch</option>
                <option>Consignment Request</option>
                <option>Appointment Request</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest font-oswald">Message</label>
              <textarea 
                className="flex min-h-[160px] w-full rounded-[6px] border border-border bg-muted px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-foreground font-poppins"
                placeholder="HOW CAN WE ASSIST YOU?"
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full h-16 uppercase tracking-[0.4em] font-bold">
              Dispatch Message
            </Button>
          </form>
        </div>

      </div>
      <Footer />
    </div>
  )
}
