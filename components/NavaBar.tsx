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
      href: "/galery",
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

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      height: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <nav className="sticky bg-white/10 z-50 w-full">
      <div className="mt-2">
        <div className="flex justify-around items-center  h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              onClick={() => setIsOpen(!isOpen)}
              src={Logo}
              alt="logo"
              width={70}
              height={50}
              className="hover:scale-105 mt-3  transition-transform"
            />
          </div>

          {/* Menu Items - Always visible on lg screens */}
          <div className="hidden lg:flex lg:flex-row items-center justify-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                <Link href={item.href}>
                  <span className="text-green hidden lg:flex hover:text-gold font-medium text-base transition-colors">
                    {item.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Site Title */}
          {/* <motion.h1
            className="text-3xl text-center text-white font-bold"
            whileHover={{ scale: 1.05 }}
          >
            شاتو دو ورسای
          </motion.h1> */}

          {/* Mobile Menu Button - Only visible on small screens */}
          {/* <motion.button
            whileTap={{ scale: 0.9 }}
            className="block lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
            >
              ☰
            </motion.div>
          </motion.button> */}
        </div>
      </div>

      {/* Mobile Menu - Only visible on small screens when toggled */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="lg:hidden bg-teal-800"
          >
            <div className="px-4 pt-2 pb-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center flex-row justify-center"
                >
                  <Link href={item.href}>
                    <span className="text-green hover:text-gold block px-3 py-2 rounded-md text-base duration-300 font-medium transition-colors">
                      {item.title}
                    </span>
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
