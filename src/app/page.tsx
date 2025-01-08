"use client";
import Image from "next/image";
import Link from "next/link";
import { sectionsData, optionsData } from "../../lib/data";
import { useState } from "react";
import { motion } from "framer-motion";


import { useEffect } from "react";

interface ImageData {
  type: "bad" | "normal" | "good";
  url: string;
  category: string; // Add category to the image data structure
}

const Page = () => {
  const handleButtonClick = () => {
    window.location.href = "/galery";
  };
  const handleButtonClick2 = () => {
    window.location.href = "/menue";
  };
  const [image, setImage] = useState<ImageData[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/uploadedFiles");
        const data = await response.json();
        setImage(data as ImageData[]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, []); // Re-run when category changes
  console.log(image);

  return (
    <div className="bg-white/10">
      {/* Hero Section */}
      <div className="container mx-auto p-4 ">
        <div className="relative w-full h-screen px-4" id="home">
          {/* Background Image with Framer Motion */}
          <motion.div
            className="absolute inset-0 z-0 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              className=" w-full h-full rounded-2xl object-cover hidden md:block"
              alt="Hero image"
              loading="lazy"
              src="/assets/images/heroPage.webp"
              width={4000}
              height={500}
            />
            <Image
              className=" w-full h-full rounded-2xl object-cover md:hidden block"
              alt="Hero image"
              loading="lazy"
              src="/assets/images/heroPhone.webp"
              width={4000}
              height={500}
            />
          </motion.div>

          {/* Text Content with Framer Motion for Fade-in Effect */}
          <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
            <motion.div
              className="bg-white border-2 border-gray-200 bg-opacity-50 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-2xl md:text-5xl font-bold border-b-2 pb-3 border-gold text-white mb-2">
                مجموعه تشریفاتی شاتو دو ورسای
              </h1>
              <p  className="text-white/80 text-xs md:text-lg my-2">
                رویای یک شب فرانسوی در تهران
              </p>
              <motion.button
                className=" text-white text-xs font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-green"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleButtonClick}
              >
                دریافت قیمت و رزرو زمان بازدید
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}

      <section className="py-10 bg-white/10" id="services">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            امکانات و خدمات لاکچری و مدرن شاتو دو ورسای
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionsData.map((section, index) => {
              const matchingImage = image.find(
                (img) => img.category === section.category
              );

              return (
                <motion.div
                  key={index}
                  className="bg-white/10 rounded-lg p-4 sm:p-6 overflow-hidden flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {matchingImage && (
                    <Image
                      className="rounded-lg mt-5 mx-auto shadow-lg"
                      width={300}
                      height={300}
                      src={matchingImage.url}
                      alt={section.title}
                    />
                  )}
                  <div className="mt-6 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold text-gold mb-2" dir="rtl">
                      {section.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-4">
                      {section.description}
                    </p>
                    <motion.button
                      className="bg-green hover:bg-gold text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      onClick={handleButtonClick}
                    >
                      ← مشاهده بیشتر
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wedding Night Section */}
      <div className="relative flex flex-col lg:flex-row rounded-lg overflow-hidden min-h-full mt-12 lg:ml-12">
        {/* Background Image with Overlap */}
        <div className="relative w-full lg:w-1/2">
          <motion.div whileHover={{ x: -40 }} transition={{ duration: 0.5 }}>
            <Image
              src="/assets/images/Lobby-of-the-most-luxurious-garden-of-Tehran-Hall-of-Chateau-de-Versailles-complex2.webp"
              alt="Wedding Night"
              width={1000}
              height={500}
              className="rounded-2xl object-cover h-full w-full lg:ml-2 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Text Box with Background Overlay */}
        <div className="relative lg:ml-[-50px] mt-2 lg:mt-0 bg-white/10 bg-opacity-30 backdrop-blur-md flex flex-col justify-center items-center text-center p-8 lg:p-10 rounded-2xl lg:z-10 lg:w-1/2">
          <h3 className="text-3xl md:text-4xl font-semibold text-gold">
            شب عروسی
          </h3>
          <p className="py-6 text-black text-lg md:text-xl mb-4">
            هرکسی براش مهم ترین و خاص ترین شب زندگیشه برای همین کوچیک ترین
            اتفاقی میتونه برای اون عروس و داماد شب قشنگشونو خراب کنه
          </p>
          <Link href="/blogs">
            <button className="bg-green hover:bg-gold hover:scale-95 text-white text-lg font-bold py-3 px-6 rounded-lg mt-4 transition-all duration-300">
              مشاهده بیشتر
            </button>
          </Link>
        </div>
      </div>

      {/* Options Section */}
      <section className="py-10" id="options">
        <div className="container mx-auto px-4">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center ">
            ویژگی‌های برجسته شاتو دو ورسای
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optionsData.map((option, i) => {
              const matchingImage2 = image.find(
                (img) => img.category === option.category
              );
              return (
                <div
                  key={i}
                  className="bg-white/10 rounded-lg height-box p-8 sm:px-4 overflow-hidden grid grid-rows-1 justify-center text-center"
                >
                  {matchingImage2 && (
                    <Image
                      className="rounded-lg mx-auto"
                      width={400}
                      height={400}
                      src={matchingImage2.url}
                      alt={option.title}
                    />
                  )}
                  <div className="p-3 text-center flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold text-black mb-2" dir="rtl">
                      {option.title}
                    </h3>
                    <p className="text-gray-800 text-sm sm:text-base mb-4">
                      {option.description}
                    </p>
                    <button
                      className="bg-gold hover:bg-green text-white font-bold py-2 px-4 rounded"
                      onClick={handleButtonClick}
                    >
                      مشاهده بیشتر
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <div className="bg-transparent rounded-lg p-8 text-center my-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          موقعیت مکانی و دسترسی آسان
        </h2>
        <p className="text-gray-600 mb-4">
          یکی از مزایای اصلی موقعیت مکانی باغ تالار شاتو دو ورسای، دسترسی آسان
          به بزرگراه‌های اصلی است...
        </p>
        <iframe
          src="https://nshn.ir/29_bvbjtOxdrbG"
          width="100%"
          height="500"
          title="Google Map"
          className="my-4 rounded"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Methods Section */}
     
    </div>
  );
};
export default Page;
