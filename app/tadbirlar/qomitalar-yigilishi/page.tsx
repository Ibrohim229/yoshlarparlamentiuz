import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function QomitalarYigilishi() {
  const committees = [
    {
      id: 1,
      name: "Ta'lim va fan qo'mitasi",
      meetings: [
        {
          id: 1,
          title: "Ta'lim va fan qo'mitasi yig'ilishi",
          date: "19 May, 2025",
          time: "10:00 - 12:00",
          location: "Qonunchilik palatasi 3-majlislar zali",
          participants: "Qo'mita a'zolari, vazirlik vakillari",
          description:
            "Yig'ilishda quyidagi masalalar ko'rib chiqiladi: oliy ta'lim tizimini takomillashtirish, ilmiy-tadqiqot faoliyatini qo'llab-quvvatlash, ta'lim sohasidagi qonun loyihalari.",
        },
      ],
    },
    {
      id: 2,
      name: "Madaniyat va sport qo'mitasi",
      meetings: [
        {
          id: 2,
          title: "Madaniyat va sport qo'mitasi yig'ilishi",
          date: "20 May, 2025",
          time: "14:00 - 16:00",
          location: "Qonunchilik palatasi 2-majlislar zali",
          participants: "Qo'mita a'zolari, vazirlik vakillari",
          description:
            "Yig'ilishda quyidagi masalalar ko'rib chiqiladi: madaniyat va san'at sohasini rivojlantirish, sport infratuzilmasini takomillashtirish, madaniyat va sport sohasidagi qonun loyihalari.",
        },
      ],
    },
    {
      id: 3,
      name: "Innovatsion rivojlanish qo'mitasi",
      meetings: [
        {
          id: 3,
          title: "Innovatsion rivojlanish qo'mitasi yig'ilishi",
          date: "21 May, 2025",
          time: "11:00 - 13:00",
          location: "Qonunchilik palatasi 1-majlislar zali",
          participants: "Qo'mita a'zolari, vazirlik vakillari",
          description:
            "Yig'ilishda quyidagi masalalar ko'rib chiqiladi: innovatsion loyihalarni qo'llab-quvvatlash, raqamli iqtisodiyotni rivojlantirish, innovatsion rivojlanish sohasidagi qonun loyihalari.",
        },
      ],
    },
    {
      id: 4,
      name: "Ijtimoiy masalalar qo'mitasi",
      meetings: [
        {
          id: 4,
          title: "Ijtimoiy masalalar qo'mitasi yig'ilishi",
          date: "22 May, 2025",
          time: "10:00 - 12:00",
          location: "Qonunchilik palatasi 3-majlislar zali",
          participants: "Qo'mita a'zolari, vazirlik vakillari",
          description:
            "Yig'ilishda quyidagi masalalar ko'rib chiqiladi: ijtimoiy himoya tizimini takomillashtirish, aholining ijtimoiy himoyaga muhtoj qatlamlarini qo'llab-quvvatlash, ijtimoiy masalalar sohasidagi qonun loyihalari.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Qo'mitalar yig'ilishi</h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Yoshlar parlamenti qo'mitalari yig'ilishlari haqida ma'lumot
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Qo'mitalar yig'ilishlari haqida</h2>
          <p className="text-gray-700 mb-4">
            O'zbekiston Respublikasi Yoshlar parlamenti qo'mitalari o'z yo'nalishlari bo'yicha muntazam ravishda
            yig'ilishlar o'tkazadi. Bu yig'ilishlarda qo'mitalar o'z faoliyat yo'nalishlariga oid masalalarni muhokama
            qiladi, qonun loyihalarini ko'rib chiqadi, tegishli sohalardagi muammolarni o'rganadi va ularni hal etish
            bo'yicha takliflar tayyorlaydi.
          </p>
          <div className="flex items-center justify-center my-8">
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Qo'mitalar+yig'ilishi"
                alt="Qo'mitalar yig'ilishi"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-gray-700">
            Qo'mitalar yig'ilishlari Yoshlar parlamenti reglamentiga muvofiq o'tkaziladi. Yig'ilishlar ochiq o'tkaziladi
            va ularda barcha qiziquvchilar ishtirok etishi mumkin. Yig'ilishlar to'g'risidagi ma'lumotlar Yoshlar
            parlamenti rasmiy veb-saytida e'lon qilinadi.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Rejalashtirilgan yig'ilishlar</h2>
        <div className="space-y-8">
          {committees.map((committee) => (
            <div key={committee.id}>
              <h3 className="text-xl font-semibold mb-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                {committee.name}
              </h3>
              <div className="space-y-6">
                {committee.meetings.map((meeting) => (
                  <div key={meeting.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-lg font-semibold mb-3">{meeting.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                        href={`/tadbirlar/qomitalar-yigilishi/${meeting.id}`}
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                      >
                        Batafsil ma'lumot
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
