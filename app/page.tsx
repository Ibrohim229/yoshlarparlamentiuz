import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight, Clock } from "lucide-react";

export default function Home() {
  const newsItems = [
    {
      id: 1,
      title:
        "Buxoro davlat universitetida yoshlar uchun yaratilgan sharoitlar o‘rganildi",
      date: "19.02.2025",
      time: "15:00",
      image: "/images/media/IMG_3950.JPG",
      description: `Oliy Majlis Qonunchilik palatasi huzuridagi Yoshlar parlamenti raisi Otabek Sobitov Buxoro davlat universitetiga tashrif buyurdi.

Tashrif davomida u universitet faoliyati, ta’lim sifati, ilmiy izlanishlar va talabalar uchun yaratilgan imkoniyatlar bilan yaqindan tanishdi.`,
      location: "Oliy Majlis Qonunchilik palatasi",
    },
    {
      id: 2,
      title:
        "Yoshlar parlamenti Raisi talabalar bilan ochiq muloqotda ishtirok etdi",
      date: "18.02.2025",
      time: "11:00",
      image: "/images/media/IMG_8125.JPG",
      description: `Buxoro davlat universitetida faol va tashabbuskor talabalar bilan ochiq muloqot tashkil etildi.
 
Uchrashuv davomida yoshlarning ilm-fanga bo‘lgan qiziqishi, jamiyatdagi o‘rni va ularning tashabbuslarini qo‘llab-quvvatlash masalalari muhokama qilindi. Talabalar o‘z fikr-mulohazalari, g‘oyalari va takliflari bilan ishtirok etib, savollariga atroflicha javob oldilar.

Shuningdek, yoshlarga yaratilgan imkoniyatlardan unumli foydalanish, ularni qo‘llab-quvvatlash va rag‘batlantirish mexanizmlari yuzasidan amaliy tavsiyalar berildi. Yoshlar parlamentining faoliyati, maqsad va vazifalari, shuningdek, yoshlarning siyosiy va ijtimoiy jarayonlardagi ishtiroki haqida ham atroflicha maʼlumotlar berildi.

Bunday muloqotlar yoshlarning faolligini oshirish, ularni yangi g‘oyalar sari ilhomlantirish va kelajakka ishonchini mustahkamlashga xizmat qiladi.`,
      location: "Oliy Majlis Qonunchilik palatasi",
    },
    {
      id: 3,
      title:
        "Yoshlar parlamenti Raisi Kogon tumanidagi 1-sonli jazoni ijro etish muassasida mahkumlar bilan suhbatlashildi",
      date: "13.02.2025",
      time: "11:00",
      image: "/images/media/IMG_3998.JPG",
      description: `Yoshlar parlamenti Raisi Kogon tumanidagi 1-sonli jazoni ijro etish muassasi faoliyati bilan yaqindan tanishdi. Muassasada maxkumlarni kasb-hunar o‘rganishlari, xorijiy tillarni o‘zlashitirish, yaratilgan shart-sharoitlar bilan tanishilib, muassasa faoliyati yuzasidan takliflar ilgari surildi.

Shuningdek, Yoshlar parlamenti raisi Otabekxo‘ja Sobitov muassasadagi maxkumlar bilan suxbatlashdi.

Suxbat doirasida “Fuqarolarning davlat pensiya taʼminoti toʻgʻrisida”gi Qonunining 37-moddasi ozodlikdan mahrum etishga hukm qilingan shaxslarning jazoni ijro etish muassasalarida jazoni oʻtash davrida bajaradigan har qanday ishi, agar ushbu ish bajarilgan davr uchun jazoni ijro etish muassasasi tomonidan ijtimoiy soliq toʻlangan boʻlsa umumiy mehnat stajiga qoʻshilishi belgilanganligi aytib oʻtildi.`,
      location: "Oliy Majlis Qonunchilik palatasi",
    },
    {
      id: 4,
      title:
        "Xorazm — dunyo taraqqiyotining beshigi, dunyo sivilizatsiyasi va madaniyatiga bebaho hissa qo‘shgan Sharq gavhari hisoblanadi. Uning havas qilsa arziydigan bebaho boyligi – tarixiy obidalari bor. “Ichan qal’a” majmuasining umumbashariyat xazinasi sifatida YUNЕSKO ro‘yxatiga kiritilgani fikrimiz isbotidir.",
      date: "11.02.2025",
      time: "10:00",
      image: "/images/news/photo_2025-05-06_00-47-28.jpg",
      description:
        "Har oyning oxirgi haftasida xalq bilan muloqot qilish, odamlarni o‘ylantirayotgan masalalarga yechim topish maqsadida hududlarda bo‘lib, saylovchilar bilan muloqotlar o‘tkazamiz. Ochig‘i, har gal borganimizda biror o‘zgarish yoki yangilanishning guvohi bo‘lamiz. Chunki hozir bu yerda Yangi O‘zbekiston nafasi har bir mahalla, har bir xonadonga kirib boryapti.",
      location: "Oliy Majlis Qonunchilik palatasi",
    },
  ];

  const events = [
    {
      id: 1,
      title:
        "Sudga qadar ish yuritish bosqichida gumon qilinuvchi, ayblanuvchi va jinoyatdan jabr ko'rgan shaxslarning huquqlarini ta'minlash",
      date: "22.02.2025",
      time: "13:40",
      description:
        "Oliy Majlis Qonunchilik palatasidagi O'zLiDeP fraksiyasi hamda Xalqaro ishlar, mudofaa va xavfsizlik masalalari qo'mitasining go'shma yig'ilishi bo'lib o'tdi. Unda deputatlar, Toshkent davlat yuridik universiteti vakillari, huquqni muhofaza qiluvchi organlar xodimlari ishtirok etdilar.",
    },
    {
      id: 2,
      title: "Hamkorlik memorandumi imzolandi",
      date: "21.02.2025",
      time: "19:46",
      description:
        "2025-yil 21-fevral kuni Oliy Majlis Qonunchilik palatasining Ekologiya va atrof-muhitni muhofaza qilish masalalari qo'mitasi hamda Markaziy Osiyo atrof-muhit va iqlim o'zgarishini organish universiteti o'rtasida hamkorlik memorandumi imzolandi.",
    },
    {
      id: 3,
      title:
        "Qonunchilikka berilgan takliflar mualliflar ishtirokida muhokama qilindi",
      date: "21.02.2025",
      time: "17:48",
      description:
        "2025-yil 21-fevral kuni Oliy Majlis Qonunchilik palatasining Agrar va suv xo'jaligi masalalari qo'mitasi tomonidan qonunchilikni takomillashtirishga qaratilgan taklif va munosabatlar bildirgan fuqarolar bilan uchrashuv o'tkazildi.",
    },
    {
      id: 4,
      title: "Murojaatlar uning mualliflari ishtirokida muhokama qilindi",
      date: "20.02.2025",
      time: "19:19",
      description:
        "Oliy Majlis Qonunchilik palatasida Demokratik institutlar va fuqarolik jamiyatini rivojlantirish masalalari qo'mitasi tomonidan qonunchilikni takomillashtirishga qaratilgan takliflar va munosabatlar bildirgan fuqarolar bilan uchrashuv o'tkazildi.",
    },
    {
      id: 5,
      title:
        "O'zbekiston va Jahon savdo tashkiloti: qonunchilikni uyg'unlashtirish dolzarb masalalari",
      date: "20.02.2025",
      time: "18:51",
      description:
        "Bugun, 20-fevral kuni shu mavzuda Oliy Majlis Qonunchilik palatasining Qonunchilikni Jahon savdo tashkiloti bitimlariga uyg'unlashtirish bo'yicha komissiyasi tomonidan davra suhbati o'tkazildi. Unda deputatlar, vazirlik va idoralar, xalqaro tashkilotlar vakillari ishtirok etdilar.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[500px] w-full">
          <Image
            src="/images/media/IMG_8125.JPG"
            alt="Parliament Meeting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 sm:p-6 md:p-8">
            <div className="container mx-auto">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                Yuqori daromadli mahsulotlarni yetishtirish bo'yicha na'munaviy
                loyihalar amalga oshiriladi
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6 max-w-full md:max-w-3xl">
                Oliy Majlis Qonunchilik palatasi Agrar va suv xo'jaligi
                masalalari qo'mitasining kengaytirilgan yig'ilishi bo'lib o'tdi.
                Unda tegishli vazirlik va idoralar rahbarlarining
                "Mamlakatimizda parrandachilikni rivojlantirish, yaylovlardan
                samarali foydalanish hamda tomorqa va ijara berilgan ekin
                yerlarida daromadli mahsulot yetishtirish bo'yicha amalga
                oshirilayotgan ishlar to'g'risida"gi hisoboti eshitildi.
              </p>
              <Link
                href="/yangiliklar/1"
                className="inline-block bg-blue-600 text-white text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Batafsil
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">So'nggi yangiliklar</h2>
              <div className="space-y-6">
                {newsItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-4 border-b border-gray-200 pb-6"
                  >
                    <div className="md:w-1/4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={150}
                        height={100}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>
                          {item.date} | {item.time}
                        </span>
                        <span className="mx-2">|</span>
                        <span>{item.location}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-3">{item.description}</p>
                      <Link
                        href={`/yangiliklar/${item.id}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Batafsil o'qish
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/yangiliklar"
                  className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition"
                >
                  Barcha yangiliklar
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">
                Qonunchilik palatasi majlislari
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xl font-bold text-blue-600">
                        {15 + item}
                      </div>
                      <div className="text-sm text-gray-500">May, 2025</div>
                    </div>
                    <h3 className="font-medium mb-2">
                      {item === 1
                        ? "Yalpi majlis"
                        : item === 2
                        ? "Qo'mita yig'ilishi"
                        : "Xalqaro uchrashuv"}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {item === 1
                        ? "Qonunchilik palatasi yalpi majlisi"
                        : item === 2
                        ? "Qonunchilik palatasi qo'mitasi yig'ilishi"
                        : "Xalqaro parlament delegatsiyasi bilan uchrashuv"}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">10:00 - 13:00</span>
                      <Link
                        href={`/tadbirlar/${item}`}
                        className="text-blue-600 hover:underline"
                      >
                        Batafsil
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="text-center mt-6">
                  <Link
                    href="/tadbirlar"
                    className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition"
                  >
                    Barcha tadbirlar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tadbirlar Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Tadbirlar</h2>
            <Link
              href="/tadbirlar"
              className="text-blue-600 hover:underline flex items-center"
            >
              Barchasini ko'rish <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">2025</div>
                    <div className="text-sm text-gray-500">yil Fevral</div>
                  </div>
                  <div className="mt-4 grid grid-cols-7 text-center text-sm">
                    <div className="p-1">Ya</div>
                    <div className="p-1">Du</div>
                    <div className="p-1">Se</div>
                    <div className="p-1">Cho</div>
                    <div className="p-1">Pa</div>
                    <div className="p-1">Ju</div>
                    <div className="p-1">Sha</div>

                    <div className="p-1">26</div>
                    <div className="p-1">27</div>
                    <div className="p-1">28</div>
                    <div className="p-1">29</div>
                    <div className="p-1">30</div>
                    <div className="p-1">31</div>
                    <div className="p-1">1</div>

                    <div className="p-1">2</div>
                    <div className="p-1 bg-blue-100 rounded-full">3</div>
                    <div className="p-1">4</div>
                    <div className="p-1">5</div>
                    <div className="p-1">6</div>
                    <div className="p-1">7</div>
                    <div className="p-1">8</div>

                    <div className="p-1">9</div>
                    <div className="p-1">10</div>
                    <div className="p-1">11</div>
                    <div className="p-1">12</div>
                    <div className="p-1">13</div>
                    <div className="p-1">14</div>
                    <div className="p-1">15</div>

                    <div className="p-1">16</div>
                    <div className="p-1">17</div>
                    <div className="p-1">18</div>
                    <div className="p-1">19</div>
                    <div className="p-1">20</div>
                    <div className="p-1">21</div>
                    <div className="p-1">22</div>

                    <div className="p-1">23</div>
                    <div className="p-1">24</div>
                    <div className="p-1">25</div>
                    <div className="p-1">26</div>
                    <div className="p-1">27</div>
                    <div className="p-1">28</div>
                    <div className="p-1">1</div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="space-y-4">
                    {events.slice(0, 3).map((event) => (
                      <div
                        key={event.id}
                        className="border-b border-gray-200 pb-4"
                      >
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{event.date}</span>
                          <span className="mx-2">|</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{event.time}</span>
                        </div>
                        <h3 className="font-medium mb-1 line-clamp-2">
                          {event.title}
                        </h3>
                        <Link
                          href={`/tadbirlar/${event.id}`}
                          className="text-blue-600 hover:underline text-sm"
                        >
                          Batafsil
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-4">
                {events.slice(3, 5).map((event) => (
                  <div
                    key={event.id}
                    className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{event.date}</span>
                      <span className="mx-2">|</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{event.time}</span>
                    </div>
                    <h3 className="font-medium mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {event.description}
                    </p>
                    <Link
                      href={`/tadbirlar/${event.id}`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Batafsil
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mediateka Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Mediateka</h2>
            <Link
              href="/mediateka"
              className="text-blue-600 hover:underline flex items-center"
            >
              Barchasini ko'rish <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/media/IMG_8069.JPG"
                  alt="Media Gallery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-[#0F4C81] flex items-center justify-center pl-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <div className="relative h-[140px] rounded-lg overflow-hidden">
                <Image
                  src="/images/media/IMG_3875.JPG"
                  alt="Photo 1"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#0F4C81"
                      className="w-6 h-6"
                    >
                      <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative h-[140px] rounded-lg overflow-hidden">
                <Image
                  src="/images/media/IMG_3997.JPG"
                  alt="Photo 2"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#0F4C81"
                      className="w-6 h-6"
                    >
                      <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative h-[140px] rounded-lg overflow-hidden">
                <Image
                  src="/images/media/IMG_3998.JPG"
                  alt="Photo 3"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#0F4C81"
                      className="w-6 h-6"
                    >
                      <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative h-[140px] rounded-lg overflow-hidden">
                <Image
                  src="/images/media/IMG_3999.JPG"
                  alt="Photo 4"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#0F4C81"
                      className="w-6 h-6"
                    >
                      <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 mt-12">Foydali havolalar</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <a href="https://president.uz/oz/pages/view/about_staff?menu_id=15">
                <div className="mb-3">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/1200px-Emblem_of_Uzbekistan.svg.png"
                    alt="President.uz"
                    width={60}
                    height={60}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">
                  O'zbekiston Respublikasi Prezidenti
                </h3>
              </a>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <a href="https://parliament.gov.uz/">
                <div className="mb-3">
                  <Image
                    src="https://senat.uz/media/post/images/1678712800626015.jpg"
                    alt="Parliament.gov.uz"
                    width={60}
                    height={60}
                    className="mx-auto mt-6"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">
                  O'zbekiston Respublikasi Oliy Majlisi
                </h3>
              </a>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <a href="https://gov.uz/oz/yoshlar">
                <div className="mb-3">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMtJb1iPPysvVP-XwNiU3MAikGD9Bgju1KGAwSiYNj1gZGdzfgXfx9xOjixwk9ya9Xrg&usqp=CAU"
                    alt="Gov.uz"
                    width={60}
                    height={60}
                    className="mx-auto mt-6"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">
                  O'zbekiston Respublikasi Hukumati portali
                </h3>
              </a>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <a href="https://pri.oliymajlis.uz/">
                <div className="mb-3">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJIxc4j2_KzTRl2xoJiCa5tsGzTOjxW1LOQ&s"
                    alt="PRI Oliy Majlis"
                    width={60}
                    height={60}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">
                  O'zbekiston Respublikasi Oliy Majlisi huzuridagi Parlament
                  tadqiqotlari instituti
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
