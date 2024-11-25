"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    document.title = "تشریفات عروسی در شاتو دو ورسای";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "برگزاری تشریفات عروسی در شاتو دو ورسای تجربه‌ای بی‌نظیر و فراموش‌نشدنی است. این مکان رویایی با ترکیبی از تاریخ، زیبایی و شکوه، بهترین لحظات زندگی‌تان را به یک خاطره جاودانه تبدیل می‌کند."
      );
    }
  }, []);
  return (
    <>
      <div className="bg-white grid mx-auto grid-cols-1 h-auto p-4 " dir="rtl">
        <div className="px-4 mx-auto py-2 bg-gray-50 rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
            <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
              <Image
                src="/assets/images/138.webp"
                width={4000}
                height={4000}
                alt="عروسی در شاتو دو ورسای"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                تشریفات عروسی در شاتو دو ورسای: مراسمی که هرگز فراموش نخواهید
                کرد
              </h1>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="h2-blog-header font-bold mb-3 text-2xl">
                  مقدمه
                </span>
                <br />
              </p>
              <p className="p-2">
                تشریفات عروسی یکی از مهم‌ترین عوامل برای برگزاری یک عروسی
                به‌یادماندنی و باشکوه است. وقتی صحبت از تشریفات می‌شود، همه به
                دنبال جزئیات لوکس و خدمات حرفه‌ای هستند تا عروسی‌شان به یک مراسم
                خاص و متفاوت تبدیل شود. مجموعه تشریفاتی شاتو دو ورسای با ارائه
                بهترین و حرفه‌ای‌ترین خدمات تشریفات، مراسم شما را به یک تجربه
                فراموش‌نشدنی تبدیل خواهد کرد. در این مقاله، به بررسی تمامی
                جنبه‌های تشریفات عروسی در شاتو دو ورسای می‌پردازیم.
              </p>

              <Link href="/menue">
                <button className="bg-gradient-to-l mb-6 from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white  rounded-lg text-center">
                <h2 className="text-1xl font-bold mx-auto h2-blog-header ">
                  رویای عروسی شما در شکوه شاتو دو ورسای به واقعیت تبدیل می‌شود
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14 bg-gradient-to-r from-amber-500 px-3 py-1  to-Cyan-950 rounded-full">
                    ورسای، مکانی خاص برای یک روز خاص
                  </span>

                  <li className="text-regular  mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ۱. مدیریت حرفه‌ای تشریفات عروسی در شاتو دو ورسای
                    </span>
                    <br />
                    <span className="p-2">
                      یکی از مهم‌ترین عوامل موفقیت در برگزاری یک مراسم عروسی،
                      مدیریت دقیق و حرفه‌ای تشریفات است. تیم تشریفات شاتو دو
                      ورسای با سال‌ها تجربه در زمینه برنامه‌ریزی و اجرای
                      مراسم‌های بزرگ و لوکس، تمامی جزئیات مراسم شما را از لحظه
                      شروع تا پایان به طور دقیق و حرفه‌ای مدیریت می‌کند.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      ویژگی‌های مدیریت تشریفات:
                    </p>
                    <span>
                      1 - هماهنگی تمامی مراحل مراسم با شما و تیم تشریفات
                    </span>
                    <br />
                    <span>2 - طراحی و دکوراسیون لوکس</span>
                    <br />
                    <span>
                      3 - برنامه‌ریزی دقیق برای جلوگیری از هرگونه مشکلی در روز
                      مراسم
                    </span>
                    <br />
                    <span>
                      4 - مدیریت حرفه‌ای زمان و برنامه‌ها در طول مراسم
                    </span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/131.webp"
                      width={2000}
                      height={2000}
                      alt="بهترین باغ تالار را برای عروسی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3 mt-4">
                    <span className="font-bold text-lg ml-2 ">
                      ۲. طراحی و دکوراسیون سالن: ایجاد فضایی رویایی برای مراسم
                      شما
                    </span>
                    <br />
                    <span className="p-2">
                      یکی از مهم‌ترین بخش‌های تشریفات عروسی، طراحی و دکوراسیون
                      سالن و فضای مراسم است. شاتو دو ورسای با تیم حرفه‌ای طراحان
                      داخلی و دکوراتورهای متخصص، محیطی شیک و لوکس برای مراسم شما
                      ایجاد می‌کند. از گل‌آرایی‌های خیره‌کننده تا نورپردازی‌های
                      منحصر به فرد، همه چیز با توجه به سلیقه شما طراحی می‌شود.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      ویژگی‌های دکوراسیون:
                    </p>
                    <span>1 - گل‌آرایی لوکس و حرفه‌ای</span>
                    <br />
                    <span>2 - نورپردازی خاص و هماهنگ با تم مراسم</span>
                    <br />
                    <span>3 - طراحی میزها و صندلی‌ها بر اساس سلیقه شما</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/132.webp"
                      width={2000}
                      height={2000}
                      alt="بهترین باغ تالار را برای عروسی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۳. پذیرایی و منوی لوکس: بهترین خدمات برای مهمانان شما
                    </span>
                    <br />
                    <span className="p-2">
                      هیچ مراسم عروسی بدون یک پذیرایی عالی کامل نیست. شاتو دو
                      ورسای با تیم کترینگ حرفه‌ای و ارائه منوی‌های متنوع و لوکس،
                      مهمانان شما را با بهترین غذاها و دسرها پذیرایی می‌کند. شما
                      می‌توانید با توجه به سلیقه و بودجه خود، منویی سفارشی
                      انتخاب کنید.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      ویژگی‌های پذیرایی:
                    </p>
                    <span>1 - منوی متنوع با غذاهای ایرانی و بین‌المللی</span>
                    <br />
                    <span>2 - سرویس‌دهی حرفه‌ای توسط تیم کترینگ</span>
                    <br />
                    <span>
                      3 - امکان انتخاب منوی سفارشی بر اساس نیازهای شما
                    </span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/133.webp"
                      width={4000}
                      height={4000}
                      alt=" ویژگی‌های امکانات رفاهی:"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۴. تشریفات ویژه برای ورود عروس و داماد: لحظات خاص و
                      به‌یادماندنی
                    </span>
                    <br />
                    <span className="p-2">
                      یکی از بخش‌های هیجان‌انگیز هر عروسی، ورود عروس و داماد به
                      سالن است. تیم تشریفات شاتو دو ورسای با برنامه‌ریزی دقیق و
                      ارائه ایده‌های خاص، ورود شما را به یک لحظه باشکوه و رویایی
                      تبدیل می‌کند. از نورپردازی ویژه گرفته تا موسیقی هماهنگ با
                      لحظه ورود، همه چیز به بهترین شکل انجام می‌شود.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      ویژگی‌های تشریفات ورود:
                    </p>
                    <span>1 - نورپردازی خاص برای لحظه ورود</span>
                    <br />
                    <span>2 - اجرای موسیقی هماهنگ با ورود عروس و داماد</span>
                    <br />
                    <span>3 - طراحی و دکوراسیون ویژه برای مسیر ورود</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/134.webp"
                      width={4000}
                      height={4000}
                      alt="   ویژگی‌های امکانات رفاهی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <p className="font-bold ml-2 text-xl">
                      ۵. عکاسی و فیلمبرداری حرفه‌ای: ثبت لحظات فراموش‌نشدنی
                    </p>
                    <span className="p-2">
                      هیچ عروسی بدون ثبت لحظات زیبا و خاطره‌انگیز کامل نمی‌شود.
                      شاتو دو ورسای با همکاری تیم‌های حرفه‌ای عکاسی و
                      فیلمبرداری، تمامی لحظات مراسم شما را به زیباترین شکل ثبت
                      می‌کند. شما می‌توانید مطمئن باشید که تمامی لحظات خاص و
                      احساسی شما به‌طور حرفه‌ای و با کیفیت عالی ثبت خواهد شد.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      ویژگی‌های عکاسی و فیلمبرداری:
                    </p>
                    <span>1 - تیم حرفه‌ای عکاسان و فیلمبرداران با تجربه</span>
                    <br />
                    <span>2 - استفاده از تجهیزات حرفه‌ای و مدرن</span>
                    <br />
                    <span>3 - ثبت تمامی لحظات احساسی و ویژه عروسی</span>
                    <br />
                    <Link href="/menue">
                      <button className="bg-gradient-to-l from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-xl">
                        مشاهده منو مجموعه شاتو دو ورسای
                      </button>
                    </Link>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/135.webp"
                      width={4000}
                      height={4000}
                      alt="   تشریفات عروسی "
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <p className="font-bold ml-2 text-xl">
                      ۶. برنامه‌ریزی جزئیات و زمان‌بندی مراسم: جلوگیری از هرگونه
                      نگرانی در روز عروسی
                    </p>
                    <span className="p-2">
                      تیم تشریفات شاتو دو ورسای تمام جزئیات مراسم شما را از قبل
                      برنامه‌ریزی می‌کند تا شما بدون هیچ نگرانی از مراسم خود لذت
                      ببرید. از زمان‌بندی مراسم گرفته تا هماهنگی با سایر تیم‌ها
                      مانند دی‌جی و عکاسان، همه چیز به طور دقیق انجام می‌شود.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      ویژگی‌های برنامه‌ریزی:
                    </p>
                    <span>1 - زمان‌بندی دقیق تمامی مراحل مراسم</span>
                    <br />
                    <span>
                      2 - هماهنگی کامل با تیم‌های عکاسی، موسیقی و دکوراسیون
                    </span>
                    <br />
                    <span>
                      3 - جلوگیری از هرگونه استرس و نگرانی در روز مراسم
                    </span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/136.webp"
                      width={4000}
                      height={4000}
                      alt="  شاتو دو ورسای"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <p className="font-bold ml-2 text-xl">
                      ۷. تشریفات پایانی و بدرقه مهمانان: پایان خاطره‌انگیز مراسم
                    </p>
                    <span className="p-2">
                      تیم تشریفات شاتو دو ورسای تا آخرین لحظه همراه شما خواهد
                      بود و با تشریفات ویژه برای بدرقه مهمانان، پایان مراسم را
                      نیز به شکلی خاص و به‌یادماندنی اجرا می‌کند. از
                      گل‌آرایی‌های زیبا تا هدیه‌های یادبود، همه چیز برای
                      بدرقه‌ای خاطره‌انگیز طراحی می‌شود.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      ویژگی‌های تشریفات پایانی:
                    </p>
                    <span>1 - بدرقه مهمانان با تشریفات خاص</span>
                    <br />
                    <span>2 - ارائه هدیه‌های یادبود به مهمانان</span>
                    <br />
                    <span>3 - مدیریت حرفه‌ای پایان مراسم</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/137.webp"
                      width={4000}
                      height={4000}
                      alt="  تشریفات عروسی در شاتو دو ورسای"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                </ol>
                <h3 className="font-bold text-2xl my-2">نتیجه‌گیری</h3>

                <span className="p-2">
                  تشریفات عروسی نقش مهمی در موفقیت و زیبایی مراسم شما ایفا
                  می‌کند. شاتو دو ورسای با تیم حرفه‌ای و امکانات لوکس خود، تمامی
                  جزئیات را با دقت و حرفه‌ای‌گری مدیریت می‌کند تا مراسم شما به
                  یک رویداد خاص و به‌یادماندنی تبدیل شود. اگر به دنبال برگزاری
                  عروسی‌ای هستید که هرگز فراموش نخواهید کرد، شاتو دو ورسای
                  بهترین انتخاب شما خواهد بود.
                </span>
                <br />

                <Link href="https://tour.panoee.net/Versay/65df91a47a73f2e85a4da72b">
                  <button className="bg-gradient-to-l from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-xl">
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
