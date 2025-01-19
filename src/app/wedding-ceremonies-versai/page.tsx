"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId = "wedding-ceremonies-versai";
  const blogData = {
    title: "تشریفات عروسی در شاتو دو ورسای: مراسمی فراموش‌نشدنی",
    url: "/wedding-ceremonies-versai",
    images: ["/assets/images/160.webp"],
    sections: [
      {
        heading: "عروسی باشکوه در قلب شاتو دو ورسای",
        content:
          "برگزاری یک مراسم عروسی بی‌نقص، نیازمند دقت و توجه به جزییات است. از دکوراسیون تا سرو غذا و حتی نحوه پذیرایی از مهمانان، همه موارد باید به بهترین شکل ممکن مدیریت شوند...",
        lists: [
          "تشریفات لوکس و چیدمان بی‌نظیر",
          "سرویس‌دهی حرفه‌ای و مهمان‌نوازی",
          "نورپردازی و صحنه‌سازی رؤیایی",
          "موسیقی و سرگرمی‌های متنوع",
          "سفره عقد و سالن‌های اختصاصی",
          "امکان برگزاری مراسم در فضای باز",
        ],
      },
      {
        heading: "خدمات تشریفاتی ویژه",
        content:
          "تیم تشریفاتی شاتو دو ورسای با کادری مجرب و حرفه‌ای، تمامی مراحل پذیرایی از مهمانان شما را به عهده می‌گیرد...",
        lists: [
          "گل‌آرایی‌های خاص و طبیعی",
          "چیدمان مدرن میز و صندلی",
          "نورپردازی حرفه‌ای",
          "موسیقی زنده با بهترین گروه‌ها",
          "اجرای دی‌جی‌های حرفه‌ای",
          "برنامه‌های سرگرمی و رقص",
        ],
      },
    ],
  };

  useEffect(() => {
    document.title = "تشریفات عروسی در ورسای  ";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "شاتو دو ورسای با فضایی رؤیایی و معماری بی‌نظیر، مکانی ایده‌آل برای برگزاری مراسم عروسی شماست. این عمارت لوکس با باغ‌های سرسبز، سالن‌های مجلل، و خدمات تشریفاتی حرفه‌ای، بهترین لحظات زندگی‌تان را به تجربه‌ای ماندگار تبدیل می‌کند."
      );
    }
  }, []);
  return (
    <>
      <BlogSchema blogData={blogData} />
      <div className="  grid mx-auto grid-cols-1 h-auto p-4 " dir="rtl">
        <div className="px-4 mx-auto py-2   rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 max-w-5xl  rounded-lg">
            {" "}
            <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
              <Image
                src="/assets/images/160.webp"
                width={4000}
                height={4000}
                alt="عروسی در شاتو دو ورسای"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                تشریفات عروسی در شاتو دو ورسای: مراسمی فراموش‌نشدنی
              </h1>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3 text-2xl">
                  مقدمه
                </span>
                <br />
              </p>
              <p className="p-2">
                برگزاری یک مراسم عروسی بی‌نقص، نیازمند دقت و توجه به جزییات است.
                از دکوراسیون تا سرو غذا و حتی نحوه پذیرایی از مهمانان، همه موارد
                باید به بهترین شکل ممکن مدیریت شوند. در این میان، تشریفات عروسی
                نقش کلیدی در ساختن این روز خاص دارد. مجموعه تشریفاتی شاتو دو
                ورسای با تیمی حرفه‌ای و امکاناتی لوکس، تمامی نیازهای شما را برای
                برگزاری مراسمی رویایی فراهم می‌کند. بیایید با هم نگاهی به
                امکانات و خدماتی که شاتو دو ورسای ارائه می‌دهد، بیندازیم.
              </p>

              <Link href="/menue">
                <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5    rounded-lg text-center">
                <h2 className="text-1xl font-bold mx-auto text-black ">
                  عروسی باشکوه در قلب شاتو دو ورسای
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14  px-3 py-1  rounded-full">
                    جشن عشق در لوکس‌ترین عمارت دنیا
                  </span>

                  <li className="text-regular  mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ۱. تشریفات لوکس: تجربه‌ای خاص در شاتو دو ورسای
                    </span>
                    <br />
                    <span className="p-2">
                      اولین چیزی که در هر مراسم عروسی به چشم می‌آید، زیبایی و
                      شکوه تشریفات آن است. شاتو دو ورسای با تزیینات لوکس و
                      چیدمان بی‌نظیر خود، محیطی دلنشین و خاص را برای شما و
                      مهمانان‌تان فراهم می‌کند. این تشریفات شامل گل‌آرایی‌های
                      حرفه‌ای، طراحی میز و صندلی‌های شیک، و نورپردازی مدرن است.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black">
                      ویژگی‌های تشریفات لوکس:
                    </p>
                    <span>1 - گل‌آرایی‌های خاص و طبیعی</span>
                    <br />
                    <span>2 - چیدمان مدرن میز و صندلی</span>
                    <br />
                    <span>3 - نورپردازی حرفه‌ای و متناسب با فضای عروسی</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/161.webp"
                      width={2000}
                      height={2000}
                      alt="بهترین باغ تالار را برای عروسی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3 mt-4">
                    <span className="font-bold text-lg ml-2 ">
                      ۲. سرویس‌دهی حرفه‌ای: مهمان‌نوازی در شاتو دو ورسای
                    </span>
                    <br />
                    <span className="p-2">
                      یکی از مهم‌ترین بخش‌های یک مراسم عروسی، نحوه سرویس‌دهی و
                      مهمان‌نوازی است. تیم تشریفاتی شاتو دو ورسای با کادری مجرب
                      و حرفه‌ای، تمامی مراحل پذیرایی از مهمانان شما را به عهده
                      می‌گیرد. این تیم با ارائه خدماتی از قبیل سرو نوشیدنی‌ها،
                      دسرها و غذاهای با کیفیت، مراسم شما را به سطحی بالاتر از
                      استانداردهای معمول می‌رساند.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black">
                      سرویس‌های ویژه:
                    </p>
                    <span>1 - نوشیدنی‌ها و دسرهای متنوع</span>
                    <br />
                    <span>2 - ارائه منوی غذایی لوکس</span>
                    <br />
                    <span>
                      3 - سرویس‌دهی به مهمانان با استانداردهای بین‌المللی
                    </span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5 rounded-lg">
                    <Image
                      src="/assets/images/133.webp"
                      width={2000}
                      height={2000}
                      alt="بهترین باغ تالار را برای عروسی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۳. نورپردازی و صحنه‌سازی: ساختن فضایی رؤیایی
                    </span>
                    <br />
                    <span className="p-2">
                      یکی از جنبه‌های کلیدی برای ایجاد یک فضای خاص و دلنشین،
                      استفاده از نورپردازی حرفه‌ای است. شاتو دو ورسای با
                      بهره‌گیری از جدیدترین تکنولوژی‌های نورپردازی، فضایی
                      رمانتیک و شیک را برای عروسی شما فراهم می‌کند. از
                      نورپردازی‌های نرم و ملایم برای لحظات رمانتیک گرفته تا
                      جلوه‌های ویژه برای صحنه‌سازی‌های هیجان‌انگیز، همه چیز به
                      گونه‌ای تنظیم شده تا بهترین تجربه را برای شما و
                      مهمانان‌تان رقم بزند.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black">
                      ویژگی‌های نورپردازی:
                    </p>
                    <span>1 - نورهای ملایم و گرم برای فضاهای رمانتیک</span>
                    <br />
                    <span>2 - استفاده از جلوه‌های ویژه برای رقص و مراسم</span>
                    <br />
                    <span>3 - نورپردازی هماهنگ با موسیقی</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/dancestage-good-3.webp"
                      width={4000}
                      height={4000}
                      alt="تشریفات عروسی در شاتو دو ورسای"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۴. موسیقی و سرگرمی: لحظاتی پر از شادی
                    </span>
                    <br />
                    <span className="p-2">
                      تشریفات عروسی در شاتو دو ورسای تنها به تزئینات و سرویس‌دهی
                      محدود نمی‌شود. یکی از بخش‌های مهم هر عروسی، موسیقی و
                      سرگرمی‌های مرتبط با آن است. تیم حرفه‌ای شاتو دو ورسای با
                      انتخاب بهترین دی‌جی‌ها و گروه‌های موسیقی، فضایی پر از
                      هیجان و شادی را برای مهمانان‌تان ایجاد می‌کند. از موسیقی
                      زنده گرفته تا اجرای دی‌جی، هر چیزی که برای شب عروسی شما
                      نیاز است، در اختیار شما قرار می‌گیرد.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black">
                      برنامه‌های موسیقی و سرگرمی:
                    </p>
                    <span>1 - موسیقی زنده با بهترین گروه‌ها</span>
                    <br />
                    <span>2 - اجرای دی‌جی‌های حرفه‌ای</span>
                    <br />
                    <span>3 - برنامه‌های سرگرمی و رقص</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/165.webp"
                      width={4000}
                      height={4000}
                      alt=" تشریفات عروسی  "
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <p className="font-bold ml-2 text-xl">
                      ۵. سفره عقد و سالن‌های عقد در شاتو دو ورسای
                    </p>
                    <span className="p-2">
                      علاوه بر تشریفات مراسم اصلی عروسی، شاتو دو ورسای فضایی
                      اختصاصی برای برگزاری مراسم عقد نیز دارد. سفره عقدی با
                      طراحی شیک و مدرن، فضای رویایی را برای آغاز زندگی مشترک شما
                      فراهم می‌کند. سالن‌های عقد شاتو دو ورسای، با دکوراسیون
                      لوکس و محیطی گرم و صمیمی، لحظات خاصی را برای شما و
                      عزیزان‌تان رقم خواهد زد.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black">
                      ویژگی‌های سفره عقد:
                    </p>
                    <span>1 - طراحی کلاسیک و مدرن</span>
                    <br />
                    <span>2 - استفاده از تزئینات خاص و لوکس</span>
                    <br />
                    <span>3 - فضای دلنشین و آرام برای عقد</span>
                    <br />
                    <Link href="/menue">
                      <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                        مشاهده منو مجموعه شاتو دو ورسای
                      </button>
                    </Link>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/S__00393.webp"
                      width={4000}
                      height={4000}
                      alt="   تشریفات عروسی "
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <p className="font-bold ml-2 text-xl">
                      ۶. تشریفات عروسی در فضای باز: تجربه‌ای متفاوت
                    </p>
                    <span className="p-2">
                      شاتو دو ورسای نه تنها در سالن‌های داخلی خود، بلکه در فضای
                      باز نیز امکاناتی ویژه برای برگزاری مراسم عروسی ارائه
                      می‌دهد. برگزاری عروسی در فضای باز باغ تالار، با هوای تازه
                      و مناظر طبیعی زیبا، حال و هوای متفاوتی به مراسم شما
                      می‌بخشد. این فضا به‌خصوص برای عروس‌هایی که به دنبال
                      تجربه‌ای رمانتیک و متفاوت هستند، بسیار مناسب است.
                    </span>
                    <p className="font-bold my-3 text-lg ml-2 text-black">
                      ویژگی‌های فضای باز:
                    </p>
                    <span>1 - محیط طبیعی و دلنشین</span>
                    <br />
                    <span>2 - امکان برگزاری مراسم در کنار درختان و گل‌ها</span>
                    <br />
                    <span>3 - نورپردازی طبیعی برای عکس‌های زیبا</span>
                  </li>
                  <div className="mx-auto flex flex-col items-center my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/167.webp"
                      width={4000}
                      height={4000}
                      alt="  شاتو دو ورسای"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                </ol>
                <h3 className="font-bold text-2xl my-2">نتیجه‌گیری</h3>

                <span className="p-2">
                  تشریفات عروسی یکی از مهم‌ترین بخش‌های هر مراسم است که تأثیر
                  بزرگی بر زیبایی و شکوه آن دارد. مجموعه تشریفاتی شاتو دو ورسای
                  با خدماتی لوکس و حرفه‌ای، تمامی نیازهای شما را برای برگزاری یک
                  مراسم خاص و فراموش‌نشدنی فراهم می‌کند. اگر به دنبال تجربه‌ای
                  بی‌نظیر در برگزاری عروسی خود هستید، شاتو دو ورسای انتخابی
                  فوق‌العاده برای شما خواهد بود.
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
      <CommentBox blogId={blogId} />
    </>
  );
};
export default Page;
