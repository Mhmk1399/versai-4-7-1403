"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    document.title = "اجاره باغ تالار در شاتو دو ورسای ";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "اگر به دنبال فضایی شیک، دل‌انگیز و لوکس برای برگزاری مراسم‌های خاص خود هستید، باغ تالار شاتو دو ورسای بهترین انتخاب شما خواهد بود."
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
                src="/assets/images/Green-space-and-night-with-lighting-along-with-the-statue-of-the-photography-location-of-the-garden-of-the-Chateau-de-Versailles-hall-from-a-45-degree-view.webp"
                width={4000}
                height={4000}
                alt="اجاره باغ تالار "
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                اجاره باغ تالار در شاتو دو ورسای: تجربه‌ای بی‌نظیر برای مراسم
                خاص شما
              </h1>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="h2-blog-header font-bold mb-3 text-2xl">
                  مقدمه
                </span>
                <br />
              </p>
              <p className="p-2">
                برگزاری یک مراسم عروسی رویایی نیازمند فضایی خاص و منحصربه‌فرد
                است. بسیاری از زوج‌ها به دنبال فضایی هستند که بتوانند در کنار
                زیبایی‌های طبیعی، تمامی امکانات و خدمات لوکس را نیز تجربه کنند.
                شاتو دو ورسای با ارائه یکی از زیباترین و لوکس‌ترین باغ‌ تالارهای
                کشور، فرصتی استثنایی را برای برگزاری مراسم شما فراهم می‌کند. در
                این مقاله، با ویژگی‌ها و مزایای اجاره باغ تالار شاتو دو ورسای
                آشنا خواهید شد.
              </p>

              <Link href="/menue">
                <button className="bg-gradient-to-l mb-6 from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white  rounded-lg text-center">
                <h2 className="text-1xl font-bold mx-auto h2-blog-header ">
                  اجاره باغ تالار در شاتو دو ورسای{" "}
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14 bg-gradient-to-r from-amber-500 px-3 py-1  to-Cyan-950 rounded-full">
                    ورسای، باغ تالار خاص برای یک روز خاص
                  </span>

                  <li className="text-regular  mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ۱. طبیعت دل‌انگیز و مناظر چشم‌نواز باغ تالار
                    </span>
                    <br />
                    <span className="p-2">
                      یکی از مهم‌ترین دلایلی که باغ تالار شاتو دو ورسای را به
                      انتخابی برتر تبدیل کرده است، طبیعت زیبا و آرامش‌بخش آن
                      است. فضای باز باغ تالار با گل‌ها و درختان سرسبز، مناظر
                      طبیعی و هوای دلپذیر، محیطی ایده‌آل برای برگزاری مراسم
                      عروسی شما فراهم می‌کند. این باغ به‌طور ویژه طراحی شده تا
                      هر گوشه‌ای از آن به عنوان مکانی برای عکس‌برداری و ثبت
                      لحظات به‌یادماندنی عمل کند.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      ویژگی‌های باغ:
                    </p>
                    <span>1 - فضای باز و وسیع با طراحی دلنشین</span>
                    <br />
                    <span>2 - گل‌آرایی طبیعی و سرسبز</span>
                    <br />
                    <span>3 - چشم‌اندازهای منحصر به فرد برای عکس‌برداری</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/151.webp"
                      width={2000}
                      height={2000}
                      alt="بهترین باغ تالار را برای عروسی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3 mt-4">
                    <span className="font-bold text-lg ml-2 ">
                      ۲. امکانات و خدمات لوکس در باغ تالار شاتو دو ورسای شما
                    </span>
                    <br />
                    <span className="p-2">
                      یکی از نکات مهم در اجاره باغ تالار، امکانات و خدماتی است
                      که در اختیار شما قرار می‌گیرد. شاتو دو ورسای با ارائه
                      خدماتی از قبیل نورپردازی حرفه‌ای، سیستم‌های صوتی و تصویری
                      پیشرفته و کترینگ لوکس، تمامی نیازهای شما را برای برگزاری
                      یک مراسم بی‌نقص برآورده می‌کند. این باغ تالار به گونه‌ای
                      طراحی شده است که بتوانید همزمان از فضای باز باغ و امکانات
                      لوکس سالن‌های مجاور استفاده کنید.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      امکانات باغ تالار:
                    </p>
                    <span>1 - نورپردازی حرفه‌ای و هماهنگ با مراسم</span>
                    <br />
                    <span>2 - سیستم صوتی و تصویری مدرن</span>
                    <br />
                    <span>3 - کترینگ و پذیرایی با منوی لوکس</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/152.webp"
                      width={2000}
                      height={2000}
                      alt="اجاره باغ تالار در شاتو دو ورسای"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۳. فضای باز برای برگزاری مراسم‌های مختلف
                    </span>
                    <br />
                    <span className="p-2">
                      باغ تالار شاتو دو ورسای تنها برای مراسم عروسی نیست؛ شما
                      می‌توانید از این فضا برای برگزاری انواع مراسم‌ها نظیر عقد،
                      بله‌برون، جشن‌های تولد و حتی مراسم‌های خاص مانند سالگرد
                      ازدواج نیز استفاده کنید. این باغ با طراحی منعطف و فضای باز
                      وسیع، امکان چیدمان و دکوراسیون به سبک‌های مختلف را فراهم
                      می‌کند.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      مراسم‌های قابل برگزاری در باغ تالار:
                    </p>
                    <span>1 - مراسم عقد و بله‌برون</span>
                    <br />
                    <span>2 - جشن‌های تولد و سالگرد ازدواج</span>
                    <br />
                    <span>3 - رویدادهای خاص خانوادگی و دوستانه</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/153.webp"
                      width={4000}
                      height={4000}
                      alt="   اجاره باغ تالار در شاتو دو ورسای"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۴. دکوراسیون سفارشی و منحصر به فرد برای مراسم شما
                    </span>
                    <br />
                    <span className="p-2">
                      شاتو دو ورسای به شما این امکان را می‌دهد که دکوراسیون
                      مراسم‌تان را به طور کامل سفارشی کنید. تیم حرفه‌ای طراحان
                      این مجموعه با در نظر گرفتن تم و رنگ‌بندی مورد نظر شما، باغ
                      تالار را به گونه‌ای تزیین می‌کنند که هر گوشه‌ای از آن
                      نمایانگر سلیقه و شخصیت شما باشد. از چیدمان صندلی‌ها گرفته
                      تا نورپردازی و گل‌آرایی، همه چیز به طور دقیق و با توجه به
                      جزئیات طراحی می‌شود.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      ویژگی‌های دکوراسیون سفارشی:
                    </p>
                    <span>1 - امکان انتخاب تم و رنگ‌بندی مخصوص</span>
                    <br />
                    <span>2 - طراحی گل‌آرایی و نورپردازی منحصر به فرد</span>
                    <br />
                    <span>3 - چیدمان صندلی‌ها و میزها متناسب با سلیقه شما</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/154.webp"
                      width={4000}
                      height={4000}
                      alt=" اجاره باغ تالار در شاتو دو ورسای"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <p className="font-bold ml-2 text-xl">
                      ۵. عکاسی و فیلمبرداری در باغ تالار شاتو دو ورسای
                    </p>
                    <span className="p-2">
                      یکی از دغدغه‌های زوج‌ها در روز عروسی، داشتن عکس‌ها و
                      فیلم‌هایی است که خاطره این روز خاص را برای همیشه ماندگار
                      کنند. باغ تالار شاتو دو ورسای با طبیعت زیبا و نورپردازی
                      حرفه‌ای، فضایی ایده‌آل برای عکاسی و فیلمبرداری ایجاد
                      می‌کند. عکاسان و فیلمبرداران حرفه‌ای می‌توانند در این فضا،
                      بهترین تصاویر را ثبت کنند و لحظات شما را به بهترین شکل به
                      تصویر بکشند.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      ویژگی‌های فضای عکاسی:
                    </p>
                    <span>1 - مناظر طبیعی زیبا برای عکاسی</span>
                    <br />
                    <span>2 - نورپردازی ویژه برای عکس‌های شبانه</span>
                    <br />
                    <span>3 - فضای باز و شیک برای فیلمبرداری از مراسم</span>
                    <br />
                    <Link href="/menue">
                      <button className="bg-gradient-to-l from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-xl">
                        مشاهده منو مجموعه شاتو دو ورسای
                      </button>
                    </Link>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/155.webp"
                      width={4000}
                      height={4000}
                      alt="   اجاره باغ تالار  "
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <p className="font-bold ml-2 text-xl">
                      ۶. چگونه باغ تالار شاتو دو ورسای را برای مراسم خود اجاره
                      کنیم؟
                    </p>
                    <span className="p-2">
                      اجاره باغ تالار شاتو دو ورسای فرآیندی آسان و راحت دارد.
                      شما می‌توانید با مراجعه به مجموعه و بازدید از فضاها،
                      بهترین تاریخ و شرایط را برای مراسم خود انتخاب کنید. تیم
                      مشاوران شاتو دو ورسای به شما در تمامی مراحل، از بازدید تا
                      رزرو و برنامه‌ریزی مراسم، کمک خواهند کرد تا تجربه‌ای
                      لذت‌بخش و بدون استرس داشته باشید.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-gold">
                      مراحل اجاره باغ تالار:
                    </p>
                    <span>1 - بازدید از باغ و سالن‌ها</span>
                    <br />
                    <span>2 - انتخاب تاریخ و شرایط اجاره</span>
                    <br />
                    <span>3 - هماهنگی برای دکوراسیون و خدمات</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/156.webp"
                      width={4000}
                      height={4000}
                      alt="  شاتو دو ورسای"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                </ol>
                <h3 className="font-bold text-2xl my-2">نتیجه‌گیری</h3>

                <span className="p-2">
                  اجاره باغ تالار شاتو دو ورسای فرصتی منحصربه‌فرد برای برگزاری
                  مراسم عروسی یا دیگر مراسم‌های خاص شما است. این باغ با ترکیب
                  طبیعت دلپذیر و خدمات لوکس، محیطی شگفت‌انگیز و بی‌نظیر برای شما
                  و مهمانان‌تان فراهم می‌کند. اگر به دنبال فضایی خاص و متفاوت
                  برای مراسم خود هستید، باغ تالار شاتو دو ورسای بهترین گزینه
                  برای شما خواهد بود.
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
