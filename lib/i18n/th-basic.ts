export const th = {
  common: {
    download: "ดาวน์โหลด",
    install: "ติดตั้ง",
    open: "เปิด",
    uninstall: "ถอนการติดตั้ง",
    verified: "ยืนยันตัวตน",
    reviews: "รีวิว",
    yes: "ใช่",
    no: "ไม่",
  },
  downloadBanner: {
    title: "BKB APP Download",
    subtitle: "ดาวน์โหลดแอปตอนนี้",
  },
  appInfo: {
    name: "ลิงก์ไปยัง Windows",
    developer: "Microsoft Corporation",
    rating: "4.6",
    reviewCount: "966K รีวิว",
    ageRating: "3+",
    ageRatingLabel: "ประเภท 3+",
    downloads: "1B+",
    downloadsLabel: "ดาวน์โหลด",
  },
  deviceCompatibility: {
    phone: "โทรศัพท์",
    tablet: "แท็บเล็ต",
    chromebook: "Chromebook",
  },
  aboutApp: {
    title: "เกี่ยวกับแอปนี้",
    description: "เข้าถึงการแจ้งเตือน การโทร แอป รูปภาพ และข้อความในโทรศัพท์ได้หมดในพีซีของคุณ",
    functionality: "การทำงาน",
    tools: "เครื่องมือ",
  },
  gallery: {
    title: "รูปภาพ",
    captions: ["เชื่อมต่อกับพีซีของคุณตลอดเวลา", "จัดการแอปและการแจ้งเตือน", "ดูภาพและโทรออก", "ส่งข้อความและไฟล์"],
  },
  ratingSection: {
    title: "ให้คะแนนแอปนี้",
    subtitle: "บอกให้ผู้อื่นรู้ว่าคุณคิดอย่างไร",
    writeReview: "เขียนรีวิว",
  },
  reviewsSection: {
    title: "คะแนนและรีวิว",
    subtitle: "คะแนนและรีวิวได้รับการบันทึกแล้วและมาจากผู้ใช้แอปประเภทเดียวกับคุณ",
    helpfulCount: "คนพบว่ารีวิวนี้มีประโยชน์",
  },
  recommendedApps: {
    forYou: "แนะนำให้คุณ",
    otherApps: "แอปน่าลองอื่นๆ",
  },
  features: {
    title: "การรองรับในแอป",
  },
  navigation: {
    games: "เกม",
    apps: "แอป",
    search: "ค้นหา",
    books: "หนังสือ",
  },
  rewardModal: {
    header: "REWARD",
    subheader: "FOR FEEDBACK",
    description: "เรากำลังรวบรวมรีวิว เชิงข้อเท็จจริง สำหรับแอปนี้",
    appName: "lss365",
    verifiedBy: "Verified by Play Protect",
    rewardText: "หากคุณสามารถ ดาวน์โหลดแอป และให้รีวิว ตามความเป็นจริง และให้คะแนน คุณจะมีโอกาได้รับข้อเสนอจาก Google Play ฿671.",
    downloadText: "ดาวน์โหลดแอป",
    factualReview: "เชิงข้อเท็จจริง",
    truthfulReview: "ตามความเป็นจริง",
    rewardAmount: "฿671.",
  },
}

// Helper function to access nested properties
export function t(key: string): string {
  const keys = key.split(".")
  let value: any = th

  for (const k of keys) {
    if (value[k] === undefined) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    value = value[k]
  }

  return value
}

