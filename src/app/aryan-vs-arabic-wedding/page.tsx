"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId = "aryan-vs-arabic-wedding";
  const blogData = {
    title: "عقد آریایی یا عربی؟ کدوم بهتره | توضیح کامل",
    url: "/aryan-vs-arabic-wedding-ceremony",
    images: [
      "/assets/images/138.webp",
      "/assets/images/151.webp",
      "/assets/images/156.webp",
      "/assets/images/160.webp",
    ],
    sections: [
      {
        heading: "خلاصه مطلب",
        content:
          "این مقاله به زوج‌های جوانی که بین عقد آریایی و عربی مردد هستن کمک می‌کنه تا بهترین انتخاب رو داشته باشن. عقد آریایی با ریشه‌های پارسی و فضای رمانتیک، و عقد عربی با سادگی و معنویتش معرفی شده. تالار ورسای با سالن‌های لوکس و خدمات VIP بهترین مکان برای هر دو نوع مراسمه.",
      },
      {
        heading: "مقدمه: شبی که عشقتون رو جاودانه می‌کنه!",
        content:
          "تصور کن شب عروسیته، همه با لبخند به تو و عشقت نگاه می‌کنن، نور شمع‌ها و عطر گل‌های رز فضا رو پر کرده. حالا سوال اینه: عقد آریایی با حس و حال پارسی یا عقد عربی ساده و معنوی؟ این مقاله همه‌چیز رو برات توضیح می‌ده و نشون می‌ده چرا تالار ورسای بهترین انتخابه.",
      },
      {
        heading: "عقد آریایی چیه؟ یه سفر به ریشه‌های پارسی!",
        content:
          "عقد آریایی یه مراسم سنتی و عاشقانه‌ست با ریشه‌های پارسی، پر از نمادهای مثل آتش، گل و شعرهای عاشقانه که حس عشق اصیل رو منتقل می‌کنه.",
        lists: [
          "حس اصالت: بازگشت به ریشه‌های پارسی.",
          "فضای رمانتیک: متن‌های عاشقانه و شعرگونه.",
          "انعطاف‌پذیری: قابل برگزاری تو باغ یا سالن شیک ورسای.",
        ],
      },
      {
        heading: "عقد عربی چیه؟ سنتی، مذهبی و پر از معنویت",
        content:
          "عقد عربی مراسم سنتی اسلامیه که با حضور روحانی، خطبه عربی و گرفتن رضایت عروس و داماد انجام می‌شه. پر از سادگی و معنویته.",
        lists: [
          "سادگی و معنویت: حس آرامش و تقدس.",
          "رایج و آشنا: برای همه قابل فهمه.",
          "سرعت: مراسم سریع و بی‌دردسر.",
        ],
      },
      {
        heading: "عقد آریایی یا عربی؟ کدوم به تو میاد؟",
        content:
          "برای انتخاب بین عقد آریایی و عربی، باید سلیقه‌ات رو بشناسی. عقد آریایی برای عاشقای رمانتیک و عقد عربی برای طرفدارای سنت و معنویت مناسبه. حتی می‌تونی هر دو رو ترکیب کنی!",
        lists: [
          "عقد آریایی: برای عاشقای سنت پارسی و فضای رمانتیک.",
          "عقد عربی: برای کسایی که سادگی و معنویت می‌خوان.",
          "ترکیب هر دو: یه مراسم عربی رسمی و یه بخش آریایی تشریفاتی.",
        ],
      },
      {
        heading: "چرا تالار ورسای بهترین جا برای مراسم عقدته؟",
        content:
          "تالار ورسای با فضاهای متنوع، تزیینات رویایی و خدمات VIP، مراسم عقدت رو به یه شب فراموش‌نشدنی تبدیل می‌کنه.",
        lists: [
          "فضاهای متنوع: از سالن الماس (۵۰۰ نفر) تا یاقوت (دنج).",
          "تزیینات رویایی: دکوراسیون متناسب با هر نوع مراسم.",
          "خدمات VIP: منوی متنوع، نورپردازی و صوت حرفه‌ای.",
          "مشاوره رایگان: تیم ورسای از اول تا آخر کنارتونه.",
        ],
      },
      {
        heading: "چطور مراسم عقدت رو تو تالار ورسای رزرو کنی؟",
        content:
          "رزرو تالار ورسای خیلی ساده‌ست! با شماره تماس تالار یا فرم آنلاین رزرو کن و از تور بازدید رایگان استفاده کن. این ماه تخفیف ویژه دارن!",
      },
      {
        heading: "سوالات متداول درباره عقد آریایی و عربی",
        content:
          "اینجا به سوال‌های رایج درباره عقد آریایی و عربی جواب دادیم.",
        lists: [
          "عقد آریایی قانونیه؟ خیر، ولی می‌تونی با عقد عربی ترکیبش کنی.",
          "هزینه کدوم بیشتره؟ بستگی به تزیینات داره، ورسای گزینه‌های اقتصادی داره.",
          "می‌تونم متن عقد آریایی رو خودم بنویسم؟ بله، ورسای کمکت می‌کنه.",
          "ورسای برای مهمونای زیاد ظرفیت داره؟ بله، تا ۵۰۰ نفر.",
          "می‌تونم عقد آریایی رو تو باغ برگزار کنم؟ بله، باغ اختصاصی ورسای عالیه.",
        ],
      },
      {
        heading: "حالا نوبت توئه که تصمیم بگیری!",
        content:
          "عقد آریایی یا عربی؟ هر کدوم رو انتخاب کنی، تالار ورسای با خدمات حرفه‌ای و فضای رویایی، مراسمتو به یه شب جاودانه تبدیل می‌کنه. همین حالا تماس بگیر!",
      },
    ],
  };

  useEffect(() => {
    document.title = "عقد آریایی یا عربی؟ کدوم بهتره | توضیح کامل";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "عقد آریایی با حس و حال پارسی یا عقد عربی ساده و معنوی؟ تو این مقاله همه‌چیز درباره این دو مراسم توضیح دادیم و چرا تالار ورسای بهترین انتخابه."
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
                src="/assets/images/138.webp"
                width={4000}
                height={4000}
                alt="aryan-vs-arabic-wedding"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                عقد آریایی یا عربی؟ کدوم بهتره | توضیح کامل
              </h1>

              <p className="p-2">
                تصور کن شب عروسیته، نور شمع‌ها و عطر گل‌های رز فضا رو پر کرده. حالا سوال اینه: عقد آریایی با حس و حال پارسی یا عقد عربی ساده و معنوی؟
              </p>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3 text-2xl">
                  خلاصه مقاله
                </span>
                <br />
              </p>
              <p className="p-2">
                این مقاله بهت کمک می‌کنه بین عقد آریایی و عربی انتخاب کنی. تالار ورسای با سالن‌های لوکس و خدمات VIP، بهترین مکان برای هر دو نوع مراسمه!
              </p>

              <Link href="/menue">
                <button className="mb-6 bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو تالار ورسای
                </button>
              </Link>

              <div className="mx-auto width-auto my-8 px-4 py-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-center mb-6">
                  راهنمای انتخاب عقد آریایی یا عربی
                </h3>

                <div className="space-y-8">
                  {/* بخش ۱ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      عقد آریایی چیه؟ یه سفر به ریشه‌های پارسی!
                    </h4>
                    <p className="mb-4">
                      عقد آریایی یه مراسم سنتی و عاشقانه‌ست با ریشه‌های پارسی، پر از نمادهای مثل آتش، گل و شعرهای عاشقانه.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">چرا عقد آریایی؟</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>حس اصالت: بازگشت به ریشه‌های پارسی.</li>
                        <li>فضای رمانتیک: متن‌های عاشقانه و شعرگونه.</li>
                        <li>انعطاف‌پذیری: قابل برگزاری تو باغ یا سالن شیک ورسای.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        سارا و آرش تو تالار ورسای یه عقد آریایی با تزیینات رز و شمع داشتن که همه مهمونا محو فضای عاشقانه‌ش شدن.
                      </p>
                    </div>
                  </div>

                  {/* بخش ۲ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      عقد عربی چیه؟ سنتی، مذهبی و پر از معنویت
                    </h4>
                    <p className="mb-4">
                      عقد عربی مراسم سنتی اسلامیه که با خطبه عربی و حضور روحانی انجام می‌شه. پر از سادگی و معنویته.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">چرا عقد عربی؟</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>سادگی و معنویت: حس آرامش و تقدس.</li>
                        <li>رایج و آشنا: برای همه قابل فهمه.</li>
                        <li>سرعت: مراسم سریع و بی‌دردسر.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        نگار و محمد تو سالن یاقوت ورسای یه عقد عربی ساده و معنوی داشتن که حس آرامش عجیبی بهشون داد.
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 rounded-lg">
                    <Image
                      src="/assets/images/151.webp"
                      width={4000}
                      height={4000}
                      alt="aryan-vs-arabic-wedding"
                      className="rounded-lg shadow-lg h-full"
                    />
                  </div>

                  {/* بخش ۳ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      عقد آریایی یا عربی؟ کدوم به تو میاد؟
                    </h4>
                    <p className="mb-4">
                      عقد آریایی برای عاشقای رمانتیک و عقد عربی برای طرفدارای سنت و معنویت مناسبه. حتی می‌تونی هر دو رو ترکیب کنی!
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">راهنما:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>عقد آریایی: برای عاشقای سنت پارسی و فضای رمانتیک.</li>
                        <li>عقد عربی: برای کسایی که سادگی و معنویت می‌خوان.</li>
                        <li>ترکیب هر دو: یه مراسم عربی رسمی و یه بخش آریایی تشریفاتی.</li>
                      </ul>
                    </div>
                  </div>

                  {/* بخش ۴ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      چرا تالار ورسای بهترین جا برای مراسم عقدته؟
                    </h4>
                    <p className="mb-4">
                      تالار ورسای با فضاهای متنوع، تزیینات رویایی و خدمات VIP، مراسم عقدت رو به یه شب فراموش‌نشدنی تبدیل می‌کنه.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">چرا ورسای؟</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>فضاهای متنوع: از سالن الماس (۵۰۰ نفر) تا یاقوت (دنج).</li>
                        <li>تزیینات رویایی: دکوراسیون متناسب با هر نوع مراسم.</li>
                        <li>خدمات VIP: منوی متنوع، نورپردازی و صوت حرفه‌ای.</li>
                        <li>مشاوره رایگان: تیم ورسای از اول تا آخر کنارتونه.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        زهره و علی تو سالن الماس ورسای یه عقد آریایی رویایی داشتن که همه مهمونا هنوز ازش تعریف می‌کنن.
                      </p>
                    </div>
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

                  <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 rounded-lg">
                    <Image
                      src="/assets/images/156.webp"
                      width={4000}
                      height={4000}
                      alt="aryan-vs-arabic-wedding"
                      className="rounded-lg shadow-lg h-full"
                    />
                  </div>

                  {/* بخش ۵ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      چطور مراسم عقدت رو تو تالار ورسای رزرو کنی؟
                    </h4>
                    <p className="mb-4">
                      رزرو تالار ورسای خیلی ساده‌ست! با شماره تماس یا فرم آنلاین رزرو کن و از تور بازدید رایگان استفاده کن.
                    </p>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">یه نکته:</h5>
                      <p>
                        این ماه رزرو کنی، تالار ورسای تخفیف ویژه‌ای برای زوج‌ها داره!
                      </p>
                    </div>
                  </div>

                  {/* سوالات متداول */}
                  <div className="my-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-center mb-6">
                      سوالات متداول درباره عقد آریایی و عربی
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۱. عقد آریایی قانونیه؟
                        </h4>
                        <p className="pr-4">
                          خیر، ولی می‌تونی با عقد عربی ترکیبش کنی. ورسای هر دو رو هماهنگ می‌کنه.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۲. هزینه کدوم بیشتره؟
                        </h4>
                        <p className="pr-4">
                          بستگی به تزیینات داره، ورسای گزینه‌های اقتصادی داره.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۳. می‌تونم متن عقد آریایی رو خودم بنویسم؟
                        </h4>
                        <p className="pr-4">
                          بله، تیم ورسای کمکت می‌کنه متن حرفه‌ای و رمانتیک بنویسی.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۴. ورسای برای مهمونای زیاد ظرفیت داره؟
                        </h4>
                        <p className="pr-4">
                          بله، سالن الماس تا ۵۰۰ نفر ظرفیت داره.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۵. می‌تونم عقد آریایی رو تو باغ برگزار کنم؟
                        </h4>
                        <p className="pr-4">
                          بله، باغ اختصاصی ورسای برای عقد آریایی عالیه.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* نتیجه‌گیری */}
                  <div className="my-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-center mb-6">
                      حالا نوبت توئه که تصمیم بگیری!
                    </h3>
                    <p className="mb-4">
                      عقد آریایی یا عربی؟ تالار ورسای با خدمات حرفه‌ای و فضای رویایی، مراسمتو به یه شب جاودانه تبدیل می‌کنه.
                    </p>
                    <div className="bg-green-100 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">یه نکته:</h5>
                      <p>
                        همین حالا با تالار ورسای تماس بگیر و یه قدم به عروسی رویاییت بردار!
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
