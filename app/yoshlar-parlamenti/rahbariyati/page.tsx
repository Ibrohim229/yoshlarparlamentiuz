import Image from "next/image";
import Link from "next/link";

export default function YoshlarParlamentiRahbariyati() {
  const leaders = [
    {
      id: 1,
      name: "Sobitov Otabekxo‘ja Yo‘ldoshovich",
      position:
        "O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamentining Spikeri",
      image: "/images/deputatlar/photo_2025-05-03_20-38-24.jpg", // Replace with actual image filename if available
      bio: "Sobitov Otabekxo‘ja Yo‘ldoshovich 1997-yilda Toshkent shahrida tug‘ilgan. U Toshkent davlat pedagogika universitetining amaliy psixologiya yo‘nalishini tamomlagan. Hozirda O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamentining Spikeri lavozimida faoliyat yuritmoqda.",
      responsibilities:
        "Yoshlar parlamenti faoliyatiga rahbarlik qilish, parlament nomidan rasmiy tadbirlarda ishtirok etish, majlislarni tashkil etish va boshqarish, yoshlar siyosatini ilgari surish bo‘yicha tashabbuslarni qo‘llab-quvvatlash.",
    },
    {
      id: 2,
      name: "Oʼktamov Shoxruxbek Ulugʼbek oʼgʼli",
      position:
        "O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari, O‘zbekiston Xalq demokratik partiyasi yoshlar guruhi rahbari",
      image: "/images/deputatlar/image_2025-05-03_19-35-18.png", // Replace with actual image filename if available
      bio: "Oʼktamov Shoxruxbek Ulugʼbek oʼgʼli 1996-yilda Fargʼona viloyatida tug‘ilgan. U Fargʼona shahridagi Koreya Xalqaro universitetining arxitektura muhandisligi yo‘nalishini tamomlagan. Hozirda O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari va O‘zbekiston Xalq demokratik partiyasi yoshlar guruhi rahbari lavozimlarida faoliyat yuritmoqda.",
      responsibilities:
        "Yoshlar parlamenti raisiga ko‘maklashish, yoshlar guruhi faoliyatini muvofiqlashtirish, partiyaning yoshlar siyosatini ilgari surish, rasmiy tadbirlarda ishtirok etish va tashabbuslarni qo‘llab-quvvatlash.",
    },
    {
      id: 3,
      name: "Ergash Moxinurxon Odilxon qizi",
      position:
        "O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari, O‘zbekiston Ekologik partiyasi yoshlar guruhi rahbari",
      image: "/images/deputatlar/image_2025-05-03_19-34-53.png", // Replace with actual image filename if available
      bio: "Ergash Moxinurxon Odilxon qizi 1997-yilda Toshkent shahrida tug‘ilgan. U Toshkent davlat texnika universitetining Ekologiya va atrof-muhit muhofazasi yo‘nalishini tamomlagan. Hozirda O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari hamda O‘zbekiston Ekologik partiyasi yoshlar guruhi rahbari lavozimlarida faoliyat yuritmoqda.",
      responsibilities:
        "Yoshlar parlamenti ishida raisga ko‘maklashish, ekologik yo‘nalishdagi tashabbuslarni ilgari surish, yoshlar guruhi faoliyatini boshqarish va rasmiy uchrashuvlarda ishtirok etish.",
    },

    {
      id: 4,
      name: "Adilova Farzona Alisher qizi",
      position:
        "O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari, O‘zbekiston Adolat sotsial demokratik partiyasi yoshlar guruhi rahbari",
      image: "/images/deputatlar/image_2025-05-03_19-34-38.png", // Replace with actual image filename if available
      bio: "Adilova Farzona Alisher qizi 2001-yilda Jizzax viloyatida tug‘ilgan. U Jizzax davlat pedagogika universitetining Pedagogika va psixologiya yo‘nalishini tamomlagan. Hozirda O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari hamda O‘zbekiston Adolat sotsial demokratik partiyasi yoshlar guruhi rahbari lavozimlarida faoliyat yuritmoqda.",
      responsibilities:
        "Yoshlar parlamenti faoliyatida raisga ko‘maklashish, partiya yoshlar guruhining ishlarini muvofiqlashtirish, rasmiy tadbirlarda ishtirok etish va ijtimoiy-demokratik qadriyatlarni ilgari surish.",
    },
    {
      id: 5,
      name: "Suyarov Komiljon Sattarovich",
      position:
        "O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari, O‘zbekiston Liberal demokratik partiyasi yoshlar guruhi rahbari",
      image: "/images/deputatlar/image_2025-05-03_19-35-29.png", // Replace with actual image filename if available
      bio: "Suyarov Komiljon Sattarovich 2002-yilda Samarqand viloyatida tug‘ilgan. U Toshkent davlat sharqshunoslik universitetining siyosatshunoslik yo‘nalishini tamomlagan. Hozirda O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari va O‘zbekiston Liberal demokratik partiyasi yoshlar guruhi rahbari lavozimlarida faoliyat yuritmoqda.",
      responsibilities:
        "Yoshlar parlamenti ishlarida raisga yordam berish, yoshlar guruhi faoliyatini tashkil etish, siyosiy va ijtimoiy loyihalarda ishtirok etish, partiya g‘oyalarini yoshlar orasida targ‘ib qilish.",
    },
    {
      id: 6,
      name: "Axadova Husnora Akbar qizi",
      position:
        "O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari",
      image: "/images/deputatlar/image_2025-05-03_19-34-15.png", // Replace with actual image filename if available
      bio: "Axadova Husnora Akbar qizi 2000-yilda Samarqand viloyatida tug‘ilgan. U Toshkent davlat pedagogika universitetining Tabiiy fanlar yo‘nalishini tamomlagan. Hozirda O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari lavozimida faoliyat yuritmoqda.",
      responsibilities:
        "Yoshlar parlamenti faoliyatida raisga ko‘maklashish, yoshlar tashabbuslarini qo‘llab-quvvatlash, majlislar va rasmiy tadbirlarda faol ishtirok etish.",
    },
    {
      id: 7,
      name: "Murodov Nodir Oybek o‘g‘li",
      position:
        "O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari, O‘zbekiston Milliy tiklanish demokratik partiyasi yoshlar guruhi rahbari",
      image: "/images/deputatlar/image_2025-05-03_19-34-28.png", // Replace with actual image filename if available
      bio: "Murodov Nodir Oybek o‘g‘li 1998-yilda Jizzax viloyatida tug‘ilgan. U Toshkent davlat pedagogika universitetining harbiy taʼlim fani o‘qituvchisi va taʼlim muassasalari boshqaruvi yo‘nalishlarini tamomlagan. Hozirda O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi huzuridagi Yoshlar parlamenti rais o‘rinbosari hamda O‘zbekiston Milliy tiklanish demokratik partiyasi yoshlar guruhi rahbari lavozimlarida faoliyat yuritmoqda.",
      responsibilities:
        "Yoshlar parlamenti faoliyatida raisga ko‘maklashish, Milliy tiklanish demokratik partiyasi yoshlar guruhi ishlarini muvofiqlashtirish, yoshlarning vatanparvarlik va maʼnaviy tarbiyasiga oid tashabbuslarni ilgari surish.",
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
              <div className="md:flex p-6">
                <div className="md:w-1/3">
                  <div className="relative h-[300px] w-full">
                    {" "}
                    {/* Reduced height */}
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      fill
                      className="object-contain pt-16" // ensures full image is shown without cropping
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
