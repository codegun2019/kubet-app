"use client"

import Image from "next/image"
import { Star, MoreVertical, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useTranslation } from "@/lib/i18n/useTranslation"

interface Review {
  id: number
  author: string
  avatar: string
  rating: number
  date: string
  content: string
  helpfulCount: number
}

const reviews: Review[] = [
  {
    id: 1,
    author: "ธนภัทร อากาศสง",
    avatar: "/myicon (1).webp?height=40&width=40",
    rating: 5,
    date: "30/12/24",
    content:
      "ดีมากสามารถบูตคอมพิวเตอร์และสามารถแจ้งเตือนแบตเตอรี่ต่ำได้ ทันเดียวมีครั้งหนึ่งเรียบสายชาร์จเข้ากับปลั๊กพ่วงและตอนนี้กำลังเล่นในโซฟา แล้วมันแจ้งเตือนว่า โทรศัพท์ของคุณกำลังชาร์จแบตอยู่",
    helpfulCount: 30,
  },
  {
    id: 2,
    author: "ปรมธ ตระกูลศึกษา",
    avatar: "/myicon (2).webp?height=40&width=40",
    rating: 5,
    date: "28/2/25",
    content: "ดีมากครับ🙏😊 ทำให้สามารถส่ง ไฟล์ต่างๆ ไปยังคอมพิวเตอร์PC ได้สะดวกง่ายดีครับ ขอบคุณมากเลยนะครับ",
    helpfulCount: 15,
  },
  {
    id: 3,
    author: "สมชาย ใจดี",
    avatar: "/myicon (3).webp?height=40&width=40",
    rating: 5,
    date: "25/2/25",
    content: "แอพดีมากครับ ใช้งานง่าย เชื่อมต่อกับคอมได้เร็ว ส่งไฟล์สะดวก แนะนำเลยครับ",
    helpfulCount: 22,
  },
  {
    id: 4,
    author: "วิภาวี สุขสันต์",
    avatar: "/myicon (4).webp?height=40&width=40",
    rating: 4,
    date: "23/2/25",
    content: "ใช้งานได้ดีค่ะ แต่บางครั้งก็มีหลุดการเชื่อมต่อบ้าง แต่โดยรวมถือว่าดีมากค่ะ",
    helpfulCount: 18,
  },
  {
    id: 5,
    author: "ณัฐพล วงศ์สวัสดิ์",
    avatar: "/myicon (5).webp?height=40&width=40",
    rating: 5,
    date: "20/2/25",
    content: "เยี่ยมมากครับ ทำให้การทำงานสะดวกขึ้นเยอะ โดยเฉพาะการส่งไฟล์ระหว่างมือถือกับคอม",
    helpfulCount: 25,
  },
  {
    id: 6,
    author: "พิมพ์มาดา รักษ์ดี",
    avatar: "/myicon (6).webp?height=40&width=40",
    rating: 4,
    date: "18/2/25",
    content: "ดีค่ะ แต่อยากให้เพิ่มฟีเจอร์การแชร์หน้าจอแบบ real-time จะดีมากค่ะ",
    helpfulCount: 12,
  },
  {
    id: 7,
    author: "อนุชา มั่นคง",
    avatar: "/myicon (7).webp?height=40&width=40",
    rating: 5,
    date: "15/2/25",
    content: "แอพยอดเยี่ยมครับ ช่วยให้การทำงานระหว่าง PC กับมือถือเป็นเรื่องง่าย แนะนำเลยครับ",
    helpfulCount: 28,
  },
  {
    id: 8,
    author: "ศิริพร แสนสุข",
    avatar: "/myicon (8).webp?height=40&width=40",
    rating: 5,
    date: "12/2/25",
    content: "ใช้งานง่ายมากค่ะ ดีที่สุดในบรรดาแอพประเภทเดียวกัน แนะนำค่ะ",
    helpfulCount: 20,
  },
  {
    id: 9,
    author: "ธีรศักดิ์ พรหมมา",
    avatar: "/myicon (9).webp?height=40&width=40",
    rating: 4,
    date: "10/2/25",
    content: "ใช้งานได้ดีครับ แต่บางครั้งก็มีปัญหาเรื่องการซิงค์ข้อมูล หวังว่าจะได้รับการอัพเดทแก้ไขครับ",
    helpfulCount: 15,
  },
  {
    id: 10,
    author: "กมลชนก รุ่งเรือง",
    avatar: "/myicon (10).webp?height=40&width=40",
    rating: 5,
    date: "8/2/25",
    content: "แอพดีมากค่ะ ช่วยให้การทำงานสะดวกขึ้นมาก โดยเฉพาะการส่งรูปจากมือถือไปคอม",
    helpfulCount: 23,
  },
  {
    id: 11,
    author: "ภาณุพงศ์ สุวรรณโชติ",
    avatar: "/myicon (11).webp?height=40&width=40",
    rating: 5,
    date: "5/2/25",
    content: "แอพนี้ช่วยให้ผมทำงานได้สะดวกมากขึ้น โดยเฉพาะการส่งไฟล์ระหว่างอุปกรณ์ ขอบคุณทีมพัฒนามากครับ",
    helpfulCount: 19,
  },
  {
    id: 12,
    author: "จิรายุ พงษ์พันธ์",
    avatar: "/myicon (12).webp?height=40&width=40",
    rating: 3,
    date: "3/2/25",
    content: "ใช้งานได้ แต่บางครั้งก็มีปัญหาเรื่องการเชื่อมต่อ หวังว่าจะได้รับการปรับปรุงในเวอร์ชั่นถัดไป",
    helpfulCount: 8,
  },
  {
    id: 13,
    author: "ปิยะดา สมบูรณ์",
    avatar: "/myicon (13).webp?height=40&width=40",
    rating: 5,
    date: "1/2/25",
    content: "แอพดีมากค่ะ ใช้งานง่าย ไม่ซับซ้อน แนะนำสำหรับคนที่ต้องการเชื่อมต่อมือถือกับคอมพิวเตอร์",
    helpfulCount: 27,
  },
  {
    id: 14,
    author: "ธนกร วิริยะกิจ",
    avatar: "/myicon (14).webp?height=40&width=40",
    rating: 4,
    date: "29/1/25",
    content: "ใช้งานได้ดีครับ แต่อยากให้เพิ่มฟีเจอร์การแชร์ไฟล์ระหว่างอุปกรณ์หลายเครื่องพร้อมกัน",
    helpfulCount: 14,
  },
  {
    id: 15,
    author: "สุภาพร ใจเย็น",
    avatar: "/myicon (15).webp?height=40&width=40",
    rating: 5,
    date: "27/1/25",
    content: "แอพดีมากค่ะ ช่วยให้การทำงานสะดวกขึ้นมาก โดยเฉพาะการส่งไฟล์จากมือถือไปคอมพิวเตอร์",
    helpfulCount: 21,
  },
  {
    id: 16,
    author: "วรพล สุขสันต์",
    avatar: "/myicon (16).webp?height=40&width=40",
    rating: 5,
    date: "25/1/25",
    content: "แอพนี้ช่วยให้ผมประหยัดเวลาในการทำงานได้มาก โดยเฉพาะการส่งไฟล์ระหว่างอุปกรณ์ แนะนำเลยครับ",
    helpfulCount: 26,
  },
  {
    id: 17,
    author: "นภัสสร ดวงดี",
    avatar: "/myicon (17).webp?height=40&width=40",
    rating: 4,
    date: "23/1/25",
    content: "ใช้งานง่าย สะดวก แต่บางครั้งก็มีปัญหาเรื่องการเชื่อมต่อเมื่อใช้งานเป็นเวลานาน",
    helpfulCount: 16,
  },
  {
    id: 18,
    author: "ชัยวัฒน์ รุ่งเรือง",
    avatar: "/myicon (18).webp?height=40&width=40",
    rating: 5,
    date: "20/1/25",
    content: "แอพยอดเยี่ยมครับ ช่วยให้การทำงานระหว่างอุปกรณ์เป็นเรื่องง่าย ขอบคุณทีมพัฒนามากครับ",
    helpfulCount: 29,
  },
  {
    id: 19,
    author: "มณีรัตน์ สว่างใจ",
    avatar: "/myicon (19).webp?height=40&width=40",
    rating: 5,
    date: "18/1/25",
    content: "แอพดีมากค่ะ ใช้งานง่าย ไม่ซับซ้อน เหมาะสำหรับทุกคนที่ต้องการเชื่อมต่อมือถือกับคอมพิวเตอร์",
    helpfulCount: 24,
  },
  {
    id: 20,
    author: "ภาคิน ศรีสุข",
    avatar: "/myicon (20).webp?height=40&width=40",
    rating: 4,
    date: "15/1/25",
    content: "ใช้งานได้ดีครับ แต่อยากให้เพิ่มฟีเจอร์การแชร์หน้าจอระหว่างอุปกรณ์ จะดีมากครับ",
    helpfulCount: 17,
  },
]

