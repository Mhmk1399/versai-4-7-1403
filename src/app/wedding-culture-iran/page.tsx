"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId = "wedding-culture-iran";
  const blogData = {
    title: "تفاوت‌های مراسم عروسی در مناطق مختلف ایران؛ چرا شاتو دو ورسای بهترین انتخاب شماست؟",
    url: "/wedding-culture-iran",
    images: [
      "/assets/images/167.webp",
      "/assets/images/170.webp",
    ],
    sections: [
      {
        heading: "خلاصه مقاله",
        content:
          "عروسی تو ایران پر از رنگ و آیین‌های جذابه که هر منطقه سبک خاص خودش رو داره. از رقص‌های کردی تا مراسم بندری، هر کدوم یه داستان عاشقانه‌ست. شاتو دو ورسای تو احمدآباد مستوفی با استیج رقص روی آب و خدمات لاکچری، بهترین انتخاب برای عروسی رویایی شماست.",
      },
      {
        heading: "مقدمه: یه سفر رنگارنگ به دنیای عروسی‌های ایرانی",
        content:
          "ایران یه سرزمین چندفرهنگیه و هر منطقه آداب خاص خودش رو برای عروسی داره. تو این مقاله، تفاوت‌های عروسی تو مناطق مختلف ایران رو بررسی می‌کنیم و نشون می‌دیم چرا شاتو دو ورسای بهترین انتخاب برای هر نوع مراسمیه.",
      },
      {
        heading: "مراسم عروسی تو ایران: یه ماجراجویی فرهنگی",
        content:
          "هر گوشه از ایران عروسی‌ها رنگ و بوی خاص خودشون رو دارن. بیایم یه گشتی تو این آیین‌های متنوع بزنیم.",
        lists: [
          "عروسی‌های شمالی: رقص با موسیقی محلی و غذاهای سنتی مثل باقالی قاتوق.",
          "عروسی‌های کردی: رقص‌های گروهی و حنابندان پرشور.",
          "عروسی‌های جنوبی: مراسم زفاف با قایق و غذاهای تند مثل قلیه ماهی.",
          "عروسی‌های ترکمن: اسب‌سواری داماد و لباس‌های پرزرق‌وبرق.",
          "عروسی‌های تهرانی: لاکچری با دی‌جی و منوهای بین‌المللی.",
        ],
      },
      {
        heading: "چرا انتخاب تالار عروسی انقدر مهمه؟",
        content:
          "تالار عروسی قلب مراسم شماست. یه تالار خوب تجربه مهمونا رو بهتر می‌کنه و یه شب به‌یادموندنی می‌سازه.",
        lists: [
          "ظرفیت بالا: شاتو دو ورسای تا ۱۲۰۰ نفر ظرفیت داره.",
          "دسترسی راحت: فقط ۲۰ دقیقه از تهران با پارکینگ ۷۰۰ خودرو.",
          "امکانات لاکچری: استیج رقص روی آب و نورپردازی مدرن.",
          "فضای باز: باغ‌های شیک با چترهای بزرگ.",
        ],
      },
      {
        heading: "چرا شاتو دو ورسای بهترین انتخابه؟",
        content:
          "شاتو دو ورسای با امکانات لوکس و تیم حرفه‌ای، عروسیت رو به یه تجربه بی‌نظیر تبدیل می‌کنه.",
        lists: [
          "استیج رقص روی آب: یه صحنه جادویی برای رقص عروس و داماد.",
          "ظرفیت متنوع: از ۲۰۰ تا ۱۲۰۰ نفر.",
          "باغ‌های رویایی: مناسب مراسم‌های سنتی و مدرن.",
          "منوی غذایی متنوع: از کباب تا استیک و پاستا.",
          "تیم تشریفات حرفه‌ای: مدیریت کامل مراسم.",
        ],
      },
      {
        heading: "تالار یا باغ تالار؟ کدوم بهتره؟",
        content:
          "تالار برای مراسم رسمی و باغ تالار برای فضای رمانتیک مناسبه. شاتو دو ورسای هر دو رو داره!",
        lists: [
          "تالار: سالن‌های بدون ستون با دکور لوکس.",
          "باغ تالار: فضای باز با چترهای بزرگ و نورپردازی LED.",
        ],
      },
      {
        heading: "نکات طلایی برای برنامه‌ریزی عروسی",
        content:
          "برای یه عروسی بی‌نقص، این نکات رو رعایت کن.",
        lists: [
          "مشخص کردن بودجه: شاتو پکیج‌های متنوعی داره.",
          "لیست مهمونا: شاتو برای هر تعداد مهمونی مناسبه.",
          "انتخاب فصل: سالن برای زمستان، باغ برای بهار و تابستان.",
          "تشریفات حرفه‌ای: تیم شاتو همه‌چیز رو مدیریت می‌کنه.",
        ],
      },
      {
        heading: "سوالات متداول درباره عروسی در شاتو دو ورسای",
        content:
          "اینجا به سوال‌های رایج درباره شاتو دو ورسای جواب دادیم.",
        lists: [
          "ظرفیت تالار چقدره؟ تا ۱۲۰۰ نفر با باغ‌های فضای باز.",
          "برای عروسی سنتی مناسبه؟ بله، باغ‌ها برای حنابندان عالیه.",
          "منوی غذا چیه؟ غذاهای سنتی و بین‌المللی با مواد تازه.",
          "چطور رزرو کنیم؟ تماس با 09123314145.",
          "پارکینگ داره؟ بله، برای ۷۰۰ خودرو.",
        ],
      },
      {
        heading: "نتیجه‌گیری: شاتو دو ورسای، جایی که عشق به واقعیت تبدیل می‌شه",
        content:
          "شاتو دو ورسای با استیج رقص روی آب، باغ‌های رویایی و تیم حرفه‌ای، عروسیت رو فراموش‌نشدنی می‌کنه. همین حالا با 09123314145 تماس بگیر!",
      },
    ],
  };

  useEffect(() => {
    document.title = "تفاوت‌های مراسم عروسی در مناطق مختلف ایران؛ چرا شاتو دو ورسای بهترین انتخاب شماست؟";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "تفاوت عروسی‌های مناطق ایران و چرا شاتو دو ورسای با استیج رقص روی آب و خدمات لاکچری، بهترین انتخاب برای عروسی شماست. راهنمای کامل رزرو تالار."
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
                src="/assets/images/167.webp"
                width={4000}
                height={4000}
                alt="wedding-culture-iran"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contentTitle"
              >
                تفاوت‌های مراسم عروسی در مناطق مختلف ایران؛ چرا شاتو دو ورسای بهترین انتخاب شماست؟
              </h1>

              <p className="p-2">
                عروسی تو ایران پر از رنگ و آیین‌های جذابه. شاتو دو ورسای با امکانات لاکچری، شب عروسیت رو به یه خاطره ابدی تبدیل می‌کنه.
              </p>
              <p id="contentDescription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3 text-2xl">
                  خلاصه مقاله
                </span>
                <br />
              </p>
              <p className="p-2">
                از رقص‌های کردی تا مراسم بندری، هر منطقه ایران سبک عروسی خاص خودش رو داره. شاتو دو ورسای با استیج رقص روی آب و باغ‌های رویایی، بهترین انتخاب برای هر نوع مراسمیه.
              </p>



              <Link href="/menue">
                <button className="mb-6 bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو تالار ورسای
                </button>
              </Link>


              <div className="mx-auto width-auto my-8 px-4 py-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-center mb-6">
                  راهنمای عروسی‌های ایرانی و انتخاب شاتو دو ورسای
                </h3>

                <div className="space-y-8">
                  {/* بخش ۱ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      مراسم عروسی تو ایران: یه ماجراجویی فرهنگی
                    </h4>
                    <p className="mb-4">
                      هر منطقه ایران عروسی‌های خاص خودش رو داره که پر از رنگ و سنته.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">انواع عروسی‌ها:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>شمالی: رقص با کمانچه و غذای محلی مثل باقالی قاتوق.</li>
                        <li>کردی: رقص گروهی و حنابندان با دف‌نوازی.</li>
                        <li>جنوبی: مراسم زفاف با قایق و قلیه ماهی.</li>
                        <li>ترکمن: اسب‌سواری داماد و لباس‌های پرزرق‌وبرق.</li>
                        <li>تهرانی: لاکچری با دی‌جی و منوهای بین‌المللی.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        یه زوج تو رشت عروسیشون رو تو باغ نارنج برگزار کردن. اگه تو شاتو دو ورسای بود، استیج رقص روی آب مراسمشون رو رویایی‌تر می‌کرد.
                      </p>
                    </div>
                  </div>

                  {/* بخش ۲ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      چرا انتخاب تالار عروسی انقدر مهمه؟
                    </h4>
                    <p className="mb-4">
                      تالار خوب تجربه مهمونا رو بهتر می‌کنه و یه شب به‌یادموندنی می‌سازه.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">نکات کلیدی:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>ظرفیت بالا: تا ۱۲۰۰ نفر.</li>
                        <li>دسترسی: ۲۰ دقیقه از تهران با پارکینگ ۷۰۰ خودرو.</li>
                        <li>امکانات: استیج رقص روی آب و نورپردازی مدرن.</li>
                        <li>فضای باز: باغ‌های شیک با چترهای بزرگ.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 rounded-lg">
                    <Image
                      src="/assets/images/170.webp"
                      width={4000}
                      height={4000}
                      alt="wedding-culture-iran"
                      className="rounded-lg shadow-lg h-full"
                    />
                  </div>

                  {/* بخش ۳ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      چرا شاتو دو ورسای بهترین انتخابه؟
                    </h4>
                    <p className="mb-4">
                      شاتو دو ورسای با امکانات لوکس و تیم حرفه‌ای، عروسیت رو بی‌نظیر می‌کنه.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">ویژگی‌ها:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>استیج رقص روی آب: لحظه‌ای جادویی برای رقص.</li>
                        <li>ظرفیت متنوع: از ۲۰۰ تا ۱۲۰۰ نفر.</li>
                        <li>باغ‌های رویایی: مناسب مراسم سنتی و مدرن.</li>
                        <li>منوی غذایی: کباب، استیک و پاستا.</li>
                        <li>تیم حرفه‌ای: مدیریت کامل مراسم.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        یه زوج تو شاتو عروسی با تم سفید و طلایی گرفتن و مهمونا از استیج رقص روی آب هنوز تعریف می‌کنن.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 p-6 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl shadow-md">
                    <p className="text-lg font-semibold text-gray-700">
                      بیشتر بخوانید:
                    </p>
                    <Link
                      href="/wedding-planning-guide"
                      className="text-blue-700 bg-blue-100 px-6 py-3 rounded-xl hover:bg-blue-200 transition-colors duration-200 text-base font-medium"
                    >
                      راهنمای کامل برنامه‌ریزی عروسی
                    </Link>
                  </div>

                  {/* بخش ۴ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      تالار یا باغ تالار؟ کدوم بهتره؟
                    </h4>
                    <p className="mb-4">
                      تالار برای مراسم رسمی و باغ تالار برای فضای رمانتیک مناسبه. شاتو هر دو رو داره!
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">مقایسه:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>تالار: سالن‌های لوکس با نورپردازی مدرن.</li>
                        <li>باغ تالار: فضای باز با چترهای بزرگ و استیج رقص روی آب.</li>
                      </ul>
                    </div>
                  </div>

                  {/* بخش ۵ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      نکات طلایی برای برنامه‌ریزی عروسی
                    </h4>
                    <p className="mb-4">
                      برای یه عروسی بی‌نقص، این نکات رو رعایت کن.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">نکات کلیدی:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>بودجه: شاتو پکیج‌های متنوعی داره.</li>
                        <li>لیست مهمونا: مناسب هر تعداد مهمون.</li>
                        <li>فصل: سالن برای زمستان، باغ برای بهار.</li>
                        <li>تشریفات: تیم حرفه‌ای شاتو همه‌چیز رو مدیریت می‌کنه.</li>
                      </ul>
                    </div>
                  </div>

                  {/* سوالات متداول */}
                  <div className="my-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-center mb-6">
                      سوالات متداول درباره عروسی در شاتو دو ورسای
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۱. ظرفیت تالار چقدره؟
                        </h4>
                        <p className="pr-4">
                          تا ۱۲۰۰ نفر با باغ‌های فضای باز برای مراسم سنتی و مدرن.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۲. برای عروسی سنتی مناسبه؟
                        </h4>
                        <p className="pr-4">
                          بله، باغ‌ها برای حنابندان و رقص محلی عالیه.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۳. منوی غذا چیه؟
                        </h4>
                        <p className="pr-4">
                          غذاهای سنتی مثل کباب و بین‌المللی مثل استیک با مواد تازه.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۴. چطور رزرو کنیم؟
                        </h4>
                        <p className="pr-4">
                          تماس با  <Link href="tel:09123314145" className="text-blue-700">09123314145</Link> برای بازدید و رزرو.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۵. پارکینگ داره؟
                        </h4>
                        <p className="pr-4">
                          بله، پارکینگ برای ۷۰۰ خودرو.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* نتیجه‌گیری */}
                  <div className="my-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-center mb-6">
                      شاتو دو ورسای: جایی که عشق به واقعیت تبدیل می‌شه
                    </h3>
                    <p className="mb-4">
                      شاتو دو ورسای با استیج رقص روی آب و باغ‌های رویایی، عروسیت رو به یه خاطره ابدی تبدیل می‌کنه. همین حالا رزرو کن!
                    </p>
                    <div className="bg-green-100 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">تماس با شاتو:</h5>
                      <p>
                        شماره: <Link href="tel:09123314145" className="text-blue-700">09123314145</Link><br />
                        وبسایت: <Link href="https://www.kakhversai.ir/" className="text-blue-700">www.kakhversai.ir</Link><br />
                      </p>
                    </div>
                    <p className="text-center font-bold mt-4">
                      به امید یه شب رویایی و خاطره‌انگیز
                    </p>
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