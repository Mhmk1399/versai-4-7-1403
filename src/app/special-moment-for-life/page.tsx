"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    document.title =
      "مراسم عقد و بله‌برون در شاتو دو ورسای: لحظاتی خاص برای آغاز زندگی مشترک";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "اگر به دنبال تجربه‌ای خاص و به‌یادماندنی برای آغاز زندگی مشترک خود هستید، شاتو دو ورسای مکانی رویایی برای مراسم عقد و بله‌برون شما خواهد بود. فضایی لوکس و چشم‌نواز که ترکیبی از معماری کلاسیک اروپایی و امکانات مدرن را ارائه می‌دهد."
      );
    }
  }, []);
  return (
    <>
      <div className="  grid mx-auto grid-cols-1 h-auto p-4 " dir="rtl">
        <div className="px-4 mx-auto py-2   rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 max-w-5xl  rounded-lg">           <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
              <Image
                src="/assets/images/View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall.webp"
                width={4000}
                height={4000}
                alt="مراسم عقد و بله‌برون در شاتو دو ورسای"
                className="rounded-lg shadow-lg w-full h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                شاتو دو ورسای؛ جایی که داستان عشق شما آغاز می‌شود.
              </h1>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3 text-2xl">
                  مقدمه
                </span>
                <br />
              </p>
              <p>
                مراسم عقد و بله‌برون یکی از مراحل مهم در مسیر آغاز زندگی مشترک
                است. این مراسم‌ها نه تنها باید از لحاظ شرعی و سنتی برگزار شوند،
                بلکه باید به گونه‌ای باشند که خاطره‌ای ماندگار برای عروس و داماد
                و مهمانان‌شان ایجاد کنند. شاتو دو ورسای با ارائه فضایی لوکس و
                خدماتی بی‌نظیر، این امکان را فراهم می‌کند تا مراسم عقد و
                بله‌برون شما به بهترین شکل برگزار شود. در این مقاله به جزئیات
                برگزاری این مراسم‌ها در شاتو دو ورسای خواهیم پرداخت.
              </p>

              <Link href="/menue">
                <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5    rounded-lg text-center">
                <h2 className="text-1xl font-bold mx-auto text-black ">
                  رویای مراسم عقد و بله‌برون در شاتو دو ورسای
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14  px-3 py-1  rounded-full">
                    رویایی‌ترین شروع زندگی در شاتو دو ورسای
                  </span>

                  <li className="text-regular  mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ۱. برگزاری مراسم عقد در سالن‌های لوکس شاتو دو ورسای
                    </span>
                    <br />
                    <span>
                      مراسم عقد از مهم‌ترین بخش‌های ازدواج است و باید در فضایی
                      مناسب و زیبا برگزار شود. شاتو دو ورسای با سالن‌هایی مجهز و
                      طراحی شیک، فضای دلنشینی را برای برگزاری این مراسم فراهم
                      کرده است. سالن‌های عقد این مجموعه با دکوراسیون مدرن و
                      کلاسیک، ترکیبی از زیبایی و راحتی را به شما و مهمانان‌تان
                      ارائه می‌دهند.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black font-bold">
                      ویژگی‌های سالن عقد:
                    </p>
                    <span>1 - طراحی شیک و مدرن</span>
                    <br />
                    <span>2 - نورپردازی مناسب و رمانتیک</span>
                    <br />
                    <span>3 - امکانات کامل برای برگزاری مراسم عقد</span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/garden-good-1.webp"
                      width={2000}
                      height={2000}
                      alt="ویژگی‌های سالن عقد شاتو دو ورسای"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3 mt-4">
                    <span className="font-bold text-lg ml-2 ">
                      ۲. سفره عقد لوکس و مدرن در شاتو دو ورسای
                    </span>
                    <br />
                    <span>
                      سفره عقد یکی از نمادهای مهم در مراسم عقد است و باید به
                      بهترین شکل ممکن چیده شود. شاتو دو ورسای با تیمی حرفه‌ای و
                      دیزاینرهای با تجربه، سفره عقد شما را به شکلی لوکس و مدرن
                      طراحی می‌کند. استفاده از گل‌های تازه، ظروف شیک و نقره‌ای و
                      نورپردازی مناسب، از جمله ویژگی‌های سفره عقد در این مجموعه
                      است.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black font-bold">
                      ویژگی‌های سفره عقد:
                    </p>
                    <span>1 - استفاده از گل‌های طبیعی و تازه</span>
                    <br />
                    <span>2 - ظروف شیک و لوکس</span>
                    <br />
                    <span>3 - طراحی‌های متناسب با سلیقه عروس و داماد</span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/garden-bad-2.webp"
                      width={2000}
                      height={2000}
                      alt=" ویژگی‌های سفره عقد"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۳. مراسم بله‌برون در شاتو دو ورسای: خاطره‌ای دلنشین برای
                      خانواده‌ها
                    </span>
                    <br />
                    <span>
                      مراسم بله‌برون یکی از سنت‌های قدیمی ایرانی است که در آن
                      خانواده عروس و داماد به صورت رسمی تعهد ازدواج را اعلام
                      می‌کنند. شاتو دو ورسای فضایی مناسب برای برگزاری این مراسم
                      نیز در اختیار شما قرار می‌دهد. طراحی فضای بله‌برون در این
                      مجموعه به گونه‌ای است که محیطی گرم و دوستانه برای دو
                      خانواده ایجاد می‌کند تا این لحظه مهم به یاد ماندنی‌تر شود.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black font-bold">
                      ویژگی‌های مراسم بله‌برون:
                    </p>
                    <span>1 - فضای صمیمی و دوستانه برای خانواده‌ها</span>
                    <br />
                    <span>2 - دکوراسیون مخصوص مراسم بله‌برون</span>
                    <br />
                    <span>3 - پذیرایی با دسرها و نوشیدنی‌های لوکس</span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/garden4.jpg"
                      width={4000}
                      height={4000}
                      alt="ویژگی‌های مراسم بله‌برون در شاتو دو ورسای"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۴. نورپردازی و طراحی سالن‌های عقد و بله‌برون در شاتو دو
                      ورسای
                    </span>
                    <br />
                    <span>
                      نورپردازی یکی از عوامل کلیدی در ایجاد فضای مناسب برای
                      مراسم عقد و بله‌برون است. شاتو دو ورسای با نورپردازی
                      حرفه‌ای و هماهنگ با تم مراسم، فضایی رمانتیک و دلنشین برای
                      شما و مهمانان‌تان فراهم می‌کند. این نورپردازی‌ها به ویژه
                      در شب، جلوه‌ای خاص به مراسم شما می‌بخشد.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black font-bold">
                      ویژگی‌های نورپردازی:
                    </p>
                    <span>1 - نورپردازی گرم و ملایم برای فضای عقد</span>
                    <br />
                    <span>2 - جلوه‌های نوری ویژه برای مراسم بله‌برون</span>
                    <br />
                    <span>3 - هماهنگی نورپردازی با موسیقی و تم مراسم</span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/View-of-the-water-dance-and-fireworks-stage-of-the-most-luxurious-garden-of-the-Tehran-Chateau-de-Versailles-hall (12).webp"
                      width={4000}
                      height={4000}
                      alt=" ویژگی‌های نورپردازی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <p className="font-bold ml-2 text-xl">
                      ۵. پذیرایی و تشریفات مراسم عقد و بله‌برون در شاتو دو ورسای
                    </p>
                    <span>
                      پذیرایی از مهمانان یکی از بخش‌های حیاتی در هر مراسمی است.
                      شاتو دو ورسای با ارائه منوی‌های متنوع شامل انواع
                      نوشیدنی‌ها، دسرها و غذاهای لوکس، مهمانان شما را به بهترین
                      شکل ممکن پذیرایی می‌کند. تیم تشریفات این مجموعه تمامی
                      مراحل سرویس‌دهی را با دقت و حرفه‌ای‌گری انجام می‌دهد تا
                      شما و مهمانان‌تان تجربه‌ای بی‌نظیر داشته باشید.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black font-bold">
                      ویژگی‌های پذیرایی:
                    </p>
                    <span>1 - منوی غذایی لوکس و متنوع</span>
                    <br />
                    <span>2 - پذیرایی با دسرهای مخصوص</span>
                    <br />
                    <span>3 - تیم حرفه‌ای برای سرویس‌دهی به مهمانان</span>
                    <br />
                    <Link href="/menue">
                      <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                        مشاهده منو مجموعه شاتو دو ورسای
                      </button>
                    </Link>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/S__00844.webp"
                      width={4000}
                      height={4000}
                      alt=" ویژگی‌های نورپردازی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <p className="font-bold ml-2 text-xl">
                      ۶. انتخاب شاتو دو ورسای برای مراسم عقد و بله‌برون: چرا
                      باید اینجا را انتخاب کنید؟
                    </p>
                    <span>
                      شاتو دو ورسای یکی از بهترین انتخاب‌ها برای برگزاری مراسم
                      عقد و بله‌برون شماست. از سالن‌های لوکس گرفته تا تشریفات
                      حرفه‌ای، همه چیز در این مجموعه به گونه‌ای طراحی شده است که
                      شما و مهمانان‌تان تجربه‌ای خاص و به‌یادماندنی داشته باشید.
                      فضای آرام و دلنشین این مجموعه، محیطی ایده‌آل برای برگزاری
                      مراسم‌های شما فراهم می‌کند.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black font-bold">
                      چرا شاتو دو ورسای؟
                    </p>
                    <span>1 - سالن‌های لوکس و مجلل</span>
                    <br />
                    <span>2 - تیم تشریفات حرفه‌ای و با تجربه</span>
                    <br />
                    <span>3 - نورپردازی و دکوراسیون بی‌نظیر</span>
                  </li>
                </ol>
                <h3 className="font-bold text-2xl my-2">نتیجه‌گیری</h3>

                <span>
                  مراسم عقد و بله‌برون لحظات مهمی در زندگی هر زوجی هستند که باید
                  به بهترین شکل ممکن برگزار شوند. مجموعه شاتو دو ورسای با ارائه
                  خدمات و تشریفات حرفه‌ای، فضایی لوکس و دلنشین را برای برگزاری
                  این مراسم‌ها فراهم کرده است. اگر به دنبال برگزاری مراسمی خاص و
                  متفاوت هستید، شاتو دو ورسای گزینه‌ای بی‌نظیر برای شما خواهد
                  بود.
                </span>
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
