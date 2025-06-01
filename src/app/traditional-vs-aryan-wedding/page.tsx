"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId = "traditional-vs-aryan-wedding";
  const blogData = {
    title: "تفاوت‌های عقد سنتی با عقد آریایی: کدوم برای عروسی شما بهتره؟",
    url: "/traditional-vs-aryan-wedding",
    images: [
      "/assets/images/155.webp",
      "/assets/images/174.webp",
      "/assets/images/175.webp",
      "/assets/images/182.webp",
    ],
    sections: [
      {
        heading: "خلاصه مطلب",
        content:
          "این مقاله به زبون ساده و خودمونی تفاوت‌های عقد سنتی و عقد آریایی رو توضیح می‌ده تا زوج‌های جوون بتونن بهترین انتخاب رو برای مراسمشون داشته باشن. عقد سنتی یه آیین اصیل و قانونیه با خطبه عربی و سفره عقد، در حالی که عقد آریایی یه مراسم مدرن و عاشقانه‌ست که قانونی نیست ولی برای عکاسی و فیلمبرداری جذابه. تالار ورسای هم به‌عنوان یه مکان لوکس برای هر دو نوع مراسم معرفی شده.",
      },
      {
        heading: "مقدمه",
        content:
          "تصور کن روز عروسی‌ت نزدیکه و تو داری با عشق زندگی‌ت نقشه می‌کشی که چطور یه مراسم به‌یادموندنی داشته باشی. حالا سوال اینه: عقد سنتی یا آریایی؟ یکی پر از اصالت و ریشه‌های فرهنگیه، اون یکی پر از حس و حال عاشقانه و مدرنه. تو این مقاله قراره تفاوت‌های این دو رو با مثال‌های واقعی بررسی کنیم و نشون بدیم چرا تالار ورسای بهترین جا برای هر دو مراسمه.",
      },
      {
        heading: "عقد سنتی چیه؟ یه آیین اصیل و پرمعنا",
        content:
          "عقد سنتی همون مراسم کلاسیک و آشناییه که تو فرهنگ ایرانی ریشه داره. با خطبه عربی و سفره عقد، این مراسم حس و حال معنوی و خانوادگی داره و کاملاً قانونیه.",
        lists: [
          "خطبه عربی با حس و حال معنوی.",
          "سفره عقد با نمادهای سنتی مثل آینه و شمعدان.",
          "رسمیت قانونی و ثبت در دفاتر ازدواج.",
          "فضای صمیمی با حضور بزرگ‌ترها.",
        ],
      },
      {
        heading: "عقد آریایی چیه؟ یه مراسم عاشقانه و مدرن",
        content:
          "عقد آریایی یه آیین نمادین و عاشقانه‌ست که با متن فارسی و فضای رمانتیک، بین زوج‌های جوون خیلی پرطرفداره. این مراسم قانونی نیست ولی برای عکاسی و فیلمبرداری عالیه.",
        lists: [
          "متن فارسی پر از جملات عاشقانه.",
          "فضای رمانتیک با گل‌آرایی و شمع.",
          "مناسب برای فیلمبرداری و عکاسی.",
          "بدون رسمیت قانونی، نیاز به عقد شرعی قبلی.",
        ],
      },
      {
        heading: "تفاوت‌های کلیدی عقد سنتی و عقد آریایی",
        content:
          "حالا بیاید تفاوت‌های این دو مراسم رو موشکافانه بررسی کنیم تا ببینید کدوم برای شما بهتره.",
        subSections: [
          {
            subHeading: "۱. زبان و محتوا",
            content:
              "عقد سنتی با خطبه عربی و حس و حال معنویه، اما عقد آریایی با متن فارسی و جملات عاشقانه، ارتباط احساسی قوی‌تری با مهمون‌ها برقرار می‌کنه.",
          },
          {
            subHeading: "۲. رسمیت و اعتبار قانونی",
            content:
              "عقد سنتی کاملاً قانونی و شرعیه، اما عقد آriایی فقط جنبه نمادین داره و نیاز به عقد شرعی قبلی داره.",
          },
          {
            subHeading: "۳. فضای مراسم",
            content:
              "عقد سنتی رسمی و خانوادگیه و معمولاً تو محضر برگزار می‌شه. عقد آریایی مدرن و رمانتیکه و بیشتر تو تالار یا باغ مناسبه.",
          },
          {
            subHeading: "۴. هزینه‌ها",
            content:
              "عقد سنتی معمولاً ارزون‌تره چون نیاز به دکور خاص نداره. عقد آریایی به خاطر تزئینات و تشریفات، هزینه بیشتری داره.",
          },
          {
            subHeading: "۵. جذابیت برای عکاسی و فیلمبرداری",
            content:
              "عقد سنتی با سفره عقد قشنگه ولی ساده‌ست. عقد آریایی با فضای رمانتیک و دکوراسیون جذاب، برای عکس و فیلم عالیه.",
          },
        ],
      },
      {
        heading: "چرا تالار عروسی ورسای بهترین انتخابه؟",
        content:
          "تالار ورسای با سالن‌های لوکس، دکوراسیون خیره‌کننده و تیم حرفه‌ای، می‌تونه هر دو نوع مراسم رو به بهترین شکل برگزار کنه.",
        lists: [
          "سالن‌های متنوع برای مراسم‌های کوچک و بزرگ.",
          "دکوراسیون حرفه‌ای با گل‌آرایی و نورپردازی.",
          "پذیرایی VIP با منوی متنوع.",
          "پکیج‌های اقتصادی متناسب با بودجه شما.",
        ],
      },
      {
        heading: "کدوم مراسم برای شما بهتره؟",
        content:
          "اگه دنبال مراسم رسمی و سنتی هستید، عقد سنتی انتخاب بهتریه. اگه عاشق فضای رمانتیک و عکاسی جذاب هستید، عقد آریایی عالیه. یا حتی می‌تونید هر دو رو تو تالار ورسای داشته باشید!",
      },
      {
        heading: "سوالات متداول درباره عقد سنتی و عقد آریایی",
        content:
          "اینجا به سوال‌های رایج درباره این دو مراسم جواب دادیم تا خیالتون راحت باشه.",
        lists: [
          "عقد آریایی به‌تنهایی کافیه؟ خیر، نیاز به عقد شرعی داره.",
          "هزینه عقد آریایی تو ورسای چقدره؟ بستگی به پکیج داره، با تیم ورسای تماس بگیرید.",
          "می‌شه سفره عقد سنتی و آریایی رو ترکیب کرد؟ بله، ورسای این کار رو براتون انجام می‌ده.",
          "عقد آریایی کجا قشنگ‌تره؟ تو سالن‌های لوکس یا باغچه رمانتیک ورسای.",
          "چطور مطمئن شم مراسمم بی‌نقصه؟ تیم حرفه‌ای ورسای همه‌چیز رو هماهنگ می‌کنه.",
        ],
      },
      {
        heading: "حرف آخر: یه مراسم رویایی تو تالار ورسای",
        content:
          "فرقی نمی‌کنه عقد سنتی یا آریایی رو انتخاب کنید، تالار ورسای با سالن‌های لوکس و تیم حرفه‌ای، مراسم‌تون رو به یه خاطره جاودانه تبدیل می‌کنه. همین حالا رزرو کنید!",
      },
    ],
  };

  useEffect(() => {
    document.title = "تفاوت‌های عقد سنتی با عقد آریایی: کدوم برای عروسی شما بهتره؟";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "تفاوت‌های عقد سنتی و آریایی رو بشناسید و ببینید کدوم برای مراسم عروسی شما بهتره. تالار ورسای با سالن‌های لوکس و تیم حرفه‌ای، آماده برگزاری یه شب رویاییه!"
      );
    }
  }, []);

  return (
    <>
      <BlogSchema blogData={blogData} />
      <div className="grid mx-auto grid-cols-1 h-auto p-4" dir="rtl">
        <div className="px-4 mx-auto py-2 rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 max-w-5xl rounded-lg">
            <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 rounded-lg">
              <Image
                src="/assets/images/155.webp"
                width={4000}
                height={4000}
                alt="traditional-vs-aryan-wedding"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                تفاوت‌های عقد سنتی با عقد آریایی: کدوم برای عروسی شما بهتره؟
              </h1>

              <p className="p-2">
                تصور کن روز عروسی‌ت نزدیکه و تو داری با عشق زندگی‌ت نقشه می‌کشی که چطور یه مراسم به‌یادموندنی داشته باشی. حالا سوال اینه: عقد سنتی یا آریایی؟ یکی پر از اصالت و ریشه‌های فرهنگیه، اون یکی پر از حس و حال عاشقانه و مدرنه.
              </p>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3 text-2xl">
                  خلاصه مقاله
                </span>
                <br />
              </p>
              <p className="p-2">
                این مقاله تفاوت‌های عقد سنتی و آریایی رو بررسی می‌کنه و نشون می‌ده کدوم برای شما بهتره. تالار ورسای با سالن‌های لوکس و خدمات حرفه‌ای، آماده‌ست تا مراسم‌تون رو به یه شب جادویی تبدیل کنه!
              </p>

              <Link href="/menue">
                <button className="mb-6 bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو تالار ورسای
                </button>
              </Link>

              <div className="mx-auto width-auto my-8 px-4 py-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-center mb-6">
                  تفاوت‌های عقد سنتی و آریایی
                </h3>

                <div className="space-y-8">
                  {/* بخش ۱ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      عقد سنتی چیه؟ یه آیین اصیل و پرمعنا
                    </h4>
                    <p className="mb-4">
                      عقد سنتی همون مراسم کلاسیک و آشناییه که تو فرهنگ ایرانی ریشه داره. با خطبه عربی و سفره عقد، این مراسم حس و حال معنوی و خانوادگی داره و کاملاً قانونیه.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">ویژگی‌های عقد سنتی:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>خطبه عربی با حس و حال معنوی.</li>
                        <li>سفره عقد با نمادهای سنتی مثل آینه و شمعدان.</li>
                        <li>رسمیت قانونی و ثبت در دفاتر ازدواج.</li>
                        <li>فضای صمیمی با حضور بزرگ‌ترها.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        سارا و علی تو یه محضر ساده با سفره عقد نقره‌ای مراسمشون رو برگزار کردن. همه با شیرینی و نقل بهشون تبریک گفتن!
                      </p>
                    </div>
                  </div>

                  {/* بخش ۲ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      عقد آریایی چیه؟ یه مراسم عاشقانه و مدرن
                    </h4>
                    <p className="mb-4">
                      عقد آریایی یه آیین نمادین و عاشقانه‌ست که با متن فارسی و فضای رمانتیک، برای زوج‌های جوون خیلی جذابه.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">ویژگی‌های عقد آریایی:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>متن فارسی پر از جملات عاشقانه.</li>
                        <li>فضای رمانتیک با گل‌آرایی و شمع.</li>
                        <li>مناسب برای فیلمبرداری و عکاسی.</li>
                        <li>بدون رسمیت قانونی، نیاز به عقد شرعی قبلی.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        نازنین و آرش تو تالار ورسای با گل‌آرایی سفید و موسیقی زنده یه عقد آریایی رمانتیک برگزار کردن که همه عاشقش شدن!
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 rounded-lg">
                    <Image
                      src="/assets/images/174.webp"
                      width={4000}
                      height={4000}
                      alt="traditional-vs-aryan-wedding"
                      className="rounded-lg shadow-lg h-full"
                    />
                  </div>

                  {/* بخش ۳ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      تفاوت‌های کلیدی عقد سنتی و عقد آریایی
                    </h4>
                    <p className="mb-4">
                      حالا بیاید تفاوت‌های این دو مراسم رو موشکافانه بررسی کنیم.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۱. زبان و محتوا</h5>
                      <p>
                        عقد سنتی با خطبه عربی و حس و حال معنویه، اما عقد آریایی با متن فارسی و جملات عاشقانه، ارتباط احساسی قوی‌تری با مهمون‌ها برقرار می‌کنه.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۲. رسمیت و اعتبار قانونی</h5>
                      <p>
                        عقد سنتی کاملاً قانونی و شرعیه، اما عقد آریایی فقط جنبه نمادین داره.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۳. فضای مراسم</h5>
                      <p>
                        عقد سنتی رسمی و خانوادگیه، عقد آریایی مدرن و رمانتیکه.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۴. هزینه‌ها</h5>
                      <p>
                        عقد سنتی ارزون‌تره، عقد آریایی به خاطر تشریفات هزینه بیشتری داره.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۵. جذابیت برای عکاسی و فیلمبرداری</h5>
                      <p>
                        عقد سنتی ساده‌تره، ولی عقد آریایی با دکور رمانتیک برای عکس و فیلم جذابه.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 p-6 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl shadow-md">
                      <p className="text-lg font-semibold text-gray-700">
                        بیشتر بخوانید:
                      </p>
                      <Link
                        href="/how-to-plan-a-wedding"
                        className="text-blue-700 bg-blue-100 px-6 py-3 rounded-xl hover:bg-blue-200 transition-colors duration-200 text-base font-medium"
                      >
                        چگونه یک عروسی رویایی برنامه‌ریزی کنیم؟
                      </Link>
                    </div>
                  </div>

                  {/* بخش ۴ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      چرا تالار عروسی ورسای بهترین انتخابه؟
                    </h4>
                    <p className="mb-4">
                      تالار ورسای با سالن‌های لوکس و تیم حرفه‌ای، می‌تونه هر دو نوع مراسم رو به بهترین شکل برگزار کنه.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">چرا ورسای؟</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>سالن‌های متنوع برای مراسم‌های کوچک و بزرگ.</li>
                        <li>دکوراسیون حرفه‌ای با گل‌آرایی و نورپردازی.</li>
                        <li>پذیرایی VIP با منوی متنوع.</li>
                        <li>پکیج‌های اقتصادی متناسب با بودجه شما.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        زهرا و محمد یه عقد سنتی و آریایی ترکیبی تو ورسای برگزار کردن که همه مهمون‌ها هنوز ازش حرف می‌زنن!
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 rounded-lg">
                    <Image
                      src="/assets/images/182.webp"
                      width={4000}
                      height={4000}
                      alt="traditional-vs-aryan-wedding"
                      className="rounded-lg shadow-lg h-full"
                    />
                  </div>

                  {/* بخش ۵ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      کدوم مراسم برای شما بهتره؟
                    </h4>
                    <p className="mb-4">
                      اگه دنبال مراسم رسمی و سنتی هستید، عقد سنتی انتخاب بهتریه. اگه عاشق فضای رمانتیک و عکاسی جذاب هستید، عقد آریایی عالیه. یا حتی می‌تونید هر دو رو تو تالار ورسای داشته باشید!
                    </p>
                  </div>

                  {/* سوالات متداول */}
                  <div className="my-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-center mb-6">
                      سوالات متداول درباره عقد سنتی و عقد آریایی
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۱. آیا عقد آریایی به‌تنهایی کافیه؟
                        </h4>
                        <p className="pr-4">
                          خیر، عقد آریایی فقط نمادینه و نیاز به عقد شرعی داره.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۲. هزینه عقد آریایی تو ورسای چقدره؟
                        </h4>
                        <p className="pr-4">
                          بستگی به پکیج داره، با تیم ورسای تماس بگیرید.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۳. می‌شه سفره عقد سنتی و آریایی رو ترکیب کرد؟
                        </h4>
                        <p className="pr-4">
                          بله، ورسای می‌تونه یه سفره ترکیبی براتون طراحی کنه.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۴. عقد آریایی کجا قشنگ‌تره؟
                        </h4>
                        <p className="pr-4">
                          تو سالن‌های لوکس یا باغچه رمانتیک ورسای.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۵. چطور مطمئن شم مراسمم بی‌نقصه؟
                        </h4>
                        <p className="pr-4">
                          تیم حرفه‌ای ورسای همه‌چیز رو هماهنگ می‌کنه.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* نتیجه‌گیری */}
                  <div className="my-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-center mb-6">
                      حرف آخر: یه مراسم رویایی تو تالار ورسای
                    </h3>
                    <p className="mb-4">
                      فرقی نمی‌کنه عقد سنتی یا آریایی رو انتخاب کنید، تالار ورسای با سالن‌های لوکس و تیم حرفه‌ای، مراسم‌تون رو به یه خاطره جاودانه تبدیل می‌کنه.
                    </p>
                    <div className="bg-green-100 p-4 rounded-lg mb-4">
                      <p className="font-bold">یه نکته:</p>
                      <p>
                        همین حالا با تالار ورسای تماس بگیرید و مراسم رویایی‌تون رو رزرو کنید!
                      </p>
                    </div>
                    <p className="text-center font-bold mt-4">
                      به امید جشن‌های رویایی و خاطره‌انگیز
                    </p>
                    <div className="text-center mt-6">
                      <Link href="/about">
                        <button className="bg-green text-white hover-btn py-3 px-8 rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl">
                          همین حالا با تالار ورسای تماس بگیرید
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommentBox blogId={blogId} />
    </>
  );
};

export default Page;