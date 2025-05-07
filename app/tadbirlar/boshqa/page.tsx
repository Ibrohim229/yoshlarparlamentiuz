import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function BoshqaTadbirlar() {
  const events = [
    {
      id: 1,
      title: "Yoshlar parlamenti a'zolari bilan ochiq muloqot",
      date: "25 May, 2025",
      time: "15:00 - 17:00",
      location: "Toshkent shahri, Yoshlar markazi",
      participants: "Yoshlar parlamenti a'zolari, talabalar, yoshlar",
      image: "/placeholder.svg?height=200&width=400&text=Ochiq+muloqot",
      description:
        "Tadbirda Yoshlar parlamenti a'zolari bilan ochiq muloqot o'tkaziladi. Yoshlar o'zlarini qiziqtirgan savollarni berishlari va Yoshlar parlamenti faoliyati bilan yaqindan tanishishlari mumkin.",
    },
    {
      id: 2,
      title: "Yoshlar huquqlari bo'yicha seminar",
      date: "27 May, 2025",
      time: "10:00 - 13:00",
      location: "Toshkent davlat yuridik universiteti",
      participants: "Yoshlar parlamenti a'zolari, talabalar, huquqshunoslar",
      image: "/placeholder.svg?height=200&width=400&text=Seminar",
      description:
        "Seminarda yoshlar huquqlari, ularni himoya qilish mexanizmlari, yoshlar huquqlarini ta'minlash bo'yicha qonunchilik haqida ma'lumotlar beriladi. Seminar davomida amaliy mashg'ulotlar ham o'tkaziladi.",
    },
    {
      id: 3,
      title: "Yoshlar tadbirkorligi forumi",
      date: "30 May, 2025",
      time: "09:00 - 18:00",
      location: "Toshkent shahri, Xalqaro biznes markazi",
      participants: "Yoshlar parlamenti a'zolari, yosh tadbirkorlar, investorlar",
      image: "/placeholder.svg?height=200&width=400&text=Forum",
      description:
        "Forumda yoshlar tadbirkorligi, uni qo'llab-quvvatlash mexanizmlari, yoshlar startaplari uchun imkoniyatlar haqida ma'lumotlar beriladi. Forum davomida yosh tadbirkorlar o'z loyihalarini taqdim etadilar va investorlar bilan uchrashish imkoniyatiga ega bo'ladilar.",
    },
    {
      id: 4,
      title: "Yoshlar parlamenti a'zolarining saylovchilar bilan uchrashuvlari",
      date: "1-10 Iyun, 2025",
      time: "Turli vaqtlarda",
      location: "Respublika bo'ylab",
      participants: "Yoshlar parlamenti a'zolari, saylovchilar",
      image: "/placeholder.svg?height=200&width=400&text=Uchrashuvlar",
      description:
        "Yoshlar parlamenti a'zolari o'z saylov okruglaridagi saylovchilar bilan uchrashuvlar o'tkazadilar. Uchrashuvlarda Yoshlar parlamenti faoliyati haqida hisobot beriladi, saylovchilarning takliflari va murojaatlari qabul qilinadi.",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Boshqa tadbirlar</h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Yoshlar parlamenti tomonidan tashkil etiladigan boshqa tadbirlar haqida ma'lumot
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Boshqa tadbirlar haqida</h2>
          <p className="text-gray-700 mb-4">
            O'zbekiston Respublikasi Yoshlar parlamenti o'z faoliyati davomida turli xil tadbirlarni tashkil etadi. Bu
            tadbirlar yoshlar manfaatlarini ifoda etish, yoshlar siyosatini takomillashtirish, yoshlarning
            ijtimoiy-siyosiy faolligini oshirish, yoshlar muammolarini o'rganish va ularni hal etish bo'yicha takliflar
            tayyorlash maqsadida o'tkaziladi.
          </p>
          <div className="flex items-center justify-center my-8">
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Boshqa+tadbirlar"
                alt="Boshqa tadbirlar"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-gray-700">
            Tadbirlar ochiq o'tkaziladi va ularda barcha qiziquvchilar ishtirok etishi mumkin. Tadbirlar to'g'risidagi
            ma'lumotlar Yoshlar parlamenti rasmiy veb-saytida e'lon qilinadi.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Rejalashtirilgan tadbirlar</h2>
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-[200px] w-full">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Link
                    href={`/tadbirlar/boshqa/${event.id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Batafsil ma'lumot
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
