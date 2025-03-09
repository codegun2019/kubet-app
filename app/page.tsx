"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, MoreVertical, Star, ChevronRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RecommendedApps } from "@/components/recommended-apps"
import { GamepadIcon, Grid, Search, BookOpen } from "lucide-react"
import { AutoImageSlider } from "@/components/auto-image-slider"
import { RewardModal } from "@/components/reward-modal"
import { ReviewsSection } from "@/components/reviews-section"
import { useTranslation } from "@/lib/i18n/useTranslation"

export default function AppStoreListing() {
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false)
  const { t } = useTranslation()

  // Check if this is the first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore")
    if (!hasVisited) {
      setIsRewardModalOpen(true)
      localStorage.setItem("hasVisitedBefore", "true")
    }
  }, [])

  // Image gallery data
  const galleryImages = [
    {
      src: "/app-1.webp?height=350&width=250",
      alt: "Screenshot 1",
      caption: t("gallery.captions.0"),
    },
    {
      src: "/app-2.webp?height=350&width=250",
      alt: "Screenshot 2",
      caption: t("gallery.captions.1"),
    },
    {
      src: "/app-3.webp?height=350&width=250",
      alt: "Screenshot 3",
      caption: t("gallery.captions.2"),
    },
    {
      src: "/app-4.webp?height=350&width=250",
      alt: "Screenshot 4",
      caption: t("gallery.captions.3"),
    },
    {
      src: "/app-5.webp?height=350&width=250",
      alt: "Screenshot 5",
      caption: t("gallery.captions.3"),
    },
    {
      src: "/app-6.webp?height=350&width=250",
      alt: "Screenshot 6",
      caption: t("gallery.captions.3"),
    },
  ]

  return (
    <div className="max-w-lg mx-auto bg-white min-h-screen pb-16">
      <RewardModal isOpen={isRewardModalOpen} onClose={() => setIsRewardModalOpen(false)} />

      {/* Download Banner */}
      <div className="sticky top-0 z-20 bg-white border-b">
        <div className="flex items-center justify-between p-3 max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden">
              <Image
                src="/app_1.webp?height=40&width=40"
                alt="BKB App Icon"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm">{t("downloadBanner.title")}</span>
              <span className="text-xs text-gray-600">{t("downloadBanner.subtitle")}</span>
            </div>
          </div>
          <a href="http://m.kubet88p.com/register/"><Button className="bg-[#056449] rounded-full hover:bg-[#056449] text-sm px-6">{t("common.download")}</Button></a>
        </div>
      </div>
      {/* Header */}
      <header className="flex items-center justify-between p-4 top-[64px] bg-white z-10">
      <a href="http://m.kubet88p.com/">
        <button className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </button>
      </a>
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
            <span className="text-sm font-medium flex items-center gap-1">
              <CheckCircle className="h-4 w-4 fill-white text-blue-600" />
              {t("common.verified")}
            </span>
          </div>
        </div>
      </header>

      {/* App Info */}
      <div className="p-4">
        <div className="flex gap-4">
          <div className="h-20 w-20 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative h-full w-full">
              <Image
                src="/app_2.webp?height=80&width=80"
                alt="Windows App Icon"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-medium">{t("appInfo.name")}</h1>
            <p className="text-[#056449] text-xs font-bold">{t("appInfo.developer")}</p>
          </div>
        </div>

        {/* Ratings */}
        <div className="flex justify-between mt-6 border-b pb-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-xl font-medium">4.6</span>
              <Star className="h-4 w-4 fill-current text-blue-500 ml-1" />
            </div>
            <span className="text-xs text-gray-500">{t("appInfo.reviewCount")}</span>
          </div>
          <div className="h-full w-px bg-gray-200"></div>
          <div className="flex flex-col items-center">
          <span className="text-xl font-medium">{t("appInfo.ageRating")}</span>
          <span className="text-xs text-gray-500">{t("appInfo.ageRatingLabel")}</span>
          </div>
          <div className="h-full w-px bg-gray-200"></div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium">{t("appInfo.downloads")}</span>
            <span className="text-xs text-gray-500">{t("appInfo.downloadsLabel")}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <a href="http://m.kubet88p.com/">
        <div className="flex gap-4 my-6">
          {/* <Button variant="outline" className="flex-1 rounded-full h-12">
            {t("common.uninstall")}
          </Button> */}
            <Button className="flex-1 rounded-full h-12 bg-[#056449] hover:bg-[#056449]">{t("common.open")}</Button>
        </div>
        </a>

        

        {/* Device Compatibility */}
        <div className="flex gap-2 overflow-x-auto pb-2 my-4">
          <div className="flex items-center gap-2 bg-[#e6f3ef] text-[#056449] text-bold text-xs px-4 py-2 rounded-full whitespace-nowrap">
            <span className="text-[#056449]">✓</span>
            <span>{t("deviceCompatibility.phone")} • 4.6</span>
            <Star className="h-3 w-3 fill-current text-blue-500" />
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 text-xs rounded-full whitespace-nowrap">
            <span>{t("deviceCompatibility.tablet")} • 4.5</span>
            <Star className="h-3 w-3 fill-current text-blue-500" />
          </div>
        </div>

        {/* About This App Section */}
        <div className="my-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium">{t("aboutApp.title")}</h2>
            <ChevronRight className="h-6 w-6" />
          </div>
          <p className="text-sm text-gray-700 mt-2">{t("aboutApp.description")}</p>
{/* 
          <div className="flex gap-2 mt-4">
            <Button variant="outline" className="text-sm rounded-full px-4 py-2 h-auto">
              {t("aboutApp.functionality")}
            </Button>
            <Button variant="outline" className="text-sm rounded-full px-4 py-2 h-auto">
              {t("aboutApp.tools")}
            </Button>
          </div> */}
        </div>

        
        {/* Scrollable Image Gallery */}
        <div className="my-6">
          <h2 className="text-xl font-medium mb-4">{t("gallery.title")}</h2>
          <AutoImageSlider images={galleryImages} autoSlideInterval={4000} />
        </div>


        {/* Rating Section */}
        <div className="mt-8">
          <h2 className="text-xl font-medium">{t("ratingSection.title")}</h2>
          <p className="text-gray-500 text-sm">{t("ratingSection.subtitle")}</p>

          <div className="flex justify-between mt-4">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button key={rating} className="p-2">
                <Star className={`h-8 w-8 ${rating <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
              </button>
            ))}
          </div>

          <button className="text-blue-600 font-medium mt-4">{t("ratingSection.writeReview")}</button>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <ReviewsSection />
        </div>

        {/* Recommended Apps Section */}
        <div className="my-8">
          <RecommendedApps />
        </div>


      </div>
      {/* Navigation Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <nav className="flex justify-around items-center h-16 max-w-lg mx-auto px-4">
          <a href="https://m.kubet88p.com/th/login" className="flex flex-col items-center gap-1">
            <GamepadIcon className="h-6 w-6 text-gray-600" />
            <span className="text-xs">{t("navigation.games")}</span>
          </a>
          <a href="https://m.kubet88p.com/th/register" className="flex flex-col items-center gap-1">
            <Grid className="h-6 w-6 text-gray-600" />
            <span className="text-xs">{t("navigation.apps")}</span>
          </a>
          <a href="https://m.kubet88p.com/th/login" className="flex flex-col items-center gap-1">
            <div className="p-2 rounded-full bg-blue-50">
              <Search className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-xs text-blue-600">{t("navigation.search")}</span>
          </a>
          <a href="https://my2.biz/ku8f" className="flex flex-col items-center gap-1">
            <BookOpen className="h-6 w-6 text-gray-600" />
            <span className="text-xs">{t("navigation.books")}</span>
          </a>
        </nav>
      </div>
    </div>
  )
}

