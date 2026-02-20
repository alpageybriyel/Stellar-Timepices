"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Message sent successfully!")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header */}
      <div className="bg-[#1d2c48] text-white pt-32 pb-16 px-6 text-center">
        <h1 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-widest max-w-4xl mx-auto">
          Contact Us
        </h1>
        <p className="mt-4 text-white/70 font-poppins max-w-xl mx-auto">
          We are here to assist you with any inquiries regarding our collection or services.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="font-oswald text-2xl font-bold text-[#1d2c48] uppercase">
              Showroom Information
            </h2>
            <div className="w-12 h-1 bg-[#f0ae22]" />
            <p className="text-[#1d2c48]/70 font-poppins text-sm leading-relaxed">
              Visit our flagship boutique to experience our collection in person. Appointments are recommended for personalized consultations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3">
                <MapPin className="w-6 h-6 text-[#1d2c48]" />
              </div>
              <div>
                <h3 className="font-oswald font-bold uppercase text-[#1d2c48] mb-1">Address</h3>
                <p className="text-[#1d2c48]/70 text-sm font-medium">
                  123 Luxury Avenue, Suite 500<br />
                  New York, NY 10022
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3">
                <Phone className="w-6 h-6 text-[#1d2c48]" />
              </div>
              <div>
                <h3 className="font-oswald font-bold uppercase text-[#1d2c48] mb-1">Phone</h3>
                <p className="text-[#1d2c48]/70 text-sm font-medium">
                  +1 (212) 555-0123
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3">
                <Mail className="w-6 h-6 text-[#1d2c48]" />
              </div>
              <div>
                <h3 className="font-oswald font-bold uppercase text-[#1d2c48] mb-1">Email</h3>
                <p className="text-[#1d2c48]/70 text-sm font-medium">
                  concierge@stellartime.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3">
                <Clock className="w-6 h-6 text-[#1d2c48]" />
              </div>
              <div>
                <h3 className="font-oswald font-bold uppercase text-[#1d2c48] mb-1">Hours</h3>
                <p className="text-[#1d2c48]/70 text-sm font-medium">
                  Mon - Fri: 10:00 AM - 7:00 PM<br />
                  Sat: 11:00 AM - 6:00 PM<br />
                  Sun: By Appointment
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-6">
            <h3 className="font-oswald text-xl font-bold text-[#1d2c48] uppercase">Follow Our Journey</h3>
            <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61563499544853" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-100 flex items-center justify-center text-[#1d2c48] hover:text-gold hover:border-gold transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/stellartimepieces_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-100 flex items-center justify-center text-[#1d2c48] hover:text-gold hover:border-gold transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@stellartimepieces" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-100 flex items-center justify-center text-[#1d2c48] hover:text-gold hover:border-gold transition-all duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 border border-gray-200 p-8 md:p-12">
          <h2 className="font-oswald text-2xl font-bold text-[#1d2c48] uppercase mb-8">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#1d2c48]/70 tracking-wider">First Name</label>
                <Input required className="bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#1d2c48]/70 tracking-wider">Last Name</label>
                <Input required className="bg-white" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-[#1d2c48]/70 tracking-wider">Email Address</label>
              <Input type="email" required className="bg-white" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-[#1d2c48]/70 tracking-wider">Subject</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-[#1d2c48]">
                <option>General Inquiry</option>
                <option>Sell Your Watch</option>
                <option>Service Request</option>
                <option>Appointment</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-[#1d2c48]/70 tracking-wider">Message</label>
              <textarea 
                className="flex min-h-[120px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-[#1d2c48]"
                required
              />
            </div>

            <Button type="submit" variant="gold" className="w-full text-lg h-12 uppercase tracking-wide font-bold">
              Send Message
            </Button>
          </form>
        </div>

      </div>
      <Footer />
    </div>
  )
}
