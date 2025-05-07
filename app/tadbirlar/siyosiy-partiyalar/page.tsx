import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

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
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Siyosiy partiyalarning yoshlar guruhlari yig'ilishlari haqida</h2>
          <p className="text-gray-700 mb-4">
            O'zbekiston Respublikasida faoliyat yuritayotgan siyosiy partiyalar o'z tarkibida yoshlar guruhlarini
            tashkil etgan. Bu guruhlar partiyalarning yoshlar siyosatini ishlab chiqish va amalga oshirish, yoshlarni
            siyosiy jarayonlarga jalb qilish, yoshlar manfaatlarini ifoda etish bilan shug'ullanadi.
          </p>
          <div className="flex items-center justify-center my-8">
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Siyosiy+partiyalar+yoshlar+guruhlari"
                alt="Siyosiy partiyalar yoshlar guruhlari"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-gray-700">
            Siyosiy partiyalarning yoshlar guruhlari muntazam ravishda yig'ilishlar o'tkazib, yoshlarga oid masalalarni
            muhokama qiladi, yoshlar manfaatlarini ifoda etuvchi takliflar ishlab chiqadi va partiya rahbariyatiga
            taqdim etadi. Bu yig'ilishlar ochiq o'tkaziladi va ularda barcha qiziquvchilar ishtirok etishi mumkin.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Rejalashtirilgan yig'ilishlar</h2>
        <div className="space-y-6">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={meeting.image || "/placeholder.svg"}
                      alt={meeting.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3">{meeting.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{meeting.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{meeting.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{meeting.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{meeting.participants}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{meeting.description}</p>
                  <Link
                    href={`/tadbirlar/siyosiy-partiyalar/${meeting.id}`}
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
