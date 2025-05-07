import Image from "next/image"

export default function Maqolalar() {
  const articles = [
    {
      id: 1,
      title: "Yoshlar parlamenti: kecha, bugun va ertaga",
      date: "15.02.2025",
      author: "Alisher Karimov",
      position: "Yoshlar parlamenti raisi",
      image: "/placeholder.svg?height=200&width=400&text=Article+1",
      description: "Ushbu maqolada Yoshlar parlamentining tashkil etilishi, bugungi kundagi faoliyati va kelajakdagi rejalari haqida so'z yuritiladi. Yoshlar parlamenti mamlakatimizda yoshlar siyosatini yanada takomillashtirish, yoshlarning ijtimoiy-siyosiy faolligini oshirish, ularning manfaatlarini ifoda etish maqsadida tashkil etilgan."
    },
    {
      id: 2,
      title: "Yoshlar va qonun ijodkorligi",
      date: "10.02.2025",
      author: "Malika Rahimova",
      position: "Yoshlar parlamenti rais o'rinbosari",
      image: "/placeholder.svg?height=200&width=400&text=Article+2",
      description: "Ushbu maqolada yoshlarning qonun ijodkorligi jarayonidagi ishtiroki, yoshlar manfaatlarini ifoda etuvchi qonun loyihalarini ishlab chiqish va muhokama qilish jarayoni haqida so'z yuritiladi. Yoshlar parlamenti a'zolari qonun ijodkorligi jarayonida faol ishtirok etmoqda."
    },
    {
      id: 3,
      title: "Yoshlar parlamenti va xalqaro hamkorlik",
      date: "05.02.2025",
      author: "Bobur Toshmatov",
      position: "Yoshlar parlamenti kotibi",
      image: "/placeholder.svg?height=200&width=400&text=Article+3",
      description: "Ushbu maqolada Yoshlar parlamentining xalqaro hamkorligi, xorijiy mamlakatlar yoshlar tashkilotlari bilan aloqalari, xalqaro tajribani o'rganish jarayoni haqida so'z yuritiladi. Yoshlar parlamenti xalqaro hamkorlikni rivojlantirishga alohida e'tibor qaratmoqda."
    },
    {
      id: 4,
      title: "Yoshlar parlamenti qo'mitalari faoliyati",
      date: "01.02.2025",
      author: "Dilshod Ahmedov",
      position: "Ta'lim va fan qo'mitasi raisi",
      image: "/placeholder.svg?height=200&width=400&text=Article+4",
      description: "Ushbu maqolada Yoshlar parlamenti qo'mitalari faoliyati, ularning yo'nalishlari, erishilgan natijalar va kelajakdagi rejalar haqida so'z yuritiladi. Yoshlar parlamenti qo'mitalari o'z yo'nalishlari bo'yicha samarali faoliyat olib bormoqda."
    },
    {
      id: 5,
      title: "Yoshlar parlamenti va yoshlar bandligi",
      date: "25.01.2025",
      author: "Nilufar Karimova",
      position: "Madaniyat va sport qo'mitasi raisi",
      image: "/placeholder.svg?height=200&width=400&text=Article+5",
      description: "Ushbu maqolada yoshlar bandligi masalalari, Yoshlar parlamentining bu boradagi faoliyati, yoshlarni ish bilan ta'minlash bo'yicha takliflar haqida so'z yuritiladi. Yoshlar parlamenti yoshlar bandligini ta'minlash masalasiga alohida e'tibor qaratmoqda."
    },
    {
      id: 6,
      title: "Yoshlar parlamenti va yoshlar tadbirkorligi",
      date: "20.01.2025",
      author: "Jahongir Rasulov",
      position: "Innovatsion rivojlanish qo'mitasi raisi",
      image: "/placeholder.svg?height=200&width=400&text=Article+6",
      description: "Ushbu maqolada yoshlar tadbirkorligi, uni qo'llab-quvvatlash mexanizmlari, Yoshlar parlamentining bu boradagi faoliyati haqida so'z yuritiladi. Yoshlar parlamenti yoshlar tadbirkorligini rivojlantirish uchun qator takliflarni ishlab chiqqan."
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Maqolalar</h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Yoshlar parlamenti a'zolarining maqolalari
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-[200px] w-full">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt\
