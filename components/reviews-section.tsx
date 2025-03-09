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
    date: "10/03/24",
    content: "ระบบการเงินดีมาก ฝากถอนไว ไม่ต้องรอนานเลย เคยถอนช่วงดึกก็ได้รับเงินภายในไม่กี่นาที",
    helpfulCount: 30,
  },
  {
    id: 2,
    author: "ปรมธ ตระกูลศึกษา",
    avatar: "/myicon (2).webp?height=40&width=40",
    rating: 5,
    date: "22/05/24",
    content: "ใช้งานง่ายมากครับ ฝากถอนไม่มีขั้นต่ำ แถมยังมีโปรโมชั่นคืนเงินให้ลูกค้าอีกด้วย สุดยอดครับ",
    helpfulCount: 15,
  },
  {
    id: 3,
    author: "สมชาย ใจดี",
    avatar: "/myicon (3).webp?height=40&width=40",
    rating: 5,
    date: "05/06/24",
    content: "เคยลองถอนเงินหลายครั้งแล้ว ได้รับครบทุกครั้ง ไม่มีดีเลย์เลย เชื่อถือได้แน่นอนครับ",
    helpfulCount: 22,
  },
  {
    id: 4,
    author: "วิภาวี สุขสันต์",
    avatar: "/myicon (4).webp?height=40&width=40",
    rating: 4,
    date: "28/07/24",
    content: "ฝากถอนไว แต่บางครั้งระบบอาจจะหน่วงช่วงเวลากลางคืน นอกนั้นดีมากเลยค่ะ",
    helpfulCount: 18,
  },
  {
    id: 5,
    author: "ณัฐพล วงศ์สวัสดิ์",
    avatar: "/myicon (5).webp?height=40&width=40",
    rating: 5,
    date: "11/08/24",
    content: "เล่นได้เงินจริง ถอนเงินไวสุดๆ รองรับหลายธนาคาร ไม่ต้องรอนานเลย",
    helpfulCount: 25,
  },
  {
    id: 6,
    author: "พิมพ์มาดา รักษ์ดี",
    avatar: "/myicon (6).webp?height=40&width=40",
    rating: 4,
    date: "19/09/24",
    content: "การเงินมั่นคงจริงค่ะ แต่แอบอยากให้เพิ่มช่องทางการถอนผ่าน Wallet ด้วยค่ะ",
    helpfulCount: 12,
  },
  {
    id: 7,
    author: "อนุชา มั่นคง",
    avatar: "/myicon (7).webp?height=40&width=40",
    rating: 5,
    date: "30/10/24",
    content: "ถอนเงินไวมาก แค่กดถอนก็ได้เงินในบัญชีภายใน 5 นาที สะดวกสุดๆ ครับ",
    helpfulCount: 28,
  },
  {
    id: 8,
    author: "ศิริพร แสนสุข",
    avatar: "/myicon (8).webp?height=40&width=40",
    rating: 5,
    date: "15/11/24",
    content: "มั่นใจได้เลยค่ะ ถอนง่าย ได้เงินครบ ไม่เคยมีปัญหา แนะนำเลยค่ะ",
    helpfulCount: 20,
  },
  {
    id: 9,
    author: "ธีรศักดิ์ พรหมมา",
    avatar: "/myicon (9).webp?height=40&width=40",
    rating: 4,
    date: "07/12/24",
    content: "ทุกอย่างดีหมด แต่ถ้าปรับปรุงให้มีระบบถอนเงินอัตโนมัติแบบ 24 ชม. จะดีมากครับ",
    helpfulCount: 15,
  },
  {
    id: 10,
    author: "กมลชนก รุ่งเรือง",
    avatar: "/myicon (10).webp?height=40&width=40",
    rating: 5,
    date: "01/01/25",
    content: "บริการดีมากค่ะ ถอนเงินไว ไม่มีค่าธรรมเนียม แนะนำเลยค่ะ",
    helpfulCount: 23,
  },
];


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

