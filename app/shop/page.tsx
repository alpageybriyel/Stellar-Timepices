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
  const [minPrice, setMinPrice] = React.useState("")
  const [maxPrice, setMaxPrice] = React.useState("")
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
      if (minPrice !== "" && !isNaN(parseFloat(minPrice)) && price < parseFloat(minPrice)) return false
      if (maxPrice !== "" && !isNaN(parseFloat(maxPrice)) && price > parseFloat(maxPrice)) return false

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
  }, [selectedBrands, searchQuery, minPrice, maxPrice, sortBy])

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
    setMinPrice("")
    setMaxPrice("")
    setSortBy("featured")
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#1d2c48] text-white pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn direction="down">
            <span className="font-oswald text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Collection 2026</span>
            <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-widest leading-none">
              Shop <span className="text-gold">Time</span>
            </h1>
            <p className="mt-6 text-white/50 max-w-2xl font-poppins tracking-wide leading-relaxed">
              Explore our curated selection of horological masterpieces. Each piece represents a legacy of precision and timeless elegance.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-20 flex flex-col md:flex-row gap-16">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-12 flex-shrink-0">
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-6">
              <h3 className="font-oswald text-xs font-bold uppercase tracking-[0.2em] text-[#1d2c48] border-b border-gray-100 pb-4">
                Refine Search
              </h3>
              <div className="relative">
                <Input 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="SEARCH MODEL..." 
                   className="bg-transparent border-b border-gray-200 border-t-0 border-x-0 rounded-none px-0 h-10 focus-visible:ring-0 focus:border-gold placeholder:text-gray-400 text-xs tracking-widest uppercase font-oswald text-[#1d2c48]" 
                />
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="font-oswald text-xs font-bold uppercase tracking-[0.2em] text-[#1d2c48] border-b border-gray-100 pb-4">
                Watch Brands
              </h3>
              <div className="space-y-4">
                {brands.map(brand => (
                  <div key={brand} className="flex items-center space-x-3 group cursor-pointer" onClick={() => toggleBrand(brand)}>
                    <div className={cn(
                      "w-4 h-4 border border-gray-200 transition-all duration-300 flex items-center justify-center",
                      selectedBrands.includes(brand) ? "bg-[#1d2c48] border-[#1d2c48]" : "group-hover:border-gold"
                    )}>
                       {selectedBrands.includes(brand) && <div className="w-1.5 h-1.5 bg-gold" />}
                    </div>
                    <span className={cn(
                      "text-[10px] font-bold tracking-widest uppercase transition-colors duration-300",
                      selectedBrands.includes(brand) ? "text-[#1d2c48]" : "text-gray-500 group-hover:text-gold"
                    )}>
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 space-y-6">
              <h3 className="font-oswald text-xs font-bold uppercase tracking-[0.2em] text-[#1d2c48] border-b border-gray-100 pb-4">
                Investment
              </h3>
              <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <Input 
                       value={minPrice}
                       onChange={(e) => setMinPrice(e.target.value)}
                       placeholder="MIN" 
                       type="number" 
                       className="bg-transparent border-gray-100 text-[10px] h-10 tracking-widest font-oswald text-[#1d2c48]" 
                    />
                    <span className="text-gray-300">—</span>
                    <Input 
                       value={maxPrice}
                       onChange={(e) => setMaxPrice(e.target.value)}
                       placeholder="MAX" 
                       type="number" 
                       className="bg-transparent border-gray-100 text-[10px] h-10 tracking-widest font-oswald text-[#1d2c48]" 
                    />
                  </div>
              </div>
            </div>
          </FadeIn>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <FadeIn delay={0.2}>
            <div className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-50 pb-8">
              <p className="font-poppins text-[10px] font-bold tracking-widest uppercase text-gray-400">
                Found <span className="text-[#1d2c48]">{filteredAndSortedWatches.length}</span> Masterpieces
              </p>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-none text-[10px] font-bold tracking-widest uppercase p-2 bg-transparent outline-none cursor-pointer hover:text-gold transition-colors"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Investment: Ascending</option>
                <option value="price-desc">Investment: Descending</option>
                <option value="newest">New Acquisitions</option>
              </select>
            </div>
          </FadeIn>

          {filteredAndSortedWatches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredAndSortedWatches.map((watch, index) => (
                <FadeIn key={watch.id} delay={0.05 * (index + 1)}>
                  <ProductCard watch={watch} />
                </FadeIn>
              ))}
            </div>
          ) : (
             <div className="py-24 text-center border border-dashed border-gray-100 bg-gray-50/50">
                <p className="font-oswald text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">No watches match your selection</p>
                <Button 
                  variant="link" 
                  onClick={resetFilters}
                  className="mt-4 text-gold font-oswald text-[10px] font-bold tracking-widest uppercase hover:text-[#1d2c48] underline underline-offset-4"
                >
                  Reset Filtering
                </Button>
             </div>
          )}

          {filteredAndSortedWatches.length > 0 && (
             <div className="mt-20 text-center">
                <Button className="min-w-[240px] bg-[#1d2c48] text-white hover:bg-[#1d2c48]/90 h-14 font-oswald text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300">
                  Load More Timepieces
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
