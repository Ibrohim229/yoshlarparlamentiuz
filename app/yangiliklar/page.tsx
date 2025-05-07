import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

export default function Yangiliklar() {
  const news = [
    {
      id: 1,
      title:
        "Yuqori daromadli mahsulotlarni yetishtirish bo'yicha na'munaviy loyihalar amalga oshiriladi",
      date: "19.02.2025",
      time: "15:00",
      image: "/images/media/IMG_8125.JPG",
      description:
        "Oliy Majlis Qonunchilik palatasi Agrar va suv xo'jaligi masalalari qo'mitasining kengaytirilgan yig'ilishi bo'lib o'tdi. Unda tegishli vazirlik va idoralar rahbarlarining \"Mamlakatimizda parrandachilikni rivojlantirish, yaylovlardan samarali foydalanish hamda tomorqa va ijara berilgan ekin yerlarida daromadli mahsulot yetishtirish bo'yicha amalga oshirilayotgan ishlar to'g'risida\"gi hisoboti eshitildi.",
      category: "Qonunchilik palatasi",
    },
    {
      id: 2,
      title:
        "Qonunchilik palatasi deputatlari tomonidan yangi qonun loyihasi muhokama qilindi",
      date: "18.02.2025",
      time: "11:00",
      image: "/placeholder.svg?height=200&width=400&text=News+2",
      description:
        "Bugun Qonunchilik palatasi majlisida deputatlar tomonidan yangi qonun loyihasi atroflicha muhokama qilindi. Muhokamada barcha fraksiyalar vakillari o'z fikrlarini bildirdilar.",
      category: "Qonunchilik palatasi",
    },
    {
      id: 3,
      title: "Yoshlar parlamenti a'zolari bilan davra suhbati o'tkazildi",
      date: "13.02.2025",
      time: "11:00",
      image: "/placeholder.svg?height=200&width=400&text=News+3",
      description:
        "Yoshlar parlamenti a'zolari bilan davra suhbati tashkil etildi. Unda yoshlarning qonun ijodkorligi jarayonidagi ishtiroki masalalari muhokama qilindi.",
      category: "Yoshlar parlamenti",
    },
    {
      id: 4,
      title: "Xalqaro parlament delegatsiyasi bilan uchrashuv",
      date: "11.02.2025",
      time: "10:00",
      image: "/placeholder.svg?height=200&width=400&text=News+4",
      description:
        "Qonunchilik palatasi rahbariyati xalqaro parlament delegatsiyasi bilan uchrashuv o'tkazdi. Uchrashuv davomida ikki tomonlama hamkorlik masalalari muhokama qilindi.",
      category: "Xalqaro aloqalar",
    },
    {
      id: 5,
      title: "Yoshlar parlamenti qo'mitalari yig'ilishlari bo'lib o'tdi",
      date: "10.02.2025",
      time: "14:00",
      image: "/placeholder.svg?height=200&width=400&text=News+5",
      description:
        "Yoshlar parlamenti qo'mitalari yig'ilishlari bo'lib o'tdi. Yig'ilishlarda qo'mitalar faoliyati, qonun loyihalari muhokama qilindi.",
      category: "Yoshlar parlamenti",
    },
    {
      id: 6,
      title:
        "Yoshlar parlamenti a'zolari xorijiy mamlakatlarga tashrif buyurdilar",
      date: "08.02.2025",
      time: "09:00",
      image: "/placeholder.svg?height=200&width=400&text=News+6",
      description:
        "Yoshlar parlamenti a'zolari xorijiy mamlakatlarga tashrif buyurdilar. Tashriflar davomida xorijiy mamlakatlar parlamenti, yoshlar tashkilotlari bilan uchrashuvlar o'tkazildi, tajriba almashildi.",
      category: "Xalqaro aloqalar",
    },
  ];

  const categories = [
    "Barchasi",
    "Qonunchilik palatasi",
    "Yoshlar parlamenti",
    "Xalqaro aloqalar",
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Yangiliklar</h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Yoshlar parlamenti faoliyati bilan bog'liq
            so'nggi yangiliklar
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">So'nggi yangiliklar</h2>
              <div className="relative">
                <select className="bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="relative h-[200px] w-full">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          {item.date} | {item.time}
                        </span>
                        <span className="mx-2">|</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{item.description}</p>
                      <Link
                        href={`/yangiliklar/${item.id}`}
                        className="text-blue-600 hover:underline flex items-center text-sm font-medium"
                      >
                        Batafsil o'qish{" "}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <nav className="flex items-center">
                <button className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100">
                  &laquo; Oldingi
                </button>
                <button className="px-3 py-1 border-t border-b border-gray-300 bg-blue-600 text-white">
                  1
                </button>
                <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100">
                  Keyingi &raquo;
                </button>
              </nav>
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Kategoriyalar</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/yangiliklar?category=${category}`}
                      className="flex items-center text-gray-700 hover:text-blue-600"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Arxiv</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/yangiliklar?year=2025&month=2"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Fevral, 2025
                  </Link>
                </li>
                <li>
                  <Link
                    href="/yangiliklar?year=2025&month=1"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Yanvar, 2025
                  </Link>
                </li>
                <li>
                  <Link
                    href="/yangiliklar?year=2024&month=12"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Dekabr, 2024
                  </Link>
                </li>
                <li>
                  <Link
                    href="/yangiliklar?year=2024&month=11"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Noyabr, 2024
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">Teglar</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/yangiliklar?tag=parlament"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800"
                >
                  Parlament
                </Link>
                <Link
                  href="/yangiliklar?tag=yoshlar"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800"
                >
                  Yoshlar
                </Link>
                <Link
                  href="/yangiliklar?tag=qonun"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800"
                >
                  Qonun
                </Link>
                <Link
                  href="/yangiliklar?tag=majlis"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800"
                >
                  Majlis
                </Link>
                <Link
                  href="/yangiliklar?tag=xalqaro"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800"
                >
                  Xalqaro
                </Link>
                <Link
                  href="/yangiliklar?tag=uchrashuv"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800"
                >
                  Uchrashuv
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
