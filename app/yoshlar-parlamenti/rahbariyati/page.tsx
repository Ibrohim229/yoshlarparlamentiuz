import Image from "next/image";
import Link from "next/link";

export default function YoshlarParlamentiRahbariyati() {
  const leaders = [
    {
      id: 1,
      name: "Alisher Karimov",
      position: "Yoshlar parlamenti raisi",
      image: "/images/media/IMG_3875.JPG",
      bio: "Alisher Karimov 1995-yilda tug'ilgan. U Toshkent davlat yuridik universitetini tamomlagan. 2019-yildan beri Yoshlar parlamenti raisi lavozimida faoliyat yuritmoqda.",
      responsibilities:
        "Yoshlar parlamenti faoliyatiga umumiy rahbarlik qilish, Yoshlar parlamenti nomidan rasmiy munosabatlarda ishtirok etish, Yoshlar parlamenti majlislarini chaqirish va ularga raislik qilish.",
    },
    {
      id: 2,
      name: "Malika Rahimova",
      position: "Yoshlar parlamenti rais o'rinbosari",
      image: "/placeholder.svg?height=300&width=300&text=Malika",
      bio: "Malika Rahimova 1997-yilda tug'ilgan. U O'zbekiston Milliy universitetini tamomlagan. 2020-yildan beri Yoshlar parlamenti rais o'rinbosari lavozimida faoliyat yuritmoqda.",
      responsibilities:
        "Yoshlar parlamenti raisi yo'qligida uning vazifalarini bajarish, Yoshlar parlamenti qo'mitalari faoliyatini muvofiqlashtirish, Yoshlar parlamenti a'zolari bilan ishlash.",
    },
    {
      id: 3,
      name: "Bobur Toshmatov",
      position: "Yoshlar parlamenti kotibi",
      image: "/placeholder.svg?height=300&width=300&text=Bobur",
      bio: "Bobur Toshmatov 1996-yilda tug'ilgan. U Toshkent axborot texnologiyalari universitetini tamomlagan. 2021-yildan beri Yoshlar parlamenti kotibi lavozimida faoliyat yuritmoqda.",
      responsibilities:
        "Yoshlar parlamenti hujjatlarini yuritish, Yoshlar parlamenti majlislari bayonnomalarini rasmiylashtirish, Yoshlar parlamenti a'zolari bilan aloqalarni ta'minlash.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">
            Yoshlar parlamenti Rahbariyati
          </h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Yoshlar parlamenti rahbariyati haqida
            ma'lumot
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Yoshlar parlamenti rahbariyati haqida
          </h2>
          <p className="text-gray-700 mb-4">
            O'zbekiston Respublikasi Yoshlar parlamenti rahbariyati Yoshlar
            parlamenti raisi, rais o'rinbosari va kotibdan iborat. Ular Yoshlar
            parlamenti faoliyatiga rahbarlik qiladi va uni tashkil etadi.
          </p>
          <p className="text-gray-700">
            Yoshlar parlamenti rahbariyati Yoshlar parlamenti a'zolari tomonidan
            saylanadi va ular oldida hisobot beradi. Rahbariyat Yoshlar
            parlamenti faoliyatini samarali tashkil etish, uning oldida turgan
            vazifalarni bajarish uchun mas'uldir.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Rahbariyat a'zolari</h2>
        <div className="space-y-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {leader.position}
                  </p>

                  <h4 className="text-lg font-semibold mb-2">Biografiya</h4>
                  <p className="text-gray-700 mb-4">{leader.bio}</p>

                  <h4 className="text-lg font-semibold mb-2">Vazifalari</h4>
                  <p className="text-gray-700 mb-4">
                    {leader.responsibilities}
                  </p>

                  <Link
                    href={`/yoshlar-parlamenti/rahbariyati/${leader.id}`}
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
  );
}
