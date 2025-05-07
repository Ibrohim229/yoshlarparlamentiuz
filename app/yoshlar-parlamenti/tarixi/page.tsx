import Image from "next/image"

export default function YoshlarParlamentiTarixi() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Yoshlar parlamenti tarixi</h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Yoshlar parlamenti tashkil etilishi va rivojlanishi tarixi
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Yoshlar parlamenti tashkil etilishi</h2>
          <p className="text-gray-700 mb-4">
            O'zbekiston Respublikasi Yoshlar parlamenti mamlakatda yoshlar siyosatini yanada takomillashtirish,
            yoshlarning ijtimoiy-siyosiy faolligini oshirish, ularning manfaatlarini ifoda etish maqsadida tashkil
            etilgan.
          </p>
          <div className="flex items-center justify-center my-8">
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Yoshlar+Parlamenti+Tarixi"
                alt="Yoshlar Parlamenti Tarixi"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Yoshlar parlamenti O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzurida faoliyat yuritadi.
            Uning asosiy maqsadi yoshlarning qonun ijodkorligi jarayonidagi ishtirokini ta'minlash, yoshlar
            manfaatlarini ifoda etuvchi qonun loyihalarini ishlab chiqish va muhokama qilishdan iborat.
          </p>
          <p className="text-gray-700">
            Yoshlar parlamenti a'zolari mamlakatning barcha hududlaridan saylab olingan faol yoshlardan iborat. Ular
            yoshlar manfaatlarini ifoda etish, yoshlar siyosatini takomillashtirish va yoshlarning ijtimoiy-siyosiy
            faolligini oshirish yo'nalishlarida faoliyat olib boradilar.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6">Yoshlar parlamenti rivojlanish tarixi</h2>

          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-semibold mb-2">2017-yil</h3>
              <p className="text-gray-700">
                O'zbekiston Respublikasi Prezidentining "Yoshlarga oid davlat siyosati samaradorligini oshirish va
                O'zbekiston yoshlar ittifoqi faoliyatini qo'llab-quvvatlash to'g'risida"gi Farmoni qabul qilindi. Ushbu
                farmon yoshlar parlamenti tashkil etilishiga asos bo'ldi.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-semibold mb-2">2018-yil</h3>
              <p className="text-gray-700">
                Yoshlar parlamenti tashkil etilishi bo'yicha konsepsiya ishlab chiqildi va muhokama qilindi. Yoshlar
                parlamenti nizomi va reglamenti ishlab chiqildi.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-semibold mb-2">2019-yil</h3>
              <p className="text-gray-700">
                O'zbekiston Respublikasi Yoshlar parlamenti rasman tashkil etildi. Birinchi chaqiriq Yoshlar parlamenti
                a'zolari saylab olindi va birinchi yig'ilish o'tkazildi.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-semibold mb-2">2020-yil</h3>
              <p className="text-gray-700">
                Yoshlar parlamenti tomonidan birinchi qonun loyihasi ishlab chiqildi va muhokama qilindi. Yoshlar
                parlamenti qo'mitalari tashkil etildi.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-semibold mb-2">2021-yil</h3>
              <p className="text-gray-700">
                Yoshlar parlamenti faoliyati yanada kengaytirildi. Xalqaro yoshlar tashkilotlari bilan hamkorlik
                o'rnatildi. Yoshlar parlamenti a'zolari xalqaro tadbirlarda ishtirok eta boshladi.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-semibold mb-2">2022-yil</h3>
              <p className="text-gray-700">
                Ikkinchi chaqiriq Yoshlar parlamenti a'zolari saylab olindi. Yoshlar parlamenti faoliyati yanada
                takomillashtirildi.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-semibold mb-2">2023-2025-yillar</h3>
              <p className="text-gray-700">
                Yoshlar parlamenti faoliyati yanada rivojlantirilmoqda. Yoshlar parlamenti tomonidan bir qator qonun
                loyihalari ishlab chiqildi va muhokama qilindi. Yoshlar parlamenti a'zolari mamlakatning
                ijtimoiy-siyosiy hayotida faol ishtirok etmoqda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
