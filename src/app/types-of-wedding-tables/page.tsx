"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    document.title = "انواع سفره عقد: از سنتی تا مدرن و لاکچری";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "از چیدمان‌های سنتی گرفته تا طراحی‌های مدرن و لاکچری، همه آنچه برای داشتن یک سفره عقد زیبا و خاطره‌انگیز نیاز دارید را اینجا پیدا کنید."
      );
    }
  }, []);
  return (
    <>
      <div className="  grid mx-auto grid-cols-1 h-auto p-4 " dir="rtl">
        <div className="px-4 mx-auto py-2   rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 max-w-5xl  rounded-lg">           <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
              <Image
                src="/assets/images/240.webp"
                width={4000}
                height={4000}
                alt="انواع سفره عقد"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                انواع سفره عقد: از سنتی تا مدرن و لاکچری
              </h1>

              <p className="p-2">
                سفره عقد به‌عنوان یکی از مهم‌ترین بخش‌های مراسم عروسی در فرهنگ
                ایرانی، جلوه‌ای از عشق، برکت، و پیوندی جاودانه بین عروس و داماد
                است. این سفره‌ها با توجه به سبک و سلیقه‌های مختلف، می‌توانند از
                نمونه‌های ساده و شیک تا مدل‌های مدرن و لاکچری متنوع باشند. در
                این مقاله به بررسی انواع سفره‌های عقد و نحوه تزیین و چیدمان
                آن‌ها می‌پردازیم.
              </p>

              <Link href="/menue">
                <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5    rounded-lg text-center">
                <h2 className="text-1xl font-bold mx-auto text-black ">
                  راهنمای کامل انتخاب سفره عقد از سبک کلاسیک تا مدرن و مجلل
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14  px-3 py-1  rounded-full">
                    خاص‌ترین مدل‌های سفره عقد !
                  </span>

                  <li className="text-regular  mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ۱. سفره عقد سنتی: حفظ اصالت و سنت‌های ایرانی
                    </span>
                    <p>
                      سفره عقد سنتی ایرانی، یکی از قدیمی‌ترین و پرطرفدارترین
                      انواع سفره‌هاست که همچنان در بسیاری از مراسم‌ها استفاده
                      می‌شود. در این نوع سفره، از اقلامی همچون قرآن، آینه،
                      شمعدان، نان و سبزی، و وسایل دیگر که هر کدام نمادی از برکت
                      و خوشبختی هستند، استفاده می‌شود.
                    </p>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        سفره عقد سنتی ایرانی با ترمه:
                      </strong>
                      یکی از ویژگی‌های بارز سفره عقد سنتی، استفاده از پارچه‌های
                      ترمه‌دوزی‌شده است. این پارچه‌های نفیس نمادی از فرهنگ و هنر
                      ایرانی هستند و زیبایی خاصی به سفره می‌بخشند.
                    </span>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        تزیینات سنتی در منزل:
                      </strong>
                      برخی خانواده‌ها ترجیح می‌دهند که مراسم عقد در خانه برگزار
                      شود و سفره‌ای سنتی با چیدمان خاص در منزل پهن شود. تزیین با
                      گل‌های طبیعی و استفاده از ظروف مسی یا نقره‌ای از جمله
                      ویژگی‌های این نوع سفره‌هاست.
                    </span>
                    <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                      <Image
                        src="/assets/images/241.webp"
                        width={4000}
                        height={4000}
                        alt="انواع سفره عقد"
                        className="rounded-lg shadow-lg h-full"
                      />
                    </div>
                    <br />
                  </li>
                  <li className="text-regular  mb-3 mt-4">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ۲. سفره عقد مدرن: ترکیب سادگی و شیکی
                    </span>
                    <p>
                      سفره عقد مدرن در سال‌های اخیر با استقبال زیادی روبه‌رو شده
                      است. این نوع سفره‌ها برخلاف سفره‌های سنتی، به جای تزیینات
                      پر زرق و برق از چیدمان‌های ساده و مینیمال بهره می‌برند.
                    </p>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        دیزاین مدرن و مینیمال:{" "}
                      </strong>
                      در سفره‌های عقد مدرن از رنگ‌های روشن و ملایم مانند سفید و
                      طلایی استفاده می‌شود. ظروف کریستالی و شمع‌های ساده، همراه
                      با گل‌آرایی‌های خاص، سفره‌ای شیک و مدرن را رقم می‌زنند.
                    </span>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        چیدمان سفره عقد مدرن:{" "}
                      </strong>
                      یکی از ویژگی‌های بارز سفره عقد مدرن، نظم و هماهنگی در
                      چیدمان آن است. در این سفره‌ها، اجزا با دقت و به شکلی منظم
                      کنار هم قرار می‌گیرند تا ظاهری تمیز و شیک ایجاد شود.
                    </span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/242.webp"
                      width={2000}
                      height={2000}
                      alt="انواع سفره عقد"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ۳. سفره عقد لاکچری: شکوه و عظمت در عروسی
                    </span>
                    <p>
                      سفره عقد لاکچری به عنوان نمادی از شکوه و زیبایی در
                      مراسم‌های بزرگ و مجلل شناخته می‌شود. این نوع سفره‌ها
                      معمولاً در باغ‌ها یا سالن‌های لوکس با تزیینات فاخر پهن
                      می‌شوند و از پارچه‌ها و ظروف گران‌قیمت برای تزیین آن‌ها
                      استفاده می‌شود.
                    </p>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        سفره عقد لاکچری در باغ:{" "}
                      </strong>
                      برگزاری مراسم در باغ، امکان چیدمان و تزیین سفره عقد لاکچری
                      را با گل‌ها و گیاهان طبیعی فراهم می‌کند. سفره‌های لاکچری
                      در چنین فضاهایی با استفاده از نورپردازی حرفه‌ای و
                      گل‌آرایی‌های خاص جلوه‌ای بی‌نظیر به مراسم می‌بخشند.
                    </span>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        قیمت سفره عقد لاکچری:{" "}
                      </strong>
                      هزینه‌های مربوط به سفره‌های لاکچری ممکن است بسته به میزان
                      تزیینات و وسایل استفاده‌شده، متفاوت باشد. ظروف کریستالی،
                      پارچه‌های مخمل و جواهرات تزئینی از جمله مواردی هستند که
                      قیمت را افزایش می‌دهند.
                    </span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/243.webp"
                      width={4000}
                      height={4000}
                      alt=" سفره عقد "
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۴. سفره عقد ساده و شیک: زیبایی در سادگی
                    </span>
                    <p>
                      سفره عقد ساده و شیک به عنوان یکی از محبوب‌ترین انتخاب‌ها
                      برای عروس و دامادهای مدرن شناخته می‌شود. این نوع سفره‌ها
                      با تمرکز بر استفاده از کمترین تزیینات و چیدمان ساده، اما
                      جذاب، فضای آرام و دلنشینی را ایجاد می‌کنند.
                    </p>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        تزیین سفره عقد ساده و شیک:{" "}
                      </strong>
                      در سفره‌های ساده و شیک، معمولاً از رنگ‌های روشن و ملایم
                      مانند سفید، نقره‌ای و طلایی استفاده می‌شود. گل‌آرایی ساده
                      و استفاده از شمع‌های کوچک می‌تواند حس آرامش و زیبایی را به
                      فضا ببخشد.
                    </span>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        چیدمان در منزل:{" "}
                      </strong>
                      بسیاری از زوج‌ها ترجیح می‌دهند که سفره عقد خود را در
                      خانه‌ای ساده و شیک پهن کنند. این نوع چیدمان‌ها معمولاً
                      فضای خانوادگی و صمیمی‌تری را به مراسم می‌دهند.
                    </span>
                  </li>
                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۵. سفره عقد آریایی: بازگشت به ریشه‌ها
                    </span>
                    <p>
                      سفره عقد آریایی یکی از جدیدترین انواع سفره‌هاست که بر اساس
                      آیین‌ها و رسوم کهن ایرانی چیده می‌شود. این نوع سفره با
                      الهام از سنت‌های باستانی ایران و استفاده از عناصر طبیعی و
                      سنتی، نمادی از هویت فرهنگی و ملی است.
                    </p>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        وسایل سفره عقد آریایی:{" "}
                      </strong>
                      در سفره عقد آریایی، اقلامی مانند نان، بادام، عسل و گل‌های
                      طبیعی قرار می‌گیرد که هر کدام دارای معنای خاصی در فرهنگ
                      آریایی هستند. این سفره با تزییناتی ساده اما نمادین،
                      جلوه‌ای از اصالت و ریشه‌های ایرانی است.
                    </span>
                    <br />
                  </li>
                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۶. عکس و نمونه‌های سفره عقد: از قدیمی تا جدید
                    </span>
                    <p>
                      نمونه‌های متعددی از سفره‌های عقد در طول زمان به نمایش
                      گذاشته شده‌اند که هر کدام نمایانگر بخشی از فرهنگ و تاریخ
                      ایران هستند. از سفره‌های قدیمی و سنتی که با پارچه‌های ترمه
                      و اقلام مسی تزئین می‌شدند، تا سفره‌های مدرن و لاکچری که از
                      جدیدترین روش‌های تزیین بهره می‌برند، هر یک جلوه‌ای خاص
                      دارند.
                    </p>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        عکس‌های سفره عقد قدیمی:{" "}
                      </strong>
                      سفره‌های عقد قدیمی با جزئیات خاص و سنتی تزیین می‌شدند.
                      استفاده از ظروف مسی و نقره‌ای، به‌همراه گل‌های طبیعی و
                      رنگارنگ، این سفره‌ها را به یکی از زیباترین بخش‌های عروسی
                      تبدیل می‌کرد.
                    </span>
                    <br />
                    <span className="mb-3 text-base">
                      <strong className="ml-2 text-black font-bold">
                        نمونه‌های جدید سفره عقد مدرن:{" "}
                      </strong>
                      سفره‌های عقد جدید با بهره‌گیری از ایده‌های مدرن و استفاده
                      از نورپردازی و تکنیک‌های طراحی جدید، چهره‌ای متفاوت و مدرن
                      به مراسم عروسی داده‌اند.
                    </span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/244.webp"
                      width={4000}
                      height={4000}
                      alt=" سفره عقد "
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                </ol>
                <hr />
                <br />
                <h3 className="font-bold text-2xl my-2">نتیجه‌گیری</h3>

                <span className="p-2">
                  سفره عقد، صرف نظر از نوع آن، بخش اصلی هر مراسم عروسی ایرانی
                  است که نمادی از پیوند، عشق و برکت به شمار می‌آید. از سفره‌های
                  سنتی با چیدمان اصیل ایرانی گرفته تا نمونه‌های مدرن و لاکچری،
                  هر سفره‌ای داستان و هویتی مخصوص به خود دارد. انتخاب نوع سفره
                  عقد بسته به سلیقه و نوع مراسم می‌تواند تجربه‌ای بی‌نظیر و
                  خاطره‌انگیز برای عروس و داماد باشد.
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
