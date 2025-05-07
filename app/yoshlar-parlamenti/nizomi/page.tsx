import Link from "next/link"
import { FileText } from "lucide-react"

export default function YoshlarParlamentiNizomi() {
  const documents = [
    {
      id: 1,
      title: "Yoshlar parlamenti nizomi",
      date: "2019-yil 15-mart",
      size: "1.2 MB",
      type: "PDF",
    },
    {
      id: 2,
      title: "Yoshlar parlamenti reglamenti",
      date: "2019-yil 15-mart",
      size: "0.8 MB",
      type: "PDF",
    },
    {
      id: 3,
      title: "Yoshlar parlamenti a'zolarini saylash tartibi",
      date: "2019-yil 20-mart",
      size: "0.5 MB",
      type: "PDF",
    },
    {
      id: 4,
      title: "Yoshlar parlamenti qo'mitalari to'g'risida nizom",
      date: "2019-yil 25-mart",
      size: "0.7 MB",
      type: "PDF",
    },
    {
      id: 5,
      title: "Yoshlar parlamenti Kengashi to'g'risida nizom",
      date: "2019-yil 25-mart",
      size: "0.6 MB",
      type: "PDF",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Yoshlar parlamenti Nizomi va Reglamenti</h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Yoshlar parlamenti nizomi va reglamenti haqida ma'lumot
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Yoshlar parlamenti nizomi va reglamenti haqida</h2>
          <p className="text-gray-700 mb-4">
            O'zbekiston Respublikasi Yoshlar parlamenti nizomi Yoshlar parlamentining maqsadi, vazifalari, tuzilishi,
            faoliyatini tashkil etish tartibi va vakolatlarini belgilaydi. Nizom Yoshlar parlamentining huquqiy asosi
            hisoblanadi.
          </p>
          <p className="text-gray-700 mb-4">
            Yoshlar parlamenti reglamenti esa Yoshlar parlamentining ish tartibi, majlislarni o'tkazish, qarorlar qabul
            qilish, qo'mitalar faoliyatini tashkil etish va boshqa protsedura masalalarini tartibga soladi.
          </p>
          <p className="text-gray-700">
            Yoshlar parlamenti nizomi va reglamenti Yoshlar parlamenti a'zolari tomonidan qabul qilinadi va O'zbekiston
            Respublikasi Oliy Majlisi Qonunchilik palatasi tomonidan tasdiqlanadi.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Me'yoriy hujjatlar</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              Quyida Yoshlar parlamenti faoliyatini tartibga soluvchi asosiy me'yoriy hujjatlar keltirilgan. Hujjatlarni
              yuklab olish uchun tegishli havolalarga bosing.
            </p>
            <div className="space-y-4 mt-6">
              {documents.map((doc) => (
                <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{doc.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span>Qabul qilingan sana: {doc.date}</span>
                        <span>Hajmi: {doc.size}</span>
                        <span>Format: {doc.type}</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                    >
                      Yuklab olish
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
