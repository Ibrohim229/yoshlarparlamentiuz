import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Users } from "lucide-react"

export default function YalpiMajlislar() {
  const upcomingMeetings = [
    {
      id: 1,
      title: "Qonunchilik palatasi 1-yalpi majlisi",
      date: "16 May, 2025",
      time: "10:00 - 13:00",
      location: "Qonunchilik palatasi majlislar zali",
      participants: "Barcha deputatlar",
      description:
        "Majlisda quyidagi masalalar ko'rib chiqiladi: qonun loyihalarini muhokama qilish, davlat organlari rahbarlarining hisobotlarini eshitish, parlament so'rovlarini yuborish.",
    },
    {
      id: 2,
      title: "Qonunchilik palatasi 2-yalpi majlisi",
      date: "17 May, 2025",
      time: "10:00 - 13:00",
      location: "Qonunchilik palatasi majlislar zali",
      participants: "Barcha deputatlar",
      description:
        "Majlisda quyidagi masalalar ko'rib chiqiladi: qonun loyihalarini muhokama qilish, davlat organlari rahbarlarining hisobotlarini eshitish, parlament so'rovlarini yuborish.",
    },
    {
      id: 3,
      title: "Qonunchilik palatasi 3-yalpi majlisi",
      date: "18 May, 2025",
      time: "10:00 - 13:00",
      location: "Qonunchilik palatasi majlislar zali",
      participants: "Barcha deputatlar",
      description:
        "Majlisda quyidagi masalalar ko'rib chiqiladi: qonun loyihalarini muhokama qilish, davlat organlari rahbarlarining hisobotlarini eshitish, parlament so'rovlarini yuborish.",
    },
  ]

  const pastMeetings = [
    {
      id: 1,
      title: "Qonunchilik palatasi 1-yalpi majlisi",
      date: "6 May, 2025",
      time: "10:00 - 14:30",
      participants: "125 deputat",
      description:
        "Majlisda quyidagi masalalar ko'rib chiqildi: 3 ta qonun loyihasi muhokama qilindi, 2 ta qonun qabul qilindi, 1 ta davlat organi rahbarining hisoboti eshitildi.",
    },
    {
      id: 2,
      title: "Qonunchilik palatasi 2-yalpi majlisi",
      date: "7 May, 2025",
      time: "10:00 - 13:30",
      participants: "130 deputat",
      description:
        "Majlisda quyidagi masalalar ko'rib chiqildi: 2 ta qonun loyihasi muhokama qilindi, 1 ta qonun qabul qilindi, 2 ta davlat organi rahbarining hisoboti eshitildi.",
    },
    {
      id: 3,
      title: "Qonunchilik palatasi 3-yalpi majlisi",
      date: "8 May, 2025",
      time: "10:00 - 12:30",
      participants: "128 deputat",
      description:
        "Majlisda quyidagi masalalar ko'rib chiqildi: 4 ta qonun loyihasi muhokama qilindi, 3 ta qonun qabul qilindi.",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Yalpi majlislar</h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi yalpi majlislari haqida ma'lumot
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Yalpi majlislar haqida</h2>
          <p className="text-gray-700 mb-4">
            O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi yalpi majlislari palataning eng yuqori organi
            hisoblanadi. Yalpi majlislarda qonun loyihalari muhokama qilinadi va qabul qilinadi, davlat organlari
            rahbarlarining hisobotlari eshitiladi, parlament nazorati amalga oshiriladi.
          </p>
          <div className="flex items-center justify-center my-8">
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Yalpi+Majlis"
                alt="Yalpi Majlis"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-gray-700">
            Yalpi majlislar Qonunchilik palatasi reglamentiga muvofiq o'tkaziladi. Yalpi majlislar ochiq o'tkaziladi,
            zarur hollarda yopiq majlislar ham o'tkazilishi mumkin. Yalpi majlislar to'g'risidagi ma'lumotlar ommaviy
            axborot vositalarida yoritiladi.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Rejalashtirilgan yalpi majlislar</h2>
        <div className="space-y-6 mb-8">
          {upcomingMeetings.map((meeting) => (
            <div key={meeting.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/4 bg-[#0047AB] text-white p-6 flex flex-col justify-center items-center">
                  <div className="text-3xl font-bold">{meeting.date.split(" ")[0]}</div>
                  <div className="text-lg">{meeting.date.split(" ").slice(1).join(" ")}</div>
                </div>
                <div className="md:w-3/4 p-6">
                  <h3 className="text-xl font-semibold mb-3">{meeting.title}</h3>
                  <div className="space-y-2 mb-4">
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
                    href={`/tadbirlar/yalpi-majlislar/${meeting.id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Batafsil ma'lumot
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">O'tkazilgan yalpi majlislar</h2>
        <div className="space-y-6">
          {pastMeetings.map((meeting) => (
            <div key={meeting.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/4 bg-gray-200 p-6 flex flex-col justify-center items-center">
                  <div className="text-3xl font-bold text-gray-700">{meeting.date.split(" ")[0]}</div>
                  <div className="text-lg text-gray-600">{meeting.date.split(" ").slice(1).join(" ")}</div>
                </div>
                <div className="md:w-3/4 p-6">
                  <h3 className="text-xl font-semibold mb-3">{meeting.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>O'tkazilgan vaqt: {meeting.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Ishtirok etgan deputatlar: {meeting.participants}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{meeting.description}</p>
                  <div className="flex space-x-3">
                    <Link
                      href={`/tadbirlar/yalpi-majlislar/${meeting.id}/bayonnoma`}
                      className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition"
                    >
                      Bayonnoma
                    </Link>
                    <Link
                      href={`/tadbirlar/yalpi-majlislar/${meeting.id}/video`}
                      className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition"
                    >
                      Video
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
