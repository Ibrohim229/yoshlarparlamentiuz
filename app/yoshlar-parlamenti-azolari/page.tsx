import Image from "next/image";
import Link from "next/link";

export default function YoshlarParlamentiAzolari() {
  const members = [
    {
      id: 1,
      name: "Alisher Karimov",
      region: "Toshkent shahri",
      image: "/placeholder.svg?height=200&width=200&text=Alisher",
    },
    {
      id: 2,
      name: "Malika Rahimova",
      region: "Samarqand viloyati",
      image: "/placeholder.svg?height=200&width=200&text=Malika",
    },
    {
      id: 3,
      name: "Bobur Toshmatov",
      region: "Andijon viloyati",
      image: "/placeholder.svg?height=200&width=200&text=Bobur",
    },
    {
      id: 4,
      name: "Dilshod Ahmedov",
      region: "Buxoro viloyati",
      image: "/placeholder.svg?height=200&width=200&text=Dilshod",
    },
    {
      id: 5,
      name: "Nilufar Karimova",
      region: "Farg'ona viloyati",
      image: "/placeholder.svg?height=200&width=200&text=Nilufar",
    },
    {
      id: 6,
      name: "Jahongir Rasulov",
      region: "Namangan viloyati",
      image: "/placeholder.svg?height=200&width=200&text=Jahongir",
    },
    {
      id: 7,
      name: "Zarina Umarova",
      region: "Xorazm viloyati",
      image: "/placeholder.svg?height=200&width=200&text=Zarina",
    },
    {
      id: 8,
      name: "Sardor Qodirov",
      region: "Qashqadaryo viloyati",
      image: "/placeholder.svg?height=200&width=200&text=Sardor",
    },
    {
      id: 9,
      name: "Gulnora Azimova",
      region: "Surxondaryo viloyati",
      image: "/placeholder.svg?height=200&width=200&text=Gulnora",
    },
    {
      id: 10,
      name: "Rustam Kamolov",
      region: "Navoiy viloyati",
      image: "/placeholder.svg?height=200&width=200&text=Rustam",
    },
    {
      id: 11,
      name: "Sevara Yusupova",
      region: "Jizzax viloyati",
      image: "/placeholder.svg?height=200&width=200&text=Sevara",
    },
    {
      id: 12,
      name: "Akmal Rasulov",
      region: "Sirdaryo viloyati",
      image: "/placeholder.svg?height=200&width=200&text=Akmal",
    },
  ];

  const regions = [
    "Barcha hududlar",
    "Toshkent shahri",
    "Toshkent viloyati",
    "Samarqand viloyati",
    "Andijon viloyati",
    "Buxoro viloyati",
    "Farg'ona viloyati",
    "Namangan viloyati",
    "Xorazm viloyati",
    "Qashqadaryo viloyati",
    "Surxondaryo viloyati",
    "Navoiy viloyati",
    "Jizzax viloyati",
    "Sirdaryo viloyati",
    "Qoraqalpog'iston Respublikasi",
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">
            Yoshlar parlamenti a'zolari
          </h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Yoshlar parlamenti a'zolari haqida ma'lumot
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">A'zolar ro'yxati</h2>
            <div className="relative">
              <select className="bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                {regions.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <Link
                key={member.id}
                href={`/yoshlar-parlamenti-azolari/${member.id}`}
                className="bg-white flex rounded-lg shadow-sm overflow-hidden h-52 hover:shadow-md transition"
              >
                <div className="relative w-44">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600">{member.region}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
