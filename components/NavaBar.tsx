"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../components/Navbar.module.css";
import Image from "next/image";
import Logo from "../public/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={Logo} alt="logo" width={70} height={50} />
        </Link>
      </div>
      <div
        className={`${styles.links} ${isOpen ? styles.open : ""}`}
        dir="rtl "
      >
        <Link href="/galery">
          <span >تصاویر و ویدیو ها</span>
        </Link>
        <Link href="/about">
          <span>درباره ما</span>
        </Link>
        <Link href="https://tour.panoee.net/Versay/65df91a47a73f2e85a4da72b">
          <span>مشاهده فضای سه بعدی</span>
        </Link>
        <Link href="/menue">
          <span>منوی غذا و خدمات</span>
        </Link>
      </div>
      <div className="text-center m-0 p-0 text-4xl">
        <h1>شاتو دو ورسای</h1>
      </div>
      <div className={styles.toggler} onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
