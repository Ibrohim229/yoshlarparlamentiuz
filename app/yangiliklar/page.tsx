import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

export default function Yangiliklar() {
  const news = [
    {
      id: 1,
      title:
        "Buxoro davlat universitetida yoshlar uchun yaratilgan sharoitlar o‘rganildi",
      date: "19.02.2025",
      time: "15:00",
      image: "/images/media/IMG_3950.JPG",
      description: `Oliy Majlis Qonunchilik palatasi huzuridagi Yoshlar parlamenti raisi Otabek Sobitov Buxoro davlat universitetiga tashrif buyurdi. Tashrif davomida u universitet faoliyati, ta’lim sifati, ilmiy izlanishlar va talabalar uchun yaratilgan imkoniyatlar bilan yaqindan tanishdi.`,
      category: "Qonunchilik palatasi",
    },
    {
      id: 2,
      title:
        "Yoshlar parlamenti Raisi talabalar bilan ochiq muloqotda ishtirok etdi",
      date: "18.02.2025",
      time: "11:00",
      image: "/images/media/IMG_8125.JPG",
      description: `Buxoro davlat universitetida faol va tashabbuskor talabalar bilan ochiq muloqot tashkil etildi.
 
Uchrashuv davomida yoshlarning ilm-fanga bo‘lgan qiziqishi, jamiyatdagi o‘rni va ularning tashabbuslarini qo‘llab-quvvatlash masalalari muhokama qilindi. Talabalar o‘z fikr-mulohazalari, g‘oyalari va takliflari bilan ishtirok etib, savollariga atroflicha javob oldilar.`,
      category: "Qonunchilik palatasi",
    },
    {
      id: 3,
      title:
        "Yoshlar parlamenti Raisi Kogon tumanidagi 1-sonli jazoni ijro etish muassasida mahkumlar bilan suhbatlashildi",
      date: "13.02.2025",
      time: "11:00",
      image: "/images/media/IMG_3998.JPG",
      description: `Yoshlar parlamenti Raisi Kogon tumanidagi 1-sonli jazoni ijro etish muassasi faoliyati bilan yaqindan tanishdi. Muassasada maxkumlarni kasb-hunar o‘rganishlari, xorijiy tillarni o‘zlashitirish, yaratilgan shart-sharoitlar bilan tanishilib, muassasa faoliyati yuzasidan takliflar ilgari surildi.`,
      category: "Yoshlar parlamenti",
    },
    {
      id: 4,
      title:
        "Xorazm — dunyo taraqqiyotining beshigi, dunyo sivilizatsiyasi va madaniyatiga bebaho hissa qo‘shgan Sharq gavhari hisoblanadi. Uning havas qilsa arziydigan bebaho boyligi – tarixiy obidalari bor. “Ichan qal’a” majmuasining umumbashariyat xazinasi sifatida YUNЕSKO ro‘yxatiga kiritilgani fikrimiz isbotidir.",
      date: "11.02.2025",
      time: "10:00",
      image: "/images/news/photo_2025-05-06_00-47-28.jpg",
      description: `Har oyning oxirgi haftasida xalq bilan muloqot qilish, odamlarni o‘ylantirayotgan masalalarga yechim topish maqsadida hududlarda bo‘lib, saylovchilar bilan muloqotlar o‘tkazamiz. Ochig‘i, har gal borganimizda biror o‘zgarish yoki yangilanishning guvohi bo‘lamiz. Chunki hozir bu yerda Yangi O‘zbekiston nafasi har bir mahalla, har bir xonadonga kirib boryapti.`,
      category: "Xalqaro aloqalar",
    },
    {
      id: 5,
      title:
        "Prezidentimiz Shavkat Mirziyoyevning hududlar rivoji va aholi hayoti bilan yaqindan tanishish, yangi istiqbolli rejalarni belgilash maqsadida 1-2-may kunlari Xorazm viloyatiga tashrifi tom ma’noda, tarixiy voqea bo‘ldi.",
      date: "10.02.2025",
      time: "14:00",
      image: "/images/news/photo_2025-05-06_00-47-23.jpg",
      description: `Davlatimiz rahbarining "Xorazm – shonli tariximiz bilan yangi islohotlarimiz tutashgan chorraha" deya ta’kidlagan so‘zlari bugungi kundagi o‘zgarishlarning voha ahli hayotida naqadar muhim o‘rin tutganini yaqqol ko‘rsatdi.`,
      category: "Yoshlar parlamenti",
    },
    {
      id: 6,
      title: "Turistik imkoniyatlar — voha ravnaqida muhim bosqich",
      date: "08.02.2025",
      time: "09:00",
      image: "/images/news/photo_2025-05-06_00-47-13.jpg",
      description: `Davlatimiz rahbari Xorazm viloyatiga tashrifini bugungi kunda soatiga atigi 400 nafar yo‘lovchiga xizmat ko‘rsata olishi mumkin bo‘lgan Urganch xalqaro aeroportini Koreya Respublikasining Incheon International Airport Corporation kompaniyasi bilan birgalikda modernizatsiya qilish va boshqarish borasidagi loyihalar bilan tanishishdan boshladi. Bu bejiz emas.`,
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
