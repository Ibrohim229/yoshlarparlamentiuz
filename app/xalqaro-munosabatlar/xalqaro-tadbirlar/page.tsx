export default function XalqaroTadbirlar() {
  const events = [
    {
      id: 1,
      title: "Xalqaro yoshlar parlamenti forumi",
      date: "10-12 Iyun, 2025",
      time: "09:00 - 18:00",
      location: "Toshkent shahri, Xalqaro kongresslar markazi",
      participants: "Turli mamlakatlardan yoshlar parlamenti a'zolari",
      image: "/placeholder.svg?height=200&width=400&text=Xalqaro+forum",
      description:
        "Forumda turli mamlakatlardan yoshlar parlamenti a'zolari ishtirok etadi. Forum davomida yoshlar parlamentlari faoliyati, yoshlar siyosati, yoshlar manfaatlarini ifoda etish mexanizmlari haqida tajriba almashiladi.",
    },
    {
      id: 2,
      title: "MDH mamlakatlari yoshlar parlamenti a'zolari bilan uchrashuv",
      date: "15 Iyun, 2025",
      time: "10:00 - 13:00",
      location: "Toshkent shahri, Yoshlar markazi",
      participants: "MDH mamlakatlari yoshlar parlamenti a'zolari",
      image: "/placeholder.svg?height=200&width=400&text=MDH+uchrashuvi",
      description:
        "Uchrashuvda MDH mamlakatlari yoshlar parlamenti a'zolari ishtirok etadi. Uchrashuv davomida MDH doirasida yoshlar parlamentlari hamkorligini rivojlantirish, qo'shma loyihalarni amalga oshirish masalalari muhokama qilinadi.",
    },
    {
      id: 3,
      title: "Xalqaro yoshlar huquqlari konferensiyasi",
      date: "20 Iyun, 2025",
      time: "09:00 - 17:00",
      location: "Toshkent davlat yuridik universiteti",
      participants: "Xalqaro ekspertlar, yoshlar parlamenti a'zolari",
      image: "/placeholder.svg?height=200&width=400&text=Konferensiya",
      description:
        "Konferensiyada xalqaro ekspertlar va yoshlar parlamenti a'zolari ishtirok etadi. Konferensiya davomida yoshlar huquqlari, ularni himoya qilish mexanizmlari, yoshlar huquqlarini ta'minlash bo'yicha xalqaro tajriba haqida ma'lumotlar beriladi.",
    },
    {
      id: 4,
      title: "Yoshlar parlamenti a'zolarining xorijiy mamlakatlarga tashrifi",
      date: "25-30 Iyun, 2025",
      time: "Turli vaqtlarda",
      location: "Turli mamlakatlar",
      participants: "Yoshlar parlamenti a'zolari",
      image: "/placeholder.svg?height=200&width=400&text=Tashriflar",
      description:
        "Yoshlar parlamenti a'zolari xorijiy mamlakatlarga tashrif buyuradilar. Tashriflar davomida xorijiy mamlakatlar parlamenti, yoshlar tashkilotlari bilan uchrashuvlar o'tkaziladi, tajriba almashiladi.",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Xalqaro tadbirlar</h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Yoshlar parlamenti tomonidan tashkil etiladigan xalqaro tadbirlar haqida ma'lumot
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">{/* Empty content as requested */}</section>
    </main>
  )
}
