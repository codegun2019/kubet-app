"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface AutoImageSliderProps {
  images: {
    src: string
    alt: string
    caption: string
  }[]
  autoSlideInterval?: number
}

export function AutoImageSlider({ images, autoSlideInterval = 3000 }: AutoImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length

        // Scroll to the new slide
        if (sliderRef.current) {
          const slideWidth = sliderRef.current.querySelector("div")?.offsetWidth || 0
          const gap = 12 // gap-3 = 0.75rem = 12px
          sliderRef.current.scrollTo({
            left: (slideWidth + gap) * newIndex,
            behavior: "smooth",
          })
        }

        return newIndex
      })
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [images.length, autoSlideInterval])

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.querySelector("div")?.offsetWidth || 0
      const gap = 12 // gap-3 = 0.75rem = 12px
      sliderRef.current.scrollTo({
        left: (slideWidth + gap) * index,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative">
      <div ref={sliderRef} className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex gap-3 min-w-max">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden min-w-[200px] md:min-w-[250px] h-[350px] bg-gray-100"
            >
              <div className="absolute inset-0">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={250}
                  height={350}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

