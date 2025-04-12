// components/Footer.js
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.webp"; // Create a new CSS module for the footer
import {
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="mx-auto bg-transparent text-gold-90 flex flex-col p-2 mb-12"
      dir="rtl"
    >
      <Link href="/" className="mx-auto text-center">
        <Image
          src={Logo}
          alt="logo"
          width={70}
          height={50}
          className="mx-auto"
        />
      </Link>
      <div className="bg-white/10 rounded-lg px-8 text-center ">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          راه های ارتباطی
        </h2>
        <p className="text-gray-500 mb-4 ">
          برای ارتباط با ما می‌توانید از یکی از روش‌های زیر استفاده کنید
        </p>
        <div className="flex justify-center gap-6 my-5">
          <a
            id="call-butom-icon"
            href="tel:+989123314145"
            className="text-gray-600 hover:text-gold"
            aria-label="Call us"
          >
            <FaPhoneAlt size={24} />
          </a>
          <a
            href="https://www.instagram.com/chateau.de.versailles?igsh=dWh1ajNsdnQ1ajF2"
            className="text-gray-600 hover:text-pink-500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://t.me/ALIASHEGHHOSEINI"
            className="text-gray-600 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <FaTelegramPlane size={24} />
          </a>
          <a
            href="https://wa.me/+989123381070"
            className="text-gray-600 hover:text-lime-500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>

      <div
        className=" gap-4 mx-auto text-center font-bold text-xl flex flex-row justify-center my-6 pb-2"
        dir="rtl"
      >
        <Link href="/gallery">
          <div>تصاویر</div>
        </Link>
        <Link href="/blogs">
          <div>مقالات</div>
        </Link>
        <Link href="https://tour.panoee.net/Versay/65df91a47a73f2e85a4da72b">
          <div>مشاهده فضای سه بعدی</div>
        </Link>
        <Link href="/menue">
          <div>منوی غذا و خدمات</div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
