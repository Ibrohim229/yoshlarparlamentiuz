"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import ParliamentLogo from "./parliament-logo";

const Header = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(
          'button[aria-label="Toggle mobile menu"]'
        )
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const dropdownMenus = {
    "yoshlar-parlamenti": [
      {
        title: "Yoshlar parlamenti tarixi",
        href: "/yoshlar-parlamenti/tarixi",
      },
      {
        title: "Yoshlar parlamenti Rahbariyati",
        href: "/yoshlar-parlamenti/rahbariyati",
      },
      {
        title: "Yoshlar parlament Kengashi",
        href: "/yoshlar-parlamenti/kengashi",
      },
      {
        title: "Yoshlar parlamenti Qo'mitalar",
        href: "/yoshlar-parlamenti/qomitalar",
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
    <header className="w-full max-w-[100vw] overflow-hidden">
      <div className="bg-red-600 text-white py-1 px-4">
        <div className="container mx-auto">
          <p className="text-sm">SAYT SINOV TARIQASIDA ISHGA TUSHIRILGAN</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <ParliamentLogo className="h-16 w-auto mt-0" />
            <div className="ml-2">
              <div className="text-sm font-medium pt-8 whitespace-nowrap">
                O'ZBEKISTON RESPUBLIKASI
              </div>
              <div className="text-sm font-medium whitespace-nowrap">
                OLIY MAJLISI QONUNCHILIK
              </div>
              <div className="text-sm font-medium whitespace-nowrap">
                PALATASI HUZURIDAGI
              </div>
              <div className="text-lg font-bold whitespace-nowrap">
                YOSHLAR PARLAMENTI
              </div>
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
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-between">
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
                <div className="absolute left-0 top-full w-full bg-[#0047AB] z-50">
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
                <div className="absolute left-0 top-full w-full bg-[#0047AB] z-50">
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
                <div className="absolute left-0 top-full w-full bg-[#0047AB] z-50">
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
                <div className="absolute left-0 top-full w-full bg-[#0047AB] z-50">
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
          </nav>

          {/* Mobile Navigation */}
          <div className="flex justify-end md:hidden">
            <button
              className="px-4 py-4 text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="bg-[#0047AB] text-white md:hidden overflow-y-auto max-h-[80vh]"
          ref={mobileMenuRef}
        >
          <div className="container mx-auto px-4 py-2">
            <div className="space-y-2">
              <div className="border-b border-[#003380]">
                <button
                  className="w-full py-3 px-2 text-left flex justify-between items-center"
                  onClick={() => toggleDropdown("yoshlar-parlamenti")}
                >
                  <span>Yoshlar parlamenti</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "yoshlar-parlamenti"
                        ? "rotate-180"
                        : ""
                    }`}
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
                  <div className="pl-4 pb-2">
                    {dropdownMenus["yoshlar-parlamenti"].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 hover:text-gray-300"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b border-[#003380]">
                <Link
                  href="/yoshlar-parlamenti-azolari"
                  className="block py-3 px-2"
                >
                  Yoshlar parlamenti a'zolari
                </Link>
              </div>

              <div className="border-b border-[#003380]">
                <button
                  className="w-full py-3 px-2 text-left flex justify-between items-center"
                  onClick={() => toggleDropdown("tadbirlar")}
                >
                  <span>Tadbirlar</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "tadbirlar" ? "rotate-180" : ""
                    }`}
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
                  <div className="pl-4 pb-2">
                    {dropdownMenus["tadbirlar"].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 hover:text-gray-300"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b border-[#003380]">
                <button
                  className="w-full py-3 px-2 text-left flex justify-between items-center"
                  onClick={() => toggleDropdown("yangiliklar")}
                >
                  <span>Yangiliklar</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "yangiliklar" ? "rotate-180" : ""
                    }`}
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
                  <div className="pl-4 pb-2">
                    {dropdownMenus["yangiliklar"].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 hover:text-gray-300"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b border-[#003380]">
                <button
                  className="w-full py-3 px-2 text-left flex justify-between items-center"
                  onClick={() => toggleDropdown("xalqaro-munosabatlar")}
                >
                  <span>Xalqaro munosabatlar</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "xalqaro-munosabatlar"
                        ? "rotate-180"
                        : ""
                    }`}
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
                  <div className="pl-4 pb-2">
                    {dropdownMenus["xalqaro-munosabatlar"].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 hover:text-gray-300"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
