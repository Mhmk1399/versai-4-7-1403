"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Data from "../../../lib/gallery";
import { Loader } from "../../../components/(ui)/loader";

const Gallery = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    document.title = "گالری شاتو دو ورسای";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "شما در این دو سالن به ظرفیت 1200 نفر میتوانید تمام دیزاین های روز دنیا را پیاده سازی کنید و بدون دقدقه به فکر پرشکوه برگذار شدن مراسم بهترین شب زنندگی خودتون باشید"
      );
    }
  }, []);

  // Group images by category
  const categories = Array.from(new Set(Data.map((item) => item.category)));

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);
  if (loader) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="p-5 sm:p-8 mt-4">
        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-8">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
              <div
                className={`hide-scrollbar overflow-x-scroll snap-x snap-mandatory gap-2 rounded-lg max-h-96 w-full  p-2 h-fit lg:grid lg:grid-cols-2 lg:gap-4 ${
                  categoryIndex % 2 === 1 ? "lg:order-2" : "order-1"
                }`}
              >
                {Data.filter((item) => item.category === category).map(
                  (item, index) => (
                    <Link key={index} href={item.href}>
                      <Image
                        alt={item.alt}
                        src={item.href}
                        width={1000}
                        // loading="lazy"
                        height={800}
                        className="w-full sm:grid sm:grid-rows-2 object-cover shrink-0 my-2 rounded-lg lg:w-full lg:rounded-lg snap-center sm:h-64 sm:my-1"
                      />
                    </Link>
                  )
                )}
              </div>

              {/* Description Container */}
              <div
                className={`p-4 text-xl flex flex-col justify-center items-center text-center ${
                  categoryIndex % 2 === 1 ? "order-1" : "order-2"
                }`}
                dir="rtl"
              >
                <h2 className="text-xl text-center font-bold mb-4 capitalize">
                  {category}
                </h2>
                {Data.filter((item) => item.category === category).map(
                  (item, index) => (
                    <p
                      key={index}
                      className="text-lg sm:text-md  text-justify text-black"
                    >
                      {item.description}
                    </p>
                  )
                )}
                <div className="flex justify-center">
                  <Link
                    href="/menue"
                    className="bg-green hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded"
                  >
                    دریافت قیمت منو ها و رزور زمان بازدید
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
