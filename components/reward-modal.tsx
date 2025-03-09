"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Crown } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

interface RewardModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RewardModal({ isOpen, onClose }: RewardModalProps) {
  const { t } = useTranslation()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div
        className="bg-white rounded-3xl w-full max-w-sm animate-in fade-in zoom-in duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="text-center pt-6 pb-4">
          <div className="flex items-center justify-center gap-2">
            {/* <Image
              src="/placeholder.svg?height=24&width=24"
              alt="wheat left"
              width={24}
              height={24}
              className="rotate-[-30deg]"
            /> */}
            <div className="flex items-center gap-1">
              <Crown className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="font-bold text-lg tracking-wide">{t("rewardModal.header")}</span>
            </div>
            {/* <Image
              src="/placeholder.svg?height=24&width=24"
              alt="wheat right"
              width={24}
              height={24}
              className="rotate-[30deg]"
            /> */}
          </div>
          <div className="text-sm mt-1">{t("rewardModal.subheader")}</div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <p className="text-center mb-4">
            เรากำลังรวบรวมรีวิว <span className="text-green-600">{t("rewardModal.factualReview")}</span> สำหรับแอปนี้
          </p>

          {/* App Profile */}
          <div className="bg-gray-50 rounded-xl p-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <Image
                  src="app_2.webp"
                  alt="lss365 icon"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{t("rewardModal.appName")}</span>
                  <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">{t("rewardModal.appName")}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>{t("rewardModal.verifiedBy")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reward Info */}
          <div className="flex items-start gap-2 mb-6">
            <div className="relative w-12 h-12">
              <Image
                src="google_play_img-5581e7ee5269f365cce2.png"
                alt="Coins"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <p className="flex-1 text-sm">
              หากคุณสามารถ <span className="text-green-600">{t("rewardModal.downloadText")}</span> และให้รีวิว{" "}
              <span className="text-blue-600">{t("rewardModal.truthfulReview")}</span> และให้คะแนน คุณจะมีโอกาได้รับข้อเสนอจาก
              Google Play <span className="text-green-600">{t("rewardModal.rewardAmount")}</span>
            </p>
          </div>

          {/* Action Button */}
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3" onClick={onClose}>
            {t("common.install")}
          </Button>
        </div>
      </div>
    </div>
  )
}

