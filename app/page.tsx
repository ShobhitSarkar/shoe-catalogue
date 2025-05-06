import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ShoeCatalogue() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tighter">
            NOVA<span className="text-emerald-400">STEP</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium hover:text-emerald-400 transition-colors">
              New Arrivals
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-emerald-400 transition-colors">
              Men
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-emerald-400 transition-colors">
              Women
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-emerald-400 transition-colors">
              Collections
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-100">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950">Shop Now</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors border-0 px-3 py-1">
                New Collection 2025
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                The Future of <span className="text-emerald-400">Footwear</span> Is Here
              </h1>
              <p className="text-zinc-400 text-lg max-w-md">
                Experience the perfect blend of cutting-edge design, sustainable materials, and unmatched comfort.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 px-8">Explore Collection</Button>
                <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                  Watch Showcase
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30" />
              <Image
                src="/placeholder.svg?height=600&width=600"
                width={600}
                height={600}
                alt="Featured shoe"
                className="relative z-10 mx-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Categories</h2>
            <Link href="#" className="group flex items-center text-emerald-400 mt-4 md:mt-0">
              View all categories
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Running", "Lifestyle", "Training"].map((category) => (
              <div key={category} className="relative overflow-hidden rounded-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
                <Image
                  src={`/placeholder.svg?height=400&width=300&text=${category}`}
                  width={300}
                  height={400}
                  alt={category}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-2xl font-bold mb-2">{category}</h3>
                  <Link href="#" className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300">
                    Shop Collection
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalogue */}
      <section className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Trending Now</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-colors"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                  <Badge className="absolute top-3 left-3 z-10 bg-emerald-500 text-zinc-950 border-0">New</Badge>
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Shoe ${i + 1}`}
                    width={300}
                    height={300}
                    alt={`Shoe ${i + 1}`}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">NeoFlex Pro {i + 1}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm ml-1">{(4 + (i % 2) * 0.5).toFixed(1)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400">Ultralight performance shoe with adaptive cushioning</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-lg">${149 + i * 10}</span>
                    <Button
                      size="sm"
                      className="bg-zinc-800 hover:bg-emerald-500 hover:text-zinc-950 transition-colors"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button className="bg-transparent border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 px-8">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-purple-500/5 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30" />
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Technology showcase"
                className="relative z-10 mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors border-0 px-3 py-1">
                Revolutionary Technology
              </Badge>
              <h2 className="text-4xl font-bold leading-tight">Adaptive Cushioning System</h2>
              <p className="text-zinc-400 text-lg">
                Our proprietary technology adapts to your unique foot shape and movement pattern, providing personalized
                support and unmatched comfort with every step.
              </p>
              <ul className="space-y-3">
                {["Responsive Energy Return", "Impact Protection", "Lightweight Design", "Sustainable Materials"].map(
                  (feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <ChevronRight className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button className="bg-zinc-800 hover:bg-zinc-700 mt-4">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Join The Future</h2>
            <p className="text-zinc-400">
              Subscribe to our newsletter and be the first to know about new releases, exclusive offers, and innovation
              updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="font-bold text-xl tracking-tighter">
                NOVA<span className="text-emerald-400">STEP</span>
              </Link>
              <p className="mt-4 text-zinc-400 text-sm">
                Redefining footwear with futuristic design and cutting-edge technology.
              </p>
            </div>

            {["Shop", "Company", "Support"].map((category) => (
              <div key={category}>
                <h3 className="font-medium mb-4">{category}</h3>
                <ul className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i}>
                      <Link href="#" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">
                        {category} Link {i + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-zinc-500">© {new Date().getFullYear()} NovaStep. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <Link key={item} href="#" className="text-xs text-zinc-500 hover:text-zinc-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
