"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import ParliamentLogo from "./parliament-logo";

const Header = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const dropdownMenus = {
    "yoshlar-parlamenti": [
      {
        title: "Yoshlar parlamenti tarixi",
        href: "/yoshlar-parlamenti/tarixi",
      },
      {
        title: "Yoshlar parlament Kengashi",
        href: "/yoshlar-parlamenti/rahbariyati",
      },
      {
        title: "Yoshlar parlamenti Rahbariyati",
        href: "/yoshlar-parlamenti/rahbariyati",
      },
      {
        title: "Yoshlar parlamenti Qo'mitalar",
        href: "/yoshlar-parlamenti/qomitalar",
      },
      {
        title: "Parlamentning yoshlar guruxlari",
        href: "/yoshlar-parlamenti/parlamentning-yoshlar-guruxlari",
      },
      {
        title: "Yoshlar parlamenti Nizomi va Reglamenti",
        href: "/yoshlar-parlamenti/nizomi",
      },
    ],
    tadbirlar: [
      { title: "Yalpi majlislar", href: "/tadbirlar/yalpi-majlislar" },
      {
        title: "Siyosiy partiyalarning yoshlar guruhlari yig'ilishlari",
        href: "/tadbirlar/siyosiy-partiyalar",
      },
      {
        title: "Qo'mitalar yig'ilishi",
        href: "/tadbirlar/qomitalar-yigilishi",
      },
      { title: "Boshqa tadbirlar", href: "/tadbirlar/boshqa" },
    ],
    yangiliklar: [
      { title: "Yangiliklar", href: "/yangiliklar" },
      { title: "Maqolalar", href: "/maqolalar" },
      { title: "Munosabatlar", href: "/munosabatlar" },
    ],
    "xalqaro-munosabatlar": [
      {
        title: "Xalqaro tadbirlar",
        href: "/xalqaro-munosabatlar/xalqaro-tadbirlar",
      },
      {
        title: "Do'stlik guruhlar",
        href: "/xalqaro-munosabatlar/dostlik-guruhlar",
      },
    ],
  };

  return (
    <header className="w-full">
      <div className="bg-red-600 text-white py-1 px-4">
        <div className="container mx-auto">
          <p className="text-sm">SAYT SINOV TARIQASIDA ISHGA TUSHIRILGAN</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <ParliamentLogo className="h-16 w-auto mb-4 mx-2" />
            <div className="ml-2">
              <div className="text-sm font-medium">
                O'ZBEKISTON RESPUBLIKASI OLIY MAJLISI
              </div>
              <div className="text-sm font-medium">
                QONUNCHILIK PALATASI HUZURIDAGI
              </div>
              <div className="text-lg font-bold">YOSHLAR PARLAMENTI</div>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center text-sm">
            <Search className="h-4 w-4 mr-1" />
            <span>Izlash</span>
          </button>

          <div className="relative">
            <button className="flex items-center text-sm">
              <span>O'zbek</span>
              <svg
                className="w-4 h-4 ml-1"
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
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#0047AB]" ref={dropdownRef}>
        <div className="container mx-auto px-4">
          <nav className="flex justify-between">
            <div className="relative group">
              <button
                className={`px-4 py-4 text-white flex items-center ${
                  activeDropdown === "yoshlar-parlamenti" ? "bg-[#003380]" : ""
                }`}
                onClick={() => toggleDropdown("yoshlar-parlamenti")}
              >
                Yoshlar parlamenti
                <svg
                  className="w-4 h-4 ml-1"
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
              </button>
              {activeDropdown === "yoshlar-parlamenti" && (
                <div className="absolute left-0 top-full w-[300px] bg-[#0047AB] z-50">
                  <div className="py-2">
                    {dropdownMenus["yoshlar-parlamenti"].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-white hover:bg-[#003380]"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/yoshlar-parlamenti-azolari"
              className="px-4 py-4 text-white"
            >
              Yoshlar parlamenti a'zolari
            </Link>

            <div className="relative group">
              <button
                className={`px-4 py-4 text-white flex items-center ${
                  activeDropdown === "tadbirlar" ? "bg-[#003380]" : ""
                }`}
                onClick={() => toggleDropdown("tadbirlar")}
              >
                Tadbirlar
                <svg
                  className="w-4 h-4 ml-1"
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
              </button>
              {activeDropdown === "tadbirlar" && (
                <div className="absolute left-0 top-full w-[300px] bg-[#0047AB] z-50">
                  <div className="py-2">
                    {dropdownMenus["tadbirlar"].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-white hover:bg-[#003380]"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className={`px-4 py-4 text-white flex items-center ${
                  activeDropdown === "yangiliklar" ? "bg-[#003380]" : ""
                }`}
                onClick={() => toggleDropdown("yangiliklar")}
              >
                Yangiliklar
                <svg
                  className="w-4 h-4 ml-1"
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
              </button>
              {activeDropdown === "yangiliklar" && (
                <div className="absolute left-0 top-full w-[300px] bg-[#0047AB] z-50">
                  <div className="py-2">
                    {dropdownMenus["yangiliklar"].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-white hover:bg-[#003380]"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className={`px-4 py-4 text-white flex items-center ${
                  activeDropdown === "xalqaro-munosabatlar"
                    ? "bg-[#003380]"
                    : ""
                }`}
                onClick={() => toggleDropdown("xalqaro-munosabatlar")}
              >
                Xalqaro munosabatlar
                <svg
                  className="w-4 h-4 ml-1"
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
              </button>
              {activeDropdown === "xalqaro-munosabatlar" && (
                <div className="absolute left-0 top-full w-[300px] bg-[#0047AB] z-50">
                  <div className="py-2">
                    {dropdownMenus["xalqaro-munosabatlar"].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-white hover:bg-[#003380]"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="px-4 py-4 text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
