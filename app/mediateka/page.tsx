import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Mediateka() {
  const photos = [
    {
      id: 1,
      title: "Yoshlar parlamenti yalpi majlisi",
      date: "15.02.2025",
      image: "/images/media/IMG_3875.JPG",
    },
    {
      id: 2,
      title: "Xalqaro delegatsiya bilan uchrashuv",
      date: "10.02.2025",
      image: "/images/media/IMG_3876.JPG",
    },
    {
      id: 3,
      title: "Yoshlar parlamenti qo'mitalari yig'ilishi",
      date: "05.02.2025",
      image: "/images/media/IMG_3877.JPG",
    },
    {
      id: 4,
      title: "Yoshlar parlamenti a'zolari bilan davra suhbati",
      date: "01.02.2025",
      image: "/images/media/IMG_3878.JPG",
    },
    {
      id: 5,
      title: "Yoshlar parlamenti a'zolarining xorijiy mamlakatlarga tashrifi",
      date: "25.01.2025",
      image: "/images/media/IMG_3950.JPG",
    },
    {
      id: 6,
      title: "Yoshlar parlamenti a'zolari bilan ochiq muloqot",
      date: "20.01.2025",
      image: "/images/media/IMG_3954.JPG",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Yoshlar parlamenti yalpi majlisi",
      date: "15.02.2025",
      duration: "1:30:25",
      image: "/images/media1.png",
    },
    {
      id: 2,
      title: "Xalqaro delegatsiya bilan uchrashuv",
      date: "10.02.2025",
      duration: "45:12",
      image: "/images/media/IMG_3955.JPG",
    },
    {
      id: 3,
      title: "Yoshlar parlamenti qo'mitalari yig'ilishi",
      date: "05.02.2025",
      duration: "1:15:40",
      image: "/images/media/IMG_3956.JPG",
    },
    {
      id: 4,
      title: "Yoshlar parlamenti a'zolari bilan davra suhbati",
      date: "01.02.2025",
      duration: "55:30",
      image: "/images/media/IMG_3996.JPG",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Mediateka</h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Yoshlar parlamenti faoliyati bilan bog'liq
            foto va video materiallar
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="photos">Fotogalereya</TabsTrigger>
            <TabsTrigger value="videos">Videogalereya</TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <Link
                  key={photo.id}
                  href={`/mediateka/photos/${photo.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                    <div className="relative h-[200px] w-full">
                      <Image
                        src={photo.image || "/placeholder.svg"}
                        alt={photo.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1 group-hover:text-blue-600">
                        {photo.title}
                      </h3>
                      <p className="text-sm text-gray-500">{photo.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <Link
                  key={video.id}
                  href={`/mediateka/videos/${video.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                    <div className="relative h-[200px] w-full">
                      <Image
                        src={video.image || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <div className="h-12 w-12 rounded-full bg-[#0F4C81] flex items-center justify-center pl-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="white"
                              className="w-6 h-6"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1 group-hover:text-blue-600">
                        {video.title}
                      </h3>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{video.date}</span>
                        <span>{video.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
