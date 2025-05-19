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
      <section className="container mx-auto px-4 py-8">{/* Empty content as requested */}</section>
    </main>
  )
}
