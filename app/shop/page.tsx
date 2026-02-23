"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ProductCard } from "@/components/ui/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { watches } from "@/lib/data"
import { Checkbox } from "@/components/ui/checkbox"
import { FadeIn } from "@/components/ui/fade-in"
import { cn } from "@/lib/utils"

function ShopContent() {
  const searchParams = useSearchParams()
  const brandParam = searchParams?.get("brand")

  // Filter State
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>(brandParam ? [brandParam] : [])
  const [searchQuery, setSearchQuery] = React.useState("")
  const [priceRange, setPriceRange] = React.useState([0, 20000000])
  const [sortBy, setSortBy] = React.useState("featured")
  
  const brands = Array.from(new Set(watches.map(w => w.brand))).sort()

  const filteredAndSortedWatches = React.useMemo(() => {
    let result = watches.filter(watch => {
      // Brand Filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(watch.brand)) return false
      
      // Search Filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesBrand = watch.brand.toLowerCase().includes(query)
        const matchesModel = watch.model.toLowerCase().includes(query)
        if (!matchesBrand && !matchesModel) return false
      }

      // Price Filter
      const price = watch.price
      if (price < priceRange[0] || price > priceRange[1]) return false

      return true
    })

    // Sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "featured":
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
        break
      case "newest":
        // Assuming higher ID is newer for this mock data
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id))
        break
    }

    return result
  }, [selectedBrands, searchQuery, priceRange, sortBy])

  // Update selectedBrands when URL param changes
  React.useEffect(() => {
     if (brandParam) {
        setSelectedBrands(prev => prev.includes(brandParam) ? prev : [...prev, brandParam])
     }
  }, [brandParam])

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const resetFilters = () => {
    setSelectedBrands([])
    setSearchQuery("")
    setPriceRange([0, 20000000])
    setSortBy("featured")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Search & Filter Hero */}
      <div className="bg-background border-b border-border pt-48 pb-12 text-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 text-foreground">
            <div className="space-y-4">
               <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-foreground">
                 The <span className="italic">Collections</span>
               </h1>
               <div className="flex items-center gap-4 text-muted-foreground font-oswald text-[10px] tracking-[0.3em] font-bold uppercase">
                 <span>{filteredAndSortedWatches.length} Timepieces</span>
                 <div className="w-1 h-1 bg-accent rounded-full" />
                 <span>General Trias, Cavite</span>
               </div>
            </div>

            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search references..."
                className="w-full bg-card border border-border px-6 py-4 rounded-[6px] font-poppins text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all text-foreground placeholder:text-muted-foreground/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-24 flex flex-col lg:flex-row gap-20">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 space-y-16 flex-shrink-0">
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-8">
              <h3 className="font-oswald text-[11px] font-bold uppercase tracking-[0.3em] text-accent border-b border-border pb-6">
                Refine Search
              </h3>
              <div className="relative">
                <Input 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="SEARCH MODEL..." 
                   className="bg-transparent border-b border-border border-t-0 border-x-0 rounded-none px-0 h-12 focus-visible:ring-0 focus:border-accent placeholder:text-muted-foreground/50 text-xs tracking-widest uppercase font-oswald text-foreground" 
                />
              </div>
            </div>

            <div className="mt-16 space-y-8">
              <h3 className="font-oswald text-[11px] font-bold uppercase tracking-[0.3em] text-accent border-b border-border pb-6">
                Watch Brands
              </h3>
              <div className="flex flex-wrap lg:flex-col gap-3">
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => toggleBrand(brand)}
                    className={cn(
                      "px-4 py-2 text-[10px] font-bold tracking-widest uppercase border transition-all duration-300 rounded-[4px] text-left",
                      selectedBrands.includes(brand)
                        ? "bg-accent border-accent text-accent-foreground"
                        : "bg-card border-border text-muted-foreground hover:border-accent hover:text-foreground"
                    )}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-16 space-y-8">
              <h3 className="font-oswald text-[11px] font-bold uppercase tracking-[0.3em] text-accent border-b border-border pb-6">
                Investment
              </h3>
              <div className="space-y-8">
                 <input
                   type="range"
                   min="0"
                   max="20000000"
                   step="100000"
                   value={priceRange[1]}
                   onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                   className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                 />
                 <div className="flex justify-between font-oswald text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                   <span>₱0</span>
                   <span className="text-foreground">₱{(priceRange[1]/1000000).toFixed(1)}M</span>
                 </div>
              </div>
            </div>
          </FadeIn>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <FadeIn delay={0.2}>
            <div className="mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-border pb-10">
              <p className="font-poppins text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                Found <span className="text-foreground">{filteredAndSortedWatches.length}</span> Masterpieces
              </p>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-none text-[10px] font-bold tracking-widest uppercase p-2 bg-transparent outline-none cursor-pointer hover:text-accent transition-colors"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Investment: Ascending</option>
                <option value="price-desc">Investment: Descending</option>
                <option value="newest">New Acquisitions</option>
              </select>
            </div>
          </FadeIn>

          {filteredAndSortedWatches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {filteredAndSortedWatches.map((watch, index) => (
                <FadeIn key={watch.id} delay={0.05 * (index + 1)}>
                  <ProductCard watch={watch} />
                </FadeIn>
              ))}
            </div>
          ) : (
             <div className="py-32 text-center border border-dashed border-border bg-card rounded-[12px]">
                <p className="font-oswald text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">No watches match your selection</p>
                <Button 
                  variant="link" 
                  onClick={resetFilters}
                  className="mt-6 text-accent font-oswald text-[10px] font-bold tracking-widest uppercase hover:text-foreground underline underline-offset-4"
                >
                  Reset Filtering
                </Button>
             </div>
          )}

          {filteredAndSortedWatches.length > 0 && (
             <div className="mt-24 text-center">
                <Button variant="outline" className="min-w-[280px] h-16 border-border hover:border-accent">
                  LOAD MORE TIMEPIECES
                </Button>
             </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function ShopPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-500">Loading...</div>}>
      <ShopContent />
    </React.Suspense>
  )
}
