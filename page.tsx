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

export default function AppStoreListing() {
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false)

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
      src: "/placeholder.svg?height=350&width=250",
      alt: "Screenshot 1",
      caption: "เชื่อมต่อกับพีซีของคุณตลอดเวลา",
    },
    {
      src: "/placeholder.svg?height=350&width=250",
      alt: "Screenshot 2",
      caption: "จัดการแอปและการแจ้งเตือน",
    },
    {
      src: "/placeholder.svg?height=350&width=250",
      alt: "Screenshot 3",
      caption: "ดูภาพและโทรออก",
    },
    {
      src: "/placeholder.svg?height=350&width=250",
      alt: "Screenshot 4",
      caption: "ส่งข้อความและไฟล์",
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
                src="/placeholder.svg?height=40&width=40"
                alt="BKB App Icon"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm">BKB APP Download</span>
              <span className="text-xs text-gray-600">ดาวน์โหลดแอปตอนนี้</span>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-sm px-6">ดาวน์โหลด</Button>
        </div>
      </div>
      {/* Header */}
      <header className="flex items-center justify-between p-4 sticky top-[64px] bg-white z-10">
        <button className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
            <span className="text-sm font-medium flex items-center gap-1">
              <CheckCircle className="h-4 w-4 fill-white text-blue-600" />
              ยืนยันตัวตน
            </span>
          </div>
          <button className="p-2">
            <MoreVertical className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* App Info */}
      <div className="p-4">
        <div className="flex gap-4">
          <div className="h-20 w-20 rounded-xl overflow-hidden bg-blue-500 flex items-center justify-center">
            <div className="relative h-full w-full">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Windows App Icon"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-medium">ลิงก์ไปยัง Windows</h1>
            <p className="text-blue-600">Microsoft Corporation</p>
          </div>
        </div>

        {/* Ratings */}
        <div className="flex justify-between mt-6 border-b pb-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-xl font-medium">4.6</span>
              <Star className="h-4 w-4 fill-current text-blue-500 ml-1" />
            </div>
            <span className="text-xs text-gray-500">966K รีวิว</span>
          </div>
          <div className="h-full w-px bg-gray-200"></div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium">3+</span>
            <span className="text-xs text-gray-500">ประเภท 3+</span>
          </div>
          <div className="h-full w-px bg-gray-200"></div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium">1B+</span>
            <span className="text-xs text-gray-500">ดาวน์โหลด</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 my-6">
          <Button variant="outline" className="flex-1 rounded-full h-12">
            ถอนการติดตั้ง
          </Button>
          <Button className="flex-1 rounded-full h-12 bg-blue-600 hover:bg-blue-700">เปิด</Button>
        </div>

        {/* Device Compatibility */}
        <div className="flex gap-2 overflow-x-auto pb-2 my-4">
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full whitespace-nowrap">
            <span className="text-green-600">✓</span>
            <span>โทรศัพท์ • 4.6</span>
            <Star className="h-3 w-3 fill-current text-blue-500" />
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full whitespace-nowrap">
            <span className="text-green-600">✓</span>
            <span>แท็บเล็ต • 4.5</span>
            <Star className="h-3 w-3 fill-current text-blue-500" />
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full whitespace-nowrap">
            <span>Chromebook • 3.7</span>
            <Star className="h-3 w-3 fill-current text-blue-500" />
          </div>
        </div>

        {/* About This App Section */}
        <div className="my-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium">เกี่ยวกับแอปนี้</h2>
            <ChevronRight className="h-6 w-6" />
          </div>
          <p className="text-sm text-gray-700 mt-2">เข้าถึงการแจ้งเตือน การโทร แอป รูปภาพ และข้อความในโทรศัพท์ได้หมดในพีซีของคุณ</p>

          <div className="flex gap-2 mt-4">
            <Button variant="outline" className="text-sm rounded-full px-4 py-2 h-auto">
              การทำงาน
            </Button>
            <Button variant="outline" className="text-sm rounded-full px-4 py-2 h-auto">
              เครื่องมือ
            </Button>
          </div>
        </div>

        {/* Scrollable Image Gallery */}
        <div className="my-6">
          <h2 className="text-xl font-medium mb-4">รูปภาพ</h2>
          <AutoImageSlider images={galleryImages} autoSlideInterval={4000} />
        </div>

        {/* Rating Section */}
        <div className="mt-8">
          <h2 className="text-xl font-medium">ให้คะแนนแอปนี้</h2>
          <p className="text-gray-500 text-sm">บอกให้ผู้อื่นรู้ว่าคุณคิดอย่างไร</p>

          <div className="flex justify-between mt-4">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button key={rating} className="p-2">
                <Star className={`h-8 w-8 ${rating <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
              </button>
            ))}
          </div>

          <button className="text-blue-600 font-medium mt-4">เขียนรีวิว</button>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <ReviewsSection />
        </div>

        {/* Recommended Apps Section */}
        <div className="my-8">
          <RecommendedApps />
        </div>

        {/* Features Section */}
        <div className="mt-8 border-t pt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium">การรองรับในแอป</h2>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Navigation Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <nav className="flex justify-around items-center h-16 max-w-lg mx-auto px-4">
          <a href="#" className="flex flex-col items-center gap-1">
            <GamepadIcon className="h-6 w-6 text-gray-600" />
            <span className="text-xs">เกม</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1">
            <Grid className="h-6 w-6 text-gray-600" />
            <span className="text-xs">แอป</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1">
            <div className="p-2 rounded-full bg-blue-50">
              <Search className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-xs text-blue-600">ค้นหา</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1">
            <BookOpen className="h-6 w-6 text-gray-600" />
            <span className="text-xs">หนังสือ</span>
          </a>
        </nav>
      </div>
    </div>
  )
}

