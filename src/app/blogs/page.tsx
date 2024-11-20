"use client";
import Image from "next/image";
import { useEffect } from "react";

const handleButtonClick = () => {
  window.location.href = "/kakhversi-gulidness-for-wedding-in-tehran";
};
const handleButtonClick2 = () => {
  window.location.href = "/how-to-hold-the-best-wedding";
};
const handleButtonClick3 = () => {
  window.location.href = "/tehran-wedding-hall";
};
const handleButtonClick4 = () => {
  window.location.href = "/dream-wedding-table";
};
const handleButtonClick5 = () => {
  window.location.href = "/how-to-have-a-good-wedding-ceremony";
};
const handleButtonClick6 = () => {
  window.location.href = "/ten-things-to-consider";
};
const handleButtonClick7 = () => {
  window.location.href = "/Types-of-halls";
};
const handleButtonClick8 = () => {
  window.location.href = "/Choosing-wedding-music";
};
const handleButtonClick9 = () => {
  window.location.href = "/Decorations-for-wedding-ceremonies";
};
const handleButtonClick10 = () => {
  window.location.href = "/reception-wedding-guests";
};
const handleButtonClick11 = () => {
  window.location.href = "/special-moment-for-life";
};

const Page = () => {
  useEffect(() => {
    document.title = "وبلاگ شاتو دو ورسای";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "باغ تالار شاتو دو ورسای با الهام از شکوه و زیبایی کاخ ورسای فرانسه طراحی شده است."
      );
    }
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 my-8">
      {/* راهنمای  انتخاب بهترین تالار در تهران */}

      <div
        className="p-1 flex flex-col items-center justify-center"
        onClick={handleButtonClick}
      >
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-40"
              src="/logo.webp"
              alt=""
              width={4000}
              height={4000}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-center">
              <span className="block text-regular ">
                راهنمای انتخاب بهترین تالار در تهران{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* چطور یک عروسی لاکچری و به‌صرفه داشته باشیم؟*/}

      <div
        className="p-1 flex flex-wrap items-center justify-center"
        onClick={handleButtonClick2}
      >
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-40"
              src="/logo.webp"
              alt=""
              width={4000}
              height={4000}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-center">
              <span className="block text-xs ">
                چطور یک عروسی لاکچری و به‌صرفه داشته باشیم؟
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-1 flex flex-wrap items-center justify-center"
        onClick={handleButtonClick3}
      >
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-40"
              src="/logo.webp"
              alt=""
              width={4000}
              height={4000}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-center">
              <span className="block text-xs ">
                تالار ورسای : انتخابی عالی برای مراسم‌های فرانسوی
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="p-1 flex flex-wrap items-center justify-center"
        onClick={handleButtonClick4}
      >
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-40"
              src="/logo.webp"
              alt=""
              width={4000}
              height={4000}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-center">
              <span className="block text-xs ">
                سفره عقد متفاوت: ایده‌هاای جالب و خاص{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="p-1 flex flex-wrap items-center justify-center"
        onClick={handleButtonClick5}
      >
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-40"
              src="/logo.webp"
              alt=""
              width={4000}
              height={4000}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-center">
              <span className="block text-xs ">
                چگونگی داشتن مراسم عقد به‌یادماندنی و لوکس
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-1 flex flex-wrap items-center justify-center"
        onClick={handleButtonClick6}
      >
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-40"
              src="/logo.webp"
              alt=""
              width={4000}
              height={4000}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-center">
              <span className="block text-xs ">
                ۱۰ نکته مهم در زمان رزرو تالار عروسی
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-1 flex flex-wrap items-center justify-center"
        onClick={handleButtonClick7}
      >
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-40"
              src="/logo.webp"
              alt=""
              width={4000}
              height={4000}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-center">
              <span className="block text-xs ">
                راهنمای کامل انتخاب تالار و باغ تالار بر اساس فصل
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-1 flex flex-wrap items-center justify-center"
        onClick={handleButtonClick8}
      >
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-40"
              src="/logo.webp"
              alt=""
              width={4000}
              height={4000}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-center">
              <span className="block text-xs ">
                نکات مهم برای انتخاب موزیک عروسی
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-1 flex flex-wrap items-center justify-center"
        onClick={handleButtonClick9}
      >
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-40"
              src="/logo.webp"
              alt=""
              width={4000}
              height={4000}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-center">
              <span className="block text-xs ">
                تزئینات و دکوراسیون مراسم عروسی
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-1 flex flex-wrap items-center justify-center"
        onClick={handleButtonClick10}
      >
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-40"
              src="/logo.webp"
              alt=""
              width={4000}
              height={4000}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-center">
              <span className="block text-xs ">
                پذیرایی از مهمانان در عروسی
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-1 flex flex-wrap items-center justify-center"
        onClick={handleButtonClick11}
      >
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-40"
              src="/logo.webp"
              alt=""
              width={4000}
              height={4000}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-center">
              <span className="block text-xs ">
                مراسم عقد و بله‌برون در شاتو دو ورسای{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
