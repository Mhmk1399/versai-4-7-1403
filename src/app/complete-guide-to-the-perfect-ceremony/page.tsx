"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    document.title = "چگونه بهترین تشریفات عروسی ارزان را پیدا کنیم؟ ";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "اگر به دنبال برگزاری عروسی رویایی با هزینه کم هستید، این راهنما را از دست ندهید! با معرفی ترفندها و نکات کلیدی، بهترین تشریفات را انتخاب کنید."
      );
    }
  }, []);
  return (
    <>
      <div className="  grid mx-auto grid-cols-1 h-auto p-4 " dir="rtl">
        <div className="px-4 mx-auto py-2   rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 max-w-5xl  rounded-lg">           <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
              <Image
                src="/assets/images/155.webp"
                width={4000}
                height={4000}
                alt="نکات مهم در انتخاب تشریفات ارزان"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                چگونه بهترین تشریفات عروسی ارزان را پیدا کنیم؟ راهنمای کامل برای
                مراسم بی‌نقص
              </h1>

              <p className="p-2">
                خب، همه می‌دونیم که عروسی یکی از مهم‌ترین روزهای زندگی هر کسیه و
                دوست داریم همه چیز توی اون روز خاص عالی باشه، اما هزینه‌ها
                می‌تونن بعضی وقت‌ها استرس‌آور باشن. اما خبر خوب اینه که لازم
                نیست برای داشتن یک عروسی بی‌نقص، حتماً کلی پول خرج کنی. با یه
                برنامه‌ریزی درست و انتخاب تشریفات مناسب، می‌تونی یه مراسم شیک و
                عالی با قیمت مناسب داشته باشی. پس تو این مقاله همراه ما باش تا
                راهنمایی کامل برای پیدا کردن تشریفات عروسی ارزان رو بهت بدیم.
              </p>

              <Link href="/menue">
                <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5    rounded-lg text-center">
                <h2 className="text-1xl font-bold mx-auto text-black ">
                  چگونه بهترین تشریفات عروسی ارزان را پیدا کنیم؟ راهنمای کامل و
                  کاربردی!
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14  px-3 py-1  rounded-full">
                    تشریفات عروسی ارزان و شیک؛{" "}
                  </span>

                  <li className="text-regular  mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      چرا تشریفات عروسی ارزان؟
                    </span>
                    <br />

                    <span className="p-2">
                      ممکنه فکر کنی که تشریفات ارزان یعنی کیفیت پایین، ولی
                      اینطور نیست. خیلی از خدمات تشریفات با قیمت مناسب هستن که
                      هم کیفیت خوبی دارن و هم قیمت‌شون معقول‌تره. تشریفات مجالس
                      خوب باید بتونه با بودجه تو هماهنگ باشه و همچنان اون حس
                      لوکس و خاص بودن رو بهت بده.
                    </span>
                    <br />
                    <span className="p-2 font-bold my-2">
                      نکات مهم در انتخاب تشریفات ارزان
                    </span>
                    <p className="p-2">
                      حالا چطوری باید تشریفات خوب و ارزان پیدا کنیم؟ اینجا چندتا
                      نکته هست که می‌تونه کمکت کنه:
                    </p>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        مقایسه قیمت‌ها:{" "}
                      </strong>
                      همیشه قبل از تصمیم‌گیری، چند جا رو بررسی کن و قیمت‌هاشون
                      رو مقایسه کن.
                    </span>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">تخفیفات فصلی: </strong>
                      بعضی تشریفات‌ها توی فصل‌های خاصی تخفیف دارن، حواست به این
                      تخفیف‌ها باشه تا هزینه‌هات کمتر بشه.
                    </span>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">مشورت بگیر:</strong>
                      از کسایی که قبلاً عروسی برگزار کردن یا آشنایی دارن، مشورت
                      بگیر تا بهترین گزینه رو انتخاب کنی.
                    </span>
                    <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                      <Image
                        src="/assets/images/161.webp"
                        width={4000}
                        height={4000}
                        alt="نکات مهم در انتخاب تشریفات ارزان"
                        className="rounded-lg shadow-lg h-full"
                      />
                    </div>
                    <br />
                    <br />
                    <span className="text-black font-bold text-xl block">
                      اجاره تشریفات مجالس: چطور بهترین گزینه رو پیدا کنیم؟
                    </span>
                    <p>
                      یه راه خیلی خوب برای کاهش هزینه‌ها اینه که تشریفات مجالس
                      رو اجاره کنی. اجاره تشریفات مجالس مثل میز و صندلی روستیک
                      می‌تونه هم شیک باشه و هم مقرون‌به‌صرفه. برای این که بتونی
                      بهترین گزینه‌ها رو پیدا کنی، سایت‌هایی مثل{" "}
                      <Link
                        className="text-blue-500 font-semibold"
                        href="https://www.banktalar.com/"
                      >
                        بانک تالار
                      </Link>
                      و{" "}
                      <Link
                        className="text-blue-500 font-semibold"
                        href="https://www.talarkadeh.com/"
                      >
                        تالارکده
                      </Link>
                      خیلی کمکت می‌کنن. این سایت‌ها بهت اجازه می‌دن قیمت‌ها و
                      خدمات مختلف رو مقایسه کنی و بهترین تشریفات رو انتخاب کنی.
                    </p>
                    <h3 className="my-3 text-xl font-bold">
                      تشریفات توی باغ یا منزل؟
                    </h3>
                    <br />
                    <span className="mb-3 text-base">
                      یکی از بزرگترین تصمیم‌ها، انتخاب مکان برای مراسمه. تشریفات
                      عروسی توی باغ یه حس خیلی لوکس و رویایی می‌ده، ولی تشریفات
                      مجالس در منزل هم می‌تونه گزینه‌ای باشه که هزینه‌ها رو کمتر
                      کنه و حس شخصی‌تری به مراسم بده. هر کدوم از این انتخاب‌ها
                      یه سری مزایا دارن که بهتره بر اساس نیازت تصمیم بگیری.
                    </span>
                    <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                      <Image
                        src="/assets/images/garden-normal-1.webp"
                        width={4000}
                        height={4000}
                        alt="نکات مهم در انتخاب تشریفات ارزان"
                        className="rounded-lg shadow-lg h-full"
                      />
                    </div>
                    <br />
                    <br />
                    <span className="text-black font-bold text-xl block">
                      برندهای معروف و پیشنهادات تشریفاتی
                    </span>
                    <p>
                      اگه دنبال یه تشریفات خوب با قیمت مناسب هستی، خیلی خوبه که
                      برندهای معتبر رو بررسی کنی. توی این صنعت، اسم‌های معروفی
                      هستن که خدمات خیلی خوبی ارائه می‌دن. برای اینکه بهترین
                      انتخاب رو داشته باشی، پیشنهاد می‌کنیم یه سری به سایت‌های{" "}
                      <br />
                      <Link
                        className="text-blue-500 mx-1 font-semibold"
                        href="https://www.banktalar.com/"
                      >
                        بانک تالار
                      </Link>{" "}
                      و{" "}
                      <Link
                        className="text-blue-500 font-semibold"
                        href="https://www.talarkadeh.com/"
                      >
                        تالارکده
                      </Link>{" "}
                      بزنی و خدماتشون رو ببینی.
                    </p>
                  </li>
                </ol>
                <hr />
                <br />

                <br />

                <Link href="https://tour.panoee.net/Versay/65df91a47a73f2e85a4da72b">
                  <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                    میتوانید برای دیدن فضای سه بعدی مجموعه کلیک کنید.
                  </button>
                </Link>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
