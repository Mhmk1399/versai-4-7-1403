"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    document.title = "انتخاب تم مناسب برای عروسی در هر فصل:";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "برای انتخاب تم مناسب برای عروسی در هر فصل، باید از زیبایی‌های طبیعی و ویژگی‌های هر فصل بهره‌برداری کرد تا فضایی خاص و جذاب ایجاد شود. "
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
                src="/assets/images/171.webp"
                width={4000}
                height={4000}
                alt="انتخاب تم مناسب برای عروسی"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                انتخاب تم مناسب برای عروسی{" "}
              </h1>

              <p className="p-2">
                تم عروسی و دکوراسیون آن، از جمله عواملی هستند که نقش مهمی در
                جذابیت و زیبایی مراسم شما دارند. هر فصلی از سال ویژگیهای خاص خود
                را دارد که میتوان از آنها الهام گرفت و تمهای مناسب با رنگها و
                اUانهای طبیعی آن فصل را برای عروسی خود انتخاب کرد. در این مقاله،
                به بررسی تمهای پیشنهادی برای هر فصل سال میپردازیم.
              </p>

              <Link href="/menue">
                <button className="bg-gradient-to-l mb-6 from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white  rounded-lg text-center">
                <h2 className="text-1xl font-bold mx-auto h2-blog-header ">
                  انتخاب تم مناسب برای عروسی در هر فصل: راهنمای کامل برای تطبیق
                  تزیینات و دکور با فصل
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14 bg-gradient-to-r from-amber-500 px-3 py-1  to-Cyan-950 rounded-full">
                    انتخاب تم مناسب برای عروسی{" "}
                  </span>

                  <li className="text-regular  mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ١ - تم های مناسب برای عروسی در فصل بهار: لطافت و تازگی
                    </span>
                    <p>
                      بهار فصل تازه شدن طبیعت و شکوفایی گلها است. از رنگهای روشن
                      و شاد گرفته تا گلآراییهای طبیعی، بهار میتواند منبع الهام
                      فوقالعادهای برای تم عروسی باشد.
                    </p>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-gold">
                        رنگها و تزیینات پیشنهادی:{" "}
                      </strong>
                      رنگهای پاستلی مثل صورتی، بنفش کمرنگ، و آبی آسمانی. گلهای
                      بهاری مانند hله، نرگس و رز در تزیینات بسیار جذاب خواهند
                      بود.
                    </span>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-gold">ایده های تم: </strong>
                      استفاده از تمهای گلآرایی طبیعی و رومانتیک با اUانهای سبز و
                      سفید برای هماهنگی با طبیعت بهاری.
                    </span>
                    <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                      <Image
                        src="/assets/images/154.webp"
                        width={4000}
                        height={4000}
                        alt="انتخاب تم مناسب برای عروسی"
                        className="rounded-lg shadow-lg h-full"
                      />
                    </div>
                    <br />
                  </li>
                  <li className="text-regular  mb-3 mt-4">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ٢ - تم های مناسب برای عروسی در فصل تابستان: رنگهای زنده و
                      فضای باز
                    </span>
                    <p>
                      تابستان با هوای گرم و طوhنی بودن روزها، فرصتهای زیادی برای
                      استفاده از تمهای پرانرژی و شاد فراهم میکند. تمهای تابستانی
                      بیشتر شامل رنگهای زنده و دکوراسیونهایی است که انرژی فصل را
                      به تصویر میکشد
                    </p>
                    <br />

                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-gold">
                        رنگها و تزیینات پیشنهادی:{" "}
                      </strong>
                      رنگهای زنده و شاد مانند زرد، نارنجی، آبی دریا، و سبز
                      پررنگ. گلهایی مثل آفتابگردان و ارکیده میتوانند به تم
                      تابستانی جلوه دهند.
                    </span>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-gold">ایدههای تم:</strong>
                      برگزاری مراسم در فضای باز با تمهای ساحلی یا باغی،
                      نورپردازی رنگارنگ، و استفاده از دکوراسیونهای مدرن.
                    </span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/191.webp"
                      width={2000}
                      height={2000}
                      alt="انتخاب تم مناسب برای عروسی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ٣ - تمهای مناسب برای عروسی در فصل پاییز: رنگهای گرم و
                      طبیعت دلنشین
                    </span>
                    <p>
                      اییز با رنگهای گرم و طبیعت زیبا، گزینهای جذاب برای تمهای
                      عروسی است. استفاده از رنگهای نارنجی، قهوهای و زرد و
                      اUانهای طبیعی مانند برگهای پاییزی، حال و هوای گرم و
                      دلپذیری به مراسم شما میبخشد.
                    </p>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-gold">
                        رنگها و تزیینات پیشنهادی:{" "}
                      </strong>
                      نارنجی، قرمز تیره، قهوهای و طsیی برای هماهنگی با طبیعت
                      پاییزی. استفاده از شمعها و لوازم چوبی نیز ایدهآل خواهد
                      بود.
                    </span>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-gold">ایدههای تم: </strong>
                      تمهای روستیک با استفاده از چوبی و طبیعی، استفاده از برگهای
                      خشک در تزیین میزها، و تزیینات با پارچههای گرم و مخملی.
                    </span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/bloog12.webp"
                      width={4000}
                      height={4000}
                      alt="انتخاب تم مناسب برای عروسی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۴ - تمهای مناسب برای عروسی در فصل زمستان: شکوه و لوکس بودن
                    </span>
                    <p>
                      زمستان با هوای سرد و مناظر برفی، میتواند بهانهای برای
                      برگزاری عروسیهای شیک و لوکس باشد. تمهای زمستانی معموhً
                      شامل رنگهای سفید، نقرهای و آبی یخی هستند که حس پاکی و
                      زیبایی برف را تداعی میکنند.
                    </p>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-gold">
                        رنگها و تزیینات پیشنهادی:{" "}
                      </strong>
                      سفید، نقرهای، و آبی یخی. استفاده از کریستالها و شمعها در
                      دکوراسیون برای ایجاد فضایی رویایی و زمستانی.
                    </span>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-gold">ایدههای تم: </strong>
                      تمهای زمستانی با استفاده از کریستالها، نورپردازی مsیم و
                      شمعهای زیبا. همچنین استفاده از تزیینات الهام گرفته از یخ و
                      برف میتواند فضایی خاص و شیک ایجاد کند.
                    </span>
                  </li>

                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/winter.webp"
                      width={4000}
                      height={4000}
                      alt="انتخاب تم مناسب برای عروسی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                </ol>
                <hr />
                <br />
                <h3 className="font-bold text-2xl my-2">نتیجه‌گیری</h3>

                <span className="p-2">
                  انتخاب تم مناسب برای عروسی نه تنها بر زیبایی مراسم تأثیر دارد،
                  بلکه تجربهای خاص و بهیادماندنی برای شما و مهمانانتان رقم خواهد
                  زد. با توجه به هر فصل و ویژگیهای طبیعی آن، میتوانید تمی مناسب
                  و هماهنگ با طبیعت انتخاب کنید و جشنی
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
