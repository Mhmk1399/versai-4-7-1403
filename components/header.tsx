"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.webp";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      title: "تصاویر و ویدیو ها",
      href: "/gallery",
    },
    {
      title: "درباره ما",
      href: "/about",
    },
    {
      title: "مشاهده فضای سه بعدی",
      href: "https://tour.panoee.net/Versay/65df91a47a73f2e85a4da72b",
    },
    {
      title: "منوی غذا و خدمات",
      href: "/menue",
    },
  ];

  return (
    <nav className=" top-0 backdrop-blur-sm z-50 w-full mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                width={70}
                height={50}
                className="hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-row items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Link href={item.href}>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 hover:text-gold font-medium text-base transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 hover:text-gold bg-gold transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <motion.div
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-black mb-1.5 transition-transform"
              />
              <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-black mb-1.5"
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-black"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 last:border-none"
                >
                  <Link href={item.href}>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-black hover:text-gold font-medium my-2 text-base transition-colors">
                        {item.title}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
