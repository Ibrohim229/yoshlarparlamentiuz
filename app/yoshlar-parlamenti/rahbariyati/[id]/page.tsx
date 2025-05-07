import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

interface PageProps {
  params: {
    id: string;
  };
}

export default function MemberDetail({ params }: PageProps) {
  // This would normally come from a database or API
  const leaders = [
    {
      id: "1",
      name: "Alisher Karimov",
      position:
        "O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasining Spikeri",
      birthYear: "1995",
      birthPlace: "Toshkent viloyati, Zangiota tumani",
      nationality: "o'zbek",
      education: "oliy ma'lumotli",
      university: "Toshkent davlat yuridik universiteti",
      specialization: "huquqshunos",
      degree: "yuridik fanlar nomzodi",
      languages: "rus tili, ingliz tili",
      email: "a.karimov@parliament.gov.uz",
      image: "/images/media/IMG_3875.JPG",
      articles: [
        {
          id: 1,
          title:
            "ISLOHOTLAR SAMARASI parlament taraqiyotida ham namoyon bo'lmoqda",
          image: "/placeholder.svg?height=100&width=150&text=Article1",
        },
        {
          id: 2,
          title:
            "Taraqiyot strategiyasi — keng ko'lamli islohotlarning huquqiy asosi",
          image: "/placeholder.svg?height=100&width=150&text=Article2",
        },
      ],
    },
    {
      id: "2",
      name: "Malika Rahimova",
      position: "Yoshlar parlamenti rais o'rinbosari",
      birthYear: "1997",
      birthPlace: "Samarqand viloyati, Samarqand shahri",
      nationality: "o'zbek",
      education: "oliy ma'lumotli",
      university: "O'zbekiston Milliy universiteti",
      specialization: "iqtisodchi",
      degree: "iqtisod fanlari nomzodi",
      languages: "rus tili, ingliz tili",
      email: "m.rahimova@parliament.gov.uz",
      image: "/placeholder.svg?height=400&width=300&text=Malika",
      articles: [
        {
          id: 1,
          title: "Yoshlar bandligini ta'minlash: muammolar va yechimlar",
          image: "/placeholder.svg?height=100&width=150&text=Article1",
        },
      ],
    },
    {
      id: "3",
      name: "Bobur Toshmatov",
      position: "Yoshlar parlamenti kotibi",
      birthYear: "1996",
      birthPlace: "Andijon viloyati, Andijon shahri",
      nationality: "o'zbek",
      education: "oliy ma'lumotli",
      university: "Toshkent axborot texnologiyalari universiteti",
      specialization: "dasturchi",
      degree: "texnika fanlari nomzodi",
      languages: "rus tili, ingliz tili",
      email: "b.toshmatov@parliament.gov.uz",
      image: "/placeholder.svg?height=400&width=300&text=Bobur",
      articles: [
        {
          id: 1,
          title: "Raqamli iqtisodiyot: imkoniyatlar va istiqbollar",
          image: "/placeholder.svg?height=100&width=150&text=Article1",
        },
      ],
    },
  ];

  const member = leaders.find((leader) => leader.id === params.id);

  if (!member) {
    return (
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">A'zo topilmadi</h1>
          <Link
            href="/yoshlar-parlamenti/rahbariyati"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Rahbariyat sahifasiga qaytish
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/yoshlar-parlamenti/rahbariyati"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Rahbariyat sahifasiga qaytish
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-blue-600 text-white text-center">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      <span>Virtual qabulxona</span>
                    </Link>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h1 className="text-2xl font-bold mb-6">{member.name}</h1>

                  <div className="space-y-4">
                    <div>
                      <h2 className="font-semibold mb-1">Lavozimi:</h2>
                      <p>{member.position}</p>
                    </div>

                    <div>
                      <h2 className="font-semibold mb-1">Tug'ilgan yili:</h2>
                      <p>{member.birthYear}</p>
                    </div>

                    <div>
                      <h2 className="font-semibold mb-1">Tug'ilgan joyi:</h2>
                      <p>{member.birthPlace}</p>
                    </div>

                    <div>
                      <h2 className="font-semibold mb-1">Millati:</h2>
                      <p>{member.nationality}</p>
                    </div>

                    <div>
                      <h2 className="font-semibold mb-1">Ma'lumoti:</h2>
                      <p>{member.education}</p>
                    </div>

                    <div>
                      <h2 className="font-semibold mb-1">O'qish joyi:</h2>
                      <p>{member.university}</p>
                    </div>

                    <div>
                      <h2 className="font-semibold mb-1">Mutaxasisligi:</h2>
                      <p>{member.specialization}</p>
                    </div>

                    <div>
                      <h2 className="font-semibold mb-1">Ilmiy darajasi:</h2>
                      <p>{member.degree}</p>
                    </div>

                    <div>
                      <h2 className="font-semibold mb-1">
                        Chet tillarini bilishi:
                      </h2>
                      <p>{member.languages}</p>
                    </div>

                    <div>
                      <h2 className="font-semibold mb-1">Pochta manzili:</h2>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">
                Qo'shimcha ma'lumotlar
              </h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-700 mb-4">
                  {member.name} {member.position} lavozimida faoliyat yuritib
                  kelmoqda. U o'z faoliyati davomida yoshlar manfaatlarini ifoda
                  etish, yoshlar siyosatini takomillashtirish, yoshlarning
                  ijtimoiy-siyosiy faolligini oshirish yo'nalishlarida samarali
                  ishlar olib bormoqda.
                </p>
                <p className="text-gray-700">
                  {member.name} bir qator xalqaro konferensiyalarda ishtirok
                  etgan, yoshlar masalalari bo'yicha bir qancha maqolalar va
                  ilmiy ishlar muallifi hisoblanadi.
                </p>
              </div>
            </div>

            {/* Articles */}
            {member.articles && member.articles.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Deputat maqolalari</h2>
                <div className="space-y-4">
                  {member.articles.map((article) => (
                    <div
                      key={article.id}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      <div className="flex">
                        <div className="w-1/4">
                          <div className="relative h-[100px] w-full">
                            <Image
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="w-3/4 p-4">
                          <h3 className="font-semibold mb-2">
                            {article.title}
                          </h3>
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline text-sm"
                          >
                            Batafsil o'qish
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-blue-600 text-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-blue-500">
                <h2 className="font-bold">Parlament tarixi</h2>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:underline">
                      Qonunchilik palatasi kengashi tarixi
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Qonunchilik palatasi rahbariyati
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Fraksiyalar
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Qo'mitalar
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Komissiyalar
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Deputatlar
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Saylov okruglari
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Qonunchilik palatasi Devoni
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-sm p-4 text-center">
              <div className="mb-2">
                <Image
                  src="/placeholder.svg?height=60&width=60&text=Icon"
                  alt="Ombudsman"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">"Ombudsman"</h3>
              <p className="text-xs text-gray-600">
                O'zbekiston Respublikasi Oliy Majlisining Inson huquqlari
                bo'yicha vakili (Ombudsman)
              </p>
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-sm p-4 text-center">
              <div className="mb-2">
                <Image
                  src="/placeholder.svg?height=60&width=60&text=Icon"
                  alt="Bolalar ombudsmani"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">"Bolalar ombudsmani"</h3>
              <p className="text-xs text-gray-600">
                O'zbekiston Respublikasi Oliy Majlisining Bola huquqlari
                bo'yicha vakili (Bolalar ombudsmani)
              </p>
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-sm p-4 text-center">
              <div className="mb-2">
                <Image
                  src="/placeholder.svg?height=60&width=60&text=Icon"
                  alt="Jamoat fondi"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">Jamoat fondi</h3>
              <p className="text-xs text-gray-600">
                Oliy Majlis huzuridagi Fuqarolik jamiyati institutlarini
                qo'llab-quvvatlash jamoat fondi
              </p>
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-sm p-4 text-center">
              <div className="mb-2">
                <Image
                  src="/placeholder.svg?height=60&width=60&text=Telegram"
                  alt="Telegram"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">
                Telegram kanaliga obuna bo'lish
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
