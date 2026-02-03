"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ZoomIn } from "lucide-react"
import { getAssetPath } from "@/lib/paths"

// Updated gallery data with safe filenames
// We have 28 images renamed to image-1.jpg through image-28.jpg
const galleryImages = [
  { id: 1, category: "Training", src: "/gallery/image-1.jpg", alt: "Instructor Leading Session" },
  { id: 2, category: "Events", src: "/gallery/image-2.jpg", alt: "Academy Event" },
  { id: 3, category: "Training", src: "/gallery/image-3.jpg", alt: "Cadet Training" },
  { id: 4, category: "Campus", src: "/gallery/image-4.jpg", alt: "Campus Facility" },
  { id: 5, category: "Training", src: "/gallery/image-5.jpg", alt: "Group Activity" },
  { id: 6, category: "Events", src: "/gallery/image-6.jpg", alt: "Celebration" },
  { id: 7, category: "Training", src: "/gallery/image-7.jpg", alt: "Classroom Session" },
  { id: 8, category: "Campus", src: "/gallery/image-8.jpg", alt: "Infrastructure" },
  { id: 9, category: "Training", src: "/gallery/image-9.jpg", alt: "Physical Training" },
  { id: 10, category: "Events", src: "/gallery/image-10.jpg", alt: "Group Photo" },
  { id: 11, category: "Training", src: "/gallery/image-11.jpg", alt: "Field Drill" },
  { id: 12, category: "Campus", src: "/gallery/image-12.jpg", alt: "Academy Building" },
  { id: 13, category: "Events", src: "/gallery/image-13.jpg", alt: "Award Ceremony" },
  { id: 14, category: "Training", src: "/gallery/image-14.jpg", alt: "Obstacle Course" },
  { id: 15, category: "Campus", src: "/gallery/image-15.jpg", alt: "Mentorship Session" },
  { id: 16, category: "Campus", src: "/gallery/image-16.jpg", alt: "Study Area" },
  { id: 17, category: "Training", src: "/gallery/image-17.jpg", alt: "Morning PT" },
  { id: 18, category: "Events", src: "/gallery/image-18.jpg", alt: "Cultural Event" },
  { id: 19, category: "Campus", src: "/gallery/image-19.jpg", alt: "Hostel Facility" },
  { id: 20, category: "Training", src: "/gallery/image-20.jpg", alt: "Tactical Drill" },
  { id: 21, category: "Events", src: "/gallery/image-21.jpg", alt: "Convocation" },
  { id: 22, category: "Campus", src: "/gallery/image-22.jpg", alt: "Library" },
  { id: 23, category: "Training", src: "/gallery/image-23.jpg", alt: "Sports" },
  { id: 24, category: "Events", src: "/gallery/image-24.jpg", alt: "Director Speech" },
  { id: 25, category: "Events", src: "/gallery/image-25.jpg", alt: "Festival" },
  { id: 26, category: "Campus", src: "/gallery/image-26.jpg", alt: "Grounds" },
  { id: 27, category: "Training", src: "/gallery/image-27.jpg", alt: "Team Building" },
  { id: 28, category: "Events", src: "/gallery/image-28.jpg", alt: "Batch Photo" },
]

const categories = ["All", "Campus", "Training", "Events"]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <main className="min-h-screen bg-gray-50 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-navy)] font-bold tracking-wider uppercase text-sm border-b-2 border-[var(--color-saffron)] pb-1 inline-block">
            Our Gallery
          </span>
          <h1 className="font-heading text-4xl md:text-5xl text-navy mt-4">
            Life at <span className="text-[var(--color-green)]">SDCI</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-xl mx-auto">
            A glimpse into the daily life, rigorous training, and vibrant campus culture of our future leaders.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-12 flex-wrap gap-2">
            <TabsList className="bg-white p-1 rounded-full border border-gray-200 shadow-sm h-auto flex-wrap justify-center">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-full px-6 py-2.5 text-sm md:text-base font-semibold data-[state=active]:bg-[var(--color-navy)] data-[state=active]:text-white transition-all"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="space-y-8 animate-slide-up-fade">
              <div className="masonry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages
                  .filter(img => cat === "All" || img.category === cat)
                  .map((image) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div
                          className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6"
                          onClick={() => setSelectedImage(image)}
                        >
                          <div className="relative w-full aspect-[4/3]">
                            <div
                              className="absolute inset-0 bg-gray-200 transition-transform duration-500 group-hover:scale-110"
                              style={{ backgroundImage: `url('${getAssetPath(image.src)}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/30">
                              <ZoomIn className="w-6 h-6" />
                            </div>
                          </div>

                          <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="inline-block px-2 py-1 bg-[var(--color-saffron)] text-white text-[10px] font-bold uppercase rounded-sm mb-2 shadow-sm">
                              {image.category}
                            </span>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none text-white block">
                        <div className="relative w-full h-[80vh] bg-black/90 rounded-lg overflow-hidden flex items-center justify-center">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage: `url('${getAssetPath(image.src)}')`,
                              backgroundSize: 'contain',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat'
                            }}
                          />
                          <div className="absolute bottom-4 left-0 w-full text-center p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-sm text-gray-300">{image.category}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  )
}
