"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId = "what-is-a-dream-hall";
  const blogData = {
    title:
      "تالار رویایی چیه؟ این ۱۰ نکته رو بدونی، دیگه خیالت راحته | شاتو دو ورسای",
    url: "/what-is-a-dream-hall",
    images: [
      "/assets/images/191.webp",
      "/assets/images/152.webp",
      "/assets/images/Green-space-and-night-with-lighting-along-with-the-statue-of-the-photography-location-of-the-garden-of-the-Chateau-de-Versailles-hall.webp",
      "/assets/images/View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall (2).webp",
      "/assets/images/photo_2024-11-16_14-00-54.webp",
    ],
    sections: [
      {
        heading: "مقدمه: وقتی شب عروسی، فقط یه شب نیست!",
        content:
          "شب عروسی برای خیلی‌ها فقط یه مراسم نیست… یه خاطره‌ست، یه رؤیاست که سال‌ها تو ذهنمون ساختیمش. ولی واقعاً اون تالار رؤیایی که ازش حرف می‌زنیم چیه؟ چه چیزهایی باید داشته باشه که وقتی واردش شدیم، بگیم: «آره! این همون چیزیه که دنبالش بودم!» توی این مقاله قراره بری دل یه لیست طلایی… ۱۰ ویژگی خاص که هر تالار لاکچری باید داشته باشه تا شب عروسی شما تبدیل بشه به یه شب سلطنتی و فراموش‌نشدنی. و البته یه جای خاص هم هست که همه‌ی اینارو یه‌جا جمع کرده… اسمش «تالار ورسای»ه. اما بذار اول بریم سراغ اون ۱۰ ویژگی طلایی",
      },
      {
        heading: "چرا تلفیق عروسی ایرانی و فرانسوی جذابه؟",
        content:
          "قبل از اینکه وارد جزئیات شاتو دو ورسای بشیم، بذارید کمی درباره تفاوت‌ها و جذابیت‌های این دو سبک عروسی صحبت کنیم. عروسی ایرانی پر از شور و هیجان، با رقص و موسیقی شاد، سفره عقد، شام مفصل ایرانی، و کلی مهمون‌های شاد است. در مقابل، عروسی فرانسوی با ظرافت، کلاس، سادگی شیک، گل‌آرایی سبک اروپایی، نورپردازی ملایم و لحظاتی پر از احساس شناخته می‌شود. حالا تصور کن جایی باشه که بتونی هر دو حس رو با هم تجربه کنی؛ از سفره عقد سنتی بگیر تا گل‌آرایی شیک و مینیمال فرانسوی! این همون جاییه که شاتو دو ورسای با تمام توان وارد میشه.",
      },
      {
        heading: "۱. طراحی و دکوراسیون لاکچری؛ همون حس قصر پرنسس‌ها!",
        content:
          "وقتی پا می‌ذاری تو تالار، انگار داری وارد یه دنیای دیگه می‌شی. تو ورسای، دیوارها با رنگ‌های ملایم کرم و طلایی پوشیده شدن، با قاب‌های تزئینی و گچ‌بری‌های ظریف. حتی دسته‌گل‌های روی میزها طوری چیده می‌شن که تا آخر شب تازه بمونن!",
        lists: [
          "بادکنک‌ آرایی و پرده‌کشی: بخش ورودی با پرده‌های حریر و تاج‌گل‌های دستی که مثل تاج ملکه روی سردر نصب می‌شن.",
          "مبل‌های سلطنتی: مبل‌هایی با دوخت‌های ویژه و روکش مخمل کرمی که نمی‌ذارن مهمونا خسته بشن.",
          "جزئیات دیواری: تابلوهای نقاشی الهام‌گرفته از باغ‌های فرانسوی و شمعدان‌های دیواری که با نور مخفی برجسته می‌شن.",
        ],
      },
      {
        heading: "۲. لوکیشن مناسب؛ نه خیلی دور، نه توی شلوغی!",
        content:
          "بذارم راحت بگم؛ هیچ‌چیز بدتر از این نیست که مهمونا وسط راه ترافیک بند بیفتن یا دنبال جای پارک بگردن. احمدآباد مستوفی یه منطقه خلوت و خلوت‌تر از شلوغی پایتخته، در عین نزدیکیه.",
        lists: [
          "دسترسی از اتوبان: تنها ۲۰ دقیقه از اتوبان تهران–قم فاصله.",
          "مسیرهای جایگزین: با اپلیکیشن‌های مسیریاب می‌شه حتی از مسیرهای فرعی ترافیک‌شکن رفت.",
          "پلاک اختصاصی: پلاک ثابت تالار طوری تعریف شده که تابلوی بزرگ و روشن داره تا همچین وسط بیابون گم نشی!",
        ],
      },
      {
        heading: "۳. نورپردازی حرفه‌ای؛ جادو با نور!",
        content:
          "نور، روح فضا رو می‌سازه. تو ورسای از نورپردازی هوشمند استفاده می‌شه:",
        lists: [
          "سناریوهای از پیش‌تعریف‌شده: ورود عروس‌وداماد، رقص، شام، بریدن کیک و بدرقه هرکدوم حالت متفاوتی دارن.",
          "نور مخفی RGB: می‌تونی رنگِ نور رو با تم جشن هماهنگ کنی؛ صورتی، بنفش یا طلایی...",
          "پروژکتورها و افکت اسپات: وقتی عروس قدم به سالن می‌ذاره، پرتوهای نقره‌ای از چهار طرف روش می‌افتن که حسِ ستاره بودن رو القا می‌کنه.",
        ],
      },
      {
        heading: "۴. غذاهای لذیذ و متنوع؛ وقتی مهمونا درباره شام حرف می‌زنن!",
        content:
          "کیفیت غذا می‌تونه یه تالار رو به شهرت برسونه یا نابودش کنه. در ورسای:",
        lists: [
          "منوی سفارشی: شما ترکیب غذاها رو انتخاب می‌کنی؛ مثلا کباب سلطانی + سالاد مایونز خانگی + دسر پاناکوتا.",
          "کیترینگ لایو: آشپز جلوی مهمونا پاستا یا سوشی رو آماده می‌کنه. صحنه و بوی خوب، خودش یه بخش از برنامه‌س!",
          "سرآشپز: سرآشپز سابق هتل ۵ ستاره داریم که طعم‌ها رو درجه‌بندی می‌کنه. حتی می‌تونی برای مهمونا منوی گیاهی یا بدون گلوتن داشته باشی.",
        ],
      },
      {
        heading: "۵. میزبان‌های حرفه‌ای؛ رفتار درست، لبخند واقعی",
        content:
          "یک لبخند گرم در لحظه‌ی درست، کلی بار مثبت به مراسم اضافه می‌کنه.",
        lists: [
          "کورس‌های آموزشی: پرسنل ورسای توی دوره‌های مهمانداری جهانی شرکت می‌کنن.",
          "پرسنل چندزبانه: انگلیسی و فرانسه بلد داریم برای مهمونای بین‌المللی.",
          "تیم واکنش سریع: هر نیاز کوچیک مهمون در کمتر از ۳۰ ثانیه رفع می‌شه.",
        ],
      },
      {
        heading: "۶. موزیک و دی‌جی باحال؛ شور و هیجان واقعی!",
        content: "بذار صِدامون دربیاد! تو ورسای:",
        lists: [
          "DJ Set اختصاصی: می‌تونی سبک مورد علاقت رو قبل مراسم تعیین کنی (رپ فارسی، پاپ کلاسیک، ترنس).",
          "سیستم صوتی ضد اکو: حتی اگه سالن پر از جمعیت باشه، صدای موزیک صاف و بی‌نویز می‌مونه.",
          "پلن رقص تعاملی: افکت دود، حباب‌بازکن و لیزر برای لحظه‌های اوج.",
        ],
      },
      {
        heading: "۷. اتاق مخصوص عروس و داماد؛ لحظه‌ای برای نفس کشیدن",
        content: "یه فضای خلوت برای ریلکس و استایل!",
        lists: [
          "دکور فرانسوی: آینه‌کاری، کُرسی‌های مخمل.",
          "کافه مینیاتوری: نوشیدنی‌های گرم و سرد، شکلات و میوه‌ تازه کنار دستت.",
          "سرویس خواب سبک: اگه خواستی یه چرت کوتاه قبل شروع مراسم هم داشته باشی.",
        ],
      },
      {
        heading:
          "۸. محیط بیرونی زیبا برای عکس‌برداری؛ لوکیشن خاص بدون نیاز به باغ جدا",
        content: "کافیه یه لحظه از سالن خارج بشی:",
        lists: [
          "آلاچیق فرانسوی: ستون‌های سنگی و سقف کمانی، برای عکس‌های رمانتیک.",
          "آبنما و فواره: صدای آب و نورپردازی زیرآبی، عمق عکس‌ها رو بیشتر می‌کنه.",
          "مسیر گل‌آرایی‌شده: از در ورودی تا سالن اصلی، دو طرف مسیر گُل‌های طبیعی و شمع‌های درون توری.",
        ],
      },
      {
        heading: "۹. پکیج‌های متنوع با قیمت مناسب؛ لوکس ولی اقتصادی!",
        content: "بودجه هر کس یه‌چیزه؛ ورسای برای همه برنامه داره:",
        lists: [
          "پکیج اقتصادی: شامل سالن اصلی، منوی ساده و دی‌جی پایه",
          "پکیج نیمه‌لوکس: سالن ورودی اختصاصی، منوی متنوع و نورپردازی سفارشی",
          "پکیج VIP: سالن خصوصی، باغ اختصاصی، تیم عکس‌برداری و فیلم‌برداری + سورپرایز ورود کالسکه",
        ],
      },
    ],
  };

  useEffect(() => {
    document.title = "تالار رویایی چیه؟ این ۱۰ نکته رو بدونی، دیگه خیالت راحته";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "انتخاب تالار رویایی برای مراسمی بهیادماندنی، نیازمند توجه به جزئیاتی است که آرامش و زیبایی رویداد شما را تضمین کند."
      );
    }
  }, []);
  return (
    <>
      <BlogSchema blogData={blogData} />
      <div className="grid mx-auto grid-cols-1 h-auto p-4" dir="rtl">
        <div className="px-4 mx-auto py-2 rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 max-w-5xl  rounded-lg">
            {" "}
            <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
              <Image
                src="/assets/images/S__00479.webp"
                width={4000}
                height={4000}
                alt="تالار رویایی"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                تالار رویایی چیه؟ این ۱۰ نکته رو بدونی، دیگه خیالت راحته!
              </h1>
              <br />
              <span className="text-xl mx-auto h1-blog-header">
                چطوری یه شب عروسی سلطنتی بسازیم؟ با این ۱۰ ویژگی طلایی!
              </span>
              <br />
              <br />

              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3 text-2xl">
                  مقدمه: وقتی شب عروسی، فقط یه شب نیست!
                </span>
                <br />
              </p>
              <p className="p-2">
                شب عروسی برای خیلی‌ها فقط یه مراسم نیست… یه خاطره‌ست، یه رؤیاست
                که سال‌ها تو ذهنمون ساختیمش. ولی واقعاً اون تالار رؤیایی که ازش
                حرف می‌زنیم چیه؟ چه چیزهایی باید داشته باشه که وقتی واردش شدیم،
                بگیم: «آره! این همون چیزیه که دنبالش بودم!» توی این مقاله قراره
                بری دل یه لیست طلایی… ۱۰ ویژگی خاص که هر تالار لاکچری باید داشته
                باشه تا شب عروسی شما تبدیل بشه به یه شب سلطنتی و فراموش‌نشدنی. و
                البته یه جای خاص هم هست که همه‌ی اینارو یه‌جا جمع کرده… اسمش
                «تالار ورسای»ه. اما بذار اول بریم سراغ اون ۱۰ ویژگی طلایی
              </p>

              <Link href="/menue">
                <button className="mb-6 bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-8 px-4 py-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-center mb-6">
                  ویژگی‌های طلایی یک تالار رویایی
                </h3>

                {/* ویژگی 1 */}
                <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-8">
                  <h4 className="text-xl font-bold mb-3">
                    ۱. طراحی و دکوراسیون لاکچری؛ همون حس قصر پرنسس‌ها!
                  </h4>
                  <p className="mb-4">
                    وقتی پا می‌ذاری تو تالار، انگار داری وارد یه دنیای دیگه
                    می‌شی. تو ورسای، دیوارها با رنگ‌های ملایم کرم و طلایی پوشیده
                    شدن، با قاب‌های تزئینی و گچ‌بری‌های ظریف. حتی دسته‌گل‌های
                    روی میزها طوری چیده می‌شن که تا آخر شب تازه بمونن!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">
                        بادکنک‌ آرایی و پرده‌کشی
                      </h5>
                      <p>
                        بخش ورودی با پرده‌های حریر و تاج‌گل‌های دستی که مثل تاج
                        ملکه روی سردر نصب می‌شن.
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">مبل‌های سلطنتی</h5>
                      <p>
                        مبل‌هایی با دوخت‌های ویژه و روکش مخمل کرمی که نمی‌ذارن
                        مهمونا خسته بشن.
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow md:col-span-2">
                      <h5 className="font-bold mb-2">جزئیات دیواری</h5>
                      <p>
                        تابلوهای نقاشی الهام‌گرفته از باغ‌های فرانسوی و
                        شمعدان‌های دیواری که با نور مخفی برجسته می‌شن.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                    <h5 className="font-bold mb-2">داستان کوتاه</h5>
                    <p>
                      یکی از عروس‌دخترهای ورسای تعریف می‌کرد که وقتی برای اولین
                      بار وارد سالن شد، چنان چشمش خیره موند به سقف آینه‌کاری‌شده
                      که مهموناش مجبور شدن چند دقیقه صبر کنن تا اون احوال‌پرسی
                      کنه! 😍
                    </p>
                  </div>
                </div>

                {/* ویژگی 2 */}
                <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-8">
                  <h4 className="text-xl font-bold mb-3">
                    ۲. لوکیشن مناسب؛ نه خیلی دور، نه توی شلوغی!
                  </h4>
                  <p className="mb-4">
                    بذارم راحت بگم؛ هیچ‌چیز بدتر از این نیست که مهمونا وسط راه
                    ترافیک بند بیفتن یا دنبال جای پارک بگردن. احمدآباد مستوفی یه
                    منطقه خلوت و خلوت‌تر از شلوغی پایتخته، در عین نزدیکیه.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">دسترسی از اتوبان</h5>
                      <p>تنها ۲۰ دقیقه از اتوبان تهران–قم فاصله.</p>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">مسیرهای جایگزین</h5>
                      <p>
                        با اپلیکیشن‌های مسیریاب می‌شه حتی از مسیرهای فرعی
                        ترافیک‌شکن رفت.
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow md:col-span-2">
                      <h5 className="font-bold mb-2">پلاک اختصاصی</h5>
                      <p>
                        پلاک ثابت تالار طوری تعریف شده که تابلوی بزرگ و روشن
                        داره تا همچین وسط بیابون گم نشی!
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                    <h5 className="font-bold mb-2">تجربه مهمون</h5>
                    <p>
                      یکی از مهمونا که از کرج اومده بود می‌گفت: «خدایا! فکر
                      می‌کردم حداقل یه ساعت باید تو راه باشم، اما با مسیر
                      پیشنهادی ورسای فقط ۳۵ دقیقه رسیدم!»
                    </p>
                  </div>
                </div>

                {/* ویژگی 3 */}
                <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-8">
                  <h4 className="text-xl font-bold mb-3">
                    ۳. نورپردازی حرفه‌ای؛ جادو با نور!
                  </h4>
                  <p className="mb-4">
                    نور، روح فضا رو می‌سازه. تو ورسای از نورپردازی هوشمند
                    استفاده می‌شه:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">
                        سناریوهای از پیش‌تعریف‌شده
                      </h5>
                      <p>
                        ورود عروس‌وداماد، رقص، شام، بریدن کیک و بدرقه هرکدوم
                        حالت متفاوتی دارن.
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">نور مخفی RGB</h5>
                      <p>
                        می‌تونی رنگِ نور رو با تم جشن هماهنگ کنی؛ صورتی، بنفش یا
                        طلایی...
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow md:col-span-2">
                      <h5 className="font-bold mb-2">
                        پروژکتورها و افکت اسپات
                      </h5>
                      <p>
                        وقتی عروس قدم به سالن می‌ذاره، پرتوهای نقره‌ای از چهار
                        طرف روش می‌افتن که حسِ ستاره بودن رو القا می‌کنه.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                    <h5 className="font-bold mb-2">نکته‌ حرفه‌ای</h5>
                    <p>
                      برای یه ویدیوی خاطره‌انگیز، نور نرم و نقطه‌ای روی سفره عقد
                      می‌چینیم تا جزئیات گل‌ها و تزئینات کاملاً واضح باشه.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Link href="/menue">
                    <button className="bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl">
                      رزرو تالار شاتو دو ورسای
                    </button>
                  </Link>
                </div>
              </div>

              <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                <Image
                  src="/assets/images/182.webp"
                  width={4000}
                  height={4000}
                  alt="تالار رویایی"
                  className="rounded-lg shadow-lg h-full"
                />
              </div>
              {/* ویژگی 4 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-8">
                <h4 className="text-xl font-bold mb-3">
                  ۴. غذاهای لذیذ و متنوع؛ وقتی مهمونا درباره شام حرف می‌زنن!
                </h4>
                <p className="mb-4">
                  کیفیت غذا می‌تونه یه تالار رو به شهرت برسونه یا نابودش کنه. در
                  ورسای:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">منوی سفارشی</h5>
                    <p>
                      شما ترکیب غذاها رو انتخاب می‌کنی؛ مثلا کباب سلطانی + سالاد
                      مایونز خانگی + دسر پاناکوتا.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">کیترینگ لایو</h5>
                    <p>
                      آشپز جلوی مهمونا پاستا یا سوشی رو آماده می‌کنه. صحنه و بوی
                      خوب، خودش یه بخش از برنامه‌س!
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow md:col-span-2">
                    <h5 className="font-bold mb-2">سرآشپز</h5>
                    <p>
                      سرآشپز سابق هتل ۵ ستاره داریم که طعم‌ها رو درجه‌بندی
                      می‌کنه. حتی می‌تونی برای مهمونا منوی گیاهی یا بدون گلوتن
                      داشته باشی.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">فیدبک میهمان</h5>
                  <p>
                    یکی از مهمونا گفت: «بعد عروسی به همه خانواده عکس غذاها رو
                    فرستادم تا حسرت‌شون دربیاد!»
                  </p>
                </div>
              </div>

              {/* ویژگی 5 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-8">
                <h4 className="text-xl font-bold mb-3">
                  ۵. میزبان‌های حرفه‌ای؛ رفتار درست، لبخند واقعی
                </h4>
                <p className="mb-4">
                  یک لبخند گرم در لحظه‌ی درست، کلی بار مثبت به مراسم اضافه
                  می‌کنه.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">کورس‌های آموزشی</h5>
                    <p>پرسنل ورسای توی دوره‌های مهمانداری جهانی شرکت می‌کنن.</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">پرسنل چندزبانه</h5>
                    <p>انگلیسی و فرانسه بلد داریم برای مهمونای بین‌المللی.</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow md:col-span-2">
                    <h5 className="font-bold mb-2">تیم واکنش سریع</h5>
                    <p>هر نیاز کوچیک مهمون در کمتر از ۳۰ ثانیه رفع می‌شه.</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">سناریو واقعی</h5>
                  <p>
                    یکی از میهمانا موبایلش افتاد و شکسته بود. مسئول هماهنگی با
                    یک جعبه ابزار اومد و موبایل رو فوری تعمیر کرد تا مراسم ادامه
                    پیدا کنه!
                  </p>
                </div>
              </div>

              {/* ویژگی 6 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-8">
                <h4 className="text-xl font-bold mb-3">
                  ۶. موزیک و دی‌جی باحال؛ شور و هیجان واقعی!
                </h4>
                <p className="mb-4">بذار صِدامون دربیاد! تو ورسای:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">DJ Set اختصاصی</h5>
                    <p>
                      می‌تونی سبک مورد علاقت رو قبل مراسم تعیین کنی (رپ فارسی،
                      پاپ کلاسیک، ترنس).
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">سیستم صوتی ضد اکو</h5>
                    <p>
                      حتی اگه سالن پر از جمعیت باشه، صدای موزیک صاف و بی‌نویز
                      می‌مونه.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow md:col-span-2">
                    <h5 className="font-bold mb-2">پلن رقص تعاملی</h5>
                    <p>افکت دود، حباب‌بازکن و لیزر برای لحظه‌های اوج.</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">پیشنهاد تکمیلی</h5>
                  <p>
                    وقتی برید سراغ موزیکِ رمانتیک، نور کم و اسپات روی
                    عروس‌وداماد می‌چینیم تا لحظه‌ی اولین رقص، سینمایی‌تر بشه.
                  </p>
                </div>
              </div>
              {/* ویژگی 7 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-8">
                <h4 className="text-xl font-bold mb-3">
                  ۷. اتاق مخصوص عروس و داماد؛ لحظه‌ای برای نفس کشیدن
                </h4>
                <p className="mb-4">یه فضای خلوت برای ریلکس و استایل!</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">دکور فرانسوی</h5>
                    <p>آینه‌کاری، کُرسی‌های مخمل.</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">کافه مینیاتوری</h5>
                    <p>نوشیدنی‌های گرم و سرد، شکلات و میوه‌ تازه کنار دستت.</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow md:col-span-2">
                    <h5 className="font-bold mb-2">سرویس خواب سبک</h5>
                    <p>اگه خواستی یه چرت کوتاه قبل شروع مراسم هم داشته باشی.</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">داستان کوتاه</h5>
                  <p>
                    چندتا از عروس‌دامادا بعد مراسم تو اتاق VIP به مهمونا شکلات
                    پرچی تعارف کردن و وسط جشن کلی شوخی ساختن!
                  </p>
                </div>
              </div>
              <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                <Image
                  src="/assets/images/photo_2024-11-16_14-00-54.webp"
                  width={4000}
                  height={4000}
                  alt="تالار رویایی"
                  className="rounded-lg shadow-lg h-full"
                />
              </div>

              {/* ویژگی 8 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-8">
                <h4 className="text-xl font-bold mb-3">
                  ۸. محیط بیرونی زیبا برای عکس‌برداری؛ لوکیشن خاص بدون نیاز به
                  باغ جدا
                </h4>
                <p className="mb-4">کافیه یه لحظه از سالن خارج بشی:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">آلاچیق فرانسوی</h5>
                    <p>ستون‌های سنگی و سقف کمانی، برای عکس‌های رمانتیک.</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">آبنما و فواره</h5>
                    <p>
                      صدای آب و نورپردازی زیرآبی، عمق عکس‌ها رو بیشتر می‌کنه.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow md:col-span-2">
                    <h5 className="font-bold mb-2">مسیر گل‌آرایی‌شده</h5>
                    <p>
                      از در ورودی تا سالن اصلی، دو طرف مسیر گُل‌های طبیعی و
                      شمع‌های درون توری.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">نکته عکاس‌ها</h5>
                  <p>
                    استفاده از نور طبیعی طلوع/غروب در کنار فواره، بهترین سوژه‌ها
                    رو خلق می‌کنه.
                  </p>
                </div>
              </div>

              {/* ویژگی 9 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-8">
                <h4 className="text-xl font-bold mb-3">
                  ۹. پکیج‌های متنوع با قیمت مناسب؛ لوکس ولی اقتصادی!
                </h4>
                <p className="mb-4">
                  بودجه هر کس یه‌چیزه؛ ورسای برای همه برنامه داره:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">پکیج اقتصادی</h5>
                    <p>شامل سالن اصلی، منوی ساده و دی‌جی پایه</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">پکیج نیمه‌لوکس</h5>
                    <p>سالن ورودی اختصاصی، منوی متنوع و نورپردازی سفارشی</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">پکیج VIP</h5>
                    <p>
                      سالن خصوصی، باغ اختصاصی، تیم عکس‌برداری و فیلم‌برداری +
                      سورپرایز ورود کالسکه
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">راهنمای سریع</h5>
                  <p>
                    برای هر پکیج می‌تونی به‌صورت سفارشی آیتم حذف یا اضافه کنی؛
                    مثلاً حذف ویدئو و فقط عکس یا برعکس
                  </p>
                </div>
              </div>
              {/* ویژگی 10 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-8">
                <h4 className="text-xl font-bold mb-3">
                  ۱۰. سورپرایزهای خاص؛ از ورود تا بدرقه
                </h4>
                <p className="mb-4">
                  همه دنبال یه حس ویژه هستن. ورسای کلی آپشن داره:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">
                      ورود با کالسکه یا ماشین کلاسیک
                    </h5>
                    <p>یک ورود رویایی و خاطره‌انگیز برای شروع جشن شما</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">
                      آتیش‌بازی کنترل‌شده در فضای باز
                    </h5>
                    <p>نورافشانی زیبا در لحظات خاص مراسم</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">
                      بادکنک‌های هلیومی با پیام‌های شخصی
                    </h5>
                    <p>پیام‌های عاشقانه و خاص روی بادکنک‌ها</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">کیک تعاملی با نور LED</h5>
                    <p>کیکی که نام عروس‌وداماد روش می‌درخشه</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">ایده بکر</h5>
                  <p>
                    ربع آهنگ مورد علاقت رو داخل بادکنک‌ها پخش کن که موقع رها
                    کردن، همه بشنون!
                  </p>
                </div>
              </div>

              {/* سوالات متداول */}
              <div className="bg-white p-5 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-center mb-6">
                  سوالات متداول (FAQ)
                </h3>

                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">
                      چقدر قبل از تاریخ عروسی باید رزرو کنم؟
                    </h4>
                    <p>
                      بهترین زمان ۳–۶ ماه قبلِ روز بزرگه؛ برای تعطیلات و فصول
                      اوج (مهر و اردیبهشت) حداقل ۴ ماه قبل.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">
                      آیا امکان برگزاری مراسم عقد و عروسی در یک روز هست؟
                    </h4>
                    <p>
                      بله، اتاق عقد جداگانه داریم که هماهنگ با سالن اصلی می‌تونه
                      در چند ساعت تبدیل بشه.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">
                      بودجه حداقلی برای یک مراسم ۲۵۰ نفره چقدره؟
                    </h4>
                    <p>
                      بسته به پکیج از حدود ۲۵ میلیون تومان شروع می‌شه (شامل سالن
                      و منوی ساده).
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">
                      آیا امکان آوردن کیک از بیرون وجود داره؟
                    </h4>
                    <p>بله، ولی کرایه سرویس و چیدمان جدا محاسبه می‌شه.</p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">
                      خدمات تکمیلی مثل گل‌آرایی و موسیقی چه‌طور حساب می‌شه؟
                    </h4>
                    <p>
                      گل‌آرایی پایه و دی‌جی پایه در پکیج‌ها هست؛ آپشن‌های
                      حرفه‌ای‌تر جداگانه قیمت‌گذاری می‌شن.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">
                      چه تعداد مهمان پشتیبانی می‌کنین؟
                    </h4>
                    <p>
                      از ۸۰ تا ۵۰۰ نفر در سالن اصلی و تا ۱۰۰ نفر در باغ اختصاصی.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">
                      پیشنهاد شما برای بهترین فصل برگزاری چیه؟
                    </h4>
                    <p>
                      اردیبهشت و مهر به‌خاطر آب‌وهوای مطبوع و نور طبیعی عالی
                      برای عکس.
                    </p>
                  </div>
                </div>
              </div>

              {/* جمع‌بندی */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md mb-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-center mb-4">
                  چرا تالار عروسی ورسای انتخاب ایده‌آل شماست؟
                </h3>

                <p className="mb-4 text-lg">
                  اگر بخوای همه‌ی این ویژگی‌ها رو یه‌جا داشته باشی، باید جایی رو
                  انتخاب کنی که با عشق ساخته شده باشه. جایی مثل تالار ورسای در
                  احمدآباد مستوفی تهران.
                </p>

                <p className="mb-4 text-lg">
                  از طراحی بی‌نظیر گرفته تا تیم حرفه‌ای، از خدمات منعطف تا
                  لوکیشن عالی، ورسای برای شب رؤیایی شما آماده‌ست.
                </p>

                <h4 className="text-xl font-bold text-center mt-6 mb-3">
                  جمع‌بندی: شب رؤیاتو بساز، با تالاری که خودش یه قصه‌ست!
                </h4>

                <p className="mb-4 text-lg">
                  اگه دنبال یه شب خاص، یه شروع شاهانه و یه خاطره‌ی موندگار هستی،
                  این ۱۰ ویژگی رو جدی بگیر...
                </p>

                <p className="mb-4 text-lg">
                  و اگه می‌خوای همه‌ش رو یه‌جا داشته باشی، یه سر به تالار عروسی
                  ورسای بزن.
                </p>

                <p className="text-xl font-bold text-center mb-6">
                  اینجا جاییه که رؤیاتو زندگی می‌کنی...
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
                  <Link href="/menue">
                    <button className="bg-green text-white hover-btn py-3 px-8 rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl w-full md:w-auto">
                      رزرو تالار
                    </button>
                  </Link>

                  <Link href="/contact">
                    <button className="bg-purple-600 text-blacl hover-btn py-3 px-8 rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl w-full md:w-auto">
                      مشاوره رایگان
                    </button>
                  </Link>
                </div>

                <p className="text-center mt-6 text-gray-600">
                  💬 برای بازدید و مشاوره رایگان، همین حالا تماس بگیر یا تو سایت
                  فرم رزرو رو پر کن. تالار ورسای منتظرته
                </p>
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
