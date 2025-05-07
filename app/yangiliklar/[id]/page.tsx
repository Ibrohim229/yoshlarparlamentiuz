import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, ArrowLeft } from "lucide-react";

interface PageProps {
  params: {
    id: string;
  };
}

export default function NewsDetail({ params }: PageProps) {
  // This would normally come from a database or API
  const news = [
    {
      id: "1",
      title:
        "Buxoro davlat universitetida yoshlar uchun yaratilgan sharoitlar o‘rganildi",
      date: "19.02.2025",
      time: "15:00",
      image: "/images/media/IMG_3950.JPG",
      content: `
        <p>Oliy Majlis Qonunchilik palatasi huzuridagi Yoshlar parlamenti raisi Otabek Sobitov Buxoro davlat universitetiga tashrif buyurdi.</p>
        
        <p>Tashrif davomida u universitet faoliyati, ta’lim sifati, ilmiy izlanishlar va talabalar uchun yaratilgan imkoniyatlar bilan yaqindan tanishdi. </p>
        
      `,
      category: "Qonunchilik palatasi",
      location: "Oliy Majlis Qonunchilik palatasi",
      views: 1245,
      relatedNews: [
        {
          id: 2,
          title:
            "Oliy sud jinoyat protsessida shaxsiy hayot daxlsizligi, shaxsiy va oilaviy sirga oid...",
          date: "18.02.2025",
          image: "/images/media/IMG_3875.JPG",
        },
        {
          id: 3,
          title:
            "Qonun ijodkorligi jarayonida fuqarolarning ishtirokini ta'minlash...",
          date: "17.02.2025",
          image: "/images/media/IMG_3875.JPG",
        },
        {
          id: 4,
          title:
            "O'zbekiston bilan BMT hamkorligini bo'yicha kengashning 36-majlisi...",
          date: "16.02.2025",
          image: "/images/news/photo_2025-05-06_00-47-28.jpg",
        },
        {
          id: 5,
          title:
            "Davlat dasturi va huquqshunoslik fanining dolzarb masalalari...",
          date: "15.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+4",
        },
      ],
    },
    {
      id: "2",
      title:
        "Yoshlar parlamenti Raisi talabalar bilan ochiq muloqotda ishtirok etdi",
      date: "18.02.2025",
      time: "11:00",
      image: "/images/media/IMG_8125.JPG",
      content: `
        <p>Buxoro davlat universitetida faol va tashabbuskor talabalar bilan ochiq muloqot tashkil etildi.</p></br>
        
        <p>Uchrashuv davomida yoshlarning ilm-fanga bo‘lgan qiziqishi, jamiyatdagi o‘rni va ularning tashabbuslarini qo‘llab-quvvatlash masalalari muhokama qilindi. Talabalar o‘z fikr-mulohazalari, g‘oyalari va takliflari bilan ishtirok etib, savollariga atroflicha javob oldilar.</p></br>
        
        <p>Shuningdek, yoshlarga yaratilgan imkoniyatlardan unumli foydalanish, ularni qo‘llab-quvvatlash va rag‘batlantirish mexanizmlari yuzasidan amaliy tavsiyalar berildi. Yoshlar parlamentining faoliyati, maqsad va vazifalari, shuningdek, yoshlarning siyosiy va ijtimoiy jarayonlardagi ishtiroki haqida ham atroflicha maʼlumotlar berildi.</p></br>
        
        <p>Bunday muloqotlar yoshlarning faolligini oshirish, ularni yangi g‘oyalar sari ilhomlantirish va kelajakka ishonchini mustahkamlashga xizmat qiladi.</p></br>
      `,
      category: "Qonunchilik palatasi",
      location: "Oliy Majlis Qonunchilik palatasi",
      views: 987,
      relatedNews: [
        {
          id: 1,
          title: "Yosh avlod manfaatlari muhofazasi va insonparvarlik tamoyili",
          date: "19.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+1",
        },
        {
          id: 3,
          title: "Yoshlar parlamenti a'zolari bilan davra suhbati o'tkazildi",
          date: "13.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+2",
        },
      ],
    },
    {
      id: "3",
      title:
        "Yoshlar parlamenti Raisi Kogon tumanidagi 1-sonli jazoni ijro etish muassasida mahkumlar bilan suhbatlashildi",
      date: "13.02.2025",
      time: "11:00",
      image: "/images/media/IMG_3876.JPG",
      content: `
        <p>Yoshlar parlamenti Raisi Kogon tumanidagi 1-sonli jazoni ijro etish muassasi faoliyati bilan yaqindan tanishdi. Muassasada maxkumlarni kasb-hunar o‘rganishlari, xorijiy tillarni o‘zlashitirish, yaratilgan shart-sharoitlar bilan tanishilib, muassasa faoliyati yuzasidan takliflar ilgari surildi.</p><br/>
        
        <p>Shuningdek, Yoshlar parlamenti raisi Otabekxo‘ja Sobitov muassasadagi maxkumlar bilan suxbatlashdi.</p><br/>
        
        <p>Suxbat doirasida “Fuqarolarning davlat pensiya taʼminoti toʻgʻrisida”gi Qonunining 37-moddasi ozodlikdan mahrum etishga hukm qilingan shaxslarning jazoni ijro etish muassasalarida jazoni oʻtash davrida bajaradigan har qanday ishi, agar ushbu ish bajarilgan davr uchun jazoni ijro etish muassasasi tomonidan ijtimoiy soliq toʻlangan boʻlsa umumiy mehnat stajiga qoʻshilishi belgilanganligi aytib oʻtildi.</p>
        
      `,
      category: "Yoshlar parlamenti",
      location: "Oliy Majlis Qonunchilik palatasi",
      views: 756,
      relatedNews: [
        {
          id: 5,
          title: "Yoshlar parlamenti qo'mitalari yig'ilishlari bo'lib o'tdi",
          date: "10.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+1",
        },
      ],
    },
    {
      id: "4",
      title:
        "Xorazm — dunyo taraqqiyotining beshigi, dunyo sivilizatsiyasi va madaniyatiga bebaho hissa qo‘shgan Sharq gavhari hisoblanadi. Uning havas qilsa arziydigan bebaho boyligi – tarixiy obidalari bor. “Ichan qal’a” majmuasining umumbashariyat xazinasi sifatida YUNЕSKO ro‘yxatiga kiritilgani fikrimiz isbotidir.",
      date: "19.02.2025",
      time: "15:00",
      image: "/images/news/photo_2025-05-06_00-47-28.jpg",
      content: `
        <p>So‘nggi yillarda vohada ulkan yangilanish va o‘zgarishlar ro‘y berdi. Prezidentimiz boshchiligida odamlarning turmush sharoitlarini yaxshilash, tayinli ishli, doimiy daromad manbaiga ega bo‘lishi, oilasi bilan tinch-xotirjam yashashi uchun salmoqli ishlar bajarildi.</p><br/>
        
        <p>Har oyning oxirgi haftasida xalq bilan muloqot qilish, odamlarni o‘ylantirayotgan masalalarga yechim topish maqsadida hududlarda bo‘lib, saylovchilar bilan muloqotlar o‘tkazamiz. Ochig‘i, har gal borganimizda biror o‘zgarish yoki yangilanishning guvohi bo‘lamiz. Chunki hozir bu yerda Yangi O‘zbekiston nafasi har bir mahalla, har bir xonadonga kirib boryapti.</p><br/>

        <p>Davlatimiz rahbarining shu yil 1-2-may kunlari Xorazm viloyatiga tashrifi esa katta voqelikka aylandi. Bu bejiz emas. Zero, uning doirasida hududdagi yangilanish va islohotlar, hayotga tatbiq etilayotgan yangi loyihalar bilan tanishish barobarida kelgusida qilinishi lozim bo‘lgan ishlar ham belgilab berildi.</p><br/>

        <p>Urganch tumanida viloyatni iqtisodiy-ijtimoiy rivojlantirish bo‘yicha ustuvor vazifalar muhokamasi yuzasidan o‘tkazilgan yig‘ilishda Xorazm shonli tariximiz bilan yangi islohotlar tutashgan chorraha ekanligi alohida ta’kidlandi.</p><br/>

        <p>Darhaqiqat, logistika zanjiridan uzoqda, tabiiy resurslari cheklangan bu diyorda o‘tgan yil “kichik va o‘rta biznes yili” bo‘ldi, deyish mumkin. Buni 2024 yilda viloyatda 7 ming yangi tadbirkor ish boshlagani, 47 ta korxona kichikdan o‘rta darajaga o‘tgani, 1 ming 700 ta korxona faoliyati tiklab, natijada bir yil ichida 290 ming aholi ish bilan ta’minlangani misolida yaqqol ko‘rish mumkin.</p><br/>

        <p>Ushbu raqamlar quvonarli, albatta. Lekin oldinda yechimini kutayotgan ayrim masalalar ham bor. Xususan, vohada kambag‘allik darajasi 12 foiz atrofida, 45 ming fuqaro esa ishsiz. Shuning uchun hokimlar va o‘rinbosarlari har bir imkoniyatni loyihaga aylantirib, yangi ish o‘rinlari yaratish, sanoat, servis, turizm, qishloq xo‘jaligi, eksport salohiyatini yanada oshirish zarurligi urg‘ulandi.</p><br/>

        <p>Davlatimiz rahbari bu sohalardagi imkoniyatlar va ularni ishga solish choralarini ko‘rsatib o‘tdi. Jumladan, yurtimizda turizm eksporti salohiyati 10 milliard dollar bo‘lsa, shuning 2 milliard dollari aynan Xorazmga to‘g‘ri keladi. Afsuski, bu to‘liq ishga solinmayapti. Agar zarur choralar ko‘rilsa, ming-minglab yangi ish o‘rinlari yaratiladi, odamlarning real daromadlari oshadi.</p><br/>
        
        <p>Bugungi kunda viloyat bo‘yicha jami 263 ta madaniy meros obidasi mavjud. Tadbirkorlar bilan hamkorlikda ular turistik maskanga aylantirilsa, qo‘shimcha daromad va ish o‘rinlari bo‘ladi. Shuningdek, chet eldan tajribali arxeologlarni jalb qilib, tarixiy joylarni aniqlash va tiklashga mablag‘ ajratiladi.</p><br/>

        <p>Xorazmda 40 dan ortiq hunarmandchilik yo‘nalishlari rivojlangan bo‘lib, sayyohlar mahsulot tayyorlash jarayoniga ham qiziqadi. Turizmda ovqatlanish joylari juda muhim. Bu borada milliy taomlarimizni chet ellarda tanitayotgan restoratorlarni qo‘llab-quvvatlash zarurligi qayd etilib, xorijda o‘zbek restoranlari tashkil qilishda ro‘yxatdan o‘tish, ruxsatnoma va ish yuritish bilan bog‘liq xarajatlarning bir qismi qoplab berilishi belgilandi.</p><br/>
        
      `,
      category: "Qonunchilik palatasi",
      location: "Oliy Majlis Qonunchilik palatasi",
      views: 1245,
      relatedNews: [
        {
          id: 2,
          title:
            "Oliy sud jinoyat protsessida shaxsiy hayot daxlsizligi, shaxsiy va oilaviy sirga oid...",
          date: "18.02.2025",
          image: "/images/media/IMG_3875.JPG",
        },
        {
          id: 3,
          title:
            "Qonun ijodkorligi jarayonida fuqarolarning ishtirokini ta'minlash...",
          date: "17.02.2025",
          image: "/images/media/IMG_3875.JPG",
        },
        {
          id: 4,
          title:
            "O'zbekiston bilan BMT hamkorligini bo'yicha kengashning 36-majlisi...",
          date: "16.02.2025",
          image: "/images/news/photo_2025-05-06_00-47-28.jpg",
        },
        {
          id: 5,
          title:
            "Davlat dasturi va huquqshunoslik fanining dolzarb masalalari...",
          date: "15.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+4",
        },
      ],
    },

    {
      id: "5",
      title:
        "Prezidentimiz Shavkat Mirziyoyevning hududlar rivoji va aholi hayoti bilan yaqindan tanishish, yangi istiqbolli rejalarni belgilash maqsadida 1-2-may kunlari Xorazm viloyatiga tashrifi tom ma’noda, tarixiy voqea bo‘ldi.",
      date: "19.02.2025",
      time: "15:00",
      image: "/images/news/photo_2025-05-06_00-47-23.jpg",
      content: `
        <p>Davlatimiz rahbarining "Xorazm – shonli tariximiz bilan yangi islohotlarimiz tutashgan chorraha" deya ta’kidlagan so‘zlari bugungi kundagi o‘zgarishlarning voha ahli hayotida naqadar muhim o‘rin tutganini yaqqol ko‘rsatdi.</p><br/>
        
        <p>Birgina 2024-yilda viloyatda 7 ming yangi tadbirkorning ish boshlashi, 47 korxonaning kichikdan o‘rta biznes toifasiga o‘tishi, o‘ndan ziyod tadbirkorning yillik aylanmasi 200 milliard so‘mdan oshishi –Xorazm iqtisodiyotida sezilarli jonlanish yuz berayotganidan dalolatdir.</p><br/>

        <p>Yutuqlar bilan birga, viloyatda sohalarning jadal taraqqiyoti uzviy davom etishi uchun yechimini kutayotgan ayrim muammolar ham mavjud. Bu borada viloyat va tuman hokimlariga har bir imkoniyatni ishga solib, yangi loyihalarni amalga oshirish, sanoat, xizmat ko‘rsatish, turizm, qishloq xo‘jaligi va eksport salohiyatini oshirish, ijtimoiy soha va infratuzilmadagi kamchiliklarni bartaraf etish bo‘yicha aniq vazifalar qo‘yildi.</p><br/>

        <p>Turizm – bu faqat sayru sayohat, mazmunli dam olishgina emas. U avvalo ellarni ellarga, dillarni dillarga bog‘laydigan, xalqimizning boy madaniyati va tarixiy merosini dunyoga namoyon qiladigan ko‘zgu hamdir. Bu borada O‘zbekiston tarixchilar jamiyatining Xorazm bo‘limi faoliyatini davlat tomonidan qo‘llab-quvvatlash, chet ellik tajribali arxeologlarni jalb qilish, Xorazm va Qoraqalpog‘iston hududidagi qadimiy qal’alarni bog‘lovchi yangi turistik marshrutlar ishlab chiqish, ular atrofida xizmat ko‘rsatish obyektlarini barpo etish bo‘yicha ilgari surilgan muhim tashabbuslar vohada sayyohlar oqimini yanada kengaytirishga xizmat qilishi aniq.</p><br/>

        <p>Gastronomik turizmni rivojlantirish, milliy taomlarni xorijda targ‘ib qilish, hunarmandchilikni qo‘llab-quvvatlash, Mevaston mahallasida Hunarmandchilik markazini tashkil etish, hunarmand shogirdlarni tayyorlashga mablag‘ ajratish kabi chora-tadbirlar viloyat turizm salohiyatini yuksaltirishga qaratilgan muhim qadamlar bo‘ldi.</p><br/>

        <p>Qishloq xo‘jaligida suvni tejovchi texnologiyalarni joriy etish, xususan, Avstriyaning "Bauer" kompaniyasi bilan hamkorlikda yomg‘irlatib sug‘orish tizimini keng joriy etish bo‘yicha kelishuvga erishilishi agrar sohada hosildorlikni oshirish va suv resurslaridan oqilona foydalanish imkonini beradi.</p><br/>

        <p>Yo‘llar va ko‘priklarni ta’mirlash, yangi uy-joylar qurish, ichimlik suvi va kanalizatsiya tizimlarini modernizatsiya qilish, zamonaviy avtobuslar xarid qilish kabi loyihalar aholining turmush sharoitini yaxshilashga xizmat qiladi. "Buxoro — Xiva" temir yo‘lining elektrlashtirilishi esa mintaqaning transport-logistika imkoniyatlarini kengaytiradi.</p><br/>
        
        <p>Xorazm eli qalbini iftixorga to‘ldirgan yana bir voqelik — shu zaminning yetuk rahbar ayollaridan biri bo‘lgan Shakarjon Xo‘janiyozova xotirasi aynan Prezidentimiz tomonidan yod etilishi va uning yubileyini keng nishonlash, nomini abadiylashtirish bo‘yicha bildirgan tashabbuslari hamda Xonqa tumanidagi "Sobirjon Yusuf" fermer xo‘jaligi rahbari Oyimjon Otajanovaga "O‘zbekiston Respublikasida xizmat ko‘rsatgan qishloq xo‘jaligi xodimi" faxriy unvonining berilishi bo‘ldi.</p><br/>

        <p>Umuman olganda, tashrif davomida belgilab berilgan ustuvor vazifalar Xorazmning iqtisodiy va ijtimoiy hayotida yangi ufqlarni ochib, uning mintaqadagi yetakchi hududlardan biriga aylanishiga xizmat qiladi. Biz deputatlar ushbu topshiriqlar ijrosini sifatli va yuqori saviyada ta’minlashda faol va tashabbuskor bo‘lishimiz kerak.</p><br/>
        
      `,
      category: "Qonunchilik palatasi",
      location: "Oliy Majlis Qonunchilik palatasi",
      views: 1245,
      relatedNews: [
        {
          id: 2,
          title:
            "Oliy sud jinoyat protsessida shaxsiy hayot daxlsizligi, shaxsiy va oilaviy sirga oid...",
          date: "18.02.2025",
          image: "/images/media/IMG_3875.JPG",
        },
        {
          id: 3,
          title:
            "Qonun ijodkorligi jarayonida fuqarolarning ishtirokini ta'minlash...",
          date: "17.02.2025",
          image: "/images/media/IMG_3875.JPG",
        },
        {
          id: 4,
          title:
            "O'zbekiston bilan BMT hamkorligini bo'yicha kengashning 36-majlisi...",
          date: "16.02.2025",
          image: "/images/news/photo_2025-05-06_00-47-28.jpg",
        },
        {
          id: 5,
          title:
            "Davlat dasturi va huquqshunoslik fanining dolzarb masalalari...",
          date: "15.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+4",
        },
      ],
    },

    {
      id: "6",
      title: "Turistik imkoniyatlar — voha ravnaqida muhim bosqich.",
      date: "19.02.2025",
      time: "15:00",
      image: "/images/news/photo_2025-05-06_00-47-13.jpg",
      content: `
        <p>Davlatimiz rahbari Xorazm viloyatiga tashrifini bugungi kunda soatiga atigi 400 nafar yo‘lovchiga xizmat ko‘rsata olishi mumkin bo‘lgan Urganch xalqaro aeroportini Koreya Respublikasining Incheon International Airport Corporation kompaniyasi bilan birgalikda modernizatsiya qilish va boshqarish borasidagi loyihalar bilan tanishishdan boshladi. Bu bejiz emas.</p><br/>
        
        <p>Koreyadagi Inchon xalqaro aeroporti sig‘imi bo‘yicha dunyoda uchinchi o‘rinda tursa, servis bo‘yicha yetakchilardan biri hisoblanadi. Xorazmga keladigan sayyohlar oqimini 5 millionga yetkazish borasidagi maqsadga erishish uchun transport infratuzilmasining, ayniqsa, aeroportning o‘rni katta.</p><br/>

        <p>Ushbu loyihaning borishi bilan tanishish davomida xorijiy aviakompaniyalar bilan hamkorlikda samolyotlar olib kelish, tashuvlarni ko‘paytirish, servis bo‘yicha Koreya tajribasini o‘rganish, mutaxassislarni o‘qitish va malakasini oshirish zarurligi urg‘ulandi.</p><br/>

        <p>Bugungi kunda viloyatda 260 dan ziyod madaniy meros obyekti mavjud bo‘lib, ularning tarixi bir necha asrlarga borib taqaladi. Shubhasiz, ular o‘zining noyob va go‘zal me’moriy qiyofasi bilan nafaqat yurtimiz, balki butun Markaziy Osiyoning jahon ravnaqidagi betakror o‘rnini belgilab beradigan tirik tarixdir.
</p><br/>

        <p>Havas qilsa arziydigan bebaho boyliklarimizdan biri, ochiq osmon ostidagi shahar-muzey — “Ichan qal’a” majmuasi umumbashariyat xazinasi sifatida YUNЕSKO ro‘yxatiga kiritilgani fikrimiz dalilidir. Prezidentimiz tashabbusi bilan bunday maskanlar qatori yildan yilga ko‘payib bormoqda. Davlatimiz rahbari ochib bergan “Arda Xiva” majmuasi qadim kent ichra yana bir betakror shaharni eslatadi. Mazkur maskan o‘zida tarix va bugunni uyg‘unlashtirgan me’moriy yechimi bilan noyob loyiha sanaladi.</p><br/>

        <p>Shu bilan birga, viloyatning hali ishga solinmagan turistik salohiyati juda katta. Masalan, Xiva tumanidagi 2 ming 400 gektar yerni Xiva shahriga o‘tkazib, u yerda “Sahro yulduzi” turistik kompleksini bunyod etish, hududda mehmonxonalar, ko‘ngilochar markazlar, gastronomik va savdo ko‘chalari, muzeylar, ekouylar, yozgi lager, ekstremal turizm obyektlarini barpo etish rejalashtirilgan.</p><br/>

        <p>Tuproqqal’ada cho‘l hududidagi 5 ming gektar yerda safari va ov turizmini rivojlantirish, Urganch shahri, Shovot, Qo‘shko‘pir, Xiva va Hazoraspdan oqib o‘tuvchi G‘azovot, Polvon, Shovot kanallari bo‘ylarida 80 ta xizmat ko‘rsatish, savdo-ko‘ngilochar obyektlarni ishga tushirish, Bog‘ot, Gurlan, Yangibozor va Urganch tumanida turizm qishloqlarini tashkil etish ko‘zlanmoqda.</p><br/>
        
        <p>Ajdodlarimiz qoldirgan beqiyos ilmiy-ma’naviy merosni asrab-avaylash, boyitish va dunyoga keng targ‘ib etish maqsadida Ma’mun akademiyasi binosi oldidagi 2 gektar bog‘ni “Buyuk allomalar” nomli ochiq osmon ostidagi “smart” muzeyga aylantirish va Xorazm yurtida kamol topgan o‘nlab mumtoz ajdodlarimizning ibratli hayot yo‘li, boy ijodiy merosini interaktiv usulda bir nechta xorijiy tillarda sayyohlarga taqdim etish mo‘ljallangan.</p><br/>

        <p>Prezidentimiz Xorazmda turizmni rivojlantirish Qoraqalpog‘iston bilan hamohang ravishda, yagona konsepsiya asosida amalga oshirilishini, buning uchun “Xorazm — Qoraqalpog‘iston” turizm halqasi loyihasi ishlab chiqilishini ta’kidladi.</p><br/>
        
      `,
      category: "Qonunchilik palatasi",
      location: "Oliy Majlis Qonunchilik palatasi",
      views: 1245,
      relatedNews: [
        {
          id: 2,
          title:
            "Oliy sud jinoyat protsessida shaxsiy hayot daxlsizligi, shaxsiy va oilaviy sirga oid...",
          date: "18.02.2025",
          image: "/images/media/IMG_3875.JPG",
        },
        {
          id: 3,
          title:
            "Qonun ijodkorligi jarayonida fuqarolarning ishtirokini ta'minlash...",
          date: "17.02.2025",
          image: "/images/media/IMG_3875.JPG",
        },
        {
          id: 4,
          title:
            "O'zbekiston bilan BMT hamkorligini bo'yicha kengashning 36-majlisi...",
          date: "16.02.2025",
          image: "/images/news/photo_2025-05-06_00-47-28.jpg",
        },
        {
          id: 5,
          title:
            "Davlat dasturi va huquqshunoslik fanining dolzarb masalalari...",
          date: "15.02.2025",
          image: "/placeholder.svg?height=100&width=150&text=Related+4",
        },
      ],
    },
  ];

  const newsItem = news.find((item) => item.id === params.id);

  if (!newsItem) {
    return (
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Yangilik topilmadi</h1>
          <Link
            href="/yangiliklar"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Yangiliklar sahifasiga qaytish
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
            href="/yangiliklar"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Yangiliklar sahifasiga qaytish
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">{newsItem.title}</h1>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>
                    {newsItem.date} | {newsItem.time}
                  </span>
                  <span className="mx-2">|</span>
                  <span>{newsItem.location}</span>
                  <span className="mx-2">|</span>
                  <span>Ko'rishlar: {newsItem.views}</span>
                </div>

                <div className="relative h-[400px] w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={newsItem.image || "/placeholder.svg"}
                    alt={newsItem.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />

                <div className="mt-8 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gray-500 hover:text-blue-600">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                        </svg>
                        Ulashish
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-blue-600">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Chop etish
                      </button>
                    </div>
                    <div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                        {newsItem.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">O'xshash yangiliklar</h2>
              <div className="space-y-4">
                {newsItem.relatedNews?.map((related) => (
                  <div key={related.id} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        width={80}
                        height={60}
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium line-clamp-2 mb-1">
                        <Link
                          href={`/yangiliklar/${related.id}`}
                          className="hover:text-blue-600"
                        >
                          {related.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-gray-500">{related.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">Kategoriyalar</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/yangiliklar?category=all"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Barchasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/yangiliklar?category=qonunchilik-palatasi"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Qonunchilik palatasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/yangiliklar?category=yoshlar-parlamenti"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Yoshlar parlamenti
                  </Link>
                </li>
                <li>
                  <Link
                    href="/yangiliklar?category=xalqaro-aloqalar"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Xalqaro aloqalar
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Teglar</h2>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/yangiliklar?tag=parlament"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800"
                >
                  Parlament
                </Link>
                <Link
                  href="/yangiliklar?tag=yoshlar"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800"
                >
                  Yoshlar
                </Link>
                <Link
                  href="/yangiliklar?tag=qonun"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800"
                >
                  Qonun
                </Link>
                <Link
                  href="/yangiliklar?tag=majlis"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800"
                >
                  Majlis
                </Link>
                <Link
                  href="/yangiliklar?tag=xalqaro"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800"
                >
                  Xalqaro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
