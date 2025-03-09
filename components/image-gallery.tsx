import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="w-full">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-4 pt-1">
          {images.map((image, index) => (
            <div key={index} className="shrink-0 relative rounded-lg overflow-hidden">
              <div className="w-[250px] h-[400px] md:w-[300px] md:h-[480px] relative">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover rounded-lg" />
              </div>
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                  {image.caption}
                </div>
              )}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

