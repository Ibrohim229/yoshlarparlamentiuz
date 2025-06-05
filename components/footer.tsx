import Link from "next/link";
import Image from "next/image";
import ParliamentLogo from "./parliament-logo";

const Footer = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}.${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${currentDate.getFullYear()} (GMT+5)`;

  return (
    <footer className="bg-[#0047AB] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-start mb-6">
              <ParliamentLogo className="h-16 w-auto flex-shrink-0 " />
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Ijtimoiy tarmoqlar:</p>
              <div className="flex space-x-3">
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1 15h-2v-6h2v6zm-1-7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm8 7.5h-2v-3c0-.553-.447-1-1-1s-1 .447-1 1v3h-2v-6h2v1.241c.412-.566 1.044-.958 1.75-.958 1.36 0 2.25 1.054 2.25 2.25v3.467z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.521 8.507c.005.102.005.203.005.305 0 3.135-2.387 6.752-6.752 6.752a6.707 6.707 0 01-3.644-1.066c.19.022.376.027.569.027a4.747 4.747 0 002.94-1.012 2.375 2.375 0 01-2.214-1.645 2.38 2.38 0 001.071-.041 2.37 2.37 0 01-1.9-2.326v-.03c.32.178.686.285 1.073.297a2.37 2.37 0 01-.733-3.165 6.74 6.74 0 004.893 2.48 2.37 2.37 0 014.037-2.16c.587-.114 1.137-.325 1.634-.616a2.372 2.372 0 01-1.04 1.31 4.73 4.73 0 001.48-.406 4.82 4.82 0 01-1.182 1.228z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.667 14.667H8.333v-7h2.5v-1.666c0-2.084 1.25-3.334 3.334-3.334h1.666v2.5h-1.666c-.417 0-.834.417-.834.834v1.666h2.5l-.417 2.5h-2.083v4.5z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.8 7.5c.2 0 .4.1.4.3 0 .2-.1.4-.3.5l-4.8 3.1c-.1.1-.3.1-.4 0l-4.8-3.1c-.2-.1-.3-.3-.3-.5 0-.2.1-.3.4-.3h9.8zm-9.8 5.5V9.7l4.1 2.6c.2.1.5.2.7.2.2 0 .5-.1.7-.2l4.1-2.6V15c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Yoshlar parlamenti</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/yoshlar-parlamenti/tarixi"
                  className="hover:underline"
                >
                  Yoshlar parlamenti tarixi
                </Link>
              </li>
              <li>
                <Link
                  href="/yoshlar-parlamenti/rahbariyati"
                  className="hover:underline"
                >
                  Yoshlar parlamenti rahbariyati
                </Link>
              </li>
              <li>
                <Link
                  href="/yoshlar-parlamenti/kengashi"
                  className="hover:underline"
                >
                  Yoshlar parlament kengashi
                </Link>
              </li>
              <li>
                <Link
                  href="/yoshlar-parlamenti/qomitalar"
                  className="hover:underline"
                >
                  Yoshlar parlamenti qo'mitalar
                </Link>
              </li>
              <li>
                <Link
                  href="/yoshlar-parlamenti/nizomi"
                  className="hover:underline"
                >
                  Yoshlar parlamenti nizomi
                </Link>
              </li>
              <li>
                <Link
                  href="/yoshlar-parlamenti/parlamentning-yoshlar-guruxlari"
                  className="hover:underline"
                >
                  Parlamentning yoshlar guruxlari
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Tadbirlar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tadbirlar/yalpi-majlislar"
                  className="hover:underline"
                >
                  Yalpi majlislar
                </Link>
              </li>
              <li>
                <Link
                  href="/tadbirlar/siyosiy-partiyalar"
                  className="hover:underline"
                >
                  Siyosiy partiyalarning yoshlar guruhlari
                </Link>
              </li>
              <li>
                <Link
                  href="/tadbirlar/qomitalar-yigilishi"
                  className="hover:underline"
                >
                  Qo'mitalar yig'ilishi
                </Link>
              </li>
              <li>
                <Link href="/tadbirlar/boshqa" className="hover:underline">
                  Boshqa tadbirlar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Yangiliklar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/yangiliklar" className="hover:underline">
                  Yangiliklar
                </Link>
              </li>
              <li>
                <Link href="/maqolalar" className="hover:underline">
                  Maqolalar
                </Link>
              </li>
              <li>
                <Link href="/munosabatlar" className="hover:underline">
                  Munosabatlar
                </Link>
              </li>
              <li>
                <Link href="/mediateka" className="hover:underline">
                  Mediateka
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Aloqa</h4>
            <div className="space-y-2 text-sm">
              <p>Manzil:</p>
              <p>100035, Toshkent, Bunyodkor shoh ko'chasi 1</p>

              <p className="mt-4">Devonxona:</p>
              <p>+998 782382294</p>

              <p className="mt-4">Fuqarolar murojaati uchun:</p>
              <p>+998 782382294</p>
            </div>
          </div>{" "}
        </div>{" "}
        <p>© 2025 Barcha huquqlar himoyalangan</p>
      </div>
    </footer>
  );
};

export default Footer;
