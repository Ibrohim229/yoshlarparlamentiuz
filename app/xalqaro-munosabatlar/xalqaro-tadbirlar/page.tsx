import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, Globe } from "lucide-react"

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
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Xalqaro tadbirlar haqida</h2>
          <p className="text-gray-700 mb-4">
            O'zbekiston Respublikasi Yoshlar parlamenti xalqaro hamkorlikni rivojlantirish, xorijiy mamlakatlar yoshlar
            tashkilotlari bilan aloqalarni mustahkamlash, xalqaro tajribani o'rganish maqsadida turli xil xalqaro
            tadbirlarni tashkil etadi.
          </p>
          <div className="flex items-center justify-center my-8">
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Xalqaro+tadbirlar"
                alt="Xalqaro tadbirlar"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-gray-700">
            Xalqaro tadbirlar Yoshlar parlamenti xalqaro aloqalar rejasiga muvofiq o'tkaziladi. Tadbirlar to'g'risidagi
            ma'lumotlar Yoshlar parlamenti rasmiy veb-saytida e'lon qilinadi.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Rejalashtirilgan xalqaro tadbirlar</h2>
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
                  <div className="flex items-center mb-2">
                    <Globe className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                  </div>
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
                    href={`/xalqaro-munosabatlar/xalqaro-tadbirlar/${event.id}`}
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
