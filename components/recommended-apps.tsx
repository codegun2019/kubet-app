import Image from "next/image"
import { Star, ChevronRight } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

interface AppItemProps {
  icon: string
  name: string
  category: string
  rating: number
  size: string
}

function AppItem({ icon, name, category, rating, size }: AppItemProps) {
  const { t } = useTranslation()
  return (
    <div className="flex items-center gap-4 p-2">
      <div className="relative w-12 h-12 rounded-xl overflow-hidden">
        <Image src={icon || "/placeholder.svg"} alt={name} width={48} height={48} className="object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm truncate">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="flex items-center">
            <span>{rating}</span>
            <Star className="h-3 w-3 fill-current text-gray-500 ml-0.5" />
          </div>
          <span>•</span>
          <span>{size}</span>
        </div>
      </div>
      <a href="http://m.kubet88p.com/">
      <div className="flex-shrink-0">
        <button className="text-sm font-medium text-blue-600">{t("common.install")}</button>
      </div>
      </a>
    </div>
  )
}

interface MoreAppItemProps {
  icon: string
  name: string
  rating: number
}

function MoreAppItem({ icon, name, rating }: MoreAppItemProps) {
  return (
    <div className="w-20 flex flex-col items-center gap-2">
      <div className="relative w-20 h-20 rounded-xl overflow-hidden">
        <Image src={icon || "/placeholder.svg"} alt={name} width={80} height={80} className="object-cover" />
      </div>
      <div className="text-center">
        <p className="text-xs font-medium truncate w-full">{name}</p>
        <div className="flex items-center justify-center text-xs text-gray-500">
          <span>{rating}</span>
          <Star className="h-3 w-3 fill-current text-gray-500 ml-0.5" />
        </div>
      </div>
    </div>
  )
}

export function RecommendedApps() {
  const { t } = useTranslation()

  const recommendedApps = [
    {
      icon: "/game-1.webp?height=48&width=48",
      name: "One Punch Man",
      category: "เกมต่อสู้",
      rating: 4.1,
      size: "70 MB",
    },
    {
      icon: "/game-2.webp?height=48&width=48",
      name: "Arena Breakout",
      category: "FPS",
      rating: 4.5,
      size: "76 MB",
    },
    {
      icon: "/game-3.webp?height=48&width=48",
      name: "Ace Fishing: Crew",
      category: "เกมตกปลา",
      rating: 4.3,
      size: "4.1 MB",
    },
  ]

  const moreApps = [
    {
      icon: "/game-4.webp?height=80&width=80",
      name: "Dragon Nest 2",
      rating: 3.8,
    },
    {
      icon: "/game-7.webp?height=80&width=80",
      name: "MapleStory",
      rating: 4.5,
    },
    {
      icon: "/game-8.webp?height=80&width=80",
      name: "Metal",
      rating: 4.4,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium px-4 mb-2">{t("recommendedApps.forYou")}</h2>
        <div className="divide-y">
          {recommendedApps.map((app, index) => (
            <AppItem key={index} {...app} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between px-4 mb-4">
          <h2 className="text-lg font-medium">{t("recommendedApps.otherApps")}</h2>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-4">
          {moreApps.map((app, index) => (
            <MoreAppItem key={index} {...app} />
          ))}
        </div>
      </div>
    </div>
  )
}