const ratingStats = {
  average: 4.6,
  total: "966,545",
  distribution: [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ],
}

export function ReviewsSection() {
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([])
  const { t } = useTranslation()

  useEffect(() => {
    // Shuffle the reviews array and take the first 10
    const shuffled = [...reviews].sort(() => 0.5 - Math.random())
    setDisplayedReviews(shuffled.slice(0, 10))
  }, [])

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">{t("reviewsSection.title")}</h2>
        <button className="text-[#056449]">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <p className="text-sm text-[#056449]">{t("reviewsSection.subtitle")}</p>

      {/* Rating Overview */}
      <div className="flex gap-6 items-center">
        {/* Average Rating */}
        <div className="text-center">
          <div className="text-[56px] font-medium leading-tight">{ratingStats.average}</div>
          <div className="flex items-center justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(ratingStats.average) ? "fill-blue-500 text-blue-500" : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <div className="text-xs text-gray-500">{ratingStats.total}</div>
        </div>

        {/* Rating Distribution */}
        <div className="flex-1 space-y-1">
          {ratingStats.distribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-2 text-sm">
              <span className="w-3">{item.stars}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${item.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {displayedReviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={review.avatar || "/myicon (1).webp"}
                    alt={review.author}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{review.author}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < review.rating ? "fill-blue-500 text-blue-500" : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <button className="p-2">
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </button>
            </div>
            <p className="mt-2 text-sm">{review.content}</p>
            <div className="mt-3 flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {review.helpfulCount} {t("reviewsSection.helpfulCount")}
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8 px-4 rounded-full">
                  {t("common.no")}
                </Button>
                <Button variant="outline" size="sm" className="h-8 px-4 rounded-full">
                  {t("common.yes")}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

