import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, ArrowLeft } from "lucide-react";

interface PageProps {
  params: {
    id: string;
  };
}

export default function NewsDetail({ params }: PageProps) {
  // This would normally come from a database or API
  const news = [
    {
      id: "1",
      title: "Yosh avlod manfaatlari muhofazasi va insonparvarlik tamoyili",
      date: "19.02.2025",
      time: "15:00",
      image: "/images/media/IMG_8125.JPG",
      content: `
        <p>Oliy Majlis Qonunchilik palatasining navbatdagi majlisi bo'lib o'tdi. Unda Bola huquqlari bo'yicha vakil (Bolalar ombudsmani)ning 2024-yildagi faoliyati to'g'risidagi ma'ruzasi, shuningdek, davlat organlari rahbarlarining muhofaza qilish sohasini rivojlantirish, homiylik faoliyatini amalga oshirish tartibi to'g'risidagi qonun loyihalarining ikkinchi va uchunchi o'qishlarida ko'rib chiqildi.</p>
        
        <p>Muhokamada siyosiy e'tibor ularning dolzarbligi, zarurligi va ahamiyati, yangicha, yanada takomillashtirilgan qonunlar qabul qilindi.</p>
        
        <h3>Bolalar ombudsmani ma'ruzasi ko'rib chiqildi</h3>
        
        <p>Davlat Bola huquqlari bo'yicha vakil (Bolalar ombudsmani)ning 2024-yildagi bola huquqlari to'g'risidagi qonunchilikka davlat organlari, fuqarolarning o'zini o'zi boshqarish organlari va nodavlat notijorat tashkilotlari tomonidan rioya etilishi holati haqidagi ma'ruzasi ko'rib chiqildi.</p>
        
        <p>Ta'kidlanishicha, O'zbekiston Respublikasi Oliy Majlisining Bola huquqlari bo'yicha vakili (Bolalar ombudsmani) to'g'risidagi Qonun bilan Bolalar ombudsmani faoliyatining institutsional asoslari takomillashtirildi. Unga ko'ra Oliy Majlis palatalariga bola huquqlari to'g'risidagi qonunchilikka davlat organlari va huquqni muhofaza qiluvchi organlarining rioya etishi holati haqidagi hisobotlarni eshitib borish, davlat organlarining bola huquqlarini oid xalqaro standartlar va milliy qonunchilikka rioya etish holati bo'yicha ma'lumotlar aks etgan.</p>
        
        <p>Maqbul m'ruzasi Bolalar ombudsmanining Oliy Majlis palatalariga taqdim etilgan birinchi ma'ruzasi bo'lib, unda mamlakatimizda bola manfaatlarini ta'minlash yuzasidan amalga oshirilgan islohotlar, shuningdek, "Bolalar ombudsmani to'g'risida"gi Qonun va boshqa qonunchilik hujjatlarining amalga oshirilishi, davlat organlari o'rtasidan bola huquqlariga oid xalqaro standartlar va milliy qonunchilikka rioya etish holati bo'yicha ma'lumotlar aks etgan.</p>
        
        <h3>O'zbekistonda bola huquqlari to'g'risidagi qonunchilikka rioya etilishi holati Bolalar ombudsmanining parlament nazorati faoliyatidagi asosiy yo'nalishlardan biri hisoblanadi.</h3>
        
        <p>Hisobot yilida Bolalar ombudsmani nomiga O'zbekiston Respublikasi fuqarolari, xorijiy davlatlar fuqarolari va fuqaroligi bo'lmagan shaxslar, jamoat tashkilotlari va boshqa yuridik shaxslar tomonidan jami 1 064 ta murojaat kelib tushgan. Bu Bolalar ombudsmani institutiga yuning ishonchini yanada mustahkamlanganini bildiradi.</p>
        
        <p>Bola huquqlari bo'yicha vakil Sunnatov Ramazon Djabborovich 2023 yil 25 yanvar kuni Oliy Majlis Senati tomonidan 5 yil muddatga tayinlangan.</p>
      `,
      category: "Qonunchilik palatasi",
      location: "Oliy Majlis Qonunchilik palatasi",
      views: 1245,
      relatedNews: [
        {
          id: 2,
          title:
            "Oliy sud jinoyat protsessida shaxsiy hayot daxlsizligi, shaxsiy va oilaviy sirga oid...",
          date: "18.02.2025",
          image: "/images/media/IMG_3875.JPG",
        },
        {
          id: 3,
          title:
            "Qonun ijodkorligi jarayonida fuqarolarning ishtirokini ta'minlash...",
          date: "17.02.2025",
          image: "/images/media/IMG_3875.JPG",
        },
        {
          id: 4,
          title:
            "O'zbekiston bilan BMT hamkorligini bo'yicha kengashning 36-majlisi...",
          date: "16.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+3",
        },
        {
          id: 5,
          title:
            "Davlat dasturi va huquqshunoslik fanining dolzarb masalalari...",
          date: "15.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+4",
        },
      ],
    },
    {
      id: "2",
      title:
        "Qonunchilik palatasi deputatlari tomonidan yangi qonun loyihasi muhokama qilindi",
      date: "18.02.2025",
      time: "11:00",
      image: "/images/media/IMG_3875.JPG",
      content: `
        <p>Bugun Qonunchilik palatasi majlisida deputatlar tomonidan yangi qonun loyihasi atroflicha muhokama qilindi. Muhokamada barcha fraksiyalar vakillari o'z fikrlarini bildirdilar.</p>
        
        <p>Qonun loyihasi mamlakatimizda yoshlar siyosatini yanada takomillashtirish, yoshlarning ijtimoiy-siyosiy faolligini oshirish, ularning manfaatlarini ifoda etish maqsadida ishlab chiqilgan.</p>
        
        <p>Muhokama davomida deputatlar qonun loyihasining afzalliklari va kamchiliklarini muhokama qildilar, uni takomillashtirish bo'yicha takliflar bildirdilar.</p>
        
        <p>Qonun loyihasi bo'yicha ovoz berish natijalariga ko'ra, u birinchi o'qishda qabul qilindi va ikkinchi o'qishga tayyorlanishi uchun tegishli qo'mitalarga yuborildi.</p>
      `,
      category: "Qonunchilik palatasi",
      location: "Oliy Majlis Qonunchilik palatasi",
      views: 987,
      relatedNews: [
        {
          id: 1,
          title: "Yosh avlod manfaatlari muhofazasi va insonparvarlik tamoyili",
          date: "19.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+1",
        },
        {
          id: 3,
          title: "Yoshlar parlamenti a'zolari bilan davra suhbati o'tkazildi",
          date: "13.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+2",
        },
      ],
    },
    {
      id: "3",
      title: "Yoshlar parlamenti a'zolari bilan davra suhbati o'tkazildi",
      date: "13.02.2025",
      time: "11:00",
      image: "/images/media/IMG_3876.JPG",
      content: `
        <p>Yoshlar parlamenti a'zolari bilan davra suhbati tashkil etildi. Unda yoshlarning qonun ijodkorligi jarayonidagi ishtiroki masalalari muhokama qilindi.</p>
        
        <p>Davra suhbatida Yoshlar parlamenti a'zolari, Qonunchilik palatasi deputatlari, vazirlik va idoralar vakillari ishtirok etdilar.</p>
        
        <p>Muhokama davomida yoshlarning qonun ijodkorligi jarayonidagi ishtiroki, yoshlar manfaatlarini ifoda etuvchi qonun loyihalarini ishlab chiqish va muhokama qilish jarayoni haqida fikr almashildi.</p>
        
        <p>Davra suhbati yakunida ishtirokchilar yoshlarning qonun ijodkorligi jarayonidagi ishtirokini yanada kengaytirish, yoshlar manfaatlarini ifoda etuvchi qonun loyihalarini ishlab chiqish va muhokama qilish jarayonini takomillashtirish bo'yicha takliflar ishlab chiqdilar.</p>
      `,
      category: "Yoshlar parlamenti",
      location: "Oliy Majlis Qonunchilik palatasi",
      views: 756,
      relatedNews: [
        {
          id: 5,
          title: "Yoshlar parlamenti qo'mitalari yig'ilishlari bo'lib o'tdi",
          date: "10.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+1",
        },
      ],
    },
  ];

  const newsItem = news.find((item) => item.id === params.id);

  if (!newsItem) {
    return (
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Yangilik topilmadi</h1>
          <Link
            href="/yangiliklar"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Yangiliklar sahifasiga qaytish
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/yangiliklar"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Yangiliklar sahifasiga qaytish
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">{newsItem.title}</h1>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>
                    {newsItem.date} | {newsItem.time}
                  </span>
                  <span className="mx-2">|</span>
                  <span>{newsItem.location}</span>
                  <span className="mx-2">|</span>
                  <span>Ko'rishlar: {newsItem.views}</span>
                </div>

                <div className="relative h-[400px] w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={newsItem.image || "/placeholder.svg"}
                    alt={newsItem.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />

                <div className="mt-8 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gray-500 hover:text-blue-600">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                        </svg>
                        Ulashish
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-blue-600">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Chop etish
                      </button>
                    </div>
                    <div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                        {newsItem.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">O'xshash yangiliklar</h2>
              <div className="space-y-4">
                {newsItem.relatedNews?.map((related) => (
                  <div key={related.id} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        width={80}
                        height={60}
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium line-clamp-2 mb-1">
                        <Link
                          href={`/yangiliklar/${related.id}`}
                          className="hover:text-blue-600"
                        >
                          {related.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-gray-500">{related.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">Kategoriyalar</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/yangiliklar?category=all"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Barchasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/yangiliklar?category=qonunchilik-palatasi"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Qonunchilik palatasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/yangiliklar?category=yoshlar-parlamenti"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Yoshlar parlamenti
                  </Link>
                </li>
                <li>
                  <Link
                    href="/yangiliklar?category=xalqaro-aloqalar"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Xalqaro aloqalar
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Teglar</h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
