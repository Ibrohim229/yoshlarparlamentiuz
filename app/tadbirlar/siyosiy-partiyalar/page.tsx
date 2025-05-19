export default function SiyosiyPartiyalar() {
  const meetings = [
    {
      id: 1,
      title: "O'zbekiston Liberal Demokratik partiyasi yoshlar guruhi yig'ilishi",
      date: "20 May, 2025",
      time: "14:00 - 16:00",
      location: "O'zLiDeP markaziy kengashi binosi",
      participants: "Partiya yoshlar guruhi a'zolari",
      image: "/placeholder.svg?height=200&width=400&text=O'zLiDeP",
      description:
        "Yig'ilishda quyidagi masalalar ko'rib chiqiladi: yoshlar bandligini ta'minlash, yoshlarni tadbirkorlikka jalb qilish, yoshlar uchun imtiyozlar tizimini takomillashtirish.",
    },
    {
      id: 2,
      title: "O'zbekiston Xalq Demokratik partiyasi yoshlar guruhi yig'ilishi",
      date: "22 May, 2025",
      time: "10:00 - 12:00",
      location: "XDP markaziy kengashi binosi",
      participants: "Partiya yoshlar guruhi a'zolari",
      image: "/placeholder.svg?height=200&width=400&text=XDP",
      description:
        "Yig'ilishda quyidagi masalalar ko'rib chiqiladi: ijtimoiy himoyaga muhtoj yoshlar qatlamini qo'llab-quvvatlash, yoshlar uchun ijtimoiy dasturlarni ishlab chiqish, yoshlarning ijtimoiy faolligini oshirish.",
    },
    {
      id: 3,
      title: "O'zbekiston 'Adolat' Sotsial Demokratik partiyasi yoshlar guruhi yig'ilishi",
      date: "25 May, 2025",
      time: "15:00 - 17:00",
      location: "'Adolat' SDP markaziy kengashi binosi",
      participants: "Partiya yoshlar guruhi a'zolari",
      image: "/placeholder.svg?height=200&width=400&text=Adolat",
      description:
        "Yig'ilishda quyidagi masalalar ko'rib chiqiladi: yoshlar huquqlarini himoya qilish, yoshlar o'rtasida huquqiy savodxonlikni oshirish, yoshlar uchun huquqiy maslahat markazlarini tashkil etish.",
    },
    {
      id: 4,
      title: "O'zbekiston Ekologik partiyasi yoshlar guruhi yig'ilishi",
      date: "27 May, 2025",
      time: "11:00 - 13:00",
      location: "Ekologik partiya markaziy kengashi binosi",
      participants: "Partiya yoshlar guruhi a'zolari",
      image: "/placeholder.svg?height=200&width=400&text=Ekologik",
      description:
        "Yig'ilishda quyidagi masalalar ko'rib chiqiladi: yoshlarni ekologik harakatlarga jalb qilish, yoshlar o'rtasida ekologik madaniyatni shakllantirish, yoshlar ishtirokida ekologik aksiyalarni o'tkazish.",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Siyosiy partiyalarning yoshlar guruhlari yig'ilishlari</h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi siyosiy partiyalarining yoshlar guruhlari yig'ilishlari haqida ma'lumot
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">{/* Empty content as requested */}</section>
    </main>
  )
}
