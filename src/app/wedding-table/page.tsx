"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    document.title = "سفره عقد عروسی";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "سفره عقد یکی از بخش‌های زیبا و سنتی مراسم عروسی ایرانی است که نمادی از عشق، زندگی مشترک و خوشبختی به شمار می‌رود. "
      );
    }
  }, []);
  return (
    <>
      <div className="  grid mx-auto grid-cols-1 h-auto p-4 " dir="rtl">
        <div className="px-4 mx-auto py-2   rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 max-w-5xl  rounded-lg">           <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
              <Image
                src="/assets/images/180.webp"
                width={4000}
                height={4000}
                alt="سفره عقد عروسی"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                سفره عقد عروسی: تزیینات و نکات کلیدی
              </h1>

              <p className="p-2">
                سفره عقد عروسی یکی از سنت‌های قدیمی و ریشه‌دار در فرهنگ ایرانی
                است که نماد عشق، زندگی و برکت در زندگی مشترک به‌شمار می‌آید. در
                این مقاله به بررسی انواع تزیینات سفره عقد، نکات مهم در انتخاب
                مکان مناسب برای سفره عقد و همچنین ارتباط این سفره با دیگر
                مراسم‌های مرتبط همچون حنابندان پرداخته خواهد شد.
              </p>

              <Link href="/menue">
                <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5    rounded-lg text-center">
                <h2 className="text-1xl font-bold mx-auto text-black ">
                  تزیینات سفره عقد: چگونه مراسم خود را ماندگار کنید؟
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14  px-3 py-1  rounded-full">
                    راهنمای جامع چیدمان سفره عقد رویایی{" "}
                  </span>

                  <li className="text-regular  mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ۱. اجزای اصلی سفره عقد عروسی
                    </span>
                    <br />
                    <span className="p-2">
                      سفره عقد عروسی شامل اقلام مختلفی است که هر کدام معنای خاص
                      خود را دارند. این اقلام همگی با هدف آرزوی خوشبختی، برکت و
                      عشق برای زوجین انتخاب شده‌اند. در این بخش به برخی از
                      مهم‌ترین اجزای سفره عقد اشاره می‌کنیم.
                    </span>
                    <br />
                    <span className="font-bold text-lg text-black">1 - قرآن کریم: </span>
                    <p>
                      به‌عنوان نماد هدایت و برکت در زندگی، قرآن کریم همیشه در
                      مرکز سفره عقد قرار می‌گیرد. تزیین قرآن با پارچه‌های زیبا و
                      جواهرات به جذابیت سفره می‌افزاید.
                    </p>
                    <span className="font-bold text-lg text-black">
                      2 - آینه و شمعدان:
                    </span>
                    <br />
                    <p>
                      آینه نمادی از روشنایی و شفافیت در زندگی مشترک است و
                      شمعدان‌ها نیز به عنوان نمادی از نور و گرمای عشق در سفره
                      قرار می‌گیرند.
                    </p>
                    <span className="font-bold text-lg text-black">
                      3 - نان، پنیر و سبزی:
                    </span>
                    <p>
                      این اقلام نماد برکت و سرسبزی در زندگی زوجین هستند و در
                      کنار دیگر اجزای سفره قرار داده می‌شوند.
                    </p>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/181.webp"
                      width={2000}
                      height={2000}
                      alt="  سفره عقد عروسی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3 mt-4">
                    <span className="font-bold text-lg ml-2 ">
                      ۲. تزیین سفره عقد: ایده‌های خلاقانه و مدرن
                    </span>
                    <br />
                    <span className="font-bold text-lg text-black">
                      1 - تزیین با گل‌های طبیعی:{" "}
                    </span>
                    <p>
                      گل‌های طبیعی به سفره عقد حس تازگی و شادابی می‌بخشند.
                      انتخاب گل‌هایی با رنگ‌های متناسب با تم عروسی می‌تواند
                      زیبایی بیشتری به سفره بدهد. برای مثال، گل‌های سفید مانند
                      رز و لیلیوم با تم‌های کلاسیک سفید و طلایی هماهنگ هستند.
                    </p>
                    <span className="font-bold text-lg text-black">
                      2 - استفاده از ظروف کریستالی و شیشه‌ای:
                    </span>
                    <br />
                    <p>
                      اگر به دنبال یک سفره عقد لاکچری هستید، استفاده از ظروف
                      کریستالی و شیشه‌ای براق به‌همراه نورپردازی مناسب، می‌تواند
                      جلوه‌ای خاص به سفره عقد بدهد.
                    </p>
                    <span className="font-bold text-lg text-black">
                      3 - چیدمان مدرن و مینیمال:
                    </span>
                    <p>
                      این اقلام نماد برکت و سرسبزی در زندگی زوجین هستند و در
                      کنار دیگر اجزای سفره قرار داده می‌شوند.
                    </p>
                    <br />
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/182.webp"
                      width={2000}
                      height={2000}
                      alt=" تزیین سفره عقد"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۳. سالن عقد مناسب: تاثیر مکان بر زیبایی سفره عقد
                    </span>
                    <br />
                    <span className="p-2">
                      یکی از نکات مهم در چیدمان سفره عقد، انتخاب سالن مناسب است.
                      سالن عقد تأثیر مستقیمی بر زیبایی و جذابیت سفره عقد دارد،
                      زیرا دکوراسیون، نورپردازی و فضای کلی سالن باید با سفره عقد
                      هماهنگ باشد.
                    </span>
                    <br />
                    <span className="font-bold text-lg text-black">
                      1 - سالن عقد ترمه:{" "}
                    </span>
                    <p>
                      سالن عقد ترمه یکی از سالن‌های لوکس و مجلل است که به‌واسطه
                      دکوراسیون فاخر و امکانات پیشرفته، انتخابی عالی برای
                      برگزاری مراسم عقد و سفره عقد عروسی است. در این سالن،
                      می‌توان از چیدمان‌های لاکچری و تزیینات مجلل برای سفره عقد
                      استفاده کرد.
                    </p>
                    <span className="font-bold text-lg text-black">
                      2 - استفاده از فضای باز یا بسته:
                    </span>
                    <br />
                    <p>
                      بسته به نوع مراسم و سلیقه عروس و داماد، می‌توان از
                      سالن‌های داخلی یا فضای باز برای برگزاری سفره عقد استفاده
                      کرد. در فضای باز، سفره عقد با گل‌ها و گیاهان طبیعی تزیین
                      می‌شود و در فضای داخلی، نورپردازی و دکوراسیون سالن اهمیت
                      بیشتری دارد.
                    </p>
                  </li>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۴. سفره حنابندان: ارتباط آن با سفره عقد
                    </span>
                    <br />
                    <span className="p-2">
                      مراسم حنابندان یکی دیگر از مراسم‌های مرتبط با عروسی است که
                      در آن سفره‌ای مشابه سفره عقد پهن می‌شود. در این مراسم،
                      علاوه بر اقلام معنوی، تزیینات ویژه‌ای مانند حنا، شمع‌ها و
                      گل‌ها قرار داده می‌شود. ارتباط نزدیک بین سفره عقد و سفره
                      حنابندان نشان‌دهنده پیوند سنت‌ها و آئین‌های ایرانی است.
                    </span>
                    <br />
                    <span className="font-bold text-lg text-black">
                      1 - اقلام سفره حنابندان:{" "}
                    </span>
                    <p>
                      سفره حنابندان شامل اقلام خاصی مانند حنا، شمع و تزیینات
                      رنگارنگ است که هر کدام نماد خاصی از عشق و پیوند بین زوجین
                      هستند. این سفره معمولاً رنگارنگ‌تر از سفره عقد است و
                      تزیینات آن با رنگ‌های شاد و پر انرژی انجام می‌شود.
                    </p>
                    <span className="font-bold text-lg text-black">
                      2 - تزیین مشترک سفره عقد و حنابندان:
                    </span>
                    <br />
                    <p>
                      برخی از عروس و دامادها ترجیح می‌دهند که از همان تم و
                      تزیینات برای هر دو سفره استفاده کنند. این کار نه تنها
                      هماهنگی بیشتری به مراسم می‌دهد بلکه باعث کاهش هزینه‌ها نیز
                      می‌شود.
                    </p>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/183.webp"
                      width={4000}
                      height={4000}
                      alt=" تشریفات عروسی  "
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <p className="font-bold ml-2 text-xl">
                      ۵. ایده‌های تزیین سفره عروس
                    </p>
                    <span className="p-2">
                      سفره عروس نیز بخشی از سفره عقد محسوب می‌شود که معمولاً در
                      خانه عروس پهن می‌شود و شامل اقلام تزئینی و معنوی است. این
                      سفره می‌تواند بسته به سلیقه عروس و داماد ساده یا بسیار
                      مجلل باشد.
                    </span>
                    <br />
                    <span className="font-bold text-lg text-black">
                      1 - سفره عروس ساده و شیک:{" "}
                    </span>
                    <p>
                      برای عروس‌هایی که به دنبال یک سفره ساده و شیک هستند،
                      استفاده از پارچه‌های سفید یا کرم به‌همراه گل‌های طبیعی
                      می‌تواند گزینه مناسبی باشد. این نوع سفره‌ها حس لطافت و
                      پاکی را به نمایش می‌گذارند.
                    </p>
                    <span className="font-bold text-lg text-black">
                      2 - سفره عروس لاکچری:
                    </span>
                    <br />
                    <p>
                      برای سفره‌های مجلل، استفاده از تزیینات کریستالی و ظروف
                      شیشه‌ای همراه با نورپردازی حرفه‌ای، ظاهری فاخر و با شکوه
                      به سفره عروس می‌بخشد.
                    </p>
                    <br />
                    <Link href="/menue">
                      <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                        مشاهده منو مجموعه شاتو دو ورسای
                      </button>
                    </Link>
                  </li>

                  <li className="text-regular  mb-3">
                    <p className="font-bold ml-2 text-xl">
                      ۶. نگهداری و مراقبت از اقلام تزیینی سفره عقد
                    </p>
                    <span className="p-2">
                      برای اینکه تزیینات سفره عقد در طول مراسم زیبا و بدون نقص
                      باقی بمانند، باید نکات مهمی در خصوص نگهداری و مراقبت از
                      آن‌ها رعایت شود. گل‌های طبیعی باید در محیطی خنک نگهداری
                      شوند و شمع‌ها نیز باید به دقت و در زمان مناسب روشن شوند تا
                      فضای رمانتیک و دلپذیر حفظ شود.
                    </span>
                  </li>
                </ol>
                <h3 className="font-bold text-2xl my-2">نتیجه‌گیری</h3>

                <span className="p-2">
                  سفره عقد عروسی نه تنها نمادی از پیوند و عشق میان زوجین است
                  بلکه با دقت و توجه در تزیین و هماهنگی آن با دیگر بخش‌های
                  مراسم، می‌توان فضای شگفت‌انگیزی برای روز بزرگ زندگی خود فراهم
                  کرد. انتخاب درست سالن، اقلام سفره، و تزیینات خلاقانه نقش مهمی
                  در ایجاد یک مراسم خاص و بی‌نظیر دارد.
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
